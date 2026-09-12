import type { Metadata } from "next";
import { Bug, Inbox, Mail, ShieldCheck } from "lucide-react";
import { setRequestLocale } from "next-intl/server";

import { InfoPageBody } from "@/components/pages/InfoPageBody";
import { defaultLocale } from "@/i18n/locale";
import { CONTACT_COPY } from "@/lib/company-pages-content";
import { urlFor } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: CONTACT_COPY.title },
  description: CONTACT_COPY.description,
  alternates: { canonical: urlFor(defaultLocale, "/contact") },
  openGraph: {
    title: CONTACT_COPY.title,
    description: CONTACT_COPY.description,
    type: "website",
    url: urlFor(defaultLocale, "/contact"),
  },
  twitter: { card: "summary", title: CONTACT_COPY.title, description: CONTACT_COPY.description },
};

export default function ContactPage() {
  setRequestLocale(defaultLocale);
  return (
    <InfoPageBody
      copy={CONTACT_COPY}
      locale={defaultLocale}
      path="/contact"
      icons={[Mail, Bug, Inbox, ShieldCheck]}
    />
  );
}
