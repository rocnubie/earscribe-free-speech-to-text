import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { ToolPageBody } from "@/components/pages/ToolPageBody";
import { buildToolPageMetadata } from "@/lib/tool-page-metadata";
import {
  isToolSlug,
} from "@/lib/tool-pages";
import {
  TOOL_LOCALES,
  TOOL_SLUGS,
  type ToolLocale,
} from "@/lib/site-routes";

export const dynamicParams = false;

export function generateStaticParams() {
  return TOOL_LOCALES.filter((locale) => locale !== "en").flatMap((locale) =>
    TOOL_SLUGS.map((tool) => ({ locale, tool })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; tool: string }>;
}): Promise<Metadata> {
  const { locale, tool } = await params;
  if (locale === "en" || !TOOL_LOCALES.includes(locale as (typeof TOOL_LOCALES)[number]) || !isToolSlug(tool)) {
    return {};
  }
  return buildToolPageMetadata(locale as ToolLocale, tool);
}

export default async function LocalizedToolPage({
  params,
}: {
  params: Promise<{ locale: string; tool: string }>;
}) {
  const { locale, tool } = await params;
  if (locale === "en" || !TOOL_LOCALES.includes(locale as (typeof TOOL_LOCALES)[number]) || !isToolSlug(tool)) {
    notFound();
  }
  setRequestLocale(locale);
  return <ToolPageBody locale={locale as ToolLocale} slug={tool} />;
}
