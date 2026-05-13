export const dynamic = "force-static";

import type { MetadataRoute } from "next";

import { defaultLocale, locales } from "@/i18n/locale";
import { urlFor } from "@/lib/seo";

/**
 * Static sitemap, generated at build time. Update by editing the `pages`
 * array below — locales are picked up automatically.
 */
const pages = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1.0 },
  { path: "/about", changeFrequency: "monthly" as const, priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
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

  return entries;
}
