import { setRequestLocale } from "next-intl/server";

import { ToolPageBody } from "@/components/pages/ToolPageBody";
import { defaultLocale } from "@/i18n/locale";
import { buildToolPageMetadata } from "@/lib/tool-page-metadata";

export const generateMetadata = () => buildToolPageMetadata("en", "m4a-to-text");

export default function M4aToTextPage() {
  setRequestLocale(defaultLocale);
  return <ToolPageBody locale="en" slug="m4a-to-text" />;
}
