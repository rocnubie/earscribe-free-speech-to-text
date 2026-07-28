import type { Metadata } from "next";

import { alternatesForLocales, urlFor } from "@/lib/seo";
import { getSiteUrl } from "@/lib/site";
import { getToolPage } from "@/lib/tool-pages";
import {
  TOOL_LOCALES,
  type ToolLocale,
  type ToolSlug,
} from "@/lib/site-routes";

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
