import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Materiais",
  description: "Ebooks, templates e checklists gratuitos sobre CRM, vendas e gestao comercial.",
};

const ArrowUR = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square">
    <path d="M7 17 L17 7" /><path d="M9 7 H17 V15" />
  </svg>
);

const materiais = [
  { type: "EBOOK", title: "Guia Completo de CRM para PMEs", desc: "Tudo que voce precisa pra escolher, implantar e usar um CRM. 45 paginas praticas.", spec: "45 paginas", bg: "var(--paper)" },
  { type: "TEMPLATE", title: "Planilha de Pipeline", desc: "Controle de oportunidades de vendas pronto pra uso. Inclui dashboard de metricas.", spec: "Google Sheets", bg: "var(--yellow)" },
  { type: "CHECKLIST", title: "Setup WhatsApp Business", desc: "Passo a passo completo pra configurar seu WhatsApp profissional em 1 hora.", spec: "12 passos", bg: "var(--paper)" },
  { type: "TEMPLATE", title: "Scripts de Vendas WhatsApp", desc: "10 scripts prontos pra abordar, qualificar e fechar pelo WhatsApp.", spec: "10 scripts", bg: "var(--lime)" },
  { type: "EBOOK", title: "Metricas de Vendas para PMEs", desc: "Os 15 KPIs que todo gestor comercial precisa acompanhar. Com formulas e benchmarks.", spec: "28 paginas", bg: "var(--paper)" },
  { type: "CHECKLIST", title: "Como Contratar um Vendedor", desc: "Perfil ideal, perguntas pra entrevista e roteiro de onboarding.", spec: "15 itens", bg: "var(--cyan)", color: "#fff" },
];

export default function MateriaisPage() {
  return (
    <>
      <section className="brutal-hero">
        <div className="container-x">
          <span className="eyebrow"><span className="dot" />Conteudo aberto</span>
          <h1>Materiais <em>gratuitos.</em></h1>
          <p>Ebooks, templates e checklists para aplicar CRM e vendas no seu negocio. Baixe gratis.</p>
        </div>
      </section>

      <section className="brutal-section">
        <div className="container-x">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {materiais.map((m) => (
              <div
                key={m.title}
                style={{
                  background: m.bg,
                  color: m.color || 'var(--ink)',
                  border: 'var(--border-thick)',
                  boxShadow: 'var(--shadow)',
                  padding: 28,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontWeight: 700,
                    marginBottom: 14,
                  }}
                >
                  <span style={{ background: 'var(--ink)', color: 'var(--bg)', padding: '3px 8px', marginRight: 8 }}>{m.type}</span>
                  <span style={{ opacity: 0.7 }}>{m.spec}</span>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 24,
                    textTransform: 'uppercase',
                    lineHeight: 1,
                    marginBottom: 12,
                  }}
                >
                  {m.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.55, marginBottom: 20, flex: 1 }}>{m.desc}</p>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-pink justify-center"
                >
                  Baixar gratis <ArrowUR />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/programas" className="btn btn-grad">Quer mais? Veja os programas →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
