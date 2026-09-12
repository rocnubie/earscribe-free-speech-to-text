"use client";

import { Check, Copy, Download, FileText, Upload } from "lucide-react";
import { useMemo, useRef, useState } from "react";

import {
  decodeSubtitleFile,
  parseSubtitles,
  toSrt,
  toText,
  toVtt,
  type SubtitleFormat,
  type TextLayout,
} from "@/lib/subtitle-convert";
import { downloadText } from "@/lib/subtitles";

export interface SubtitleConverterUi {
  inputLabel: string;
  inputPlaceholder: string;
  chooseFile: string;
  loadExample: string;
  encodingLabel: string;
  encodingAuto: string;
  /** "{format}" and "{count}" are replaced. */
  summary: string;
  /** Singular form for languages that need one ("{format}" is replaced). */
  summaryOne?: string;
  noCues: string;
  /** "{count}" is replaced. */
  skipped: string;
  skippedOne?: string;
  vttOnly: string;
  /** "{encoding}" is replaced. */
  decodedAs: string;
  outputLabel: string;
  convertTo: string;
  layoutLabel: string;
  layoutLines: string;
  layoutTimestamps: string;
  layoutParagraphs: string;
  dedupe: string;
  copy: string;
  copied: string;
  /** "{ext}" is replaced. */
  download: string;
  localNote: string;
}

export interface SubtitleExample {
  fileName: string;
  text: string;
}

const ENCODINGS = ["utf-8", "windows-1252", "gb18030", "big5", "shift_jis", "euc-kr"];
const MIME: Record<SubtitleFormat | "txt", string> = {
  srt: "application/x-subrip",
  vtt: "text/vtt",
  txt: "text/plain",
};

function fill(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (token, key: string) => String(values[key] ?? token));
}

/** Subtitle converter for the SRT ⇄ VTT and subtitles-to-text pages. Runs locally. */
export function SubtitleConverter({
  mode,
  ui,
  example,
  fallbackEncoding,
}: {
  mode: "srt-vtt" | "to-txt";
  ui: SubtitleConverterUi;
  example: SubtitleExample;
  fallbackEncoding: string;
}) {
  const [input, setInput] = useState("");
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileBuffer, setFileBuffer] = useState<ArrayBuffer | null>(null);
  const [encoding, setEncoding] = useState("auto");
  const [decodedWith, setDecodedWith] = useState<string | null>(null);
  const [target, setTarget] = useState<SubtitleFormat | null>(null);
  const [layout, setLayout] = useState<TextLayout>("lines");
  const [dedupe, setDedupe] = useState(true);
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const parsed = useMemo(() => parseSubtitles(input), [input]);
  // Default to the other format; the user can override it.
  const outputFormat: SubtitleFormat | "txt" =
    mode === "to-txt" ? "txt" : target ?? (parsed.format === "vtt" ? "srt" : "vtt");
  const output = useMemo(() => {
    if (parsed.cues.length === 0) return "";
    if (outputFormat === "txt") return toText(parsed.cues, { layout, dedupe });
    return outputFormat === "srt" ? toSrt(parsed.cues) : toVtt(parsed.cues);
  }, [parsed, outputFormat, layout, dedupe]);

  const setText = (text: string, name: string | null, buffer: ArrayBuffer | null) => {
    setInput(text);
    setFileName(name);
    setFileBuffer(buffer);
    setTarget(null);
    setCopied(false);
  };

  const loadFile = async (file: File | undefined) => {
    if (!file) return;
    const buffer = await file.arrayBuffer();
    const decoded = decodeSubtitleFile(buffer, "auto", fallbackEncoding);
    setEncoding("auto");
    setDecodedWith(decoded.encoding);
    setText(decoded.text, file.name, buffer);
  };

  const changeEncoding = (next: string) => {
    setEncoding(next);
    if (!fileBuffer) return;
    const decoded = decodeSubtitleFile(fileBuffer, next, fallbackEncoding);
    setDecodedWith(decoded.encoding);
    setInput(decoded.text);
  };

  const copyOutput = async () => {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard can be blocked; download still works.
    }
  };

  const baseName = (fileName ?? example.fileName).replace(/\.[^.]+$/, "") || "subtitles";
  const notices = [
    input.trim() && parsed.cues.length === 0 ? ui.noCues : null,
    parsed.skipped > 0
      ? fill(parsed.skipped === 1 && ui.skippedOne ? ui.skippedOne : ui.skipped, { count: parsed.skipped })
      : null,
    outputFormat === "srt" && parsed.hasVttOnlyFeatures ? ui.vttOnly : null,
    fileBuffer && encoding === "auto" && decodedWith && decodedWith !== "utf-8"
      ? fill(ui.decodedAs, { encoding: decodedWith.toUpperCase() })
      : null,
  ].filter((notice): notice is string => Boolean(notice));

  const buttonClass =
    "inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50";

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <section className="flex min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <label htmlFor="subtitle-input" className="text-sm font-semibold text-slate-900">
            {ui.inputLabel}
          </label>
          <div className="flex flex-wrap items-center gap-2">
            {fileBuffer && (
              <label className="inline-flex items-center gap-1.5 text-xs text-slate-600">
                {ui.encodingLabel}
                <select
                  value={encoding}
                  onChange={(e) => changeEncoding(e.target.value)}
                  className="rounded-md border border-slate-300 bg-white px-2 py-1 text-xs text-slate-800"
                >
                  <option value="auto">{ui.encodingAuto}</option>
                  {ENCODINGS.map((label) => (
                    <option key={label} value={label}>
                      {label.toUpperCase()}
                    </option>
                  ))}
                </select>
              </label>
            )}
            <button type="button" onClick={() => setText(example.text, example.fileName, null)} className={buttonClass}>
              <FileText className="h-4 w-4" />
              {ui.loadExample}
            </button>
            <button type="button" onClick={() => fileInputRef.current?.click()} className={buttonClass}>
              <Upload className="h-4 w-4" />
              {ui.chooseFile}
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".srt,.vtt,.txt,text/vtt,application/x-subrip"
              className="hidden"
              onChange={(e) => {
                void loadFile(e.target.files?.[0]);
                e.target.value = "";
              }}
            />
          </div>
        </div>
        <textarea
          id="subtitle-input"
          value={input}
          onChange={(e) => {
            // Typing edits the text directly, so re-decoding the file would discard it.
            setInput(e.target.value);
            setFileBuffer(null);
            setCopied(false);
          }}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            void loadFile(e.dataTransfer.files?.[0]);
          }}
          placeholder={ui.inputPlaceholder}
          spellCheck={false}
          rows={14}
          className="mt-3 w-full flex-1 resize-y rounded-lg border border-slate-200 bg-slate-50 p-3 font-mono text-xs leading-relaxed text-slate-800 focus:border-sky-400 focus:outline-none"
        />
        <p className="mt-2 text-xs text-slate-500">
          {parsed.format
            ? fill(parsed.cues.length === 1 && ui.summaryOne ? ui.summaryOne : ui.summary, {
                format: parsed.format.toUpperCase(),
                count: parsed.cues.length,
              })
            : ui.localNote}
        </p>
      </section>

      <section className="flex min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <label htmlFor="subtitle-output" className="text-sm font-semibold text-slate-900">
            {ui.outputLabel}
          </label>
          {mode === "srt-vtt" ? (
            <div className="inline-flex items-center gap-2 text-xs text-slate-600" role="group" aria-label={ui.convertTo}>
              {ui.convertTo}
              <div className="inline-flex overflow-hidden rounded-lg border border-slate-300">
                {(["vtt", "srt"] as const).map((format) => (
                  <button
                    key={format}
                    type="button"
                    aria-pressed={outputFormat === format}
                    onClick={() => setTarget(format)}
                    className={
                      "px-3 py-1.5 text-sm font-medium " +
                      (outputFormat === format ? "bg-slate-900 text-white" : "bg-white text-slate-700 hover:bg-slate-50")
                    }
                  >
                    {format.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600">
              <label className="inline-flex items-center gap-1.5">
                {ui.layoutLabel}
                <select
                  value={layout}
                  onChange={(e) => setLayout(e.target.value as TextLayout)}
                  className="rounded-md border border-slate-300 bg-white px-2 py-1 text-xs text-slate-800"
                >
                  <option value="lines">{ui.layoutLines}</option>
                  <option value="timestamps">{ui.layoutTimestamps}</option>
                  <option value="paragraphs">{ui.layoutParagraphs}</option>
                </select>
              </label>
              <label className="inline-flex items-center gap-1.5">
                <input
                  type="checkbox"
                  checked={dedupe}
                  onChange={(e) => setDedupe(e.target.checked)}
                  className="h-3.5 w-3.5 rounded border-slate-300"
                />
                {ui.dedupe}
              </label>
            </div>
          )}
        </div>
        <textarea
          id="subtitle-output"
          value={output}
          readOnly
          spellCheck={false}
          rows={14}
          className="mt-3 w-full flex-1 resize-y rounded-lg border border-slate-200 bg-white p-3 font-mono text-xs leading-relaxed text-slate-800 focus:outline-none"
        />
        {notices.length > 0 && (
          <ul className="mt-2 space-y-1 text-xs text-amber-700">
            {notices.map((notice) => (
              <li key={notice}>{notice}</li>
            ))}
          </ul>
        )}
        <div className="mt-3 flex flex-wrap gap-2">
          <button type="button" onClick={copyOutput} disabled={!output} className={buttonClass}>
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? ui.copied : ui.copy}
          </button>
          <button
            type="button"
            onClick={() => downloadText(output, `${baseName}.${outputFormat}`, MIME[outputFormat])}
            disabled={!output}
            className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Download className="h-4 w-4" />
            {fill(ui.download, { ext: `.${outputFormat}` })}
          </button>
        </div>
      </section>
    </div>
  );
}
