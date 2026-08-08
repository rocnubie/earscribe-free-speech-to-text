/**
 * Loads the AdSense publisher script in production. Auto ads and consent
 * messaging are configured in the AdSense console; no ad slot is invented in
 * the application because slot IDs are account-specific.
 */
export function GoogleAdSenseScript() {
  if (process.env.NODE_ENV !== "production") {
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
