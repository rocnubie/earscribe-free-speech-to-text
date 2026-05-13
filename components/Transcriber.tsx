"use client";

/**
 * UI-only preview of the transcription panel.
 *
 * The production app runs OpenAI Whisper entirely in the browser via
 * @huggingface/transformers (WebGPU + WASM). The inference worker, audio
 * decoding, subtitle generators, and model orchestration are NOT included
 * in this public UI release — try the live site instead:
 *
 *   https://earscribe.app
 */

import { ExternalLink, Mic, ShieldCheck, Sparkles, Upload } from "lucide-react";
import { useTranslations } from "next-intl";

import { SITE_DOMAIN } from "@/lib/site";

export function Transcriber() {
  const t = useTranslations();

  return (
    <section id="transcriber" aria-labelledby="hero-title" className="space-y-10">
      <div className="text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/5 px-3 py-1 text-xs font-medium text-slate-700">
          <Sparkles className="h-3.5 w-3.5" />
          {t("hero.tag")}
        </span>
        <h1
          id="hero-title"
          className="mt-4 text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl"
        >
          {t("hero.title")}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-slate-600 sm:text-lg">
          {t("hero.subtitle")}
        </p>
      </div>

      <div className="mx-auto max-w-3xl">
        <div
          className="flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-slate-300 bg-white px-6 py-14 text-center"
          aria-label={t("dropzone.idle")}
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white">
            <Upload className="h-5 w-5" />
          </span>
          <p className="text-base font-medium text-slate-900">
            {t("dropzone.idle")}
          </p>
          <p className="text-sm text-slate-500">{t("dropzone.hint")}</p>
        </div>

        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
          <p className="font-semibold">UI preview only</p>
          <p className="mt-1">
            This repository contains the marketing UI shell. The Whisper
            inference worker, audio pipeline and subtitle exporters are not
            included here — try the live app to actually transcribe a file:
          </p>
          <a
            href={`https://${SITE_DOMAIN}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 font-semibold text-amber-900 underline underline-offset-4"
          >
            {SITE_DOMAIN}
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      <ul className="mx-auto grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
        <TrustChip icon={<ShieldCheck className="h-4 w-4" />} label={t("trust.private")} />
        <TrustChip icon={<Mic className="h-4 w-4" />}        label={t("trust.free")} />
        <TrustChip icon={<ShieldCheck className="h-4 w-4" />} label={t("trust.openModels")} />
        <TrustChip icon={<Sparkles className="h-4 w-4" />}    label={t("trust.subtitles")} />
      </ul>
    </section>
  );
}

function TrustChip({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <li className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700">
      <span className="text-slate-500">{icon}</span>
      {label}
    </li>
  );
}
