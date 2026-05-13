export const dynamic = "force-static";

import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getSiteUrl();
  return {
    rules: [
      // Allow major LLM "user-visible" crawlers (so the product surfaces in answers).
      { userAgent: "OAI-Searchbot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-SearchBot", allow: "/" },
      { userAgent: "Claude-User", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      // Block training-only crawlers.
      { userAgent: "GPTBot", disallow: "/" },
      { userAgent: "CCBot", disallow: "/" },
      // Everyone else.
      { userAgent: "*", allow: "/" },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
