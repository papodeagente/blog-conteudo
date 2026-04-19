import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { prisma } from "@/lib/prisma";

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
    description:
      category.description ||
      `Artigos sobre ${category.name} no Blog de Conteudo.`,
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
        include: {
          author: true,
          tags: { include: { tag: true } },
        },
      },
    },
  });

  if (!category) notFound();

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">
        {category.name}
      </h1>
      {category.description && (
        <p className="text-gray-600 mb-8">{category.description}</p>
      )}

      {category.posts.length === 0 ? (
        <p className="text-gray-500">Nenhum artigo nesta categoria ainda.</p>
      ) : (
        <div className="space-y-8">
          {category.posts.map((post) => (
            <article
              key={post.id}
              className="border-b border-gray-100 pb-8 last:border-0"
            >
              <div className="text-sm text-gray-500 mb-2">
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
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
