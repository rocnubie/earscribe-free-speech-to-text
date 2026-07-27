import { setRequestLocale } from "next-intl/server";

import { HomePageBody } from "@/components/pages/HomePageBody";
import { defaultLocale } from "@/i18n/locale";

export default async function HomePage() {
  setRequestLocale(defaultLocale);
  return <HomePageBody locale={defaultLocale} />;
}
