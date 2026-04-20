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
    <nav aria-label="Breadcrumb" className="text-sm text-[#334155] mb-6">
      <ol className="flex items-center flex-wrap gap-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-1">
              {index > 0 && (
                <span className="text-gray-400 mx-1" aria-hidden="true">
                  &gt;
                </span>
              )}
              {isLast || !item.href ? (
                <span className="font-semibold text-[#0F172A]">{item.name}</span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-[#1A56DB] transition-colors"
                >
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
