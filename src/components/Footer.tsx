import Link from 'next/link';

const columns = [
  {
    title: 'Categorias',
    links: [
      { label: 'Vendas', href: '/categorias/vendas' },
      { label: 'CRM', href: '/categorias/crm' },
      { label: 'Gestão Comercial', href: '/categorias/gestao-comercial' },
      { label: 'Prospecção', href: '/categorias/prospeccao' },
      { label: 'WhatsApp', href: '/categorias/whatsapp-vendas' },
    ],
  },
  {
    title: 'Aprenda Mais',
    links: [
      { label: 'Guias', href: '/guias' },
      { label: 'Materiais Gratuitos', href: '/materiais' },
      { label: 'Trilhas', href: '/trilhas' },
    ],
  },
  {
    title: 'Entur',
    links: [
      { label: 'Sobre', href: '/sobre' },
      { label: 'Soluções', href: '/solucoes' },
      { label: 'Planos', href: '/planos' },
    ],
  },
  {
    title: 'Contato',
    links: [
      { label: 'LinkedIn', href: 'https://linkedin.com/company/entur' },
      { label: 'Instagram', href: 'https://instagram.com/entur' },
      { label: 'YouTube', href: 'https://youtube.com/@entur' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1E293B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                      {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            &copy; 2026 Entur. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
