import type { Metadata, Viewport } from "next";
import { Geist, Bebas_Neue } from "next/font/google";
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
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
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${bebasNeue.variable} scroll-smooth`}
    >
      <body className="bg-[#0a0a0a] text-white antialiased">{children}</body>
    </html>
  );
}
