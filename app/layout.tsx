import type { Metadata } from "next";
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
  title: "1UP Complexo Esportivo | Natal/RN",
  description:
    "Complexo esportivo completo em Natal/RN. CrossFit, Natação, Pilates, Hidroginástica e HYROX. Agende uma aula experimental e viva a experiência 1UP.",
  openGraph: {
    title: "1UP Complexo Esportivo | Natal/RN",
    description:
      "CrossFit · HYROX · Natação · Hidroginástica · Pilates — 2.000m² de estrutura premium em Natal/RN. Agende uma aula experimental.",
    url: "https://www.siga1up.com.br",
    siteName: "1UP Complexo Esportivo",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "1UP Complexo Esportivo | Natal/RN",
    description:
      "CrossFit · HYROX · Natação · Hidroginástica · Pilates — 2.000m² em Natal/RN.",
  },
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
