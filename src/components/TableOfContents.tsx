'use client';

import { useEffect, useState } from 'react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0.1 }
    );

    for (const heading of headings) {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav
      className="sticky top-24"
      aria-label="Sumario"
      style={{
        background: 'var(--paper)',
        border: 'var(--border)',
        boxShadow: 'var(--shadow-sm)',
        padding: '18px',
      }}
    >
      <h4
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginBottom: 14,
          color: 'var(--ink)',
        }}
      >
        Neste artigo
      </h4>
      <ul className="space-y-1">
        {headings.map((heading) => {
          const active = activeId === heading.id;
          return (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                className="block transition-colors"
                style={{
                  fontSize: 13,
                  fontFamily: 'var(--font-body)',
                  padding: '4px 8px',
                  paddingLeft: heading.level === 3 ? 18 : 8,
                  background: active ? 'var(--yellow)' : 'transparent',
                  borderLeft: active ? '3px solid var(--magenta)' : '3px solid transparent',
                  fontWeight: active ? 700 : 500,
                  color: 'var(--ink)',
                }}
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
