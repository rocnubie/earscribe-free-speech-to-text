/**
 * Best-effort device capability probe. Used only to annotate model cards
 * with soft warnings — never to disable a model.
 */
export interface DeviceCapability {
  webgpu: boolean;
  /** `navigator.deviceMemory` is exposed by Chromium browsers only. */
  ramGB: number | null;
  cores: number;
  storageQuotaGB: number | null;
}

interface MinimalGPU {
  requestAdapter(): Promise<unknown>;
}

export async function probeDevice(): Promise<DeviceCapability> {
  let webgpu = false;
  try {
    const gpu = (navigator as Navigator & { gpu?: MinimalGPU }).gpu;
    if (gpu) {
      const adapter = await gpu.requestAdapter().catch(() => null);
      webgpu = !!adapter;
    }
  } catch {
    webgpu = false;
  }

  const ramGB =
    (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? null;

  const cores = navigator.hardwareConcurrency ?? 4;

  let storageQuotaGB: number | null = null;
  try {
    const estimate = await navigator.storage?.estimate?.();
    if (estimate?.quota) {
      storageQuotaGB = estimate.quota / 1_073_741_824;
    }
  } catch {
    storageQuotaGB = null;
  }

  return { webgpu, ramGB, cores, storageQuotaGB };
}

/** What runtime should we ask Transformers.js to use? */
export function pickDevice(
  capability: DeviceCapability,
): "webgpu" | "wasm" {
  return capability.webgpu ? "webgpu" : "wasm";
}
