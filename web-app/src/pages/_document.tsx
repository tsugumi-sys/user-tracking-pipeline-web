import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          id="loadCustomTrackingScript"
          async
          strategy="beforeInteractive"
          src="http://localhost:3000/script.js"
        />
        <Script id="SetAutoTrackingPageView" strategy="afterInteractive">
          {`window.CustomDataLayer.config({ send_page_view: true })`}
        </Script>
      </body>
    </Html>
  );
}
