import { setRequestLocale } from "next-intl/server";

import { ToolPageBody } from "@/components/pages/ToolPageBody";
import { defaultLocale } from "@/i18n/locale";
import { buildToolPageMetadata } from "@/lib/tool-page-metadata";

export const generateMetadata = () => buildToolPageMetadata("en", "lecture-transcription");

export default function LectureTranscriptionPage() {
  setRequestLocale(defaultLocale);
  return <ToolPageBody locale="en" slug="lecture-transcription" />;
}
