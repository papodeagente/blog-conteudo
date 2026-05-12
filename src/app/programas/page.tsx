import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programas",
  description: "Mentoria 1:1 e CRM Entur OS White-label — implementacao real.",
};

const ArrowUR = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square">
    <path d="M7 17 L17 7" /><path d="M9 7 H17 V15" />
  </svg>
);

export default function ProgramasPage() {
  return (
    <>
      <section className="brutal-hero">
        <div className="container-x">
          <span className="eyebrow"><span className="dot" />Programas 2026</span>
          <h1>Dois caminhos. Um destino: <em>previsibilidade.</em></h1>
          <p>Trabalho com um numero fechado de empresas por trimestre. Voce nao compra acesso a curso — voce contrata um especialista para implementar ao seu lado.</p>
        </div>
      </section>

      <section className="brutal-section produtos">
        <div className="container-x">
          <article className="product-card">
            <div className="pnum">001</div>
            <div className="body">
              <h3>Mentoria de Implementacao</h3>
              <p className="desc">Programa intensivo de 12 semanas. Sento ao lado do seu time, mapeio o funil real, configuro o CRM, escrevo as cadencias e treino quem vende. Voce termina com pipeline operando — nao com slides.</p>
              <ul>
                <li>Diagnostico do funil atual e gargalos de conversao</li>
                <li>Arquitetura de pipeline, etapas, campos e automacoes</li>
                <li>Cadencia comercial (cold, inbound, follow-up)</li>
                <li>Treinamento pratico com o time + acompanhamento semanal</li>
                <li>Acesso direto via WhatsApp durante o programa</li>
              </ul>
            </div>
            <div className="meta">
              <div>
                <div className="label">Duracao</div>
                <div className="value">12 semanas</div>
              </div>
              <div>
                <div className="label">Formato</div>
                <div className="value">1:1, semanal</div>
              </div>
              <div>
                <div className="label">Proxima janela</div>
                <div className="value"><em>MAI</em> 2026</div>
              </div>
              <Link href="/contato" className="btn btn-pink">Agendar diagnostico <ArrowUR /></Link>
            </div>
          </article>

          <article className="product-card alt">
            <div className="pnum">002</div>
            <div className="body">
              <h3>CRM Entur OS — White-label</h3>
              <p className="desc">Para empresas que precisam de um CRM nichado e nao cabem em ferramenta generica. Desenvolvo o Entur OS como base e adapto a sua operacao. Nao e projeto de software — e produto entregue, em producao, com voce como dono.</p>
              <ul>
                <li>Base do Entur OS (nucleo de pipeline, contatos, atendimento)</li>
                <li>Customizacao de fluxos, campos e regras de negocio</li>
                <li>Integracao com WhatsApp, email e ERPs ja em uso</li>
                <li>Onboarding do time e documentacao operacional</li>
                <li>Suporte tecnico e evolutivo nos primeiros 12 meses</li>
              </ul>
            </div>
            <div className="meta">
              <div>
                <div className="label">Duracao</div>
                <div className="value">16–24 sem.</div>
              </div>
              <div>
                <div className="label">Formato</div>
                <div className="value">Projeto + SaaS</div>
              </div>
              <div>
                <div className="label">Modelo</div>
                <div className="value"><em>SOB</em> demanda</div>
              </div>
              <Link href="/contato" className="btn">Falar sobre o projeto <ArrowUR /></Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
