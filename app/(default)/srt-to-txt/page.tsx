import { setRequestLocale } from "next-intl/server";

import { ToolPageBody } from "@/components/pages/ToolPageBody";
import { defaultLocale } from "@/i18n/locale";
import { buildToolPageMetadata } from "@/lib/tool-page-metadata";

export const generateMetadata = () => buildToolPageMetadata("en", "srt-to-txt");

export default function SrtToTxtPage() {
  setRequestLocale(defaultLocale);
  return <ToolPageBody locale="en" slug="srt-to-txt" />;
}
