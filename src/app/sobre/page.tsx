import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Bruno Barbosa — mentor e arquiteto de operacoes comerciais.",
};

export default function SobrePage() {
  return (
    <>
      <section className="brutal-hero">
        <div className="container-x">
          <span className="eyebrow"><span className="dot" />Sobre Bruno Barbosa</span>
          <h1>Eu nao vendo curso. <em>Eu instalo</em> processo.</h1>
          <p>12+ anos no operacional. 80+ times comerciais montados. Case oficial RD Station. Fundador do CRM Entur OS.</p>
        </div>
      </section>

      <section className="brutal-section sobre">
        <div className="container-x">
          <div className="sobre-grid">
            <div className="sobre-photo">
              <div className="main"><Image src="/images/home/sobreStage.jpg" alt="Bruno em palestra" width={900} height={1120} /></div>
              <div className="tag">FIG.01 · ENTUR 2025</div>
            </div>
            <div>
              <span className="section-num">01 / TRAJETORIA</span>
              <h2 className="section-title">Da operacao ao <em>palco.</em></h2>
              <p>
                Sou fundador da Escola de Negocios do Turismo e cofundador da Entur — <strong>case oficial</strong> de uso de CRM dentro do RD Station, citado em palco em mais de uma edicao da RD Summit.
              </p>
              <p>
                Construi, do zero, o <em>CRM Entur OS</em>: um sistema nichado para agencias de viagens que hoje opera o pipeline de centenas de operacoes. Ja montei times e processos comerciais para mais de 80 empresas — startups, agencias e negocios consolidados.
              </p>
              <p>
                O que me move e uma conviccao simples: <strong>CRM nao e software. E a forma como sua empresa lembra das pessoas.</strong>
              </p>
              <div className="sobre-stats">
                <div><div className="k">Anos operando</div><div className="v">12+</div></div>
                <div><div className="k">Operacoes montadas</div><div className="v">80+</div></div>
                <div><div className="k">Sistema proprio</div><div className="v">Entur OS</div></div>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contato" className="btn btn-pink">Vamos conversar →</Link>
                <Link href="/programas" className="btn btn-white">Ver programas</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="brutal-section manifesto">
        <div className="container-x">
          <span className="section-num">02 / MANIFESTO</span>
          <blockquote>CRM bom e o que <em>sua equipe usa</em> de segunda a sexta.</blockquote>
          <div className="signature">— Bruno Barbosa, fundador</div>
        </div>
      </section>
    </>
  );
}
