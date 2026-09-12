import { ShieldCheck, type LucideIcon } from "lucide-react";
import NextLink from "next/link";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import type { InfoPageCopy } from "@/lib/info-page-content";
import { urlFor } from "@/lib/seo";

const linkClassName =
  "font-medium text-sky-700 underline decoration-sky-300 underline-offset-2 hover:text-sky-900";

function SectionLink({ href, label }: { href: string; label: string }) {
  if (href.startsWith("/")) {
    return (
      <NextLink href={href} className={linkClassName}>
        {label}
      </NextLink>
    );
  }
  if (href.startsWith("mailto:")) {
    return (
      <a href={href} className={linkClassName}>
        {label}
      </a>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={linkClassName}
    >
      {label}
    </a>
  );
}

export function InfoPageBody({
  copy,
  locale,
  path,
  icons = [],
}: {
  copy: InfoPageCopy;
  locale: string;
  path: string;
  icons?: LucideIcon[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: copy.title,
    description: copy.description,
    url: urlFor(locale, path),
    isPartOf: { "@type": "WebSite", name: "EarScribe", url: urlFor(locale) },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
        <p className="text-sm font-medium text-sky-700">{copy.updated}</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          {copy.title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          {copy.intro}
        </p>
        <div className="mt-14 divide-y divide-slate-200 border-y border-slate-200">
          {copy.sections.map((section, index) => {
            const Icon = icons[index] ?? ShieldCheck;
            return (
              <section key={section.title} className="grid gap-5 py-9 sm:grid-cols-[3rem_1fr]">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-sky-700">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">{section.title}</h2>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-700">
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                  {section.bullets && (
                    <ul className="mt-4 space-y-2 text-sm text-slate-700">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-600" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.links && (
                    <nav className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm" aria-label={section.title}>
                      {section.links.map((link) => (
                        <SectionLink key={link.href} href={link.href} label={link.label} />
                      ))}
                    </nav>
                  )}
                </div>
              </section>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
