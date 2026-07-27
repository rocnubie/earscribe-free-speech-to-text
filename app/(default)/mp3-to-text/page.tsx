import { setRequestLocale } from "next-intl/server";

import { ToolPageBody } from "@/components/pages/ToolPageBody";
import { defaultLocale } from "@/i18n/locale";
import { buildToolPageMetadata } from "@/lib/tool-page-metadata";

export const generateMetadata = () => buildToolPageMetadata("en", "mp3-to-text");

export default function Mp3ToTextPage() {
  setRequestLocale(defaultLocale);
  return <ToolPageBody locale="en" slug="mp3-to-text" />;
}
