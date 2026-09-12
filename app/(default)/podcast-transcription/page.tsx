import { setRequestLocale } from "next-intl/server";

import { ToolPageBody } from "@/components/pages/ToolPageBody";
import { defaultLocale } from "@/i18n/locale";
import { buildToolPageMetadata } from "@/lib/tool-page-metadata";

export const generateMetadata = () => buildToolPageMetadata("en", "podcast-transcription");

export default function PodcastTranscriptionPage() {
  setRequestLocale(defaultLocale);
  return <ToolPageBody locale="en" slug="podcast-transcription" />;
}
