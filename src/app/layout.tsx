import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { generateWebSiteSchema } from "@/lib/structured-data";
import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Escola de CRM — Vendas na Prática",
    template: "%s | Escola de CRM",
  },
  description:
    "Conteudo gratuito e programas praticos sobre CRM, vendas e gestao comercial para pequenos e medios negocios.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Escola de CRM",
    title: "Escola de CRM — Vendas na Prática",
    description:
      "Conteudo gratuito e programas praticos sobre CRM, vendas e gestao comercial para pequenos e medios negocios.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Escola de CRM — Vendas na Prática",
    description:
      "Conteudo gratuito e programas praticos sobre CRM, vendas e gestao comercial para pequenos e medios negocios.",
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
    <html
      lang="pt-BR"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
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
          message="Novo: Programa CRM na Pratica — Vagas limitadas para a proxima turma"
          link="/programas"
          linkText="Saiba mais"
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
