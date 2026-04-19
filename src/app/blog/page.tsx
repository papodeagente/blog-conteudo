import Link from "next/link";
import { Metadata } from "next";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Todos os Artigos",
  description: "Explore todos os artigos do Blog de Conteudo.",
};

export default async function BlogPage() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    orderBy: { publishedAt: "desc" },
    include: {
      author: true,
      category: true,
      tags: { include: { tag: true } },
    },
  });

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
        Todos os Artigos
      </h1>

      {posts.length === 0 ? (
        <p className="text-gray-500">Nenhum artigo publicado ainda.</p>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="border-b border-gray-100 pb-8 last:border-0"
            >
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
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
              <h2 className="text-xl font-semibold mb-2">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-gray-900 hover:text-blue-600"
                >
                  {post.title}
                </Link>
              </h2>
              {post.excerpt && (
                <p className="text-gray-600">{post.excerpt}</p>
              )}
              <div className="mt-3 flex items-center gap-2 text-xs text-gray-400">
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
      )}
    </div>
  );
}
