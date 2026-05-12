import type { Metadata } from "next";
import { Anton, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { generateWebSiteSchema } from "@/lib/structured-data";
import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: ["400"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Escola de CRM — Bruno Barbosa",
    template: "%s | Escola de CRM",
  },
  description:
    "Bruno Barbosa instala CRM como sistema operacional comercial em empresas que precisam parar de viver de pico.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Escola de CRM",
    title: "Escola de CRM — Bruno Barbosa",
    description:
      "Bruno Barbosa instala CRM como sistema operacional comercial em empresas que precisam parar de viver de pico.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Escola de CRM — Bruno Barbosa",
    description:
      "Bruno Barbosa instala CRM como sistema operacional comercial em empresas que precisam parar de viver de pico.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${anton.variable} ${interTight.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebSiteSchema()),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <TopBanner
          message="Edicao 2026 — Mentoria 1:1 com vagas abertas"
          link="/programas"
          linkText="Reserve sua vaga"
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
