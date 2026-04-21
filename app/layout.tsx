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
  title: "1UP Complexo Esportivo | Natal/RN",
  description:
    "Complexo esportivo completo em Natal/RN. CrossFit, Natação, Pilates, Hidroginástica e HYROX. Agende uma aula experimental e viva a experiência 1UP.",
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
