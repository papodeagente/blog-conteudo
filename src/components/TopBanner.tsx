'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface TopBannerProps {
  message: string;
  link: string;
  linkText: string;
}

const STORAGE_KEY = 'escoladecrm-top-banner-dismissed';

export default function TopBanner({ message, link, linkText }: TopBannerProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (!dismissed) setVisible(true);
  }, []);

  const handleClose = () => {
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, 'true');
  };

  if (!visible) return null;

  return (
    <div
      className="w-full border-b-4 border-ink"
      style={{ background: 'var(--ink)', color: 'var(--bg)', fontFamily: 'var(--font-mono)' }}
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 py-2.5 flex items-center justify-center gap-3 relative">
        <p className="text-xs sm:text-sm text-center uppercase tracking-wider">
          {message}{' '}
          <Link
            href={link}
            className="underline font-bold"
            style={{ color: 'var(--yellow)' }}
          >
            {linkText} →
          </Link>
        </p>

        <button
          onClick={handleClose}
          className="absolute right-3 sm:right-4 p-1 hover:opacity-70 transition-opacity"
          aria-label="Fechar banner"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
