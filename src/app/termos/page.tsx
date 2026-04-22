import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de uso do site Escola de CRM.",
};

export default function TermosPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Termos de{" "}
              <span className="font-serif italic font-normal text-gold">
                Uso
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Ultima atualizacao: Abril de 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="prose prose-lg max-w-none prose-headings:text-navy prose-headings:font-bold prose-a:text-gold">
            <h2>1. Aceitacao dos Termos</h2>
            <p>
              Ao acessar e utilizar o site da Escola de CRM
              (escoladecrm.com.br), voce concorda com estes Termos de Uso.
              Caso nao concorde com algum ponto, pedimos que nao utilize
              nossos servicos. Estes termos podem ser atualizados
              periodicamente, e o uso continuado do site apos alteracoes
              constitui aceitacao dos novos termos.
            </p>

            <h2>2. Uso do Servico</h2>
            <p>
              O site da Escola de CRM oferece conteudos educacionais sobre
              CRM, vendas e gestao comercial, incluindo artigos, materiais
              gratuitos e informacoes sobre programas de capacitacao. Voce
              se compromete a:
            </p>
            <ul>
              <li>Utilizar o site apenas para fins legais e de acordo com estes termos</li>
              <li>Nao reproduzir, distribuir ou modificar nossos conteudos sem autorizacao previa</li>
              <li>Fornecer informacoes verdadeiras ao se cadastrar ou entrar em contato</li>
              <li>Nao tentar acessar areas restritas do site de forma nao autorizada</li>
            </ul>

            <h2>3. Propriedade Intelectual</h2>
            <p>
              Todo o conteudo publicado no site — incluindo textos, imagens,
              logotipos, templates, planilhas e materiais educacionais — e
              de propriedade da Escola de CRM ou de seus respectivos autores,
              protegido pelas leis brasileiras de direitos autorais (Lei
              9.610/98).
            </p>
            <p>
              E permitido compartilhar links dos artigos em redes sociais e
              citar trechos com a devida atribuicao. A reproducao integral
              de conteudos requer autorizacao por escrito.
            </p>

            <h2>4. Materiais Gratuitos</h2>
            <p>
              Os materiais disponibilizados gratuitamente (ebooks, templates,
              checklists) sao para uso pessoal e profissional do usuario que
              os baixou. E proibida a revenda ou distribuicao comercial
              desses materiais.
            </p>

            <h2>5. Limitacao de Responsabilidade</h2>
            <p>
              Os conteudos da Escola de CRM tem carater educacional e
              informativo. Nao nos responsabilizamos por decisoes tomadas
              com base em nossos conteudos. Recomendamos que consulte
              profissionais especializados para decisoes estrategicas do
              seu negocio.
            </p>
            <p>
              Nos esforçamos para manter o site disponivel e os conteudos
              atualizados, mas nao garantimos disponibilidade ininterrupta
              ou ausencia total de erros.
            </p>

            <h2>6. Modificacoes</h2>
            <p>
              Reservamo-nos o direito de modificar estes termos a qualquer
              momento. Alteracoes significativas serao comunicadas atraves
              do site. A data da ultima atualizacao sera sempre exibida no
              topo desta pagina.
            </p>

            <h2>7. Lei Aplicavel</h2>
            <p>
              Estes Termos de Uso sao regidos pelas leis da Republica
              Federativa do Brasil. Fica eleito o foro da comarca de
              Sao Paulo/SP para dirimir quaisquer controversias.
            </p>

            <h2>8. Contato</h2>
            <p>
              Em caso de duvidas sobre estes termos, entre em contato
              atraves do email{" "}
              <a href="mailto:contato@escoladecrm.com.br">
                contato@escoladecrm.com.br
              </a>{" "}
              ou pela nossa{" "}
              <a href="/contato">pagina de contato</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
