import {
  ArrowRight,
  CheckCircle2,
  FileAudio,
  Search,
  ShieldCheck,
  Subtitles,
} from "lucide-react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Transcriber } from "@/components/Transcriber";
import { Link } from "@/i18n/routing";
import {
  getToolPage,
  TOOL_PAGES,
  TOOL_SLUGS,
  type ToolLocale,
  type ToolSlug,
} from "@/lib/tool-pages";
import { urlFor } from "@/lib/seo";

export function ToolPageBody({
  locale,
  slug,
}: {
  locale: ToolLocale;
  slug: ToolSlug;
}) {
  const page = getToolPage(locale, slug);
  const related = TOOL_SLUGS.filter((candidate) => candidate !== slug);
  const pageUrl = urlFor(locale, `/${slug}`);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: page.text.title,
    description: page.text.description,
    url: pageUrl,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.text.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main>
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-10 sm:pt-16">
          <section className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
              {page.text.eyebrow}
            </p>
            <h1 className="mt-4 text-balance text-3xl font-bold text-slate-950 sm:text-5xl">
              {page.text.title}
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-balance text-base leading-relaxed text-slate-600 sm:text-lg">
              {page.text.intro}
            </p>
            <ul className="mx-auto mt-6 flex max-w-4xl flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-slate-700">
              {page.text.benefits.map((benefit) => (
                <li key={benefit} className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  {benefit}
                </li>
              ))}
            </ul>
          </section>

          <section id="transcribe" aria-label={page.ui.toolLabel} className="mt-10 scroll-mt-4 border-y border-slate-200 bg-white px-0 py-8 sm:px-8">
            <Transcriber embedded initialResultTab={page.resultTab} />
          </section>

          <section className="mt-24 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                {page.ui.previewTitle}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                {page.text.workflowTitle}
              </h2>
              <div className="mt-7 space-y-6">
                {page.text.workflow.map((step, index) => (
                  <article key={step.title} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-xs font-semibold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-slate-900">{step.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{step.body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <figure className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/screenshots/02-transcript-showcase.webp"
                alt={page.text.screenshotAlt}
                width={1280}
                height={800}
                loading="lazy"
                className="h-auto w-full"
              />
            </figure>
          </section>

          <section className="mt-24 border-y border-slate-200 py-14">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <FileAudio className="h-7 w-7 text-sky-700" />
                <h2 className="mt-4 text-2xl font-semibold text-slate-950">{page.text.tipsTitle}</h2>
              </div>
              <ul className="grid gap-4 sm:grid-cols-3">
                {page.text.tips.map((tip, index) => {
                  const Icon = index === 0 ? Search : index === 1 ? Subtitles : ShieldCheck;
                  return (
                    <li key={tip} className="border-l-2 border-sky-200 pl-4">
                      <Icon className="h-4 w-4 text-sky-700" />
                      <p className="mt-2 text-sm leading-relaxed text-slate-700">{tip}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>

          <section className="mt-24">
            <h2 className="text-center text-3xl font-semibold text-slate-950">{page.ui.faqTitle}</h2>
            <div className="mx-auto mt-8 max-w-3xl divide-y divide-slate-200 border-y border-slate-200">
              {page.text.faq.map((item) => (
                <details key={item.q} className="group py-5">
                  <summary className="cursor-pointer list-none pr-8 font-medium text-slate-900 marker:hidden">
                    {item.q}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="mt-24">
            <h2 className="text-2xl font-semibold text-slate-950">{page.ui.relatedTitle}</h2>
            <nav className="mt-5 grid gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-4">
              {related.map((relatedSlug) => (
                <Link
                  key={relatedSlug}
                  href={`/${relatedSlug}`}
                  className="group flex items-center justify-between gap-3 bg-white px-5 py-4 text-sm font-medium text-slate-800 hover:bg-sky-50"
                >
                  {TOOL_PAGES[relatedSlug].copy[locale].title}
                  <ArrowRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-sky-700" />
                </Link>
              ))}
            </nav>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
