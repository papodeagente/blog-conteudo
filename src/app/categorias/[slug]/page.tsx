import { notFound } from "next/navigation";
import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import Breadcrumb from "@/components/Breadcrumb";
import PostCard from "@/components/PostCard";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = await prisma.category.findUnique({ where: { slug } });
  if (!category) return {};
  return {
    title: category.name,
    description: category.description || `Artigos sobre ${category.name}.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = await prisma.category.findUnique({
    where: { slug },
    include: {
      posts: {
        where: { published: true },
        orderBy: { publishedAt: "desc" },
        include: { author: true, category: true },
      },
    },
  });
  if (!category) notFound();

  return (
    <>
      <section className="brutal-hero">
        <div className="container-x">
          <Breadcrumb
            items={[
              { name: "Home", href: "/" },
              { name: "Categorias", href: "/categorias" },
              { name: category.name },
            ]}
          />
          <span className="eyebrow"><span className="dot" />Categoria</span>
          <h1>{category.name}<em>.</em></h1>
          {category.description && <p>{category.description}</p>}
        </div>
      </section>

      <section className="brutal-section">
        <div className="container-x">
          {category.posts.length === 0 ? (
            <p style={{ textAlign: 'center', padding: '48px 0', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', opacity: 0.6 }}>
              Nenhum artigo nesta categoria.
            </p>
          ) : (
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {category.posts.map((post) => (
                <PostCard
                  key={post.id}
                  title={post.title}
                  slug={post.slug}
                  excerpt={post.excerpt || ""}
                  coverImage={post.coverImage || undefined}
                  publishedAt={post.publishedAt?.toISOString() || post.createdAt.toISOString()}
                  authorName={post.author.name}
                  categoryName={category.name}
                  categorySlug={category.slug}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
