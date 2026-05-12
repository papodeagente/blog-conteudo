import Link from "next/link";
import { Metadata } from "next";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Categorias",
  description: "Explore artigos por categoria.",
};

export default async function CategoriasPage() {
  const categories = await prisma.category.findMany({
    include: { _count: { select: { posts: { where: { published: true } } } } },
    orderBy: { name: "asc" },
  });

  return (
    <>
      <section className="brutal-hero">
        <div className="container-x">
          <span className="eyebrow"><span className="dot" />Conteudo organizado</span>
          <h1>Por <em>categoria.</em></h1>
          <p>Encontre conteudos sobre vendas, CRM, gestao comercial e mais.</p>
        </div>
      </section>

      <section className="brutal-section">
        <div className="container-x">
          {categories.length === 0 ? (
            <p style={{ textAlign: 'center', padding: '48px 0', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', opacity: 0.6 }}>
              Nenhuma categoria.
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((cat, i) => {
                const bgs = ['var(--yellow)', 'var(--lime)', 'var(--cyan)', 'var(--pink)', 'var(--paper)', 'var(--paper)'];
                const bg = bgs[i % bgs.length];
                const isColored = bg !== 'var(--paper)';
                const color = bg === 'var(--cyan)' || bg === 'var(--pink)' ? '#fff' : 'var(--ink)';
                return (
                  <Link
                    key={cat.id}
                    href={`/categorias/${cat.slug}`}
                    className="block transition-transform hover:-translate-y-1 hover:-translate-x-1"
                    style={{
                      background: bg,
                      color,
                      border: 'var(--border-thick)',
                      boxShadow: 'var(--shadow)',
                      padding: 28,
                    }}
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 26, textTransform: 'uppercase', lineHeight: 1, margin: 0 }}>
                        {cat.name}
                      </h2>
                      <span style={{
                        background: isColored ? 'var(--ink)' : 'var(--magenta)',
                        color: '#fff',
                        fontFamily: 'var(--font-mono)',
                        fontSize: 12,
                        fontWeight: 700,
                        padding: '4px 8px',
                        flexShrink: 0,
                      }}>
                        {cat._count.posts}
                      </span>
                    </div>
                    {cat.description && (
                      <p style={{ fontSize: 14, lineHeight: 1.55, marginBottom: 14 }}>
                        {cat.description}
                      </p>
                    )}
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>
                      Ver artigos →
                    </span>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
