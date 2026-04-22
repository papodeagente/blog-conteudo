import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Materiais Gratuitos",
  description:
    "Baixe ebooks, templates e checklists gratuitos sobre CRM, vendas e gestao comercial.",
};

const materiais = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    type: "Ebook",
    title: "Guia Completo de CRM para PMEs",
    description:
      "Tudo que voce precisa saber para escolher, implantar e usar um CRM no seu negocio. 45 paginas de conteudo pratico.",
    pages: "45 paginas",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    type: "Template",
    title: "Planilha de Pipeline de Vendas",
    description:
      "Controle suas oportunidades de vendas com nossa planilha pronta para uso. Inclui dashboard de metricas.",
    pages: "Google Sheets",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    type: "Checklist",
    title: "Setup do WhatsApp Business",
    description:
      "Passo a passo completo para configurar seu WhatsApp Business de forma profissional em 1 hora.",
    pages: "12 passos",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    type: "Template",
    title: "Scripts de Vendas por WhatsApp",
    description:
      "10 scripts prontos para abordar, qualificar e fechar vendas pelo WhatsApp. Copie, cole e adapte.",
    pages: "10 scripts",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    type: "Ebook",
    title: "Metricas de Vendas para PMEs",
    description:
      "Os 15 KPIs que todo gestor comercial precisa acompanhar. Com formulas e benchmarks do mercado.",
    pages: "28 paginas",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    type: "Checklist",
    title: "Como Contratar um Vendedor",
    description:
      "Checklist completo com perfil ideal, perguntas para entrevista e roteiro de onboarding.",
    pages: "15 itens",
  },
];

export default function MateriaisPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Materiais{" "}
              <span className="font-serif italic font-normal text-gold">
                gratuitos
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Ebooks, templates e checklists para aplicar CRM e vendas no seu
              negocio. Baixe gratis e comece hoje.
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {materiais.map((mat) => (
              <div
                key={mat.title}
                className="bg-white rounded-xl border border-gray-200 p-8 card-lift"
              >
                <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-5">
                  {mat.icon}
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold tracking-wider text-gold uppercase">
                    {mat.type}
                  </span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs text-gray-400">{mat.pages}</span>
                </div>
                <h3 className="text-lg font-bold text-navy">{mat.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {mat.description}
                </p>
                <button className="mt-6 w-full px-4 py-3 rounded-lg bg-navy text-white text-sm font-semibold hover:bg-navy-light transition-colors">
                  Baixar gratis
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-2xl font-extrabold text-navy">
            Quer conteudo ainda mais aprofundado?
          </h2>
          <p className="mt-3 text-gray-500">
            Conheca nossos programas de capacitacao pratica
          </p>
          <Link
            href="/programas"
            className="inline-flex items-center justify-center mt-8 px-8 py-3.5 rounded-lg bg-emerald text-white font-semibold hover:bg-emerald-dark transition-colors"
          >
            Conhecer Programas
          </Link>
        </div>
      </section>
    </div>
  );
}
