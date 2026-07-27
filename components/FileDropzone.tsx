"use client";

import { FileAudio, Upload } from "lucide-react";
import { useTranslations } from "next-intl";
import { useCallback, useRef, useState } from "react";

import { isLikelyAudioFile } from "@/lib/audio";

interface FileDropzoneProps {
  onFile: (file: File) => void;
  disabled?: boolean;
}

export function FileDropzone({ onFile, disabled }: FileDropzoneProps) {
  const t = useTranslations("dropzone");
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFile = useCallback(
    (file: File | null | undefined) => {
      if (!file) return;
      if (!isLikelyAudioFile(file)) {
        setError(t("rejected"));
        return;
      }
      if (file.size > 1024 * 1024 * 1024) {
        setError(t("tooLarge"));
        return;
      }
      setError(null);
      onFile(file);
    },
    [onFile, t],
  );

  const onDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setDragging(false);
      if (disabled) return;
      handleFile(e.dataTransfer.files?.[0]);
    },
    [disabled, handleFile],
  );

  return (
    <div className="w-full">
      <div
        role="button"
        tabIndex={0}
        onClick={() => !disabled && inputRef.current?.click()}
        onKeyDown={(e) => {
          if ((e.key === "Enter" || e.key === " ") && !disabled) {
            e.preventDefault();
            inputRef.current?.click();
          }
        }}
        onDragOver={(e) => {
          e.preventDefault();
          if (!disabled) setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
        className={[
          "group relative flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed px-6 py-16 text-center transition-colors",
          dragging
            ? "border-sky-500 bg-sky-50"
            : "border-slate-300 bg-white hover:border-slate-400 hover:bg-slate-50",
          disabled ? "pointer-events-none opacity-50" : "cursor-pointer",
        ].join(" ")}
      >
        <input
          ref={inputRef}
          type="file"
          accept="audio/*,.mp3,.wav,.m4a,.aac,.ogg,.flac,.webm,.opus"
          className="sr-only"
          onChange={(e) => handleFile(e.target.files?.[0])}
        />
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-600 group-hover:bg-slate-200">
          {dragging ? <FileAudio className="h-7 w-7" /> : <Upload className="h-7 w-7" />}
        </div>
        <div className="text-base font-medium text-slate-900">
          {dragging ? t("dragging") : t("idle")}
        </div>
        <div className="text-sm text-slate-500">{t("hint")}</div>
      </div>
      {error && (
        <p className="mt-3 text-sm text-rose-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
