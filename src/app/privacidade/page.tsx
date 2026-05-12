import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de Privacidade",
  description: "Politica de privacidade e protecao de dados — LGPD.",
};

export default function PrivacidadePage() {
  return (
    <>
      <section className="brutal-hero">
        <div className="container-x">
          <span className="eyebrow"><span className="dot" />Atualizado: Abril 2026</span>
          <h1>Politica de <em>Privacidade.</em></h1>
        </div>
      </section>

      <section className="brutal-section">
        <div className="container-x max-w-3xl">
          <div className="brutal-prose">
            <p>A Escola de CRM valoriza a privacidade e protecao dos dados pessoais. Esta Politica esta em conformidade com a Lei Geral de Protecao de Dados (LGPD — Lei 13.709/2018).</p>

            <h2>1. Dados Coletados</h2>
            <ul>
              <li><strong>Identificacao:</strong> nome, email e empresa, fornecidos via formularios</li>
              <li><strong>Navegacao:</strong> IP, navegador, paginas visitadas, tempo de permanencia (analitico)</li>
              <li><strong>Interacao:</strong> downloads, cliques e formularios</li>
            </ul>

            <h2>2. Como Usamos seus Dados</h2>
            <ul>
              <li>Enviar a newsletter com conteudos sobre CRM e vendas</li>
              <li>Responder mensagens enviadas pelo formulario de contato</li>
              <li>Disponibilizar materiais gratuitos solicitados</li>
              <li>Melhorar a experiencia de navegacao</li>
              <li>Gerar estatisticas agregadas e anonimas</li>
            </ul>

            <h2>3. Cookies</h2>
            <p>Utilizamos cookies essenciais (funcionamento basico) e analiticos (entender uso anonimo). Voce pode desativar nas configuracoes do navegador.</p>

            <h2>4. Compartilhamento</h2>
            <p>Nao vendemos, alugamos ou compartilhamos seus dados com terceiros para fins comerciais. Compartilhamos apenas com:</p>
            <ul>
              <li>Prestadores de servico (hospedagem, email) sob confidencialidade</li>
              <li>Autoridades competentes quando exigido por lei</li>
            </ul>

            <h2>5. Armazenamento e Seguranca</h2>
            <p>Dados armazenados em servidores seguros com medidas tecnicas e organizacionais para protege-los contra acesso nao autorizado.</p>

            <h2>6. Seus Direitos (LGPD)</h2>
            <ul>
              <li>Confirmar a existencia de tratamento</li>
              <li>Acessar seus dados</li>
              <li>Corrigir dados incompletos ou desatualizados</li>
              <li>Solicitar anonimizacao ou eliminacao</li>
              <li>Revogar consentimento</li>
              <li>Portabilidade dos dados</li>
            </ul>
            <p>Para exercer qualquer direito: <a href="mailto:bruno@escoladecrm.com.br">bruno@escoladecrm.com.br</a>.</p>

            <h2>7. Alteracoes</h2>
            <p>Esta Politica pode ser atualizada. Revise periodicamente.</p>

            <h2>8. Contato</h2>
            <p>Email: <a href="mailto:bruno@escoladecrm.com.br">bruno@escoladecrm.com.br</a> · <a href="/contato">Pagina de Contato</a></p>
          </div>
        </div>
      </section>
    </>
  );
}
