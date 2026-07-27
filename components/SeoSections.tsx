import {
  AudioLines,
  BookOpenText,
  Briefcase,
  Check,
  ChevronRight,
  Copy,
  Cpu,
  Download,
  FileAudio,
  FileText,
  GraduationCap,
  Headphones,
  Languages,
  Mic,
  Newspaper,
  Play,
  RotateCcw,
  Sparkles,
  Subtitles,
  Upload,
  X,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { Link } from "@/i18n/routing";

/* ------------------------------------------------------------------ */
/*  1. UI Showcase — real done-state UI with static demo data        */
/* ------------------------------------------------------------------ */

export function UIShowcase() {
  const t = useTranslations("seo.showcase");
  const tr = useTranslations("result");
  const demoChunks = t.raw("transcript") as {
    ts: string;
    speaker: string;
    text: string;
  }[];

  return (
    <section
      aria-labelledby="ui-showcase-heading"
      className="mx-auto max-w-6xl"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">
          {t("kicker")}
        </p>
        <h2
          id="ui-showcase-heading"
          className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
        >
          {t("title")}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
          {t("subtitle")}
        </p>
      </div>

      {/* Done-state UI — matches Transcriber phase="done" exactly */}
      <div className="mt-12 space-y-6">
        {/* Phase strip — matches Transcriber done-phase strip */}
        <section className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm">
          <div className="min-w-0 text-sm">
            <span className="block truncate font-medium text-slate-900">
              interview-acme-q3.mp3
            </span>
            <span className="text-xs text-slate-500">24.3 MB · Whisper tiny</span>
          </div>
          <button
            type="button"
            aria-hidden="true"
            tabIndex={-1}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700"
          >
            <RotateCcw className="h-4 w-4" />
              {tr("newFile")}
          </button>
        </section>

        {/* Waveform — matches Waveform component layout */}
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <button
              type="button"
              aria-hidden="true"
              tabIndex={-1}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white"
            >
              <Play className="h-5 w-5 translate-x-0.5" />
            </button>
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              {/* Static bar waveform in place of canvas */}
              <div className="grid h-16 min-w-0 grid-cols-[repeat(60,minmax(1px,1fr))] items-center gap-px overflow-hidden rounded-lg bg-slate-50 px-2">
                {Array.from({ length: 60 }).map((_, i) => {
                  const h = Math.round(
                    4 + Math.abs(Math.sin(i * 0.37 + 0.5) * 52) + (i % 5) * 2,
                  );
                  const played = i < 50;
                  return (
                    <span
                      key={i}
                      style={{ height: `${Math.min(h, 56)}px` }}
                      className={
                        "w-full rounded-sm " +
                        (played ? "bg-sky-600" : "bg-slate-300")
                      }
                    />
                  );
                })}
              </div>
              <div className="flex items-center justify-between font-mono text-xs tabular-nums text-slate-500">
                <span>1:14</span>
                <span>12:48</span>
              </div>
            </div>
          </div>
        </div>

        {/* TranscriptViewer — matches TranscriptViewer component layout */}
        <section className="space-y-4">
          <header className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-xl font-semibold text-slate-900">{tr("title")}</h3>
              <p className="mt-1 text-sm text-slate-600">
                {t("badges.autoLanguage")} · {t("badges.wordCount")}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-hidden="true"
                tabIndex={-1}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700"
              >
                <Copy className="h-4 w-4" />
                {tr("copy")}
              </button>
              <button
                type="button"
                aria-hidden="true"
                tabIndex={-1}
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-medium text-white"
              >
                <Download className="h-4 w-4" />
                {tr("export")}
              </button>
            </div>
          </header>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <ol className="divide-y divide-slate-100">
              {demoChunks.map((chunk, i) => (
                <li
                  key={i}
                  className={[
                    "flex gap-4 px-4 py-3",
                    i === 1 ? "bg-sky-50" : "",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "shrink-0 font-mono text-xs tabular-nums",
                      i === 1 ? "text-sky-700" : "text-sky-600",
                    ].join(" ")}
                  >
                    {chunk.ts}
                  </span>
                  <p
                    className={[
                      "text-sm leading-relaxed",
                      i === 1
                        ? "font-medium text-slate-900"
                        : "text-slate-800",
                    ].join(" ")}
                  >
                    {chunk.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  2. How it works — three steps                                     */
/* ------------------------------------------------------------------ */

export function HowItWorks() {
  const t = useTranslations("seo.howItWorks");
  const stepsContent = t.raw("steps") as { title: string; body: string }[];
  const stepsConfig = [
    { icon: Upload, n: "01" },
    { icon: Cpu, n: "02" },
    { icon: FileText, n: "03" },
  ];

  return (
    <section
      aria-labelledby="how-heading"
      className="mx-auto max-w-6xl"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">
          {t("kicker")}
        </p>
        <h2
          id="how-heading"
          className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
        >
          {t("title")}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
          {t("subtitle")}
        </p>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {stepsConfig.map((cfg, i) => {
          const content = stepsContent[i];
          if (!content) return null;
          const Icon = cfg.icon;
          return (
            <div
              key={cfg.n}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-mono text-xs font-semibold tracking-widest text-slate-400">
                  {cfg.n}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {content.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {content.body}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  3. Use cases — 6 cards with photos                                */
/* ------------------------------------------------------------------ */

const UNSPLASH = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export function UseCases() {
  const t = useTranslations("seo.useCases");
  const items = t.raw("items") as {
    title: string;
    body: string;
    tag: string;
  }[];

  const visuals = [
    { img: UNSPLASH("photo-1590602847861-f357a9332bbc"), icon: Mic },
    { img: UNSPLASH("photo-1455390582262-044cdead277a"), icon: Newspaper },
    { img: UNSPLASH("photo-1434030216411-0b793f4b4173"), icon: GraduationCap },
    { img: UNSPLASH("photo-1521737711867-e3b97375f902"), icon: Briefcase },
    { img: UNSPLASH("photo-1505740420928-5e560c06d30e"), icon: Subtitles },
    { img: UNSPLASH("photo-1512820790803-83ca734da794"), icon: BookOpenText },
  ];

  return (
    <section
      aria-labelledby="usecases-heading"
      className="mx-auto max-w-6xl"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">
          {t("kicker")}
        </p>
        <h2
          id="usecases-heading"
          className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
        >
          {t("title")}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
          {t("subtitle")}
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((c, i) => {
          const v = visuals[i];
          if (!v) return null;
          const Icon = v.icon;
          return (
            <article
              key={c.title}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={v.img}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-slate-700 ring-1 ring-slate-200 backdrop-blur">
                  <Icon className="h-3 w-3" />
                  {c.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-slate-900">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {c.body}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  4. Features — six icon cards                                      */
/* ------------------------------------------------------------------ */

export function Features() {
  const t = useTranslations("seo.features");
  const items = t.raw("items") as { title: string; body: string }[];
  const icons = [FileAudio, Cpu, Languages, FileText, Subtitles, Sparkles];

  return (
    <section
      aria-labelledby="features-heading"
      className="mx-auto max-w-6xl"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">
          {t("kicker")}
        </p>
        <h2
          id="features-heading"
          className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
        >
          {t("title")}
        </h2>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((f, i) => {
          const Icon = icons[i] ?? Sparkles;
          return (
            <div
              key={f.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-700 ring-1 ring-sky-100">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold text-slate-900">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {f.body}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  5. Sample output — code blocks for SRT / VTT / TXT side-by-side   */
/* ------------------------------------------------------------------ */

export function SampleOutput() {
  const t = useTranslations("seo.sampleOutput");
  const files = t.raw("files") as {
    name: string;
    lang: string;
    code: string;
  }[];

  return (
    <section
      aria-labelledby="output-heading"
      className="mx-auto max-w-6xl"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">
          {t("kicker")}
        </p>
        <h2
          id="output-heading"
          className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
        >
          {t("title")}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
          {t("subtitle")}
        </p>
      </div>

      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {files.map((f) => (
          <CodeCard key={f.name} name={f.name} lang={f.lang} code={f.code} />
        ))}
      </div>
    </section>
  );
}

function CodeCard({
  name,
  lang,
  code,
}: {
  name: string;
  lang: string;
  code: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-2.5">
        <div className="flex items-center gap-2 text-xs">
          <FileAudio className="h-3.5 w-3.5 text-slate-500" />
          <span className="font-mono font-medium text-slate-700">{name}</span>
        </div>
        <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-500 ring-1 ring-slate-200">
          {lang}
        </span>
      </div>
      <pre className="overflow-x-auto bg-slate-900 p-4 font-mono text-[11px] leading-relaxed text-slate-100">
        {code}
      </pre>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  6. Workflow paths — progressive tools for different outcomes      */
/* ------------------------------------------------------------------ */

export function Testimonials() {
  const t = useTranslations("seo.testimonials");
  const quotes = t.raw("quotes") as {
    name: string;
    role: string;
    quote: string;
  }[];

  const icons = [Subtitles, Mic, GraduationCap];

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="mx-auto max-w-6xl"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">
          {t("kicker")}
        </p>
        <h2
          id="testimonials-heading"
          className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
        >
          {t("title")}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
          {t("subtitle")}
        </p>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {quotes.map((q, i) => {
          const Icon = icons[i] ?? FileText;
          return (
            <article
              key={q.name}
              className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-sky-700">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {q.name}
                  </p>
                  <p className="text-xs text-slate-500">{q.role}</p>
                </div>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
                {q.quote}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  7. Comparison — vs cloud transcription services                   */
/* ------------------------------------------------------------------ */

export function Comparison() {
  const t = useTranslations("seo.comparison");
  const rows = t.raw("rows") as {
    label: string;
    earscribe: string | boolean;
    cloudApi: string | boolean;
    saas: string | boolean;
  }[];
  const yesLabel = t("yes");
  const noLabel = t("no");

  const renderCell = (v: string | boolean) => {
    if (v === true)
      return (
        <span className="inline-flex items-center gap-1 text-sm font-medium text-emerald-700">
          <Check className="h-4 w-4" />
          {yesLabel}
        </span>
      );
    if (v === false)
      return (
        <span className="inline-flex items-center gap-1 text-sm font-medium text-rose-600">
          <X className="h-4 w-4" />
          {noLabel}
        </span>
      );
    return <span className="text-sm font-medium text-slate-700">{v}</span>;
  };

  return (
    <section
      aria-labelledby="compare-heading"
      className="mx-auto max-w-6xl"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">
          {t("kicker")}
        </p>
        <h2
          id="compare-heading"
          className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
        >
          {t("title")}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
          {t("subtitle")}
        </p>
      </div>

      <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-[640px] w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {t("headers.capability")}
                </th>
                <th className="px-5 py-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-900 text-white">
                      <Mic className="h-3 w-3" />
                    </span>
                    {t("headers.earscribe")}
                    <span className="ml-1 rounded-full bg-sky-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-sky-700">
                      {t("headers.you")}
                    </span>
                  </div>
                </th>
                <th className="px-5 py-4 text-sm font-semibold text-slate-700">
                  {t("headers.cloudApi")}
                </th>
                <th className="px-5 py-4 text-sm font-semibold text-slate-700">
                  {t("headers.saas")}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr
                  key={r.label}
                  className={
                    "border-b border-slate-100 " +
                    (i % 2 === 1 ? "bg-slate-50/40" : "")
                  }
                >
                  <td className="px-5 py-4 text-sm text-slate-700">
                    {r.label}
                  </td>
                  <td className="px-5 py-4 bg-sky-50/40">
                    {renderCell(r.earscribe)}
                  </td>
                  <td className="px-5 py-4">{renderCell(r.cloudApi)}</td>
                  <td className="px-5 py-4">{renderCell(r.saas)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  8. Stats grid                                                     */
/* ------------------------------------------------------------------ */

export function Stats() {
  const t = useTranslations("seo.stats");
  const stats = t.raw("items") as { v: string; unit: string; body: string }[];
  return (
    <section
      aria-labelledby="stats-heading"
      className="mx-auto max-w-6xl"
    >
      <h2 id="stats-heading" className="sr-only">
        {t("srTitle")}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.unit}
            className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
          >
            <p className="text-5xl font-semibold tracking-tight text-slate-900">
              {s.v}
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-sky-700">
              {s.unit}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  9. Formats & languages                                            */
/* ------------------------------------------------------------------ */

export function FormatsAndLanguages() {
  const t = useTranslations("seo.formatsLanguages");
  const formats = t.raw("formats") as string[];
  const languages = t.raw("languages") as string[];
  const moreLabel = t("more");

  return (
    <section
      aria-labelledby="formats-heading"
      className="mx-auto max-w-6xl"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-700 ring-1 ring-sky-100">
            <AudioLines className="h-5 w-5" />
          </span>
          <h3
            id="formats-heading"
            className="mt-5 text-xl font-semibold text-slate-900"
          >
            {t("audioFormatsTitle")}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {t("audioFormatsDesc")}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {formats.map((f) => (
              <span
                key={f}
                className="inline-flex items-center rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-xs font-medium text-slate-700"
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
            <Languages className="h-5 w-5" />
          </span>
          <h3 className="mt-5 text-xl font-semibold text-slate-900">
            {t("languagesTitle")}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {t("languagesDesc")}
          </p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {languages.map((l) => (
              <span
                key={l}
                className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
              >
                {l}
              </span>
            ))}
            <span className="inline-flex items-center rounded-full bg-sky-100 px-2.5 py-1 text-xs font-medium text-sky-800">
              {moreLabel}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  10. Final CTA                                                     */
/* ------------------------------------------------------------------ */

export function FinalCTA() {
  const t = useTranslations("seo.finalCta");
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="mx-auto max-w-6xl"
    >
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 px-8 py-16 text-center text-white shadow-sm sm:px-16">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-sky-200">
          <Headphones className="h-3 w-3" />
          {t("tag")}
        </span>
        <h2
          id="final-cta-heading"
          className="mx-auto mt-5 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          {t("title")}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-300">
          {t("subtitle")}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#top"
            className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-400"
          >
            {t("tryNow")}
            <ChevronRight className="h-4 w-4" />
          </a>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
          >
            {t("howItWorks")}
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  11. What you can do — semantic prose for search-intent coverage   */
/* ------------------------------------------------------------------ */

export function WhatYouCanDo() {
  const t = useTranslations("seo.whatYouCanDo");
  const locale = useLocale();
  const jobs = t.raw("jobs") as { from: string; to: string; label: string }[];
  const hasToolPages = ["en", "zh-CN", "ja"].includes(locale);
  const jobLinks = [
    "/mp3-to-text",
    "/audio-to-text",
    "/audio-to-text",
    "/audio-to-srt",
    "/audio-to-srt",
    "/audio-to-text",
  ];

  return (
    <section
      aria-labelledby="jobs-heading"
      className="mx-auto max-w-6xl"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">
          {t("kicker")}
        </p>
        <h2
          id="jobs-heading"
          className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
        >
          {t("title")}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
          {t.rich("prose", {
            kw: (chunks) => (
              <strong className="font-semibold text-slate-900">{chunks}</strong>
            ),
          })}
        </p>
      </div>

      <ul className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {jobs.map((j, index) => (
          <li
            key={j.label}
            className="rounded-xl border border-slate-200 bg-white shadow-sm"
          >
            {hasToolPages ? (
              <Link
                href={jobLinks[index] ?? "/audio-to-text"}
                className="flex items-center gap-3 px-4 py-3 hover:bg-sky-50"
              >
                <JobLabel job={j} />
              </Link>
            ) : (
              <div className="flex items-center gap-3 px-4 py-3">
                <JobLabel job={j} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

function JobLabel({ job }: { job: { from: string; to: string; label: string } }) {
  return (
    <>
      <span className="inline-flex items-center rounded-md border border-slate-200 bg-slate-50 px-2 py-1 font-mono text-xs font-medium text-slate-700">
        {job.from}
      </span>
      <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
      <span className="inline-flex items-center rounded-md border border-sky-200 bg-sky-50 px-2 py-1 font-mono text-xs font-medium text-sky-800">
        {job.to}
      </span>
      <span className="ml-auto text-sm font-medium text-slate-700">{job.label}</span>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Combined export                                                   */
/* ------------------------------------------------------------------ */

export function SeoSections() {
  return (
    <div className="space-y-24 sm:space-y-32">
      <UIShowcase />
      <HowItWorks />
      <WhatYouCanDo />
      <Features />
      <UseCases />
      <SampleOutput />
      <Comparison />
      <Stats />
      <FormatsAndLanguages />
      <Testimonials />
      <FinalCTA />
    </div>
  );
}
