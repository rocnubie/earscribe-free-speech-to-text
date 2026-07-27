import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { AboutPageBody } from "@/components/pages/AboutPageBody";
import { defaultLocale, locales } from "@/i18n/locale";
import { buildAboutMetadata } from "@/lib/seo/root-metadata";

export function generateStaticParams() {
  return locales
    .filter((locale) => locale !== defaultLocale)
    .map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildAboutMetadata(locale);
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale === defaultLocale) notFound();
  setRequestLocale(locale);
  return <AboutPageBody locale={locale} />;
}
