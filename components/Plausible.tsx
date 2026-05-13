/**
 * Plausible script injection. No-op in development, no-op when env vars
 * are missing. The script registers `window.plausible` which `lib/plausible.ts`
 * uses for custom event tracking.
 */
export function PlausibleScript() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  const scriptUrl = process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL;
  if (process.env.NODE_ENV !== "production" || !domain || !scriptUrl) {
    return null;
  }
  return (
    <>
      <script defer data-domain={domain} src={scriptUrl} />
      <script
        dangerouslySetInnerHTML={{
          __html:
            "window.plausible=window.plausible||function(){(window.plausible.q=window.plausible.q||[]).push(arguments)}",
        }}
      />
    </>
  );
}
