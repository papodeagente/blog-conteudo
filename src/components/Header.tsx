'use client';

import { useState } from 'react';
import Link from 'next/link';

const navItems = [
  { label: 'Vendas', href: '/categorias/vendas' },
  { label: 'CRM', href: '/categorias/crm' },
  { label: 'Gestão Comercial', href: '/categorias/gestao-comercial' },
  { label: 'Prospecção', href: '/categorias/prospeccao' },
  { label: 'WhatsApp Vendas', href: '/categorias/whatsapp-vendas' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-[#1A56DB]">
            Escola de CRM
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#334155] hover:text-[#1A56DB] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/contato"
              className="inline-flex items-center px-5 py-2 rounded-lg bg-[#10B981] text-white text-sm font-semibold hover:bg-[#059669] transition-colors"
            >
              Fale com Consultor
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden p-2 rounded-md text-[#334155] hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 rounded-md text-sm font-medium text-[#334155] hover:bg-gray-50 hover:text-[#1A56DB]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contato"
              className="block w-full text-center mt-3 px-5 py-2 rounded-lg bg-[#10B981] text-white text-sm font-semibold hover:bg-[#059669]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Fale com Consultor
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
