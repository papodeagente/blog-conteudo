import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="brutal-footer">
      <div className="container-x">
        <div className="foot-top">
          <div className="foot-brand">
            <div className="lockup">Bruno Barbosa</div>
            <p style={{ fontSize: 14, margin: 0, maxWidth: '40ch' }}>
              Mentor e arquiteto de operacoes comerciais. Fundador da Escola de Negocios do Turismo e do CRM Entur OS.
            </p>
          </div>
          <div>
            <h5>Trabalhe</h5>
            <ul>
              <li><Link href="/programas">Mentoria 1:1</Link></li>
              <li><Link href="/programas">CRM Entur OS</Link></li>
              <li><Link href="/programas">Imersoes</Link></li>
              <li><Link href="/programas">Sala de Operacao</Link></li>
            </ul>
          </div>
          <div>
            <h5>Conteudo</h5>
            <ul>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/materiais">Materiais</Link></li>
              <li><Link href="/categorias">Categorias</Link></li>
              <li><a href="#agenda">Newsletter</a></li>
            </ul>
          </div>
          <div>
            <h5>Contato</h5>
            <ul>
              <li><a href="mailto:bruno@escoladecrm.com.br">bruno@escoladecrm.com.br</a></li>
              <li><Link href="/contato">Agendar</Link></li>
              <li><Link href="/termos">Termos</Link></li>
              <li><Link href="/privacidade">Privacidade</Link></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <div>© 2026 Escola de CRM · Bruno Barbosa</div>
          <div>Belo Horizonte · Brasil</div>
        </div>
      </div>
    </footer>
  );
}
