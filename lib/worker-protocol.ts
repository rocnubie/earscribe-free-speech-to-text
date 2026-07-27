/**
 * Shared types between the main thread and the Whisper worker.
 *
 * Keeping this in its own file means the worker can `import type` without
 * pulling in any DOM-only helpers.
 */
import type { ModelId } from "./models";
import type { TranscriptChunk } from "./subtitles";

export type MainToWorker =
  | {
      type: "load-model";
      modelId: ModelId;
      device: "webgpu" | "wasm";
    }
  | {
      type: "transcribe";
      jobId: string;
      audio: Float32Array;
      returnTimestamps: true | "word";
    }
  | { type: "abort"; jobId: string }
  | { type: "dispose-model"; modelId: ModelId };

export type WorkerToMain =
  | {
      type: "model-progress";
      file: string;
      loaded: number;
      total: number;
      progress: number;
    }
  | {
      type: "model-initializing";
      modelId: ModelId;
      device: "webgpu" | "wasm";
    }
  | {
      type: "model-ready";
      modelId: ModelId;
      device: "webgpu" | "wasm";
    }
  | {
      type: "model-error";
      message: string;
    }
  | {
      type: "transcribe-progress";
      jobId: string;
      percentage: number;
    }
  | {
      type: "transcribe-done";
      jobId: string;
      text: string;
      chunks: TranscriptChunk[];
      language?: string;
    }
  | {
      type: "transcribe-error";
      jobId: string;
      message: string;
    };
