import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <title>Café Aroma | Fresh Coffee & Cozy Vibes</title>
        <meta
          name="description"
          content="Café Aroma - Fresh coffee, cozy vibes, and delicious pastries in the heart of New Delhi. ☕"
        />
        <meta name="keywords" content="Cafe, Coffee, Pastries, Delhi, Cozy, Coffee shop" />
        <meta name="author" content="Café Aroma" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Café Aroma | Fresh Coffee & Cozy Vibes" />
        <meta
          property="og:description"
          content="Enjoy premium coffee, cozy vibes, and freshly baked pastries at Café Aroma."
        />
        <meta property="og:image" content="/coffee-cup.jpg" />
        <meta property="og:url" content="https://cafearoma.vercel.app" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Café Aroma | Fresh Coffee & Cozy Vibes" />
        <meta
          name="twitter:description"
          content="Your cozy spot for coffee and code in New Delhi."
        />
        <meta name="twitter:image" content="/coffee-cup.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
