import Link from "next/link";
import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import PostCard from "@/components/PostCard";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Todos os Artigos",
  description: "Explore todos os artigos do Blog de Conteudo.",
};

interface Props {
  searchParams: Promise<{ category?: string }>;
}

export default async function BlogPage({ searchParams }: Props) {
  const { category } = await searchParams;

  const where: Record<string, unknown> = { published: true };
  if (category) {
    where.category = { slug: category };
  }

  const [posts, categories, activeCategory] = await Promise.all([
    prisma.post.findMany({
      where,
      orderBy: { publishedAt: "desc" },
      include: {
        author: true,
        category: true,
      },
    }),
    prisma.category.findMany({ orderBy: { name: "asc" } }),
    category
      ? prisma.category.findUnique({ where: { slug: category } })
      : null,
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
        {activeCategory ? activeCategory.name : "Todos os Artigos"}
      </h1>

      {/* Category filter pills */}
      {categories.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-10">
          <Link
            href="/blog"
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              !category
                ? "bg-[#1A56DB] text-white"
                : "bg-gray-100 text-[#334155] hover:bg-gray-200"
            }`}
          >
            Todos
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/blog?category=${cat.slug}`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === cat.slug
                  ? "bg-[#1A56DB] text-white"
                  : "bg-gray-100 text-[#334155] hover:bg-gray-200"
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      )}

      {posts.length === 0 ? (
        <p className="text-gray-500 text-center py-12">
          Nenhum artigo encontrado.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
  );
}
