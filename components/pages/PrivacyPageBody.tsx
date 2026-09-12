import { Baby, Database, HardDriveDownload, Mail, ShieldCheck } from "lucide-react";

import { InfoPageBody } from "@/components/pages/InfoPageBody";
import { getPrivacyCopy } from "@/lib/privacy-content";

const icons = [ShieldCheck, HardDriveDownload, Database, ShieldCheck, ShieldCheck, Baby, Mail];

export function PrivacyPageBody({ locale }: { locale: string }) {
  return (
    <InfoPageBody
      copy={getPrivacyCopy(locale)}
      locale={locale}
      path="/privacy"
      icons={icons}
    />
  );
}
