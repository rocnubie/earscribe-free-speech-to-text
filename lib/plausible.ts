/**
 * Tiny wrapper over the Plausible analytics global. Safe to call before the
 * script has loaded — events fall on the floor instead of throwing.
 */
type PlausibleProps = Record<string, string | number | boolean>;

interface PlausibleFn {
  (event: string, options?: { props?: PlausibleProps }): void;
  q?: unknown[];
}

declare global {
  interface Window {
    plausible?: PlausibleFn;
  }
}

export function track(event: string, props?: PlausibleProps): void {
  if (typeof window === "undefined") return;
  try {
    window.plausible?.(event, props ? { props } : undefined);
  } catch {
    // never let analytics break the UI
  }
}

export const Events = {
  ModelSelected: "Model Selected",
  ModelDownloaded: "Model Downloaded",
  ModelDownloadFailed: "Model Download Failed",
  TranscriptionStarted: "Transcription Started",
  TranscriptionDone: "Transcription Done",
  TranscriptionFailed: "Transcription Failed",
  ExportFormat: "Export",
  DeviceCapability: "Device Capability",
} as const;
