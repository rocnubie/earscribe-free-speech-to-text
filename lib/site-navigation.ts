import {
  PRIVACY_LOCALES,
  TOOL_LOCALES,
  type ToolSlug,
} from "@/lib/site-routes";

export type ProductNavigationId =
  | "audioToText"
  | "mp3ToText"
  | "audioToSrt"
  | "interviewTranscription"
  | "lectureTranscription";

export type NavigationId = ProductNavigationId | "about" | "privacy";
export type UseCaseNavigationId =
  | "podcast"
  | "interview"
  | "lecture"
  | "meeting"
  | "subtitles"
  | "longForm";
export type JobNavigationId =
  | "mp3ToText"
  | "wavToText"
  | "m4aToText"
  | "audioToSrt"
  | "audioToVtt"
  | "podcastToText";

type ProductNavigationItem = {
  id: ProductNavigationId;
  slug: ToolSlug;
};

type NavigationItem =
  | ProductNavigationItem
  | { id: "about"; path: "/about" }
  | { id: "privacy"; path: "/privacy" };

export type NavigationTarget = {
  href: string;
  available: boolean;
  fallback: boolean;
  localeAware: boolean;
};

export const PRODUCT_NAVIGATION = [
  { id: "audioToText", slug: "audio-to-text" },
  { id: "mp3ToText", slug: "mp3-to-text" },
  { id: "audioToSrt", slug: "audio-to-srt" },
  { id: "interviewTranscription", slug: "interview-transcription" },
  { id: "lectureTranscription", slug: "lecture-transcription" },
] as const satisfies readonly ProductNavigationItem[];

export const HEADER_PRODUCT_NAVIGATION = PRODUCT_NAVIGATION.slice(0, 3);

export const USE_CASE_NAVIGATION = [
  { id: "podcast", navigationId: "mp3ToText" },
  { id: "interview", navigationId: "interviewTranscription" },
  { id: "lecture", navigationId: "lectureTranscription" },
  { id: "meeting", navigationId: "interviewTranscription" },
  { id: "subtitles", navigationId: "audioToSrt" },
  { id: "longForm", navigationId: "audioToText" },
] as const satisfies readonly {
  id: UseCaseNavigationId;
  navigationId: ProductNavigationId;
}[];

export const JOB_NAVIGATION = [
  { id: "mp3ToText", navigationId: "mp3ToText" },
  { id: "wavToText", navigationId: "audioToText" },
  { id: "m4aToText", navigationId: "audioToText" },
  { id: "audioToSrt", navigationId: "audioToSrt" },
  { id: "audioToVtt", navigationId: "audioToSrt" },
  { id: "podcastToText", navigationId: "audioToText" },
] as const satisfies readonly {
  id: JobNavigationId;
  navigationId: ProductNavigationId;
}[];

const NAVIGATION = [
  ...PRODUCT_NAVIGATION,
  { id: "about", path: "/about" },
  { id: "privacy", path: "/privacy" },
] as const satisfies readonly NavigationItem[];

function supportsToolPages(locale: string): boolean {
  return TOOL_LOCALES.includes(locale as (typeof TOOL_LOCALES)[number]);
}

function supportsPrivacyPage(locale: string): boolean {
  return PRIVACY_LOCALES.includes(
    locale as (typeof PRIVACY_LOCALES)[number],
  );
}

function navigationItem(id: NavigationId): NavigationItem {
  const item = NAVIGATION.find((candidate) => candidate.id === id);
  if (!item) {
    throw new Error(`Unknown navigation item: ${id}`);
  }
  return item;
}

export function getNavigationTarget(
  id: NavigationId,
  locale: string,
): NavigationTarget {
  const item = navigationItem(id);

  if ("slug" in item) {
    if (supportsToolPages(locale)) {
      return {
        href: `/${item.slug}`,
        available: true,
        fallback: false,
        localeAware: true,
      };
    }
    return {
      href: "/#transcribe",
      available: false,
      fallback: true,
      localeAware: true,
    };
  }

  if (item.id === "privacy" && !supportsPrivacyPage(locale)) {
    return {
      href: "/",
      available: false,
      fallback: true,
      localeAware: true,
    };
  }

  return {
    href: item.path,
    available: true,
    fallback: false,
    localeAware: true,
  };
}

export function getProductNavigation(locale: string) {
  if (!supportsToolPages(locale)) return [];

  return PRODUCT_NAVIGATION.map((item) => ({
    ...item,
    target: getNavigationTarget(item.id, locale),
  }));
}

export function getContextualToolTarget(
  id: UseCaseNavigationId,
  locale: string,
): NavigationTarget {
  const item = USE_CASE_NAVIGATION.find((candidate) => candidate.id === id);
  if (!item) {
    throw new Error(`Unknown use case navigation item: ${id}`);
  }
  const target = getNavigationTarget(item.navigationId, locale);
  return target.fallback
    ? { ...target, href: "#transcribe", localeAware: false }
    : target;
}

export function getJobNavigationTarget(
  id: JobNavigationId,
  locale: string,
): NavigationTarget {
  const item = JOB_NAVIGATION.find((candidate) => candidate.id === id);
  if (!item) {
    throw new Error(`Unknown job navigation item: ${id}`);
  }
  const target = getNavigationTarget(item.navigationId, locale);
  return target.fallback
    ? { ...target, href: "#transcribe", localeAware: false }
    : target;
}

export function getTranscriberNavigationTarget(
  pathname: string,
): NavigationTarget {
  const isTranscriberPage =
    pathname === "/" ||
    PRODUCT_NAVIGATION.some((item) => pathname === `/${item.slug}`);

  return {
    href: isTranscriberPage ? "#transcribe" : "/#transcribe",
    available: true,
    fallback: false,
    localeAware: !isTranscriberPage,
  };
}

export function getLocaleSwitchDestination(
  pathname: string,
  nextLocale: string,
): string {
  const isToolPage = PRODUCT_NAVIGATION.some(
    (item) => pathname === `/${item.slug}`,
  );

  if (isToolPage && !supportsToolPages(nextLocale)) {
    return "/#transcribe";
  }
  if (pathname === "/privacy" && !supportsPrivacyPage(nextLocale)) {
    return "/";
  }
  return pathname;
}
