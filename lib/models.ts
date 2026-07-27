/**
 * Whisper model registry.
 *
 * Adding a new model = append an entry here and add an i18n block under
 * `messages/<locale>.json` -> `models.<id>`. No other file changes.
 */
export type ModelId = "tiny" | "base" | "small" | "turbo";

export interface ModelSpec {
  id: ModelId;
  /** Full HF repo, used as the first arg to `pipeline()`. */
  repo: string;
  /** Approximate total download size in MB (quantized weights). */
  sizeMB: number;
  /** Coarse accuracy tier (0-4) for visual rendering. */
  accuracyTier: 0 | 1 | 2 | 3 | 4;
  /** Coarse speed tier (0-4) for visual rendering. */
  speedTier: 0 | 1 | 2 | 3 | 4;
  /**
   * Recommended minimum free RAM in GB. Used only to surface a soft warning;
   * we never disable a model based on this.
   */
  minRamGB: number;
  /** If true, the model is dramatically faster on WebGPU. */
  preferWebGPU: boolean;
  recommended?: boolean;
}

export const MODELS: ModelSpec[] = [
  {
    id: "tiny",
    repo: "onnx-community/whisper-tiny",
    sizeMB: 80,
    accuracyTier: 1,
    speedTier: 4,
    minRamGB: 1,
    preferWebGPU: false,
  },
  {
    id: "base",
    repo: "onnx-community/whisper-base",
    sizeMB: 200,
    accuracyTier: 2,
    speedTier: 3,
    minRamGB: 2,
    preferWebGPU: false,
    recommended: true,
  },
  {
    id: "small",
    repo: "onnx-community/whisper-small",
    sizeMB: 500,
    accuracyTier: 3,
    speedTier: 2,
    minRamGB: 4,
    preferWebGPU: true,
  },
  {
    id: "turbo",
    repo: "onnx-community/whisper-large-v3-turbo",
    sizeMB: 800,
    accuracyTier: 4,
    speedTier: 3,
    minRamGB: 6,
    preferWebGPU: true,
  },
];

export const MODEL_BY_ID: Record<ModelId, ModelSpec> = Object.fromEntries(
  MODELS.map((m) => [m.id, m]),
) as Record<ModelId, ModelSpec>;

export function getModel(id: ModelId): ModelSpec {
  const spec = MODEL_BY_ID[id];
  if (!spec) {
    throw new Error(`Unknown model id: ${id}`);
  }
  return spec;
}
