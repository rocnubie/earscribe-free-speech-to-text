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

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-27");
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

  const privacyLanguages = Object.fromEntries(
    PRIVACY_LOCALES.map((locale) => [locale, urlFor(locale, "/privacy")]),
  ) as Record<string, string>;
  privacyLanguages["x-default"] = urlFor(defaultLocale, "/privacy");
  for (const locale of PRIVACY_LOCALES) {
    entries.push({
      url: urlFor(locale, "/privacy"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
      alternates: { languages: privacyLanguages },
    });
  }

  for (const slug of TOOL_SLUGS) {
    const path = `/${slug}`;
    const languages = Object.fromEntries(
      TOOL_LOCALES.map((locale) => [locale, urlFor(locale, path)]),
    ) as Record<string, string>;
    languages["x-default"] = urlFor(defaultLocale, path);

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

  return entries;
}
