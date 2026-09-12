import type { Metadata } from "next";
import {
  AlertTriangle,
  Code,
  FileAudio,
  FileText,
  History,
  Mail,
  Megaphone,
  Mic,
  Scale,
} from "lucide-react";
import { setRequestLocale } from "next-intl/server";

import { InfoPageBody } from "@/components/pages/InfoPageBody";
import { defaultLocale } from "@/i18n/locale";
import { TERMS_COPY } from "@/lib/company-pages-content";
import { urlFor } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: TERMS_COPY.title },
  description: TERMS_COPY.description,
  alternates: { canonical: urlFor(defaultLocale, "/terms") },
  openGraph: {
    title: TERMS_COPY.title,
    description: TERMS_COPY.description,
    type: "website",
    url: urlFor(defaultLocale, "/terms"),
  },
  twitter: { card: "summary", title: TERMS_COPY.title, description: TERMS_COPY.description },
};

export default function TermsPage() {
  setRequestLocale(defaultLocale);
  return (
    <InfoPageBody
      copy={TERMS_COPY}
      locale={defaultLocale}
      path="/terms"
      icons={[FileText, Mic, AlertTriangle, FileAudio, Code, Megaphone, Scale, History, Mail]}
    />
  );
}
