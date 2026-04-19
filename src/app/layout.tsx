import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { generateWebSiteSchema } from "@/lib/structured-data";

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
        <header className="border-b border-gray-100">
          <nav className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
            <a href="/" className="text-xl font-bold text-gray-900">
              Blog de Conteudo
            </a>
            <div className="flex gap-6 text-sm text-gray-600">
              <a href="/blog" className="hover:text-gray-900">
                Artigos
              </a>
              <a href="/categorias" className="hover:text-gray-900">
                Categorias
              </a>
            </div>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-gray-100 py-8 mt-16">
          <div className="mx-auto max-w-5xl px-4 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Blog de Conteudo. Todos os
            direitos reservados.
          </div>
        </footer>
      </body>
    </html>
  );
}
