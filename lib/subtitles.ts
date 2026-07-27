/**
 * Format Whisper chunks into TXT / SRT / VTT / JSON.
 *
 * Whisper's `return_timestamps: true` yields:
 *   chunks: [{ text: " hello world", timestamp: [0.0, 2.3] }, ...]
 *
 * The last chunk may have `timestamp: [n, null]` when the final segment is
 * still being inferred. We patch null endings to `start + 2s` as a fallback.
 */
export interface TranscriptChunk {
  text: string;
  timestamp: [number, number | null];
}

export interface Transcript {
  text: string;
  chunks: TranscriptChunk[];
  language?: string;
  durationSec?: number;
}

function pad(num: number, width: number): string {
  return num.toString().padStart(width, "0");
}

/** seconds -> `HH:MM:SS,mmm` (SRT) or `HH:MM:SS.mmm` (VTT). */
function formatTimestamp(
  seconds: number,
  separator: "," | ".",
): string {
  const safe = Math.max(0, seconds);
  const h = Math.floor(safe / 3600);
  const m = Math.floor((safe % 3600) / 60);
  const s = Math.floor(safe % 60);
  const ms = Math.round((safe - Math.floor(safe)) * 1000);
  return `${pad(h, 2)}:${pad(m, 2)}:${pad(s, 2)}${separator}${pad(ms, 3)}`;
}

function safeEnd(chunk: TranscriptChunk): number {
  const [start, end] = chunk.timestamp;
  if (typeof end === "number" && end > start) return end;
  return start + 2;
}

/**
 * Plain-text export. Preserves Whisper's natural segmentation by putting
 * one chunk per paragraph — matches what the user sees in the viewer and
 * makes pasted output readable instead of a single wall of text.
 */
export function toTxt(t: Transcript): string {
  return t.chunks
    .map((c) => c.text.trim())
    .filter(Boolean)
    .join("\n\n")
    .trim();
}

export function toSrt(t: Transcript): string {
  return t.chunks
    .map((chunk, i) => {
      const start = formatTimestamp(chunk.timestamp[0], ",");
      const end = formatTimestamp(safeEnd(chunk), ",");
      return `${i + 1}\n${start} --> ${end}\n${chunk.text.trim()}\n`;
    })
    .join("\n");
}

export function toVtt(t: Transcript): string {
  const body = t.chunks
    .map((chunk) => {
      const start = formatTimestamp(chunk.timestamp[0], ".");
      const end = formatTimestamp(safeEnd(chunk), ".");
      return `${start} --> ${end}\n${chunk.text.trim()}\n`;
    })
    .join("\n");
  return `WEBVTT\n\n${body}`;
}

export function toJson(t: Transcript): string {
  return JSON.stringify(t, null, 2);
}

export function downloadText(
  content: string,
  filename: string,
  mime: string,
): void {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
