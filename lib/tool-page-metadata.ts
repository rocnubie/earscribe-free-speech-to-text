import type { Metadata } from "next";

import { alternatesForLocales, urlFor } from "@/lib/seo";
import { getSiteUrl } from "@/lib/site";
import { getToolPage, TOOL_LOCALES, type ToolLocale, type ToolSlug } from "@/lib/tool-pages";

export function buildToolPageMetadata(
  locale: ToolLocale,
  slug: ToolSlug,
): Metadata {
  const page = getToolPage(locale, slug);
  return {
    metadataBase: new URL(getSiteUrl()),
    title: { absolute: page.text.title },
    description: page.text.description,
    alternates: alternatesForLocales(locale, `/${slug}`, TOOL_LOCALES),
    openGraph: {
      title: page.text.title,
      description: page.text.description,
      type: "website",
      url: urlFor(locale, `/${slug}`),
    },
    twitter: {
      card: "summary",
      title: page.text.title,
      description: page.text.description,
    },
  };
}
