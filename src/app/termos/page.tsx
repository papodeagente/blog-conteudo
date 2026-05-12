import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de uso do site Escola de CRM.",
};

export default function TermosPage() {
  return (
    <>
      <section className="brutal-hero">
        <div className="container-x">
          <span className="eyebrow"><span className="dot" />Atualizado: Abril 2026</span>
          <h1>Termos de <em>Uso.</em></h1>
        </div>
      </section>

      <section className="brutal-section">
        <div className="container-x max-w-3xl">
          <div className="brutal-prose">
            <h2>1. Aceitacao dos Termos</h2>
            <p>Ao acessar e utilizar o site da Escola de CRM (escoladecrm.com.br), voce concorda com estes Termos de Uso. Caso nao concorde, pedimos que nao utilize nossos servicos. Estes termos podem ser atualizados periodicamente.</p>

            <h2>2. Uso do Servico</h2>
            <p>O site oferece conteudos educacionais sobre CRM, vendas e gestao comercial, incluindo artigos, materiais gratuitos e informacoes sobre programas de capacitacao. Voce se compromete a:</p>
            <ul>
              <li>Utilizar o site apenas para fins legais e de acordo com estes termos</li>
              <li>Nao reproduzir, distribuir ou modificar nossos conteudos sem autorizacao previa</li>
              <li>Fornecer informacoes verdadeiras ao se cadastrar</li>
              <li>Nao tentar acessar areas restritas de forma nao autorizada</li>
            </ul>

            <h2>3. Propriedade Intelectual</h2>
            <p>Todo o conteudo publicado e de propriedade da Escola de CRM ou de seus respectivos autores, protegido pelas leis brasileiras de direitos autorais (Lei 9.610/98).</p>
            <p>E permitido compartilhar links em redes sociais e citar trechos com a devida atribuicao. A reproducao integral requer autorizacao por escrito.</p>

            <h2>4. Materiais Gratuitos</h2>
            <p>Os materiais gratuitos (ebooks, templates, checklists) sao para uso pessoal e profissional do usuario que os baixou. <strong>E proibida a revenda ou distribuicao comercial.</strong></p>

            <h2>5. Limitacao de Responsabilidade</h2>
            <p>Os conteudos tem carater educacional e informativo. Nao nos responsabilizamos por decisoes tomadas com base em nossos conteudos. Recomendamos consultar profissionais especializados.</p>

            <h2>6. Modificacoes</h2>
            <p>Reservamo-nos o direito de modificar estes termos a qualquer momento. Alteracoes significativas serao comunicadas atraves do site.</p>

            <h2>7. Lei Aplicavel</h2>
            <p>Estes Termos sao regidos pelas leis da Republica Federativa do Brasil. Fica eleito o foro da comarca de Sao Paulo/SP.</p>

            <h2>8. Contato</h2>
            <p>Duvidas? Email <a href="mailto:bruno@escoladecrm.com.br">bruno@escoladecrm.com.br</a> ou <a href="/contato">pagina de contato</a>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
