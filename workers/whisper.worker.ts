/// <reference lib="webworker" />
/**
 * Whisper inference worker.
 *
 * - Lives on its own thread so the UI stays responsive while the model
 *   downloads (hundreds of MB) and decodes.
 * - Holds at most one pipeline instance at a time. Switching models
 *   disposes the previous one to free memory.
 * - Streams progress events back to the main thread: model file downloads,
 *   then transcription progress, then the final transcript.
 *
 * We type the Transformers.js surface loosely on purpose — its TypeScript
 * exports for `Pipeline` subtypes have shifted across v3 minor releases.
 * Pinning to internal shapes would just create churn at upgrade time.
 */
import { pipeline as pipelineTyped, env } from "@huggingface/transformers";

/**
 * `pipeline`'s overloads form a union too large for `tsc` to instantiate
 * (~50 task strings each with their own return type). We don't need the
 * narrowed type, so we cast once here and keep the rest of the file typed
 * against our local `AsrPipeline` shape.
 */
type PipelineFn = (
  task: string,
  model: string,
  options?: Record<string, unknown>,
) => Promise<unknown>;
const pipeline = pipelineTyped as unknown as PipelineFn;

import type { ModelId } from "@/lib/models";
import type {
  MainToWorker,
  WorkerToMain,
} from "@/lib/worker-protocol";

// Always fetch weights from the Hugging Face CDN (we host no models ourselves).
env.allowLocalModels = false;
env.allowRemoteModels = true;

// Route model fetches through our same-origin proxy by default. This avoids
// CORS failures caused by VPN/proxy chains that strip response headers, and
// lets the CF edge cache repeat downloads. Override with NEXT_PUBLIC_HF_HOST
// (e.g. https://huggingface.co for direct, or hf-mirror.com).
env.remoteHost =
  process.env.NEXT_PUBLIC_HF_HOST ||
  `${(self as DedicatedWorkerGlobalScope).location.origin}/api/hf-proxy`;

const ctx: DedicatedWorkerGlobalScope =
  self as unknown as DedicatedWorkerGlobalScope;

function post(message: WorkerToMain): void {
  ctx.postMessage(message);
}

interface ProgressEvent {
  status?: string;
  file?: string;
  name?: string;
  loaded?: number;
  total?: number;
  progress?: number;
}

type AsrPipeline = ((
  audio: Float32Array,
  options: Record<string, unknown>,
) => Promise<unknown>) & {
  dispose?: () => Promise<void>;
};

interface LoadedPipeline {
  modelId: ModelId;
  device: "webgpu" | "wasm";
  instance: AsrPipeline;
}

let current: LoadedPipeline | null = null;
let loading: Promise<LoadedPipeline> | null = null;

interface FileProgress {
  loaded: number;
  total: number;
}

/**
 * Aggregates progress across the 5-7 files a Whisper repo emits.
 *
 * Transformers.js fires `progress_callback` per-file with that file's
 * loaded/total bytes. If we just forwarded the per-file percentage, the bar
 * would oscillate 0% → 100% → 0% as files transition. Instead we sum the
 * latest loaded/total of every file seen so far and emit the overall ratio.
 *
 * Tiny growth in the denominator when a new file appears is acceptable; the
 * bar never moves backwards meaningfully and never flashes 100% mid-load.
 */
class AggregateProgress {
  private files = new Map<string, FileProgress>();
  /** Floor for the denominator. Stops percentage drops when a new file appears. */
  private expectedTotal = 0;
  /** Highest progress emitted so far. Locks the bar to monotonic growth. */
  private highWater = 0;

  reset(expectedTotal = 0): void {
    this.files.clear();
    this.expectedTotal = expectedTotal;
    this.highWater = 0;
  }

  update(file: string, loaded: number, total: number): void {
    this.files.set(file, { loaded, total });
  }

  /**
   * Mark a file as fully loaded. Transformers.js often only emits a
   * `done` event for small files (config / tokenizer JSON) — without
   * this we'd never count their bytes and the aggregate would stall.
   */
  markDone(file: string, fallbackBytes: number): void {
    const existing = this.files.get(file);
    if (existing && existing.total > 0) {
      existing.loaded = existing.total;
    } else {
      this.files.set(file, { loaded: fallbackBytes, total: fallbackBytes });
    }
  }

  snapshot(file: string): {
    loaded: number;
    total: number;
    progress: number;
    file: string;
  } {
    let sumLoaded = 0;
    let sumTotal = 0;
    for (const v of this.files.values()) {
      sumLoaded += v.loaded;
      sumTotal += v.total;
    }
    // Use a stable denominator: max of the model-spec estimate and the
    // running sum. Prevents the percent from snapping back when a new
    // file shows up mid-download.
    const denominator = Math.max(this.expectedTotal, sumTotal, 1);
    const raw = (sumLoaded / denominator) * 100;
    // Cap at 95 — leaves visible headroom for the "Initializing" phase
    // that follows once bytes are in but ORT is still compiling.
    const capped = Math.max(0, Math.min(95, raw));
    if (capped > this.highWater) this.highWater = capped;
    return {
      loaded: sumLoaded,
      total: Math.max(this.expectedTotal, sumTotal),
      progress: this.highWater,
      file,
    };
  }
}

const aggregate = new AggregateProgress();

async function loadModel(
  modelId: ModelId,
  device: "webgpu" | "wasm",
  repo: string,
): Promise<LoadedPipeline> {
  if (current && current.modelId === modelId && current.device === device) {
    return current;
  }
  if (loading) return loading;

  // Seed the aggregator with the model's expected total (from MODELS spec)
  // so percentage stays monotonic across the 5-7 files Whisper fetches.
  const { MODEL_BY_ID } = await import("@/lib/models");
  const expectedMB = MODEL_BY_ID[modelId]?.sizeMB ?? 0;
  aggregate.reset(expectedMB * 1024 * 1024);

  // Init-phase watchdog: once all bytes are in, ORT spends seconds-
  // to-tens-of-seconds compiling shaders / allocating memory and emits
  // no progress events. Detect the silence and flip the UI label.
  let lastProgressAt = Date.now();
  let initEmitted = false;
  const watchdog = setInterval(() => {
    if (initEmitted) return;
    if (Date.now() - lastProgressAt > 2500) {
      initEmitted = true;
      post({ type: "model-initializing", modelId, device });
    }
  }, 800);

  loading = (async () => {
    if (current) {
      try {
        await current.instance.dispose?.();
      } catch {
        // some versions don't expose dispose()
      }
      current = null;
    }

    try {
      const instance = (await pipeline(
        "automatic-speech-recognition",
        repo,
        {
          device,
          progress_callback: (info: ProgressEvent) => {
            if (info.status !== "progress" && info.status !== "done") return;

            const file = info.file ?? info.name ?? "model";
            lastProgressAt = Date.now();
            initEmitted = false; // any new event means we're not idle

            if (info.status === "done") {
              // Some files (small JSONs) only emit `done` with no byte
              // counts; mark them complete using their last-known size,
              // or assume zero so they at least don't stall the bar.
              aggregate.markDone(file, 0);
            } else {
              const total = typeof info.total === "number" ? info.total : 0;
              const loaded = typeof info.loaded === "number" ? info.loaded : 0;
              if (total === 0 && loaded === 0) return;
              aggregate.update(file, loaded, total);
            }

            const agg = aggregate.snapshot(file);
            post({
              type: "model-progress",
              file: agg.file,
              loaded: agg.loaded,
              total: agg.total,
              progress: agg.progress,
            });
          },
        },
      )) as AsrPipeline;

      const loaded: LoadedPipeline = { modelId, device, instance };
      current = loaded;
      return loaded;
    } finally {
      clearInterval(watchdog);
    }
  })();

  try {
    return await loading;
  } finally {
    loading = null;
  }
}

interface WhisperOutput {
  text?: string;
  chunks?: { text: string; timestamp: [number, number | null] }[];
  language?: string;
}

let activeRun: { jobId: string; controller: AbortController } | null = null;

async function transcribe(
  audio: Float32Array,
  returnTimestamps: true | "word",
  jobId: string,
): Promise<void> {
  if (!current) {
    post({ type: "transcribe-error", jobId, message: "Model not loaded" });
    return;
  }

  activeRun?.controller.abort();
  const controller = new AbortController();
  activeRun = { jobId, controller };
  const signal = controller.signal;

  // Approximate but always-moving progress. Transformers.js doesn't expose
  // a reliable per-chunk progress signal in v3, and its `callback_function`
  // only fires for some pipelines. A time-based estimator is good enough:
  // pick a realtime factor based on the device AND the model size, tick
  // every 200ms, and ease the curve so we don't flatline at 95% even when
  // we underestimate.
  //
  // RTFs are rough averages from real runs (sub-2-minute speech audio).
  // Tweak by model — Turbo is 4-5x slower than Tiny on the same device.
  const RTF_BY_MODEL: Record<ModelId, { webgpu: number; wasm: number }> = {
    tiny: { webgpu: 0.025, wasm: 0.35 },
    base: { webgpu: 0.04, wasm: 0.6 },
    small: { webgpu: 0.08, wasm: 1.6 },
    turbo: { webgpu: 0.12, wasm: 3.5 },
  };
  const audioSec = audio.length / 16_000;
  const rtf =
    RTF_BY_MODEL[current.modelId][current.device];
  const expectedMs = Math.max(1_500, audioSec * rtf * 1_000);
  const startTime = Date.now();
  let lastReported = 0;

  const reportTimeProgress = () => {
    if (signal.aborted) return;
    const elapsed = Date.now() - startTime;
    const linear = elapsed / expectedMs;
    let progress: number;
    if (linear < 0.9) {
      // Steady linear growth up to 90% of the estimated runtime.
      progress = linear * 90;
    } else {
      // Past the estimate — asymptote toward 95% so the bar still
      // creeps but doesn't lie about being done.
      const overshoot = (linear - 0.9) * 2;
      progress = 90 + 5 * (1 - Math.exp(-overshoot));
    }
    progress = Math.max(0, Math.min(95, progress));
    if (progress > lastReported) {
      lastReported = progress;
      post({ type: "transcribe-progress", jobId, percentage: progress });
    }
  };

  const interval = setInterval(reportTimeProgress, 200);
  reportTimeProgress(); // emit something immediately so the bar appears

  try {
    const result = (await current.instance(audio, {
      return_timestamps: returnTimestamps,
      chunk_length_s: 30,
      stride_length_s: 5,
    })) as WhisperOutput | WhisperOutput[];

    if (signal.aborted) return;

    const flat: WhisperOutput = Array.isArray(result) ? result[0] : result;
    const chunks = (flat.chunks ?? []).map((c) => ({
      text: c.text,
      timestamp: c.timestamp,
    }));

    // Snap to 100 before the done message so the bar visibly completes.
    post({ type: "transcribe-progress", jobId, percentage: 100 });
    post({
      type: "transcribe-done",
      jobId,
      text: flat.text ?? chunks.map((c) => c.text).join(" "),
      chunks,
      language: flat.language,
    });
  } catch (error) {
    if (signal.aborted) return;
    const message =
      error instanceof Error
        ? error.message
        : typeof error === "string"
          ? error
          : "Transcription failed";
    post({ type: "transcribe-error", jobId, message });
  } finally {
    clearInterval(interval);
    if (activeRun?.controller.signal === signal) {
      activeRun = null;
    }
  }
}

ctx.addEventListener("message", async (event: MessageEvent<MainToWorker>) => {
  const msg = event.data;
  try {
    if (msg.type === "load-model") {
      const { MODEL_BY_ID } = await import("@/lib/models");
      const spec = MODEL_BY_ID[msg.modelId];
      if (!spec) {
        post({
          type: "model-error",
          message: `Unknown model: ${msg.modelId}`,
        });
        return;
      }
      try {
        await loadModel(msg.modelId, msg.device, spec.repo);
        post({
          type: "model-ready",
          modelId: msg.modelId,
          device: msg.device,
        });
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "Model load failed";
        post({ type: "model-error", message });
      }
      return;
    }

    if (msg.type === "transcribe") {
      await transcribe(msg.audio, msg.returnTimestamps, msg.jobId);
      return;
    }

    if (msg.type === "abort") {
      if (activeRun?.jobId === msg.jobId) activeRun.controller.abort();
      return;
    }

    if (msg.type === "dispose-model") {
      if (current && current.modelId === msg.modelId) {
        try {
          await current.instance.dispose?.();
        } catch {
          // some versions don't expose dispose()
        }
        current = null;
      }
      return;
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : "Worker error";
    post({ type: "model-error", message });
  }
});
