import type { Metadata, Viewport } from "next";
import { Geist, Bebas_Neue } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.siga1up.com.br"),
  title: "1UP Complexo Esportivo — CrossFit, HYROX, Natação e Pilates em Natal/RN",
  description:
    "Complexo esportivo de 2.000 m² em Capim Macio, Natal/RN. CrossFit, HYROX, Natação adulto e infantil, Hidroginástica e Pilates com piscina aquecida e box funcional. Agende sua aula experimental.",
  keywords: [
    "crossfit natal",
    "hyrox natal",
    "natação natal",
    "natação infantil capim macio",
    "pilates natal",
    "hidroginástica natal",
    "academia capim macio",
    "complexo esportivo natal",
  ],
  openGraph: {
    title: "1UP Complexo Esportivo — Natal/RN",
    description:
      "Eleve seu nível. CrossFit, HYROX, Natação, Pilates e Hidroginástica em 2.000 m² no Capim Macio.",
    url: "https://www.siga1up.com.br",
    siteName: "1UP Complexo Esportivo",
    locale: "pt_BR",
    type: "website",
  },
  robots: { index: true, follow: true },
  twitter: {
    card: "summary_large_image",
    title: "1UP Complexo Esportivo | Natal/RN",
    description:
      "CrossFit · HYROX · Natação · Hidroginástica · Pilates — 2.000m² em Natal/RN.",
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "1UP",
    capable: true,
    statusBarStyle: "black-translucent",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
    other: [
      { rel: "mask-icon", url: "/favicon.svg", color: "#FF6200" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#0D0D0D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${bebasNeue.variable} scroll-smooth`}
    >
      <body className="bg-[#0a0a0a] text-white antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
        {clarityId && (
          <Script id="ms-clarity" strategy="afterInteractive">
            {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${clarityId}");`}
          </Script>
        )}
      </body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
