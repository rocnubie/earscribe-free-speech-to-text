"use client";

import NextLink from "next/link";
import type { ComponentProps, ReactNode } from "react";

import { Link } from "@/i18n/routing";
import { Events, track } from "@/lib/plausible";
import type { NavigationTarget } from "@/lib/site-navigation";

type AnchorProps = Omit<
  ComponentProps<"a">,
  "children" | "href" | "onClick"
>;

type TrackedNavigationLinkProps = AnchorProps & {
  children: ReactNode;
  navigationTarget: NavigationTarget;
  surface: string;
  targetId: string;
};

export function TrackedNavigationLink({
  children,
  navigationTarget,
  surface,
  targetId,
  ...anchorProps
}: TrackedNavigationLinkProps) {
  function onClick() {
    track(Events.NavigationClick, {
      surface,
      target: targetId,
      fallback: navigationTarget.fallback,
    });
  }

  if (navigationTarget.href.startsWith("#")) {
    return (
      <a href={navigationTarget.href} onClick={onClick} {...anchorProps}>
        {children}
      </a>
    );
  }

  if (!navigationTarget.localeAware) {
    return (
      <NextLink href={navigationTarget.href} onClick={onClick} {...anchorProps}>
        {children}
      </NextLink>
    );
  }

  return (
    <Link href={navigationTarget.href} onClick={onClick} {...anchorProps}>
      {children}
    </Link>
  );
}
