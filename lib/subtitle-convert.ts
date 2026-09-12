/**
 * Parse SRT / WebVTT text and convert it to SRT, WebVTT or plain text.
 * Pure functions: everything runs in the browser, nothing is uploaded.
 */
import { formatTimestamp } from "@/lib/subtitles";

export type SubtitleFormat = "srt" | "vtt";

export interface SubtitleCue {
  start: number;
  end: number;
  /** Raw cue payload, lines separated by "\n", markup untouched. */
  text: string;
}

export interface ParsedSubtitles {
  /** null when no cue could be read. */
  format: SubtitleFormat | null;
  cues: SubtitleCue[];
  /** Lines containing "-->" whose timing could not be read. */
  skipped: number;
  /** Cue settings, STYLE or REGION blocks: WebVTT features SRT cannot carry. */
  hasVttOnlyFeatures: boolean;
}

const TIME = String.raw`(?:(\d+):)?(\d{1,2}):(\d{1,2})(?:[.,](\d{1,3}))?`;
const TIMING = new RegExp(String.raw`^\s*${TIME}\s*-->\s*${TIME}(.*)$`);
/** WebVTT karaoke timestamps inside cue text, e.g. <00:00:01.480>. */
const INLINE_TIMESTAMP = /<(?:\d+:)?\d{1,2}:\d{2}[.,]\d{1,3}>/g;
/** <v Anna> or <v.loud Anna> voice spans. */
const VOICE_SPAN = /<v(?:\.[\w.-]+)?[ \t]+([^>]+)>/g;
/** ASS/SSA override codes some SRT files carry, e.g. {\an8}. */
const ASS_CODE = /\{\\[^}]*\}/g;

function toSeconds(h?: string, m?: string, s?: string, frac?: string): number {
  return (
    Number(h ?? 0) * 3600 +
    Number(m ?? 0) * 60 +
    Number(s ?? 0) +
    (frac ? Number(`0.${frac}`) : 0)
  );
}

function dropTrailingBlankLines(lines: string[]): void {
  while (lines.length && !lines[lines.length - 1].trim()) lines.pop();
}

export function parseSubtitles(input: string): ParsedSubtitles {
  const lines = input.replace(/^\uFEFF/, "").replace(/\r\n?/g, "\n").split("\n");
  const cues: SubtitleCue[] = [];
  let current: { start: number; end: number; lines: string[] } | null = null;
  let skipped = 0;
  let hasVttOnlyFeatures = false;
  let commaTimes = 0;
  let dotTimes = 0;
  const isVtt = /^WEBVTT(?:[ \t]|$)/.test(lines[0] ?? "");
  // Inside the WEBVTT header or a NOTE / STYLE / REGION block, until a blank line.
  let skippingBlock = isVtt;

  /**
   * `nextCueFollows`: the cue ends at the next timing line rather than a blank
   * line, so a bare number at its end is the next cue's SRT counter.
   */
  const closeCue = (nextCueFollows = false) => {
    if (!current) return;
    dropTrailingBlankLines(current.lines);
    if (nextCueFollows && /^\s*\d+\s*$/.test(current.lines[current.lines.length - 1] ?? "")) {
      current.lines.pop();
      dropTrailingBlankLines(current.lines);
    }
    cues.push({ start: current.start, end: current.end, text: current.lines.join("\n") });
    current = null;
  };

  for (const line of lines) {
    if (line.includes("-->")) {
      closeCue(true);
      skippingBlock = false;
      const match = TIMING.exec(line);
      if (!match) {
        skipped += 1;
        continue;
      }
      if (/,\d/.test(line)) commaTimes += 1;
      if (/\.\d/.test(line.split("-->")[0])) dotTimes += 1;
      if (match[9].trim()) hasVttOnlyFeatures = true;
      current = {
        start: toSeconds(match[1], match[2], match[3], match[4]),
        end: toSeconds(match[5], match[6], match[7], match[8]),
        lines: [],
      };
      continue;
    }
    // Only a truly empty line ends a cue: WebVTT allows lines of spaces inside cue text.
    if (line === "") {
      closeCue();
      skippingBlock = false;
      continue;
    }
    if (current) {
      current.lines.push(line);
      continue;
    }
    if (skippingBlock) continue;
    if (/^(NOTE|STYLE|REGION)(?:[ \t]|$)/.test(line)) {
      skippingBlock = true;
      if (!line.startsWith("NOTE")) hasVttOnlyFeatures = true;
    }
    // Anything else outside a cue is a cue number or identifier; it carries no text.
  }
  closeCue();

  const format: SubtitleFormat | null =
    cues.length === 0 ? null : isVtt || dotTimes > commaTimes ? "vtt" : "srt";
  return { format, cues, skipped, hasVttOnlyFeatures };
}

const NAMED_ENTITIES: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: "\u00A0",
  lrm: "\u200E",
  rlm: "\u200F",
};

function decodeEntities(text: string): string {
  return text.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (entity, body: string) => {
    if (body[0] === "#") {
      const code = body[1] === "x" || body[1] === "X" ? parseInt(body.slice(2), 16) : parseInt(body.slice(1), 10);
      return Number.isFinite(code) && code > 0 && code <= 0x10ffff ? String.fromCodePoint(code) : entity;
    }
    return NAMED_ENTITIES[body.toLowerCase()] ?? entity;
  });
}

/** WebVTT markup -> SRT: keep b/i/u, turn voices into "Name: ", drop the rest. */
function cueTextToSrt(text: string): string {
  return decodeEntities(
    text
      .replace(INLINE_TIMESTAMP, "")
      .replace(VOICE_SPAN, "$1: ")
      .replace(/<\/?(?:c|v|lang|ruby|rt)(?:[.\s][^>]*)?>/g, "")
      .replace(/<(\/?)([biu])(?:\.[\w.-]+)*>/g, "<$1$2>"),
  );
}

/** SRT text -> WebVTT: drop SRT-only codes, escape what WebVTT reserves. */
function cueTextToVtt(text: string): string {
  return text
    .replace(ASS_CODE, "")
    .replace(/<\/?font[^>]*>/gi, "")
    .replace(/<(\/?)([BIU])>/g, (_, slash: string, tag: string) => `<${slash}${tag.toLowerCase()}>`)
    .replace(/&(?!(?:amp|lt|gt|nbsp|lrm|rlm|#\d+|#x[0-9a-f]+);)/gi, "&amp;")
    .replace(/<(?!\/?(?:[biu]|v(?:[ .][^>]*)?|c(?:\.[^>]*)?|lang(?: [^>]*)?|ruby|rt)>|(?:\d+:)?\d{1,2}:\d{2}[.,]\d{1,3}>)/g, "&lt;")
    .replace(/-->/g, "->");
}

function cueTextToPlain(text: string): string {
  return decodeEntities(
    text
      .replace(INLINE_TIMESTAMP, "")
      .replace(VOICE_SPAN, "$1: ")
      .replace(ASS_CODE, "")
      .replace(/<[^>]*>/g, ""),
  ).replace(/\u00A0/g, " ");
}

/**
 * Render each cue's text, dropping whitespace-only lines: many SRT readers treat
 * them as the blank line that ends a cue and would cut the cue in two.
 */
function withText(cues: SubtitleCue[], render: (text: string) => string) {
  return cues
    .map((cue) => ({
      ...cue,
      text: render(cue.text)
        .split("\n")
        .map((line) => line.replace(/\s+$/, ""))
        .filter((line) => line.trim() !== "")
        .join("\n"),
    }))
    .filter((cue) => cue.text !== "");
}

export function toSrt(cues: SubtitleCue[]): string {
  const body = withText(cues, cueTextToSrt)
    .map((cue, i) => `${i + 1}\n${formatTimestamp(cue.start, ",")} --> ${formatTimestamp(cue.end, ",")}\n${cue.text}`)
    .join("\n\n");
  return body ? `${body}\n` : "";
}

export function toVtt(cues: SubtitleCue[]): string {
  const body = withText(cues, cueTextToVtt)
    .map((cue) => `${formatTimestamp(cue.start, ".")} --> ${formatTimestamp(cue.end, ".")}\n${cue.text}`)
    .join("\n\n");
  return `WEBVTT\n\n${body}${body ? "\n" : ""}`;
}

export type TextLayout = "lines" | "timestamps" | "paragraphs";

/** Seconds of silence between subtitles that start a new paragraph. */
const PARAGRAPH_PAUSE = 2;
const CJK = /[\u3000-\u30FF\u3400-\u9FFF\uF900-\uFAFF\uFF00-\uFFEF]/;

function clockTime(seconds: number): string {
  return formatTimestamp(seconds, ".").slice(0, 8);
}

export function toText(
  cues: SubtitleCue[],
  { layout, dedupe }: { layout: TextLayout; dedupe: boolean },
): string {
  const lines: { start: number; end: number; text: string }[] = [];
  let previous = "";
  for (const cue of cues) {
    for (const raw of cueTextToPlain(cue.text).split("\n")) {
      const text = raw.replace(/\s+/g, " ").trim();
      if (!text) continue;
      // Rolling auto-captions repeat the previous line at the top of each cue.
      if (dedupe && text === previous) continue;
      previous = text;
      lines.push({ start: cue.start, end: cue.end, text });
    }
  }

  if (layout === "lines") return lines.map((line) => line.text).join("\n");
  if (layout === "timestamps") {
    return lines.map((line) => `[${clockTime(line.start)}] ${line.text}`).join("\n");
  }

  const paragraphs: string[] = [];
  let paragraph = "";
  let lastEnd = -Infinity;
  for (const line of lines) {
    if (paragraph && line.start - lastEnd >= PARAGRAPH_PAUSE) {
      paragraphs.push(paragraph);
      paragraph = "";
    }
    // Chinese and Japanese text is written without spaces between lines.
    const joiner = !paragraph || (CJK.test(paragraph.slice(-1)) && CJK.test(line.text[0])) ? "" : " ";
    paragraph += joiner + line.text;
    lastEnd = Math.max(lastEnd, line.end);
  }
  if (paragraph) paragraphs.push(paragraph);
  return paragraphs.join("\n\n");
}

/**
 * Decode a subtitle file. "auto" tries strict UTF-8 first and falls back to the
 * legacy encoding most common for the page's language.
 */
export function decodeSubtitleFile(
  buffer: ArrayBuffer,
  encoding: string,
  fallbackEncoding: string,
): { text: string; encoding: string } {
  if (encoding !== "auto") {
    return { text: new TextDecoder(encoding).decode(buffer), encoding };
  }
  try {
    return { text: new TextDecoder("utf-8", { fatal: true }).decode(buffer), encoding: "utf-8" };
  } catch {
    return { text: new TextDecoder(fallbackEncoding).decode(buffer), encoding: fallbackEncoding };
  }
}
