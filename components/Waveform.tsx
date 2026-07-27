"use client";

import { Pause, Play } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

import { formatDuration } from "@/lib/format";

interface WaveformProps {
  /** Pre-computed peak amplitudes in [0, 1], one per bar. */
  peaks: number[];
  /** Audio file used for playback (we synthesise an object URL internally). */
  file: File;
  /** Reported back to the parent on every `timeupdate` event. */
  onTimeUpdate?: (currentTime: number) => void;
}

export interface WaveformHandle {
  /** Imperative seek used by the transcript chunk click-to-jump. */
  seekTo: (seconds: number) => void;
}

/**
 * Canvas-based audio waveform with click-to-seek and play/pause control.
 *
 * Why custom and not wavesurfer.js: we already have the decoded PCM in the
 * page, and a 60-line canvas renderer is cheaper than pulling another
 * dependency. Replaces the default <audio controls> which looks dated.
 */
export const Waveform = forwardRef<WaveformHandle, WaveformProps>(
  function Waveform({ peaks, file, onTimeUpdate }, ref) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const audioRef = useRef<HTMLAudioElement>(null);
    const [src, setSrc] = useState<string | null>(null);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hoverTime, setHoverTime] = useState<number | null>(null);

    // ───── object URL lifecycle ─────────────────────────────────────
    useEffect(() => {
      const url = URL.createObjectURL(file);
      setSrc(url);
      return () => URL.revokeObjectURL(url);
    }, [file]);

    // ───── imperative API for transcript click-to-jump ─────────────
    useImperativeHandle(
      ref,
      () => ({
        seekTo: (seconds: number) => {
          const a = audioRef.current;
          if (!a) return;
          a.currentTime = Math.max(0, Math.min(a.duration || seconds, seconds));
          a.play().catch(() => {});
        },
      }),
      [],
    );

    // ───── canvas redraw on time / peaks change ────────────────────
    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas || peaks.length === 0) return;

      const draw = () => {
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();
        const w = rect.width;
        const h = rect.height;
        if (
          canvas.width !== Math.round(w * dpr) ||
          canvas.height !== Math.round(h * dpr)
        ) {
          canvas.width = Math.round(w * dpr);
          canvas.height = Math.round(h * dpr);
        }
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, w, h);

        const barWidth = w / peaks.length;
        const gap = Math.min(1, barWidth * 0.2);
        const drawnWidth = Math.max(1, barWidth - gap);
        const playedRatio = duration > 0 ? currentTime / duration : 0;
        const hoverRatio =
          hoverTime != null && duration > 0 ? hoverTime / duration : -1;

        const midY = h / 2;
        const maxHeight = h * 0.9;

        for (let i = 0; i < peaks.length; i++) {
          const peak = peaks[i] ?? 0;
          const barHeight = Math.max(2, peak * maxHeight);
          const ratio = i / peaks.length;
          const played = ratio < playedRatio;
          const isHover = hoverRatio >= 0 && ratio < hoverRatio && !played;

          ctx.fillStyle = played
            ? "#0284c7" // sky-600
            : isHover
              ? "#7dd3fc" // sky-300
              : "#cbd5e1"; // slate-300
          ctx.fillRect(
            i * barWidth,
            midY - barHeight / 2,
            drawnWidth,
            barHeight,
          );
        }

        // Playhead line
        if (playedRatio > 0) {
          ctx.fillStyle = "#0c4a6e"; // sky-900
          ctx.fillRect(Math.max(0, playedRatio * w - 1), 0, 2, h);
        }
      };

      draw();
      // Re-fit on resize.
      const ro = new ResizeObserver(draw);
      ro.observe(canvas);
      return () => ro.disconnect();
    }, [peaks, currentTime, duration, hoverTime]);

    // ───── interaction ─────────────────────────────────────────────
    const ratioFromEvent = useCallback(
      (e: React.MouseEvent<HTMLCanvasElement>): number => {
        const rect = e.currentTarget.getBoundingClientRect();
        return Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      },
      [],
    );

    const onCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
      const a = audioRef.current;
      if (!a || !duration) return;
      a.currentTime = ratioFromEvent(e) * duration;
      a.play().catch(() => {});
    };

    const onCanvasMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
      if (!duration) return;
      setHoverTime(ratioFromEvent(e) * duration);
    };

    const togglePlay = () => {
      const a = audioRef.current;
      if (!a) return;
      if (a.paused) {
        a.play().catch(() => {});
      } else {
        a.pause();
      }
    };

    const t = useTranslations("result");

    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={togglePlay}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white transition-colors hover:bg-slate-700"
            aria-label={isPlaying ? t("pause") : t("play")}
          >
            {isPlaying ? (
              <Pause className="h-5 w-5" />
            ) : (
              <Play className="h-5 w-5 translate-x-0.5" />
            )}
          </button>

          <div className="flex flex-1 flex-col gap-1">
            <canvas
              ref={canvasRef}
              onClick={onCanvasClick}
              onMouseMove={onCanvasMove}
              onMouseLeave={() => setHoverTime(null)}
              className="h-16 w-full cursor-pointer rounded-lg bg-slate-50"
            />
            <div className="flex items-center justify-between text-xs font-mono tabular-nums text-slate-500">
              <span>{formatDuration(currentTime)}</span>
              <span>{formatDuration(duration)}</span>
            </div>
          </div>
        </div>

        {src && (
          <audio
            ref={audioRef}
            src={src}
            preload="metadata"
            className="hidden"
            onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
            onTimeUpdate={(e) => {
              setCurrentTime(e.currentTarget.currentTime);
              onTimeUpdate?.(e.currentTarget.currentTime);
            }}
          />
        )}
      </div>
    );
  },
);
