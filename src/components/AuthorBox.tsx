import Link from 'next/link';

interface AuthorBoxProps {
  name: string;
  bio: string;
  slug: string;
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export default function AuthorBox({ name, bio, slug }: AuthorBoxProps) {
  const initials = getInitials(name);

  return (
    <div
      className="flex flex-col sm:flex-row gap-5 items-start"
      style={{
        background: 'var(--paper)',
        border: 'var(--border-thick)',
        boxShadow: 'var(--shadow)',
        padding: 24,
      }}
    >
      <div
        className="shrink-0 grid place-items-center"
        style={{
          width: 64,
          height: 64,
          background: 'var(--grad)',
          border: 'var(--border)',
          color: '#fff',
          fontFamily: 'var(--font-display)',
          fontSize: 26,
          boxShadow: '3px 3px 0 0 var(--ink)',
          transform: 'rotate(-3deg)',
        }}
      >
        {initials}
      </div>

      <div className="flex-1 min-w-0">
        <Link
          href={`/autor/${slug}`}
          className="hover:underline"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 22,
            textTransform: 'uppercase',
            lineHeight: 1,
            display: 'block',
            marginBottom: 6,
          }}
        >
          {name}
        </Link>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          opacity: 0.7,
        }}>
          Especialista em Vendas e CRM
        </p>
        <p style={{ marginTop: 12, fontSize: 14, lineHeight: 1.55 }}>{bio}</p>
      </div>
    </div>
  );
}
