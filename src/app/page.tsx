import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function Home() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    orderBy: { publishedAt: "desc" },
    take: 10,
    include: {
      author: true,
      category: true,
      tags: { include: { tag: true } },
    },
  });

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <section className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
          Blog de Conteudo
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Artigos e conteudos otimizados para voce encontrar as melhores
          respostas.
        </p>
      </section>

      {posts.length === 0 ? (
        <p className="text-gray-500">
          Nenhum artigo publicado ainda. Em breve teremos conteudo!
        </p>
      ) : (
        <section>
          <h2 className="text-2xl font-semibold mb-8">Ultimos Artigos</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post.id}
                className="border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <span className="bg-gray-100 px-2 py-0.5 rounded text-xs font-medium">
                    {post.category.name}
                  </span>
                  {post.publishedAt && (
                    <time dateTime={post.publishedAt.toISOString()}>
                      {new Intl.DateTimeFormat("pt-BR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      }).format(post.publishedAt)}
                    </time>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-gray-900 hover:text-blue-600"
                  >
                    {post.title}
                  </Link>
                </h3>
                {post.excerpt && (
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                )}
                <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
                  <span>Por {post.author.name}</span>
                  {post.tags.length > 0 && (
                    <>
                      <span>-</span>
                      {post.tags.map(({ tag }) => (
                        <span key={tag.id} className="text-blue-500">
                          #{tag.name}
                        </span>
                      ))}
                    </>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
