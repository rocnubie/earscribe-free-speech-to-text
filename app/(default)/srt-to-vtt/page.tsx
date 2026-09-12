import { setRequestLocale } from "next-intl/server";

import { ToolPageBody } from "@/components/pages/ToolPageBody";
import { defaultLocale } from "@/i18n/locale";
import { buildToolPageMetadata } from "@/lib/tool-page-metadata";

export const generateMetadata = () => buildToolPageMetadata("en", "srt-to-vtt");

export default function SrtToVttPage() {
  setRequestLocale(defaultLocale);
  return <ToolPageBody locale="en" slug="srt-to-vtt" />;
}
