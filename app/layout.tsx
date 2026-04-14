import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "1UP Complexo Esportivo | Natal/RN",
  description:
    "Complexo esportivo completo em Natal/RN. Musculação, artes marciais, esportes coletivos e acompanhamento profissional. Eleve seu nível com a 1UP!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} scroll-smooth`}>
      <body className="bg-[#111111] text-white antialiased">{children}</body>
    </html>
  );
}
