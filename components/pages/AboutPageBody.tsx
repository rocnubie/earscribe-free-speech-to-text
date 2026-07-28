import { getTranslations } from "next-intl/server";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Link } from "@/i18n/routing";
import { getAboutGuide } from "@/lib/about-page-seo";
import { urlFor } from "@/lib/seo";
import { getSiteUrl } from "@/lib/site";

export async function AboutPageBody({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "about" });
  const seo = await getTranslations({ locale, namespace: "seo" });
  const features = seo.raw("features.items") as { title: string; body: string }[];
  const formats = seo.raw("formatsLanguages.formats") as string[];
  const languages = seo.raw("formatsLanguages.languages") as string[];
  const comparisonRows = seo.raw("comparison.rows") as { label: string; earscribe: string | boolean; cloudApi: string | boolean; saas: string | boolean }[];
  const guide = getAboutGuide(locale);
  const renderComparisonValue = (value: string | boolean) => {
    if (value === true) return seo("comparison.yes");
    if (value === false) return seo("comparison.no");
    return value;
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: t("title"),
    description: t("intro"),
    url: urlFor(locale, "/about"),
    primaryImageOfPage: `${getSiteUrl()}/screenshots/01-hero.webp`,
    mainEntity: {
      "@type": "WebApplication",
      name: "EarScribe",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web",
    },
    keywords: guide ? [guide.primaryKeyword, ...guide.supportingKeywords] : undefined,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <section className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
              EarScribe
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              {t("title")}
            </h1>
            <div className="mt-6 space-y-4 text-slate-700">
              <p className="text-lg leading-relaxed">{t("intro")}</p>
              <p className="leading-relaxed">{t("noServer")}</p>
              <p className="leading-relaxed">{t("credits")}</p>
            </div>
            <Link
              href="/#transcribe"
              className="mt-8 inline-flex items-center rounded-lg bg-sky-600 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-700"
            >
              {seo("finalCta.tryNow")}
            </Link>
          </div>
          <figure className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/screenshots/01-hero.webp"
              alt={seo("showcase.title")}
              width={1280}
              height={800}
              className="h-auto w-full"
            />
            <figcaption className="border-t border-slate-200 px-4 py-3 text-xs leading-relaxed text-slate-500">
              {seo("showcase.subtitle")}
            </figcaption>
          </figure>
        </section>

        <section className="mt-24" aria-labelledby="about-features-heading">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
              {seo("features.kicker")}
            </p>
            <h2 id="about-features-heading" className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {seo("features.title")}
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article key={feature.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{feature.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-24 grid gap-6 lg:grid-cols-2" aria-labelledby="about-formats-heading">
          <article className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 id="about-formats-heading" className="text-2xl font-semibold text-slate-900">
              {seo("formatsLanguages.audioFormatsTitle")}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {seo("formatsLanguages.audioFormatsDesc")}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {formats.map((format) => (
                <span key={format} className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-xs font-medium text-slate-700">
                  {format}
                </span>
              ))}
            </div>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">
              {seo("formatsLanguages.languagesTitle")}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {seo("formatsLanguages.languagesDesc")}
            </p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {languages.map((language) => (
                <span key={language} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                  {language}
                </span>
              ))}
            </div>
          </article>
        </section>

        {guide && (
          <>
            <section
              className="mt-24 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]"
              aria-labelledby="about-guide-heading"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                  {guide.primaryKeyword}
                </p>
                <h2
                  id="about-guide-heading"
                  className="mt-4 text-3xl font-semibold tracking-tight text-slate-900"
                >
                  {guide.sections[0].title}
                </h2>
                <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-700">
                  {guide.sections[0].paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {guide.sections[0].bullets && (
                  <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate-700">
                    {guide.sections[0].bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-600" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <figure className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/screenshots/03-how-it-works.webp"
                  alt={guide.imageAlt}
                  width={1280}
                  height={800}
                  loading="lazy"
                  className="h-auto w-full"
                />
                <figcaption className="border-t border-slate-200 px-4 py-3 text-xs leading-relaxed text-slate-500">
                  {guide.imageAlt}
                </figcaption>
              </figure>
            </section>

            <section
              className="mt-24 grid gap-8 md:grid-cols-2"
              aria-label={guide.primaryKeyword}
            >
              {guide.sections.slice(1).map((section, index) => (
                <article
                  key={section.title}
                  className="border-t-2 border-sky-100 pt-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                    0{index + 2}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              ))}
            </section>

            <section
              className="mt-24 grid gap-8 border-y border-slate-200 py-12 lg:grid-cols-[0.8fr_1.2fr]"
              aria-labelledby="about-review-heading"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                  {guide.primaryKeyword}
                </p>
                <h2
                  id="about-review-heading"
                  className="mt-4 text-2xl font-semibold tracking-tight text-slate-900"
                >
                  {guide.reviewTitle}
                </h2>
              </div>
              <ol className="grid gap-3 sm:grid-cols-2">
                {guide.reviewSteps.map((step, index) => (
                  <li
                    key={step}
                    className="flex gap-3 text-sm leading-relaxed text-slate-700"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-slate-900 text-xs font-semibold text-white">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </section>
          </>
        )}

        <section className="mt-24 border-y border-slate-200 py-12" aria-labelledby="about-boundary-heading">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
              {seo("comparison.kicker")}
            </p>
            <h2 id="about-boundary-heading" className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">
              {seo("comparison.title")}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              {seo("comparison.subtitle")}
            </p>
          </div>
          <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="overflow-x-auto">
              <table className="min-w-[640px] w-full border-collapse text-left text-sm">
                <thead className="border-b border-slate-200 bg-slate-50">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-slate-700">{seo("comparison.headers.capability")}</th>
                    <th className="px-4 py-3 font-semibold text-slate-900">EarScribe</th>
                    <th className="px-4 py-3 font-semibold text-slate-700">{seo("comparison.headers.cloudApi")}</th>
                    <th className="px-4 py-3 font-semibold text-slate-700">{seo("comparison.headers.saas")}</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.slice(0, 7).map((row) => (
                    <tr key={row.label} className="border-b border-slate-100 last:border-0">
                      <td className="px-4 py-3 text-slate-700">{row.label}</td>
                      <td className="bg-sky-50/60 px-4 py-3 font-medium text-slate-900">{renderComparisonValue(row.earscribe)}</td>
                      <td className="px-4 py-3 text-slate-600">{renderComparisonValue(row.cloudApi)}</td>
                      <td className="px-4 py-3 text-slate-600">{renderComparisonValue(row.saas)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
