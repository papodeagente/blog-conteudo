import Link from "next/link";
import { prisma } from "@/lib/prisma";
import PostCard from "@/components/PostCard";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [posts, categories] = await Promise.all([
    prisma.post.findMany({
      where: { published: true },
      orderBy: { publishedAt: "desc" },
      take: 8,
      include: {
        author: true,
        category: true,
      },
    }),
    prisma.category.findMany({
      orderBy: { name: "asc" },
    }),
  ]);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            O Portal de Vendas e CRM
            <br />
            <span className="text-[#10B981]">do Brasil</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Artigos, guias e estrategias para transformar seu processo comercial.
            Aprenda com especialistas e escale suas vendas.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#1A56DB] text-white font-semibold hover:bg-[#1E40AF] transition-colors"
            >
              Ver Artigos
            </Link>
            <Link
              href="/categorias"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border border-gray-600 text-gray-300 font-semibold hover:bg-white/10 transition-colors"
            >
              Explorar Categorias
            </Link>
          </div>
        </div>
      </section>

      {/* Ultimos Artigos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A]">
            Ultimos Artigos
          </h2>
          <Link
            href="/blog"
            className="text-sm font-semibold text-[#1A56DB] hover:text-[#1E40AF] transition-colors"
          >
            Ver todos &rarr;
          </Link>
        </div>

        {posts.length === 0 ? (
          <p className="text-gray-500 text-center py-12">
            Nenhum artigo publicado ainda. Em breve teremos conteudo!
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
      </section>

      {/* Categorias */}
      {categories.length > 0 && (
        <section className="bg-[#F8FAFC] border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-8 text-center">
              Categorias
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/categorias/${cat.slug}`}
                  className="px-5 py-2.5 rounded-full bg-white border border-gray-200 text-sm font-medium text-[#334155] hover:border-[#1A56DB] hover:text-[#1A56DB] transition-all shadow-sm"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
