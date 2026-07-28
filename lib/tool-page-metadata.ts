import type { Metadata } from "next";

import { alternatesForLocales, urlFor } from "@/lib/seo";
import { getSiteUrl } from "@/lib/site";
import { getToolPage } from "@/lib/tool-pages";
import { getToolGuide } from "@/lib/tool-page-seo";
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
  const guide = getToolGuide(locale, slug);
  return {
    metadataBase: new URL(getSiteUrl()),
    title: { absolute: page.text.title },
    description: page.text.description,
    keywords: [guide.primaryKeyword, ...guide.supportingKeywords],
    alternates: alternatesForLocales(locale, `/${slug}`, TOOL_LOCALES),
    openGraph: {
      title: page.text.title,
      description: page.text.description,
      type: "website",
      url: urlFor(locale, `/${slug}`),
      images: [
        {
          url: `${getSiteUrl()}/screenshots/02-transcript-showcase.webp`,
          width: 1280,
          height: 800,
          alt: guide.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: page.text.title,
      description: page.text.description,
    },
  };
}
