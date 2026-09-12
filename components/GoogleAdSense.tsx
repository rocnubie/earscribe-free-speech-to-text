/**
 * Loads the AdSense publisher script in production. Auto ads and consent
 * messaging are configured in the AdSense console; no ad slot is invented in
 * the application because slot IDs are account-specific.
 */
/**
 * Google Publisher Policies don't allow ad code on pages whose content is
 * primarily in a language AdSense doesn't support; Persian isn't supported.
 * https://support.google.com/adsense/answer/9727
 */
const ADSENSE_UNSUPPORTED_LOCALES = new Set(["fa"]);

export function GoogleAdSenseScript({ locale }: { locale: string }) {
  if (process.env.NODE_ENV !== "production" || ADSENSE_UNSUPPORTED_LOCALES.has(locale)) {
    return null;
  }

  return (
    <>
      <meta
        name="google-adsense-account"
        content="ca-pub-6874644398379326"
      />
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6874644398379326"
        crossOrigin="anonymous"
      />
    </>
  );
}
