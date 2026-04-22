import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de Privacidade",
  description:
    "Politica de privacidade e protecao de dados do site Escola de CRM.",
};

export default function PrivacidadePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Politica de{" "}
              <span className="font-serif italic font-normal text-gold">
                Privacidade
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
            <p>
              A Escola de CRM valoriza a privacidade e a protecao dos dados
              pessoais dos seus usuarios. Esta Politica de Privacidade foi
              elaborada em conformidade com a Lei Geral de Protecao de Dados
              (LGPD — Lei 13.709/2018) e descreve como coletamos, usamos e
              protegemos suas informacoes.
            </p>

            <h2>1. Dados Coletados</h2>
            <p>Podemos coletar os seguintes dados pessoais:</p>
            <ul>
              <li>
                <strong>Dados de identificacao:</strong> nome, email e
                empresa, fornecidos voluntariamente atraves de formularios
                de contato ou inscricao na newsletter
              </li>
              <li>
                <strong>Dados de navegacao:</strong> endereco IP, tipo de
                navegador, paginas visitadas, tempo de permanencia e origem
                do acesso, coletados automaticamente para fins analiticos
              </li>
              <li>
                <strong>Dados de interacao:</strong> downloads de materiais,
                cliques em links e interacoes com formularios
              </li>
            </ul>

            <h2>2. Como Usamos seus Dados</h2>
            <p>Os dados coletados sao utilizados para:</p>
            <ul>
              <li>Enviar a newsletter com conteudos sobre CRM e vendas</li>
              <li>Responder mensagens enviadas pelo formulario de contato</li>
              <li>Disponibilizar materiais gratuitos solicitados</li>
              <li>Melhorar a experiencia de navegacao e os conteudos do site</li>
              <li>Gerar estatisticas agregadas e anonimas sobre o uso do site</li>
            </ul>

            <h2>3. Cookies</h2>
            <p>
              Utilizamos cookies para melhorar sua experiencia de navegacao.
              Os cookies podem incluir:
            </p>
            <ul>
              <li>
                <strong>Cookies essenciais:</strong> necessarios para o
                funcionamento basico do site (ex.: preferencias de exibicao)
              </li>
              <li>
                <strong>Cookies analiticos:</strong> utilizados para entender
                como os visitantes interagem com o site, coletando
                informacoes anonimas
              </li>
            </ul>
            <p>
              Voce pode desativar cookies nas configuracoes do seu navegador,
              mas isso pode afetar a funcionalidade de algumas areas do site.
            </p>

            <h2>4. Compartilhamento de Dados</h2>
            <p>
              Nao vendemos, alugamos ou compartilhamos seus dados pessoais
              com terceiros para fins comerciais. Seus dados podem ser
              compartilhados apenas com:
            </p>
            <ul>
              <li>
                Prestadores de servicos que auxiliam na operacao do site
                (hospedagem, envio de emails), sob obrigacao de
                confidencialidade
              </li>
              <li>
                Autoridades competentes, quando exigido por lei ou ordem
                judicial
              </li>
            </ul>

            <h2>5. Armazenamento e Seguranca</h2>
            <p>
              Seus dados sao armazenados em servidores seguros e adotamos
              medidas tecnicas e organizacionais para protege-los contra
              acesso nao autorizado, perda ou destruicao. Os dados sao
              mantidos apenas pelo tempo necessario para cumprir as
              finalidades descritas nesta politica.
            </p>

            <h2>6. Seus Direitos (LGPD)</h2>
            <p>
              De acordo com a LGPD, voce tem direito a:
            </p>
            <ul>
              <li>Confirmar a existencia de tratamento dos seus dados</li>
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos ou desatualizados</li>
              <li>Solicitar a anonimizacao ou eliminacao de dados desnecessarios</li>
              <li>Revogar o consentimento para o tratamento de dados</li>
              <li>Solicitar a portabilidade dos seus dados</li>
            </ul>
            <p>
              Para exercer qualquer um desses direitos, entre em contato
              atraves do email{" "}
              <a href="mailto:contato@escoladecrm.com.br">
                contato@escoladecrm.com.br
              </a>
              .
            </p>

            <h2>7. Alteracoes nesta Politica</h2>
            <p>
              Esta Politica de Privacidade pode ser atualizada
              periodicamente. Recomendamos que voce a revise regularmente.
              A data da ultima atualizacao sera sempre exibida no topo
              desta pagina.
            </p>

            <h2>8. Contato</h2>
            <p>
              Para duvidas, solicitacoes ou reclamacoes sobre privacidade
              e protecao de dados, entre em contato:
            </p>
            <ul>
              <li>
                Email:{" "}
                <a href="mailto:contato@escoladecrm.com.br">
                  contato@escoladecrm.com.br
                </a>
              </li>
              <li>
                Formulario:{" "}
                <a href="/contato">Pagina de Contato</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
