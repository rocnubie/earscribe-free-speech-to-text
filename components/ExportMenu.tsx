"use client";

import { Download, FileText, FileType } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { Events, track } from "@/lib/plausible";
import {
  downloadText,
  toJson,
  toSrt,
  toTxt,
  toVtt,
  type Transcript,
} from "@/lib/subtitles";

interface ExportMenuProps {
  transcript: Transcript;
  baseName: string;
}

export function ExportMenu({ transcript, baseName }: ExportMenuProps) {
  const t = useTranslations("result");
  const [open, setOpen] = useState(false);

  const onExport = (
    format: "txt" | "srt" | "vtt" | "json",
    content: string,
    mime: string,
  ) => {
    track(Events.ExportFormat, { format });
    downloadText(content, `${baseName}.${format}`, mime);
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-slate-700"
      >
        <Download className="h-4 w-4" />
        {t("export")}
      </button>
      {open && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg"
          role="menu"
        >
          <button
            type="button"
            className="flex w-full items-center gap-3 px-3 py-2 text-sm hover:bg-slate-50"
            onClick={() => onExport("txt", toTxt(transcript), "text/plain")}
          >
            <FileText className="h-4 w-4 text-slate-500" />
            {t("exportTxt")}
          </button>
          <button
            type="button"
            className="flex w-full items-center gap-3 px-3 py-2 text-sm hover:bg-slate-50"
            onClick={() =>
              onExport(
                "srt",
                toSrt(transcript),
                "application/x-subrip",
              )
            }
          >
            <FileType className="h-4 w-4 text-slate-500" />
            {t("exportSrt")}
          </button>
          <button
            type="button"
            className="flex w-full items-center gap-3 px-3 py-2 text-sm hover:bg-slate-50"
            onClick={() => onExport("vtt", toVtt(transcript), "text/vtt")}
          >
            <FileType className="h-4 w-4 text-slate-500" />
            {t("exportVtt")}
          </button>
          <button
            type="button"
            className="flex w-full items-center gap-3 px-3 py-2 text-sm hover:bg-slate-50"
            onClick={() =>
              onExport("json", toJson(transcript), "application/json")
            }
          >
            <FileText className="h-4 w-4 text-slate-500" />
            {t("exportJson")}
          </button>
        </div>
      )}
    </div>
  );
}
