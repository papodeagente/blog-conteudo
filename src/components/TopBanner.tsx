'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface TopBannerProps {
  message: string;
  link: string;
  linkText: string;
}

const STORAGE_KEY = 'entur-top-banner-dismissed';

export default function TopBanner({ message, link, linkText }: TopBannerProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (!dismissed) {
      setVisible(true);
    }
  }, []);

  const handleClose = () => {
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, 'true');
  };

  if (!visible) return null;

  return (
    <div className="bg-[#1A56DB] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-center gap-3 relative">
        <p className="text-sm text-center">
          {message}{' '}
          <Link href={link} className="underline font-semibold hover:text-white/90 transition-colors">
            {linkText}
          </Link>
        </p>

        <button
          onClick={handleClose}
          className="absolute right-4 p-1 rounded hover:bg-white/10 transition-colors"
          aria-label="Fechar banner"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
