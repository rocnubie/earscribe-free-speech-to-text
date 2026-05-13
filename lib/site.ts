/**
 * Single source of truth for site-wide URLs / branding.
 *
 * NEXT_PUBLIC_SITE_URL should be set in `wrangler.toml` (`[vars]`) and locally
 * in `.env.local`. Falls back to a localhost value so dev never crashes.
 */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw && raw.length > 0) {
    return raw.replace(/\/$/, "");
  }
  return "http://localhost:3000";
}

export const SITE_NAME = "EarScribe";
export const SITE_DOMAIN = "earscribe.app";
export const GITHUB_URL = "https://github.com/";
