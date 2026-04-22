'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const programas = [
  { label: 'CRM na Prática', href: '/programas#crm-na-pratica', desc: 'Configure e use um CRM de verdade' },
  { label: 'Vendas pelo WhatsApp', href: '/programas#vendas-whatsapp', desc: 'Domine vendas pelo WhatsApp Business' },
  { label: 'Gestão Comercial', href: '/programas#gestao-comercial', desc: 'Estruture seu processo comercial' },
  { label: 'Prospecção Ativa', href: '/programas#prospeccao', desc: 'Monte sua máquina de prospecção' },
];

const navItems = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Programas', href: '/programas', dropdown: true },
  { label: 'Blog', href: '/blog' },
  { label: 'Materiais Gratuitos', href: '/materiais' },
  { label: 'Contato', href: '/contato' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-white border-b border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl font-extrabold tracking-tight text-navy">
              Escola de{' '}
              <span className="text-gold">CRM</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.href} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-600 hover:text-navy rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-gray-100 p-2 animate-in fade-in slide-in-from-top-1">
                      {programas.map((prog) => (
                        <Link
                          key={prog.href}
                          href={prog.href}
                          className="block px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors group"
                          onClick={() => setDropdownOpen(false)}
                        >
                          <span className="block text-sm font-semibold text-navy group-hover:text-emerald transition-colors">
                            {prog.label}
                          </span>
                          <span className="block text-xs text-gray-500 mt-0.5">
                            {prog.desc}
                          </span>
                        </Link>
                      ))}
                      <div className="border-t border-gray-100 mt-1 pt-1">
                        <Link
                          href="/programas"
                          className="block px-4 py-2.5 rounded-lg text-sm font-semibold text-gold hover:bg-gold/5 transition-colors"
                          onClick={() => setDropdownOpen(false)}
                        >
                          Ver todos os programas →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-navy rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contato"
              className="inline-flex items-center px-5 py-2.5 rounded-lg bg-emerald text-white text-sm font-semibold hover:bg-emerald-dark transition-colors shadow-sm shadow-emerald/20"
            >
              Fale com Consultor
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
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

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-navy transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <div className="ml-4 space-y-0.5">
                    {programas.map((prog) => (
                      <Link
                        key={prog.href}
                        href={prog.href}
                        className="block px-3 py-2 rounded-lg text-sm text-gray-500 hover:text-navy hover:bg-gray-50 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {prog.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-gray-100">
              <Link
                href="/contato"
                className="block w-full text-center px-5 py-2.5 rounded-lg bg-emerald text-white text-sm font-semibold hover:bg-emerald-dark transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Fale com Consultor
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
