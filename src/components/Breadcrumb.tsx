import Link from 'next/link';

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-8"
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
      }}
    >
      <ol className="flex items-center flex-wrap gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-2">
              {index > 0 && (
                <span style={{ color: 'var(--magenta)' }} aria-hidden="true">/</span>
              )}
              {isLast || !item.href ? (
                <span style={{ background: 'var(--ink)', color: 'var(--bg)', padding: '3px 7px' }}>
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} className="hover:bg-yellow hover:px-1 transition-all">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
