'use client';

import Link from 'next/link';
import { useState } from 'react';

const ArrowUR = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square">
    <path d="M7 17 L17 7" /><path d="M9 7 H17 V15" />
  </svg>
);

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="topnav">
      <div className="topnav-row">
        <Link href="/" className="brand">
          <span className="brand-mark">B</span>
          <span>Escola de CRM</span>
        </Link>

        <nav>
          <Link href="/sobre">sobre</Link>
          <Link href="/programas">programas</Link>
          <Link href="/blog">blog</Link>
          <Link href="/materiais">materiais</Link>
          <Link href="/contato">contato</Link>
        </nav>

        <Link href="/contato" className="btn btn-pink btn-sm hidden sm:inline-flex">
          Agende <ArrowUR />
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 -mr-2 sm:hidden"
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t-2 border-ink bg-bg">
          <div className="container-x py-4 flex flex-col gap-1">
            <Link href="/sobre" onClick={() => setOpen(false)} className="py-2 px-3 hover:bg-yellow font-semibold lowercase">sobre</Link>
            <Link href="/programas" onClick={() => setOpen(false)} className="py-2 px-3 hover:bg-yellow font-semibold lowercase">programas</Link>
            <Link href="/blog" onClick={() => setOpen(false)} className="py-2 px-3 hover:bg-yellow font-semibold lowercase">blog</Link>
            <Link href="/materiais" onClick={() => setOpen(false)} className="py-2 px-3 hover:bg-yellow font-semibold lowercase">materiais</Link>
            <Link href="/contato" onClick={() => setOpen(false)} className="py-2 px-3 hover:bg-yellow font-semibold lowercase">contato</Link>
            <Link href="/contato" onClick={() => setOpen(false)} className="btn btn-pink btn-sm mt-3 w-fit">Agende <ArrowUR /></Link>
          </div>
        </div>
      )}
    </div>
  );
}
