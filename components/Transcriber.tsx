"use client";

import {
  AudioLines,
  Loader2,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Subtitles,
} from "lucide-react";
import { useTranslations } from "next-intl";
import {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";

import { computePeaks, fileToWhisperAudio } from "@/lib/audio";
import { deleteModelFromCache } from "@/lib/cache";
import { pickDevice, probeDevice, type DeviceCapability } from "@/lib/device";
import { formatPercent } from "@/lib/format";
import { MODEL_BY_ID, type ModelId } from "@/lib/models";
import { Events, track } from "@/lib/plausible";
import type { Transcript } from "@/lib/subtitles";
import type { MainToWorker, WorkerToMain } from "@/lib/worker-protocol";

import { FileDropzone } from "./FileDropzone";
import { ModelPicker } from "./ModelPicker";
import { TranscriptViewer } from "./TranscriptViewer";
import { Waveform, type WaveformHandle } from "./Waveform";

type ModelStatus =
  | { kind: "idle" }
  | {
      kind: "loading";
      modelId: ModelId;
      progress: number;
      file?: string;
      loadedBytes: number;
      totalBytes: number;
    }
  | { kind: "ready"; modelId: ModelId }
  | { kind: "error"; message: string };

type JobStatus =
  | { kind: "idle" }
  | { kind: "decoding" }
  | { kind: "running"; progress: number }
  | { kind: "done"; transcript: Transcript; peaks: number[] }
  | { kind: "error"; message: string };

interface State {
  model: ModelStatus;
  job: JobStatus;
}

type Action =
  | { type: "model"; status: ModelStatus }
  | { type: "job"; status: JobStatus }
  | { type: "reset-job" };

const initialState: State = {
  model: { kind: "idle" },
  job: { kind: "idle" },
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "model":
      return { ...state, model: action.status };
    case "job":
      return { ...state, job: action.status };
    case "reset-job":
      return { ...state, job: { kind: "idle" } };
  }
}

const SELECTED_MODEL_KEY = "earscribe:selected-model";
const READY_MODEL_KEY = "earscribe:ready-model";

function transcriptFingerprint(text: string): string {
  let hash = 2166136261;
  for (let index = 0; index < text.length; index++) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(36);
}

interface TranscriberProps {
  embedded?: boolean;
  initialResultTab?: "transcript" | "subtitles";
}

export function Transcriber({
  embedded = false,
  initialResultTab = "transcript",
}: TranscriberProps = {}) {
  const tProgress = useTranslations("progress");
  const tErr = useTranslations("errors");
  const tHero = useTranslations("hero");
  const tTrust = useTranslations("trust");
  const tResult = useTranslations("result");
  const tPicker = useTranslations("modelPicker");
  const tModels = useTranslations("models");

  const [state, dispatch] = useReducer(reducer, initialState);
  const [capability, setCapability] = useState<DeviceCapability | null>(null);
  const [selectedModel, setSelectedModel] = useState<ModelId | null>(null);
  /**
   * Model ids that have previously been downloaded into the browser's
   * Cache API. Multiple models can coexist on disk simultaneously —
   * downloading a new model does not evict the others. Independent of
   * `state.model`, which only tracks what's currently in *worker memory*.
   */
  const [cachedModelIds, setCachedModelIds] = useState<ModelId[]>([]);
  const [pendingFile, setPendingFile] = useState<File | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  /** Covers the whole "click → model-ready → decoded → transcribed" path. */
  const [running, setRunning] = useState(false);
  /** Worker signals this when bytes are in but ORT is still compiling. */
  const [modelInitializing, setModelInitializing] = useState(false);
  const [workerReady, setWorkerReady] = useState(false);

  const workerRef = useRef<Worker | null>(null);
  const waveformRef = useRef<WaveformHandle>(null);
  const loadingModelIdRef = useRef<ModelId | null>(null);
  const activeJobIdRef = useRef<string | null>(null);
  const runDurationRef = useRef<number | null>(null);
  const runStartedAtRef = useRef<number | null>(null);
  const runModelRef = useRef<ModelId | null>(null);
  const runControllerRef = useRef<AbortController | null>(null);

  // ───── Probe device once ───────────────────────────────────────────
  useEffect(() => {
    let cancelled = false;
    probeDevice().then((cap) => {
      if (cancelled) return;
      setCapability(cap);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  // ───── Restore selection ──────────────────────────────────────────
  useEffect(() => {
    try {
      const saved = localStorage.getItem(SELECTED_MODEL_KEY);
      if (saved && saved in MODEL_BY_ID) {
        setSelectedModel(saved as ModelId);
      }
      const ready = localStorage.getItem(READY_MODEL_KEY);
      if (ready) {
        // New format: JSON array. Legacy: single string id.
        let ids: ModelId[] = [];
        try {
          const parsed: unknown = JSON.parse(ready);
          if (Array.isArray(parsed)) {
            ids = parsed.filter(
              (x): x is ModelId => typeof x === "string" && x in MODEL_BY_ID,
            );
          } else if (typeof parsed === "string" && parsed in MODEL_BY_ID) {
            ids = [parsed as ModelId];
          }
        } catch {
          if (ready in MODEL_BY_ID) ids = [ready as ModelId];
        }
        if (ids.length > 0) setCachedModelIds(ids);
      }
    } catch {
      // ignored
    }
  }, []);

  // Persist whenever the cached-models list changes.
  useEffect(() => {
    try {
      if (cachedModelIds.length === 0) {
        localStorage.removeItem(READY_MODEL_KEY);
      } else {
        localStorage.setItem(
          READY_MODEL_KEY,
          JSON.stringify(cachedModelIds),
        );
      }
    } catch {
      // ignored
    }
  }, [cachedModelIds]);

  // ───── Boot worker only after a file is selected ─────────────────
  useEffect(() => {
    if (!pendingFile) {
      setWorkerReady(false);
      return;
    }

    const worker = new Worker(
      new URL("../workers/whisper.worker.ts", import.meta.url),
      { type: "module" },
    );
    workerRef.current = worker;
    setWorkerReady(true);

    worker.addEventListener("message", (e: MessageEvent<WorkerToMain>) => {
      const msg = e.data;
      switch (msg.type) {
        case "model-progress": {
          const modelId = loadingModelIdRef.current;
          if (!modelId) return;
          setModelInitializing(false);
          dispatch({
            type: "model",
            status: {
              kind: "loading",
              modelId,
              progress: msg.progress,
              file: msg.file,
              loadedBytes: msg.loaded,
              totalBytes: msg.total,
            },
          });
          break;
        }
        case "model-initializing": {
          setModelInitializing(true);
          break;
        }
        case "model-ready": {
          loadingModelIdRef.current = null;
          setModelInitializing(false);
          dispatch({
            type: "model",
            status: { kind: "ready", modelId: msg.modelId },
          });
          // Add to the cached set without disturbing the others.
          setCachedModelIds((prev) =>
            prev.includes(msg.modelId) ? prev : [...prev, msg.modelId],
          );
          track(Events.ModelDownloaded, {
            model: msg.modelId,
            device: msg.device,
          });
          break;
        }
        case "model-error": {
          loadingModelIdRef.current = null;
          setModelInitializing(false);
          dispatch({
            type: "model",
            status: { kind: "error", message: msg.message },
          });
          track(Events.ModelDownloadFailed, { message: msg.message });
          setRunning(false);
          break;
        }
        case "transcribe-progress": {
          if (msg.jobId !== activeJobIdRef.current) return;
          dispatch({
            type: "job",
            status: { kind: "running", progress: msg.percentage },
          });
          break;
        }
        case "transcribe-done": {
          if (msg.jobId !== activeJobIdRef.current) return;
          // Peaks are kept in the `pendingPeaksRef` set during decode below.
          const peaks = pendingPeaksRef.current ?? [];
          const durationSec = runDurationRef.current ?? undefined;
          dispatch({
            type: "job",
            status: {
              kind: "done",
              peaks,
              transcript: {
                text: msg.text,
                chunks: msg.chunks,
                language: msg.language,
                durationSec,
              },
            },
          });
          track(Events.TranscriptionDone, {
            model: runModelRef.current ?? "unknown",
            durationSec: Math.round(durationSec ?? 0),
            elapsedMs:
              runStartedAtRef.current == null
                ? 0
                : Date.now() - runStartedAtRef.current,
          });
          activeJobIdRef.current = null;
          runControllerRef.current = null;
          setRunning(false);
          break;
        }
        case "transcribe-error": {
          if (msg.jobId !== activeJobIdRef.current) return;
          dispatch({
            type: "job",
            status: { kind: "error", message: msg.message },
          });
          track(Events.TranscriptionFailed, { message: msg.message });
          activeJobIdRef.current = null;
          runControllerRef.current = null;
          setRunning(false);
          break;
        }
      }
    });

    return () => {
      worker.terminate();
      workerRef.current = null;
      setWorkerReady(false);
    };
  }, [pendingFile]);

  // ───── Audio peaks: keep them out of state during decode/transcribe ─
  const pendingPeaksRef = useRef<number[] | null>(null);

  // ───── Handlers ──────────────────────────────────────────────────
  const onSelectModel = useCallback((id: ModelId) => {
    setSelectedModel(id);
    try {
      localStorage.setItem(SELECTED_MODEL_KEY, id);
    } catch {
      // ignored
    }
    track(Events.ModelSelected, { model: id });
  }, []);

  useEffect(() => {
    if (!pendingFile || !selectedModel || capability?.ramGB == null) return;
    const selected = MODEL_BY_ID[selectedModel];
    if (capability.ramGB >= selected.minRamGB) return;
    onSelectModel(capability.ramGB < 2 ? "tiny" : "base");
  }, [capability, onSelectModel, pendingFile, selectedModel]);

  const onFile = useCallback(
    (file: File) => {
      setPendingFile(file);
      pendingPeaksRef.current = null;
      runDurationRef.current = null;
      dispatch({ type: "reset-job" });
      setCurrentTime(0);
      if (!selectedModel) {
        const recommended: ModelId =
          capability?.ramGB != null && capability.ramGB < 2 ? "tiny" : "base";
        setSelectedModel(recommended);
        try {
          localStorage.setItem(SELECTED_MODEL_KEY, recommended);
        } catch {
          // ignored
        }
      }
      track(Events.FileSelected, {
        extension: file.name.split(".").pop()?.toLowerCase() ?? "unknown",
        sizeMB: Math.round((file.size / (1024 * 1024)) * 10) / 10,
        webgpu: capability?.webgpu ? "yes" : "no",
        ramGB: capability?.ramGB ?? 0,
        cores: capability?.cores ?? 0,
      });
    },
    [capability, selectedModel],
  );

  const onReset = useCallback(() => {
    const activeJobId = activeJobIdRef.current;
    if (activeJobId) {
      workerRef.current?.postMessage({
        type: "abort",
        jobId: activeJobId,
      } satisfies MainToWorker);
      track(Events.TranscriptionCancelled, {
        model: runModelRef.current ?? "unknown",
      });
    }
    runControllerRef.current?.abort();
    runControllerRef.current = null;
    activeJobIdRef.current = null;
    setRunning(false);
    setModelInitializing(false);
    setPendingFile(null);
    pendingPeaksRef.current = null;
    runDurationRef.current = null;
    dispatch({ type: "model", status: { kind: "idle" } });
    dispatch({ type: "reset-job" });
    setCurrentTime(0);
  }, []);

  const onSeek = useCallback((time: number) => {
    waveformRef.current?.seekTo(time);
  }, []);

  /**
   * Wipe a model's weight files from the browser's Cache API and free
   * any in-memory pipeline holding them. Returns bytes freed so the
   * UI can confirm with a real number.
   */
  const onDeleteModel = useCallback(
    async (modelId: ModelId): Promise<number> => {
      const spec = MODEL_BY_ID[modelId];
      if (!spec) return 0;
      const freed = await deleteModelFromCache(spec.repo);
      workerRef.current?.postMessage({
        type: "dispose-model",
        modelId,
      } satisfies MainToWorker);
      setCachedModelIds((prev) => prev.filter((id) => id !== modelId));
      // Reset the in-memory state if it was still tracking this model.
      if (state.model.kind === "ready" && state.model.modelId === modelId) {
        dispatch({ type: "model", status: { kind: "idle" } });
      }
      return freed;
    },
    [state.model],
  );

  const waitForModelReady = useCallback(
    (
      worker: Worker,
      modelId: ModelId,
      signal: AbortSignal,
    ): Promise<void> =>
      new Promise((resolve, reject) => {
        const cleanup = () => {
          worker.removeEventListener("message", handler);
          signal.removeEventListener("abort", onAbort);
        };
        const onAbort = () => {
          cleanup();
          reject(new DOMException("Run cancelled", "AbortError"));
        };
        const handler = (e: MessageEvent<WorkerToMain>) => {
          if (
            e.data.type === "model-ready" &&
            e.data.modelId === modelId
          ) {
            cleanup();
            resolve();
          } else if (e.data.type === "model-error") {
            cleanup();
            reject(new Error(e.data.message));
          }
        };
        worker.addEventListener("message", handler);
        signal.addEventListener("abort", onAbort, { once: true });
      }),
    [],
  );

  const startRun = useCallback(async () => {
    const worker = workerRef.current;
    if (!worker || !pendingFile || !selectedModel || !capability) return;
    if (running) return;
    const device = pickDevice(capability);
    const jobId = crypto.randomUUID();
    const runController = new AbortController();

    setRunning(true);
    activeJobIdRef.current = jobId;
    runControllerRef.current = runController;
    runStartedAtRef.current = Date.now();
    runModelRef.current = selectedModel;
    try {
      // 1. Always tell the worker to load the model. It internally noops
      //    when the requested model is already in memory, so cache hits
      //    resolve in milliseconds and never emit a `model-progress`
      //    event — meaning the UI stays clean for warm reloads.
      loadingModelIdRef.current = selectedModel;
      worker.postMessage({
        type: "load-model",
        modelId: selectedModel,
        device,
      } satisfies MainToWorker);
      try {
        await waitForModelReady(worker, selectedModel, runController.signal);
      } catch (error) {
        // Error already dispatched by the persistent listener.
        if (error instanceof DOMException && error.name === "AbortError") return;
        activeJobIdRef.current = null;
        runControllerRef.current = null;
        setRunning(false);
        return;
      }

      if (runController.signal.aborted) return;

      // 2. Decode audio + compute waveform peaks for later display.
      dispatch({ type: "job", status: { kind: "decoding" } });
      let pcm: Float32Array;
      let durationSec: number;
      try {
        const decoded = await fileToWhisperAudio(pendingFile);
        pcm = decoded.pcm;
        durationSec = decoded.durationSec;
        runDurationRef.current = durationSec;
        pendingPeaksRef.current = computePeaks(pcm, 600);
      } catch {
        dispatch({
          type: "job",
          status: { kind: "error", message: tErr("audioDecodeFailed") },
        });
        activeJobIdRef.current = null;
        runControllerRef.current = null;
        setRunning(false);
        return;
      }

      if (runController.signal.aborted) return;

      // 3. Transcribe.
      track(Events.TranscriptionStarted, {
        model: selectedModel,
        durationSec: Math.round(durationSec),
      });
      dispatch({ type: "job", status: { kind: "running", progress: 0 } });
      worker.postMessage(
        {
          type: "transcribe",
          jobId,
          audio: pcm,
          returnTimestamps: true,
        } satisfies MainToWorker,
        [pcm.buffer],
      );
    } catch (error) {
      if (!(error instanceof DOMException && error.name === "AbortError")) {
        dispatch({
          type: "job",
          status: { kind: "error", message: tErr("transcribeFailed") },
        });
        track(Events.TranscriptionFailed, {
          message: error instanceof Error ? error.message : "unknown",
        });
      }
      activeJobIdRef.current = null;
      runControllerRef.current = null;
      setRunning(false);
    }
  }, [
    pendingFile,
    selectedModel,
    capability,
    running,
    waitForModelReady,
    tErr,
  ]);

  // ───── Derived flags ──────────────────────────────────────────────
  const selectedModelCached =
    selectedModel !== null && cachedModelIds.includes(selectedModel);
  const jobDone = state.job.kind === "done";
  const selectedSpec =
    selectedModel != null ? MODEL_BY_ID[selectedModel] : null;

  // Busy = any operation between the click and a final state.
  // Derived so the spinner stays through async worker postMessage hops
  // (the `running` setState alone unsets too early).
  const modelLoading = state.model.kind === "loading";
  const jobDecoding = state.job.kind === "decoding";
  const jobTranscribing = state.job.kind === "running";
  const ctaBusy =
    running || modelLoading || jobDecoding || jobTranscribing;
  const ctaBusySpinner = ctaBusy;

  // CTA copy reflects the actual next action.
  let ctaLabel = tPicker("downloadAndRun");
  if (state.model.kind === "loading") {
    const loadingId = state.model.modelId;
    ctaLabel = cachedModelIds.includes(loadingId)
      ? tPicker("loadingCached")
      : modelInitializing
        ? tPicker("initializingModel")
        : tPicker("downloading");
  } else if (state.job.kind === "decoding") {
    ctaLabel = tProgress("decodingAudio");
  } else if (state.job.kind === "running") {
    ctaLabel =
      state.job.progress > 1
        ? tPicker("transcribingPct", {
            percent: formatPercent(state.job.progress),
          })
        : tPicker("transcribingShort");
  } else if (running) {
    ctaLabel = tProgress("preparing");
  } else if (selectedSpec) {
    ctaLabel = selectedModelCached
      ? tPicker("transcribeNow")
      : tPicker("downloadAndRunSized", {
          size: `${selectedSpec.sizeMB} MB`,
        });
  }

  // Current progress value for the visible bar (0 when nothing in flight).
  const visibleProgress =
    state.job.kind === "running"
      ? state.job.progress
      : state.model.kind === "loading"
        ? state.model.progress
        : 0;
  const showProgressBar =
    state.job.kind === "running" ||
    (state.model.kind === "loading" &&
      !cachedModelIds.includes(state.model.modelId));

  // ───── Phase machine ──────────────────────────────────────────────
  // Three mutually exclusive phases — each renders a stable layout so
  // nothing inside a phase shifts vertically. Transitions across phases
  // are user-initiated and we anchor the viewport via `scrollIntoView`.
  const phase: "cold" | "input" | "done" =
    jobDone ? "done" : pendingFile ? "input" : "cold";

  const resultRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (phase !== "done") return;
    const id = window.setTimeout(() => {
      resultRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 80);
    return () => window.clearTimeout(id);
  }, [phase]);

  const compactSize = (sizeMB: number) =>
    sizeMB >= 1000 ? `${(sizeMB / 1000).toFixed(1)} GB` : `${sizeMB} MB`;

  return (
    <div className="space-y-10">
      {/* ───────── PHASE STRIP ───────── */}
      {phase === "done" && pendingFile && selectedSpec ? (
        <section className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm">
          <div className="min-w-0 text-sm">
            <span
              className="block truncate font-medium text-slate-900"
              title={pendingFile.name}
            >
              {pendingFile.name}
            </span>
            <span className="text-xs text-slate-500">
              {(pendingFile.size / (1024 * 1024)).toFixed(1)} MB ·{" "}
              {tModels(`${selectedSpec.id}.name`)}
            </span>
          </div>
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
          >
            <RotateCcw className="h-4 w-4" />
            {tResult("newFile")}
          </button>
        </section>
      ) : !embedded ? (
        <section className="space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
            <Sparkles className="h-3.5 w-3.5" /> {tHero("tag")}
          </div>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            {tHero("title")}
          </h1>
          <p className="mx-auto max-w-2xl text-balance text-base text-slate-600 sm:text-lg">
            {tHero("subtitle")}
          </p>
          <ul className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-2 text-xs text-slate-600">
            <li className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-emerald-800">
              <ShieldCheck className="h-3.5 w-3.5" />
              {tTrust("private")}
            </li>
            <li className="inline-flex items-center gap-1 rounded-full bg-sky-50 px-3 py-1 text-sky-800">
              <AudioLines className="h-3.5 w-3.5" />
              {tTrust("openModels")}
            </li>
            <li className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-amber-900">
              <Subtitles className="h-3.5 w-3.5" />
              {tTrust("subtitles")}
            </li>
            <li className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-3 py-1 text-violet-800">
              {tTrust("free")}
            </li>
          </ul>
        </section>
      ) : null}

      {/* ───────── PHASE 0 · COLD ───────── */}
      {phase === "cold" && <FileDropzone onFile={onFile} />}

      {/* ───────── PHASE 1 · INPUT ───────── */}
      {phase === "input" && pendingFile && (
        <div className="space-y-4">
          {/* File row */}
          <section className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm">
            <div className="min-w-0 flex-1 text-sm">
              <span
                className="block truncate font-medium text-slate-900"
                title={pendingFile.name}
              >
                {pendingFile.name}
              </span>
              <span className="text-xs text-slate-500">
                {(pendingFile.size / (1024 * 1024)).toFixed(1)} MB
              </span>
            </div>
            <button
              type="button"
              onClick={onReset}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-700 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {ctaBusy ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <RotateCcw className="h-4 w-4" />
              )}
              {ctaBusy ? tProgress("cancel") : tPicker("changeFile")}
            </button>
          </section>

          {/* Models grid */}
          <ModelPicker
            selected={selectedModel}
            cached={cachedModelIds}
            capability={capability}
            disabled={ctaBusy}
            onSelect={onSelectModel}
            onDelete={onDeleteModel}
          />

          {/* CTA — bare centered button + one stable hint line.
              Everything load-related lives on the button itself; the
              hint stays constant so the page doesn't "load" twice. */}
          <div className="flex flex-col items-center gap-3 py-2">
            <button
              type="button"
              onClick={startRun}
              disabled={!selectedModel || !workerReady || !capability || ctaBusy}
              className="inline-flex min-w-[16rem] items-center justify-center gap-2 rounded-xl bg-sky-600 px-8 py-3 text-base font-semibold text-white shadow-md transition-all hover:bg-sky-500 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
            >
              {ctaBusySpinner && <Loader2 className="h-5 w-5 animate-spin" />}
              {ctaLabel}
            </button>

            {/* Thin progress bar — sits between button and the static
                hint. Only shown when there's real progress to show
                (transcribe, or first-run model download). Hint below
                does not change, so the page never "loads twice". */}
            {showProgressBar && (
              <div
                className="h-1.5 w-full max-w-md overflow-hidden rounded-full bg-slate-100"
                role="progressbar"
                aria-valuenow={Math.round(visibleProgress)}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="h-full rounded-full bg-sky-500 transition-[width] duration-200"
                  style={{ width: `${visibleProgress}%` }}
                />
              </div>
            )}

            <div className="w-full max-w-xl text-center">
              {state.model.kind === "error" ? (
                <p className="text-sm text-rose-600" role="alert">
                  {tErr("modelLoadFailed")} ({state.model.message})
                </p>
              ) : state.job.kind === "error" ? (
                <p className="text-sm text-rose-600" role="alert">
                  {state.job.message}
                </p>
              ) : selectedSpec ? (
                <p className="text-xs text-slate-500">
                  {selectedModelCached
                    ? tPicker("cachedRunHint", {
                        model: tModels(`${selectedSpec.id}.name`),
                      })
                    : tPicker("downloadRunHint", {
                        size: compactSize(selectedSpec.sizeMB),
                      })}
                </p>
              ) : (
                <p className="text-xs text-slate-500">
                  {tPicker("chooseModelHint")}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ───────── PHASE 3 · DONE ───────── */}
      {phase === "done" && state.job.kind === "done" && pendingFile && (
        <div ref={resultRef} className="space-y-6 scroll-mt-6">
          <Waveform
            ref={waveformRef}
            peaks={state.job.peaks}
            file={pendingFile}
            onTimeUpdate={setCurrentTime}
          />
          <TranscriptViewer
            transcript={state.job.transcript}
            fileName={pendingFile.name}
            projectKey={`${pendingFile.name}:${pendingFile.size}:${pendingFile.lastModified}:${selectedModel}:${transcriptFingerprint(state.job.transcript.text)}`}
            initialTab={initialResultTab}
            currentTime={currentTime}
            onSeek={onSeek}
          />
        </div>
      )}
    </div>
  );
}
