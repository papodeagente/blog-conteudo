import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheca a Escola de CRM — conteudo gratuito e programas praticos sobre CRM, vendas e gestao comercial para PMEs.",
};

const timeline = [
  {
    year: "2024",
    title: "O inicio",
    desc: "Nasceu a ideia de criar uma plataforma de conteudo acessivel sobre CRM e vendas para pequenos negocios.",
  },
  {
    year: "2025",
    title: "Primeiros conteudos",
    desc: "Lancamento do blog com os primeiros artigos sobre CRM, vendas e gestao comercial.",
  },
  {
    year: "2026",
    title: "Escola de CRM",
    desc: "Lancamento oficial da Escola de CRM com mais de 150 artigos, materiais gratuitos e programas de capacitacao.",
  },
];

const valores = [
  {
    title: "Pratica acima da teoria",
    desc: "Todo conteudo e baseado em experiencias reais de vendas e gestao comercial no Brasil.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.385-5.375a2.626 2.626 0 010-3.712 2.625 2.625 0 013.712 0l1.653 1.653 1.653-1.653a2.626 2.626 0 013.712 3.712l-5.345 5.375z" />
      </svg>
    ),
  },
  {
    title: "Foco em PMEs",
    desc: "Conteudo pensado para a realidade de pequenos e medios negocios, nao para grandes corporacoes.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Acesso democratico",
    desc: "Acreditamos que todo empreendedor merece acesso a conhecimento de qualidade sobre vendas.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

export default function SobrePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Sobre a{" "}
              <span className="font-serif italic font-normal text-gold">
                Escola de CRM
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              A Escola de CRM nasceu com uma missao: democratizar o conhecimento
              sobre vendas, CRM e gestao comercial para pequenos e medios
              negocios no Brasil. Acreditamos que todo empreendedor pode vender
              mais e melhor com o processo e as ferramentas certas.
            </p>
          </div>
        </div>
      </section>

      {/* Missao */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-bold tracking-wider text-gold uppercase mb-4">
              Nossa missao
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight">
              Capacitar empreendedores brasileiros a{" "}
              <span className="font-serif italic font-normal text-gold-gradient">
                vender mais e melhor
              </span>{" "}
              atraves de CRM e processos comerciais.
            </h2>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-2xl font-extrabold text-navy text-center mb-12">
            Nossos Valores
          </h2>
          <div className="grid gap-8 sm:grid-cols-3 max-w-4xl mx-auto">
            {valores.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-xl p-8 border border-gray-100 card-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-4">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-navy">{v.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-2xl font-extrabold text-navy text-center mb-12">
            Nossa Historia
          </h2>
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div key={item.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center text-white text-sm font-bold shrink-0">
                    {item.year}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-px h-full bg-gray-200 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                  <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl font-extrabold mb-4">
            Fundador
          </h2>
          <div className="max-w-sm mx-auto mt-10">
            <div className="w-24 h-24 rounded-full bg-gold/20 mx-auto flex items-center justify-center">
              <span className="text-3xl font-bold text-gold">BB</span>
            </div>
            <h3 className="mt-4 text-xl font-bold">Bruno Barbosa</h3>
            <p className="text-gold text-sm font-medium">
              Fundador da Escola de CRM
            </p>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Especialista em CRM e vendas para PMEs com mais de 10 anos de
              experiencia ajudando negocios a estruturar seus processos
              comerciais.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl font-extrabold text-navy">
            Quer saber mais?
          </h2>
          <p className="mt-4 text-gray-500">
            Explore nossos conteudos ou entre em contato
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-emerald text-white font-semibold hover:bg-emerald-dark transition-colors"
            >
              Explorar Blog
            </Link>
            <Link
              href="/contato"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border-2 border-navy text-navy font-semibold hover:bg-navy hover:text-white transition-colors"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
