import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { HomePageBody } from "@/components/pages/HomePageBody";
import { defaultLocale, locales } from "@/i18n/locale";

export function generateStaticParams() {
  return locales
    .filter((locale) => locale !== defaultLocale)
    .map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale === defaultLocale) notFound();
  setRequestLocale(locale);
  return <HomePageBody locale={locale} />;
}
