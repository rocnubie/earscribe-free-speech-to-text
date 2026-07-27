import type { Transcript, TranscriptChunk } from "./subtitles";

export type SubtitleIssueKind =
  | "empty"
  | "long"
  | "fast"
  | "overlap"
  | "repeated";

export interface SubtitleIssue {
  chunkIndex: number;
  kind: SubtitleIssueKind;
  value?: number;
}

const MAX_LINE_LENGTH = 42;
const MAX_CUE_LENGTH = MAX_LINE_LENGTH * 2;
const MAX_CHARACTERS_PER_SECOND = 20;

function chunkEnd(chunk: TranscriptChunk): number {
  const [start, end] = chunk.timestamp;
  return typeof end === "number" && end > start ? end : start + 2;
}

function normalizedText(text: string): string {
  return text.toLocaleLowerCase().replace(/\s+/g, " ").trim();
}

export function analyzeTranscript(transcript: Transcript): SubtitleIssue[] {
  const issues: SubtitleIssue[] = [];

  transcript.chunks.forEach((chunk, index) => {
    const text = chunk.text.trim();
    const [start] = chunk.timestamp;
    const end = chunkEnd(chunk);
    const duration = Math.max(0.1, end - start);

    if (!text) {
      issues.push({ chunkIndex: index, kind: "empty" });
      return;
    }
    if (text.length > MAX_CUE_LENGTH) {
      issues.push({ chunkIndex: index, kind: "long", value: text.length });
    }
    const cps = text.replace(/\s+/g, "").length / duration;
    if (cps > MAX_CHARACTERS_PER_SECOND) {
      issues.push({ chunkIndex: index, kind: "fast", value: Math.round(cps) });
    }

    const next = transcript.chunks[index + 1];
    if (next && end > next.timestamp[0] + 0.05) {
      issues.push({ chunkIndex: index, kind: "overlap" });
    }

    const previous = transcript.chunks[index - 1];
    if (
      previous &&
      normalizedText(previous.text) &&
      normalizedText(previous.text) === normalizedText(text)
    ) {
      issues.push({ chunkIndex: index, kind: "repeated" });
    }
  });

  return issues;
}

function splitText(text: string, maxLength = MAX_CUE_LENGTH): string[] {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= maxLength) return clean ? [clean] : [];

  const pieces = clean.split(/(?<=[.!?。！？；;])\s*/u).filter(Boolean);
  const result: string[] = [];

  for (const piece of pieces.length > 1 ? pieces : [clean]) {
    let rest = piece.trim();
    while (rest.length > maxLength) {
      const candidate = rest.slice(0, maxLength + 1);
      const breakAt = Math.max(
        candidate.lastIndexOf(" "),
        candidate.lastIndexOf(","),
        candidate.lastIndexOf("，"),
        candidate.lastIndexOf("、"),
      );
      const cut = breakAt >= Math.floor(maxLength * 0.55) ? breakAt : maxLength;
      result.push(rest.slice(0, cut).trim());
      rest = rest.slice(cut).trim();
    }
    if (rest) result.push(rest);
  }

  return result;
}

function wrapCue(text: string): string {
  if (text.length <= MAX_LINE_LENGTH) return text;
  const midpoint = Math.floor(text.length / 2);
  const nearby = text.slice(0, Math.min(text.length, midpoint + 12));
  const candidates = [
    nearby.lastIndexOf(" "),
    nearby.lastIndexOf(","),
    nearby.lastIndexOf("，"),
    nearby.lastIndexOf("、"),
  ];
  const cut = Math.max(...candidates);
  const safeCut = cut >= Math.floor(midpoint * 0.6) ? cut : midpoint;
  return `${text.slice(0, safeCut).trim()}\n${text.slice(safeCut).trim()}`;
}

export function optimizeSubtitleLayout(transcript: Transcript): Transcript {
  const chunks: TranscriptChunk[] = [];

  for (const chunk of transcript.chunks) {
    const parts = splitText(chunk.text);
    if (parts.length === 0) continue;

    const [start] = chunk.timestamp;
    const end = chunkEnd(chunk);
    const totalChars = parts.reduce((sum, part) => sum + part.length, 0);
    let cursor = start;

    parts.forEach((part, index) => {
      const ratio = totalChars > 0 ? part.length / totalChars : 1 / parts.length;
      const partEnd =
        index === parts.length - 1 ? end : Math.min(end, cursor + (end - start) * ratio);
      chunks.push({
        text: wrapCue(part),
        timestamp: [cursor, Math.max(cursor, partEnd)],
      });
      cursor = partEnd;
    });
  }

  return {
    ...transcript,
    chunks,
    text: chunks.map((chunk) => chunk.text.replace(/\n/g, " ")).join(" "),
  };
}
