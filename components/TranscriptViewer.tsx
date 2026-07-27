"use client";

import {
  AlertTriangle,
  Check,
  CheckCircle2,
  Copy,
  FileText,
  Pencil,
  Save,
  Search,
  Subtitles,
  WandSparkles,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useMemo, useRef, useState } from "react";

import { formatDuration, languageName } from "@/lib/format";
import { Events, track } from "@/lib/plausible";
import type { Transcript } from "@/lib/subtitles";
import { toTxt } from "@/lib/subtitles";
import {
  analyzeTranscript,
  optimizeSubtitleLayout,
  type SubtitleIssueKind,
} from "@/lib/transcript-qa";

import { ExportMenu } from "./ExportMenu";

interface TranscriptViewerProps {
  transcript: Transcript;
  fileName: string;
  projectKey?: string;
  initialTab?: "transcript" | "subtitles";
  currentTime: number;
  onSeek: (time: number) => void;
}

function formatChunkTime(seconds: number): string {
  return formatDuration(seconds);
}

function countWords(text: string, locale: string): number {
  try {
    const Segmenter = Intl.Segmenter;
    const segmenter = new Segmenter(locale, { granularity: "word" });
    return Array.from(segmenter.segment(text)).filter(
      (segment) => segment.isWordLike,
    ).length;
  } catch {
    return text.split(/\s+/).filter(Boolean).length;
  }
}

function isTranscript(value: unknown): value is Transcript {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Partial<Transcript>;
  return (
    typeof candidate.text === "string" &&
    Array.isArray(candidate.chunks) &&
    candidate.chunks.every(
      (chunk) =>
        chunk &&
        typeof chunk.text === "string" &&
        Array.isArray(chunk.timestamp) &&
        typeof chunk.timestamp[0] === "number",
    )
  );
}

export function TranscriptViewer({
  transcript,
  fileName,
  projectKey,
  initialTab = "transcript",
  currentTime,
  onSeek,
}: TranscriptViewerProps) {
  const t = useTranslations("result");
  const locale = useLocale();
  const [draft, setDraft] = useState(transcript);
  const [tab, setTab] = useState<"transcript" | "subtitles">(initialTab);
  const [query, setQuery] = useState("");
  const [editing, setEditing] = useState(false);
  const [copied, setCopied] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [restored, setRestored] = useState(false);
  const editedTrackedRef = useRef(false);
  const activeItemRef = useRef<HTMLLIElement>(null);

  const storageKey = projectKey
    ? `earscribe:transcript:${projectKey}`
    : null;

  useEffect(() => {
    setDraft(transcript);
    setHydrated(false);
    setRestored(false);
    if (!storageKey) {
      setHydrated(true);
      return;
    }
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed: unknown = JSON.parse(saved);
        if (isTranscript(parsed)) {
          setDraft(parsed);
          setRestored(true);
        }
      }
    } catch {
      // A corrupt or oversized local draft should never block the result.
    }
    setHydrated(true);
  }, [storageKey, transcript]);

  useEffect(() => {
    if (!hydrated || !storageKey) return;
    const timer = window.setTimeout(() => {
      try {
        localStorage.setItem(storageKey, JSON.stringify(draft));
      } catch {
        // Storage can be unavailable or full; export remains available.
      }
    }, 350);
    return () => window.clearTimeout(timer);
  }, [draft, hydrated, storageKey]);

  const wordCount = useMemo(
    () => countWords(toTxt(draft), locale),
    [draft, locale],
  );

  const activeIndex = useMemo(() => {
    for (let i = 0; i < draft.chunks.length; i++) {
      const [start, end] = draft.chunks[i].timestamp;
      if (currentTime >= start && (end == null || currentTime <= end + 0.4)) {
        return i;
      }
    }
    return -1;
  }, [draft.chunks, currentTime]);

  const qaIssues = useMemo(() => analyzeTranscript(draft), [draft]);
  const issuesByChunk = useMemo(() => {
    const map = new Map<number, SubtitleIssueKind[]>();
    for (const issue of qaIssues) {
      const current = map.get(issue.chunkIndex) ?? [];
      if (!current.includes(issue.kind)) current.push(issue.kind);
      map.set(issue.chunkIndex, current);
    }
    return map;
  }, [qaIssues]);

  const visibleChunks = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase(locale);
    return draft.chunks
      .map((chunk, index) => ({ chunk, index }))
      .filter(({ chunk }) =>
        normalized
          ? chunk.text.toLocaleLowerCase(locale).includes(normalized)
          : true,
      );
  }, [draft.chunks, locale, query]);

  const firstRenderRef = useRef(true);
  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    activeItemRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }, [activeIndex]);

  const markEdited = () => {
    if (editedTrackedRef.current) return;
    editedTrackedRef.current = true;
    track(Events.TranscriptEdited);
  };

  const updateChunk = (index: number, text: string) => {
    markEdited();
    setDraft((current) => {
      const chunks = current.chunks.map((chunk, chunkIndex) =>
        chunkIndex === index ? { ...chunk, text } : chunk,
      );
      return {
        ...current,
        chunks,
        text: chunks.map((chunk) => chunk.text.trim()).filter(Boolean).join(" "),
      };
    });
  };

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(toTxt(draft));
      track(Events.CopyTranscript);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard API can fail on insecure contexts.
    }
  };

  const optimizeSubtitles = () => {
    markEdited();
    setDraft((current) => optimizeSubtitleLayout(current));
    track(Events.SubtitleQaUsed, { action: "optimize-layout" });
  };

  const baseName = fileName.replace(/\.[^.]+$/, "") || "transcript";
  const selectTab = (next: "transcript" | "subtitles") => {
    setTab(next);
    if (next === "subtitles") track(Events.SubtitleQaUsed, { action: "open" });
  };
  const onTabKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    selectTab(tab === "transcript" ? "subtitles" : "transcript");
    const targetId = tab === "transcript" ? "subtitle-check-tab" : "transcript-tab";
    document.getElementById(targetId)?.focus();
  };

  return (
    <section className="space-y-4">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">{t("title")}</h2>
          <p className="mt-1 text-sm text-slate-600">
            {t("detectedLanguage", {
              language: languageName(draft.language, locale),
            })}{" "}
            · {t("wordCount", { count: wordCount })}
            {draft.durationSec != null && (
              <>
                {" "}·{" "}
                {t("duration", {
                  duration: formatDuration(draft.durationSec),
                })}
              </>
            )}
          </p>
          <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-emerald-700">
            <Save className="h-3.5 w-3.5" />
            {restored ? t("restoredDraft") : t("savedOnDevice")}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={onCopy}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            {copied ? (
              <Check className="h-4 w-4 text-emerald-600" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
            {copied ? t("copied") : t("copy")}
          </button>
          <ExportMenu transcript={draft} baseName={baseName} />
        </div>
      </header>

      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200">
        <div className="flex" role="tablist" aria-label={t("workspaceLabel")}>
          <button
            type="button"
            role="tab"
            id="transcript-tab"
            aria-controls="transcript-panel"
            aria-selected={tab === "transcript"}
            tabIndex={tab === "transcript" ? 0 : -1}
            onClick={() => selectTab("transcript")}
            onKeyDown={onTabKeyDown}
            className={[
              "inline-flex h-11 items-center gap-2 border-b-2 px-3 text-sm font-medium",
              tab === "transcript"
                ? "border-sky-600 text-sky-700"
                : "border-transparent text-slate-600 hover:text-slate-900",
            ].join(" ")}
          >
            <FileText className="h-4 w-4" />
            {t("tabTranscript")}
          </button>
          <button
            type="button"
            role="tab"
            id="subtitle-check-tab"
            aria-controls="subtitle-check-panel"
            aria-selected={tab === "subtitles"}
            tabIndex={tab === "subtitles" ? 0 : -1}
            onClick={() => selectTab("subtitles")}
            onKeyDown={onTabKeyDown}
            className={[
              "inline-flex h-11 items-center gap-2 border-b-2 px-3 text-sm font-medium",
              tab === "subtitles"
                ? "border-sky-600 text-sky-700"
                : "border-transparent text-slate-600 hover:text-slate-900",
            ].join(" ")}
          >
            <Subtitles className="h-4 w-4" />
            {t("tabSubtitles")}
            {qaIssues.length > 0 && (
              <span className="rounded-full bg-amber-100 px-1.5 py-0.5 text-[11px] text-amber-900">
                {qaIssues.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {tab === "transcript" ? (
        <div
          id="transcript-panel"
          role="tabpanel"
          aria-labelledby="transcript-tab"
          className="space-y-3"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <label className="relative block flex-1 sm:max-w-sm">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={t("searchPlaceholder")}
                className="h-10 w-full rounded-lg border border-slate-300 bg-white pl-9 pr-3 text-sm outline-none ring-sky-200 focus:border-sky-500 focus:ring-2"
              />
            </label>
            <button
              type="button"
              onClick={() => setEditing((value) => !value)}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              {editing ? <CheckCircle2 className="h-4 w-4" /> : <Pencil className="h-4 w-4" />}
              {editing ? t("finishEditing") : t("editTranscript")}
            </button>
          </div>

          <div className="max-h-[60vh] overflow-y-auto rounded-xl border border-slate-200 bg-white shadow-sm">
            {visibleChunks.length > 0 ? (
              <ol className="divide-y divide-slate-100">
                {visibleChunks.map(({ chunk, index }) => {
                  const [start] = chunk.timestamp;
                  const active = index === activeIndex;
                  return (
                    <li
                      key={index}
                      ref={active ? activeItemRef : undefined}
                      className={[
                        "flex gap-3 px-4 py-3 transition-colors sm:gap-4",
                        active ? "bg-sky-50" : "hover:bg-slate-50",
                      ].join(" ")}
                    >
                      <button
                        type="button"
                        onClick={() => onSeek(start)}
                        className={[
                          "shrink-0 font-mono text-xs hover:underline",
                          active ? "text-sky-700" : "text-sky-600",
                        ].join(" ")}
                        aria-label={t("playFromHere")}
                      >
                        {formatChunkTime(start)}
                      </button>
                      {editing ? (
                        <textarea
                          value={chunk.text}
                          onChange={(event) => updateChunk(index, event.target.value)}
                          rows={Math.max(2, Math.ceil(chunk.text.length / 70))}
                          className="min-w-0 flex-1 resize-y rounded-md border border-slate-300 bg-white px-2.5 py-2 text-sm leading-relaxed text-slate-900 outline-none ring-sky-200 focus:border-sky-500 focus:ring-2"
                        />
                      ) : (
                        <p
                          className={[
                            "min-w-0 flex-1 whitespace-pre-line text-sm leading-relaxed",
                            active ? "font-medium text-slate-900" : "text-slate-800",
                          ].join(" ")}
                        >
                          {chunk.text.trim()}
                        </p>
                      )}
                    </li>
                  );
                })}
              </ol>
            ) : (
              <p className="px-4 py-10 text-center text-sm text-slate-500">
                {t("noSearchResults")}
              </p>
            )}
          </div>
        </div>
      ) : (
        <div
          id="subtitle-check-panel"
          role="tabpanel"
          aria-labelledby="subtitle-check-tab"
          className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_18rem]"
        >
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            {qaIssues.length === 0 ? (
              <div className="flex min-h-52 flex-col items-center justify-center px-6 py-10 text-center">
                <CheckCircle2 className="h-9 w-9 text-emerald-600" />
                <h3 className="mt-3 font-semibold text-slate-900">{t("qaCleanTitle")}</h3>
                <p className="mt-1 max-w-md text-sm text-slate-600">{t("qaCleanBody")}</p>
              </div>
            ) : (
              <ol className="divide-y divide-slate-100">
                {Array.from(issuesByChunk.entries()).map(([index, kinds]) => {
                  const chunk = draft.chunks[index];
                  if (!chunk) return null;
                  return (
                    <li key={index}>
                      <button
                        type="button"
                        onClick={() => onSeek(chunk.timestamp[0])}
                        className="flex w-full items-start gap-3 px-4 py-3 text-left hover:bg-amber-50"
                      >
                        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                        <span className="min-w-0 flex-1">
                          <span className="flex flex-wrap items-center gap-1.5">
                            <span className="font-mono text-xs text-sky-700">
                              {formatChunkTime(chunk.timestamp[0])}
                            </span>
                            {kinds.map((kind) => (
                              <span
                                key={kind}
                                className="rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-medium text-amber-900"
                              >
                                {t(`qaType_${kind}`)}
                              </span>
                            ))}
                          </span>
                          <span className="mt-1 block line-clamp-2 text-sm text-slate-700">
                            {chunk.text.trim() || t("qaEmptyCue")}
                          </span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ol>
            )}
          </div>

          <aside className="h-fit rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="font-semibold text-slate-900">{t("qaTitle")}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{t("qaBody")}</p>
            <div className="mt-4 rounded-lg bg-white p-3 text-sm text-slate-700 ring-1 ring-slate-200">
              {qaIssues.length > 0
                ? t("qaIssueCount", { count: qaIssues.length })
                : t("qaNoIssues")}
            </div>
            <button
              type="button"
              onClick={optimizeSubtitles}
              disabled={draft.chunks.length === 0}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-3 py-2.5 text-sm font-semibold text-white hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <WandSparkles className="h-4 w-4" />
              {t("optimizeSubtitles")}
            </button>
            <p className="mt-2 text-xs leading-relaxed text-slate-500">{t("qaHint")}</p>
          </aside>
        </div>
      )}
    </section>
  );
}
