import Link from "next/link";
import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import PostCard from "@/components/PostCard";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog",
  description: "Conteudos praticos sobre CRM, vendas e gestao comercial.",
};

interface Props {
  searchParams: Promise<{ category?: string }>;
}

export default async function BlogPage({ searchParams }: Props) {
  const { category } = await searchParams;

  const where: Record<string, unknown> = { published: true };
  if (category) where.category = { slug: category };

  const [posts, categories, activeCategory] = await Promise.all([
    prisma.post.findMany({
      where,
      orderBy: { publishedAt: "desc" },
      include: { author: true, category: true },
    }),
    prisma.category.findMany({ orderBy: { name: "asc" } }),
    category ? prisma.category.findUnique({ where: { slug: category } }) : null,
  ]);

  return (
    <>
      <section className="brutal-hero">
        <div className="container-x">
          <span className="eyebrow"><span className="dot" />Conteudo aberto</span>
          <h1>
            {activeCategory ? activeCategory.name : <>Todos os <em>artigos.</em></>}
          </h1>
          <p>Conteudos praticos sobre CRM, vendas e gestao comercial — sem teoria de LinkedIn.</p>
        </div>
      </section>

      <section className="brutal-section">
        <div className="container-x">
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-10">
              <Link href="/blog" className={`pill ${!category ? 'active' : ''}`}>Todos</Link>
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/blog?category=${cat.slug}`}
                  className={`pill ${category === cat.slug ? 'active' : ''}`}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          )}

          {posts.length === 0 ? (
            <p style={{ textAlign: 'center', padding: '48px 0', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', opacity: 0.6 }}>
              Nenhum artigo encontrado.
            </p>
          ) : (
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <PostCard
                  key={post.id}
                  title={post.title}
                  slug={post.slug}
                  excerpt={post.excerpt || ""}
                  coverImage={post.coverImage || undefined}
                  publishedAt={post.publishedAt?.toISOString() || post.createdAt.toISOString()}
                  authorName={post.author.name}
                  categoryName={post.category.name}
                  categorySlug={post.category.slug}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
