import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { AboutPageBody } from "@/components/pages/AboutPageBody";
import { defaultLocale } from "@/i18n/locale";
import { buildAboutMetadata } from "@/lib/seo/root-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return buildAboutMetadata(defaultLocale);
}

export default async function AboutPage() {
  setRequestLocale(defaultLocale);
  return <AboutPageBody locale={defaultLocale} />;
}
