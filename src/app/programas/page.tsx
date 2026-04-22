import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programas",
  description:
    "Programas praticos sobre CRM, vendas, gestao comercial e prospeccao para PMEs.",
};

const programas = [
  {
    id: "crm-na-pratica",
    title: "CRM na Pratica",
    format: "ONLINE",
    duration: "8 semanas",
    description:
      "Aprenda a configurar e usar um CRM para organizar seu pipeline de vendas, automatizar follow-ups e nunca mais perder uma oportunidade.",
    topics: [
      "O que e CRM e por que sua empresa precisa de um",
      "Escolhendo o CRM certo para seu negocio",
      "Configurando seu pipeline de vendas",
      "Automacao de tarefas e follow-ups",
      "Relatorios e metricas de vendas",
      "Integracao com WhatsApp e email",
    ],
    highlight: true,
  },
  {
    id: "vendas-whatsapp",
    title: "Vendas pelo WhatsApp",
    format: "ONLINE",
    duration: "4 semanas",
    description:
      "Domine tecnicas de vendas pelo WhatsApp Business com automacao, catalogos e scripts que convertem conversas em vendas.",
    topics: [
      "Configuracao profissional do WhatsApp Business",
      "Scripts de vendas que convertem",
      "Catalogos e vitrine de produtos",
      "Lista de transmissao e segmentacao",
      "Automacao e mensagens programadas",
      "Metricas e otimizacao de resultados",
    ],
    highlight: false,
  },
  {
    id: "gestao-comercial",
    title: "Gestao Comercial para PMEs",
    format: "PRESENCIAL",
    duration: "2 dias intensivos",
    description:
      "Estruture seu processo comercial do zero com metricas, metas, comissoes e uma rotina que gera resultados previsiveis.",
    topics: [
      "Diagnostico do seu processo comercial atual",
      "Definicao de metas e indicadores (KPIs)",
      "Estrutura de comissoes e incentivos",
      "Rotina comercial do time de vendas",
      "Previsao de vendas (forecast)",
      "Contratacao e treinamento de vendedores",
    ],
    highlight: false,
  },
  {
    id: "prospeccao",
    title: "Prospeccao Ativa",
    format: "ONLINE",
    duration: "6 semanas",
    description:
      "Construa uma maquina de prospeccao outbound para atrair clientes ideais e manter seu pipeline sempre cheio.",
    topics: [
      "Definindo seu Perfil de Cliente Ideal (ICP)",
      "Canais de prospeccao para PMEs",
      "Abordagem e primeiro contato",
      "Cadencia de contatos (outreach)",
      "Qualificacao de leads",
      "Networking e indicacoes estrategicas",
    ],
    highlight: false,
  },
];

export default function ProgramasPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Programas de{" "}
              <span className="font-serif italic font-normal text-gold">
                capacitacao pratica
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Programas focados em resultados reais para quem quer dominar CRM,
              vendas e gestao comercial. Aprenda com quem faz.
            </p>
          </div>
        </div>
      </section>

      {/* Programs list */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="space-y-12">
            {programas.map((prog) => (
              <div
                key={prog.id}
                id={prog.id}
                className={`rounded-2xl border p-8 sm:p-10 scroll-mt-24 ${
                  prog.highlight
                    ? "border-gold/30 bg-gradient-to-br from-navy/[0.02] to-gold/[0.03]"
                    : "border-gray-200"
                }`}
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span
                    className={`px-3 py-1 rounded text-xs font-bold tracking-wider ${
                      prog.format === "ONLINE"
                        ? "bg-emerald/10 text-emerald"
                        : "bg-gold/10 text-gold"
                    }`}
                  >
                    {prog.format}
                  </span>
                  <span className="text-sm text-gray-400">{prog.duration}</span>
                  {prog.highlight && (
                    <span className="px-3 py-1 rounded text-xs font-bold bg-gold/10 text-gold">
                      MAIS POPULAR
                    </span>
                  )}
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
                  {prog.title}
                </h2>
                <p className="mt-3 text-gray-500 leading-relaxed max-w-2xl">
                  {prog.description}
                </p>

                <div className="mt-8">
                  <h3 className="text-sm font-bold tracking-wider text-navy uppercase mb-4">
                    O que voce vai aprender
                  </h3>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {prog.topics.map((topic) => (
                      <div key={topic} className="flex items-start gap-2">
                        <svg
                          className="w-5 h-5 text-emerald shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm text-gray-600">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contato"
                    className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-sm transition-colors ${
                      prog.highlight
                        ? "bg-emerald text-white hover:bg-emerald-dark"
                        : "bg-navy text-white hover:bg-navy-light"
                    }`}
                  >
                    Quero me inscrever
                  </Link>
                  <Link
                    href="/contato"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 text-gray-600 font-semibold text-sm hover:border-navy hover:text-navy transition-colors"
                  >
                    Tirar duvidas
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl font-extrabold">
            Nao sabe qual programa escolher?
          </h2>
          <p className="mt-4 text-gray-400">
            Fale com um consultor e receba uma recomendacao personalizada
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center justify-center mt-8 px-8 py-4 rounded-lg border-2 border-gold text-gold font-semibold hover:bg-gold/10 transition-colors"
          >
            Fale com Consultor
          </Link>
        </div>
      </section>
    </div>
  );
}
