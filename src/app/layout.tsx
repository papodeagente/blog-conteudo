import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { generateWebSiteSchema } from "@/lib/structured-data";
import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Blog de Conteudo",
    template: "%s | Blog de Conteudo",
  },
  description:
    "Artigos e conteudos otimizados para voce encontrar as melhores respostas.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Blog de Conteudo",
    title: "Blog de Conteudo",
    description:
      "Artigos e conteudos otimizados para voce encontrar as melhores respostas.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog de Conteudo",
    description:
      "Artigos e conteudos otimizados para voce encontrar as melhores respostas.",
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
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebSiteSchema()),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <TopBanner
          message="Conheca o CRM da Entur — Teste gratis por 14 dias"
          link="#"
          linkText="Comecar agora"
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
