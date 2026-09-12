"use client";

import { Check, Copy, Pause, Play, RotateCcw } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";

import { ExportMenu } from "@/components/ExportMenu";
import { DEMO_SAMPLE } from "@/lib/demo-sample";
import { formatBytes, formatDuration } from "@/lib/format";
import { toTxt } from "@/lib/subtitles";

const { transcript, peaks, durationSec } = DEMO_SAMPLE;
const wordCount = toTxt(transcript).split(/\s+/).filter(Boolean).length;

function activeChunkIndex(currentTime: number): number {
  return transcript.chunks.findIndex(({ timestamp: [start, end] }) =>
    currentTime >= start && (end == null || currentTime <= end + 0.4),
  );
}

/**
 * Homepage showcase: the done-state workspace driven by a real sample file.
 * Play, click-to-seek, copy and export all work; exports are not tracked.
 */
export function ShowcaseDemo() {
  const t = useTranslations("seo.showcase");
  const tr = useTranslations("result");
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [copied, setCopied] = useState(false);

  const activeIndex = activeChunkIndex(currentTime);
  const playedRatio = currentTime / durationSec;

  const playFrom = (seconds: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.max(0, Math.min(durationSec, seconds));
    audio.play().catch(() => {});
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  };

  const seekFromWaveform = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    playFrom(ratio * durationSec);
  };

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(toTxt(transcript));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard can be blocked; export still works.
    }
  };

  return (
    <div className="mt-12 space-y-6">
      {/* Phase strip — matches Transcriber done-phase strip */}
      <section className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm">
        <div className="min-w-0 text-sm">
          <span className="block truncate font-medium text-slate-900">
            {DEMO_SAMPLE.fileName}
          </span>
          <span className="text-xs text-slate-500">
            {formatBytes(DEMO_SAMPLE.sizeBytes)} · {DEMO_SAMPLE.model}
          </span>
        </div>
        <a
          href="#transcribe"
          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          <RotateCcw className="h-4 w-4" />
          {tr("newFile")}
        </a>
      </section>

      {/* Waveform — same layout as the Waveform component */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? tr("pause") : tr("play")}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white transition-colors hover:bg-slate-700"
          >
            {isPlaying ? (
              <Pause className="h-5 w-5" />
            ) : (
              <Play className="h-5 w-5 translate-x-0.5" />
            )}
          </button>
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <div
              onClick={seekFromWaveform}
              className="grid h-16 min-w-0 cursor-pointer grid-cols-[repeat(60,minmax(1px,1fr))] items-center gap-px overflow-hidden rounded-lg bg-slate-50 px-2"
            >
              {peaks.map((peak, i) => (
                <span
                  key={i}
                  style={{ height: `${Math.max(4, Math.round(peak * 56))}px` }}
                  className={
                    "w-full rounded-sm " +
                    (i / peaks.length < playedRatio ? "bg-sky-600" : "bg-slate-300")
                  }
                />
              ))}
            </div>
            <div className="flex items-center justify-between font-mono text-xs tabular-nums text-slate-500">
              <span>{formatDuration(currentTime)}</span>
              <span>{formatDuration(durationSec)}</span>
            </div>
          </div>
        </div>
        <audio
          ref={audioRef}
          src={DEMO_SAMPLE.src}
          preload="none"
          className="hidden"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
          onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
        />
      </div>

      {/* Transcript — same layout as TranscriptViewer */}
      <section className="space-y-4">
        <header className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">{tr("title")}</h3>
            <p className="mt-1 text-sm text-slate-600">
              {t("badges.autoLanguage")} · {tr("wordCount", { count: wordCount })}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={copyText}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? tr("copied") : tr("copy")}
            </button>
            <ExportMenu
              transcript={transcript}
              baseName="earscribe-sample"
              trackExport={false}
            />
          </div>
        </header>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <ol className="divide-y divide-slate-100">
            {transcript.chunks.map((chunk, i) => {
              const active = i === activeIndex;
              return (
                <li key={chunk.timestamp[0]}>
                  <button
                    type="button"
                    onClick={() => playFrom(chunk.timestamp[0])}
                    title={tr("playFromHere")}
                    className={[
                      "flex w-full gap-4 px-4 py-3 text-left hover:bg-slate-50",
                      active ? "bg-sky-50 hover:bg-sky-50" : "",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "shrink-0 font-mono text-xs tabular-nums leading-relaxed",
                        active ? "text-sky-700" : "text-sky-600",
                      ].join(" ")}
                    >
                      {formatDuration(chunk.timestamp[0])}
                    </span>
                    <span
                      className={[
                        "text-sm leading-relaxed",
                        active ? "font-medium text-slate-900" : "text-slate-800",
                      ].join(" ")}
                    >
                      {chunk.text.trim()}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </section>
    </div>
  );
}
