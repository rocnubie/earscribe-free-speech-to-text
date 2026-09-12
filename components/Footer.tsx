"use client";

import { Github, Mic } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { GITHUB_URL, SITE_NAME } from "@/lib/site";
import {
  getNavigationTarget,
  getProductNavigation,
} from "@/lib/site-navigation";

import { TrackedNavigationLink } from "./TrackedNavigationLink";

export function Footer() {
  const t = useTranslations("footer");
  const tNavigation = useTranslations("navigation");
  const locale = useLocale();
  const products = getProductNavigation(locale).slice(0, 3);
  const aboutTarget = getNavigationTarget("about", locale);
  const privacyTarget = getNavigationTarget("privacy", locale);
  const contactTarget = getNavigationTarget("contact", locale);
  const termsTarget = getNavigationTarget("terms", locale);
  const startTarget = getNavigationTarget("audioToText", locale);

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-10 text-sm text-slate-600 sm:grid-cols-[1.4fr_1fr_1fr] sm:py-12">
        <div className="flex items-start gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900 text-white">
            <Mic className="h-4 w-4" />
          </span>
          <div>
            <p className="font-semibold text-slate-900">{SITE_NAME}</p>
            <p className="text-xs">{t("tagline")}</p>
          </div>
        </div>

        <nav aria-label={tNavigation("productLinks")}>
          <p className="font-semibold text-slate-900">
            {tNavigation("productLinks")}
          </p>
          <div className="mt-3 flex flex-col items-start gap-2.5">
            {products.length > 0 ? (
              products.map((item) => (
                <TrackedNavigationLink
                  key={item.id}
                  navigationTarget={item.target}
                  surface="footer"
                  targetId={item.id}
                  className="hover:text-slate-950"
                >
                  {tNavigation(item.id)}
                </TrackedNavigationLink>
              ))
            ) : (
              <TrackedNavigationLink
                navigationTarget={startTarget}
                surface="footer"
                targetId="startFree"
                className="font-medium text-sky-700 hover:text-sky-600"
              >
                {tNavigation("startFree")}
              </TrackedNavigationLink>
            )}
          </div>
        </nav>

        <nav aria-label={tNavigation("companyLinks")}>
          <p className="font-semibold text-slate-900">
            {tNavigation("companyLinks")}
          </p>
          <div className="mt-3 flex flex-col items-start gap-2.5">
            <TrackedNavigationLink
              navigationTarget={aboutTarget}
              surface="footer"
              targetId="about"
              className="hover:text-slate-950"
            >
              {t("links.about")}
            </TrackedNavigationLink>
            <TrackedNavigationLink
              navigationTarget={privacyTarget}
              surface="footer"
              targetId="privacy"
              hrefLang={privacyTarget.available ? locale : "en"}
              className="hover:text-slate-950"
            >
              {t("links.privacy")}
            </TrackedNavigationLink>
            <TrackedNavigationLink
              navigationTarget={contactTarget}
              surface="footer"
              targetId="contact"
              hrefLang={contactTarget.available ? locale : "en"}
              className="hover:text-slate-950"
            >
              {t("links.contact")}
            </TrackedNavigationLink>
            <TrackedNavigationLink
              navigationTarget={termsTarget}
              surface="footer"
              targetId="terms"
              hrefLang={termsTarget.available ? locale : "en"}
              className="hover:text-slate-950"
            >
              {t("links.terms")}
            </TrackedNavigationLink>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-slate-900"
            >
              <Github className="h-4 w-4" />
              {t("links.github")}
            </a>
          </div>
        </nav>
      </div>
      <div className="border-t border-slate-100 px-6 py-3 text-center text-xs text-slate-500">
        {t("builtWith")}
      </div>
    </footer>
  );
}
