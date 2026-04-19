import Link from "next/link";
import { Metadata } from "next";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Categorias",
  description: "Explore artigos por categoria no Blog de Conteudo.",
};

export default async function CategoriasPage() {
  const categories = await prisma.category.findMany({
    include: {
      _count: { select: { posts: { where: { published: true } } } },
    },
    orderBy: { name: "asc" },
  });

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
        Categorias
      </h1>

      {categories.length === 0 ? (
        <p className="text-gray-500">Nenhuma categoria criada ainda.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/categorias/${cat.slug}`}
              className="border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <h2 className="text-lg font-semibold text-gray-900">
                {cat.name}
              </h2>
              {cat.description && (
                <p className="text-gray-600 text-sm mt-1">{cat.description}</p>
              )}
              <p className="text-sm text-gray-400 mt-3">
                {cat._count.posts} artigo{cat._count.posts !== 1 && "s"}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
