import type { ReactNode } from 'react';

interface CalloutBlockProps {
  type: 'tip' | 'warning' | 'example';
  title: string;
  children: ReactNode;
}

const config: Record<'tip' | 'warning' | 'example', { bg: string; label: string; color?: string }> = {
  tip:     { bg: 'var(--lime)', label: 'DICA' },
  warning: { bg: 'var(--yellow)', label: 'ATENCAO' },
  example: { bg: 'var(--cyan)', label: 'EXEMPLO', color: '#fff' },
};

export default function CalloutBlock({ type, title, children }: CalloutBlockProps) {
  const { bg, label, color } = config[type];

  return (
    <div
      className="my-8"
      style={{
        background: bg,
        color: color || 'var(--ink)',
        border: 'var(--border)',
        boxShadow: 'var(--shadow-sm)',
        padding: '20px 22px',
      }}
    >
      <div
        className="mb-2 flex items-center gap-3"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          fontWeight: 700,
        }}
      >
        <span style={{ background: 'var(--ink)', color: 'var(--bg)', padding: '3px 7px' }}>{label}</span>
        <span>{title}</span>
      </div>
      <div style={{ fontSize: 15, lineHeight: 1.55 }}>{children}</div>
    </div>
  );
}
