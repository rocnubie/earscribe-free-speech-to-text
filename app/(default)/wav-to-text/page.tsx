import { setRequestLocale } from "next-intl/server";

import { ToolPageBody } from "@/components/pages/ToolPageBody";
import { defaultLocale } from "@/i18n/locale";
import { buildToolPageMetadata } from "@/lib/tool-page-metadata";

export const generateMetadata = () => buildToolPageMetadata("en", "wav-to-text");

export default function WavToTextPage() {
  setRequestLocale(defaultLocale);
  return <ToolPageBody locale="en" slug="wav-to-text" />;
}
