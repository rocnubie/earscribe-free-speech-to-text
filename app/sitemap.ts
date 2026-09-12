export const dynamic = "force-static";

import type { MetadataRoute } from "next";

import { defaultLocale, locales } from "@/i18n/locale";
import { urlFor } from "@/lib/seo";
import {
  PRIVACY_LOCALES,
  TOOL_LOCALES,
  TOOL_SLUGS,
} from "@/lib/site-routes";

/**
 * Static sitemap, generated at build time. Update by editing the `pages`
 * array below — locales are picked up automatically.
 */
const pages = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1.0 },
  { path: "/about", changeFrequency: "monthly" as const, priority: 0.6 },
];

/** English-only pages; other locales link to them with hreflang="en". */
const englishOnlyPages = ["/contact", "/terms"];

function languagesFor(
  pageLocales: readonly string[],
  path: string,
): Record<string, string> {
  const languages = Object.fromEntries(
    pageLocales.map((locale) => [locale, urlFor(locale, path)]),
  ) as Record<string, string>;
  languages["x-default"] = urlFor(defaultLocale, path);
  return languages;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-28");
  const companyPagesModified = new Date("2026-09-11");
  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    const languages = locales.reduce(
      (acc, locale) => {
        acc[locale] = urlFor(locale, page.path);
        return acc;
      },
      {} as Record<string, string>,
    );
    languages["x-default"] = urlFor(defaultLocale, page.path);

    for (const locale of locales) {
      entries.push({
        url: urlFor(locale, page.path),
        lastModified,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: { languages },
      });
    }
  }

  for (const slug of TOOL_SLUGS) {
    const path = `/${slug}`;
    const languages = languagesFor(TOOL_LOCALES, path);

    for (const locale of TOOL_LOCALES) {
      entries.push({
        url: urlFor(locale, path),
        lastModified,
        changeFrequency: "monthly",
        priority: slug === "audio-to-text" ? 0.9 : 0.8,
        alternates: { languages },
      });
    }
  }

  const privacyLanguages = languagesFor(PRIVACY_LOCALES, "/privacy");
  for (const locale of PRIVACY_LOCALES) {
    entries.push({
      url: urlFor(locale, "/privacy"),
      lastModified: companyPagesModified,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: { languages: privacyLanguages },
    });
  }

  for (const path of englishOnlyPages) {
    entries.push({
      url: urlFor(defaultLocale, path),
      lastModified: companyPagesModified,
      changeFrequency: "yearly",
      priority: 0.3,
    });
  }

  return entries;
}
