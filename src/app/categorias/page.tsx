import Link from "next/link";
import { Metadata } from "next";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Categorias",
  description: "Explore artigos por categoria no Escola de CRM.",
};

export default async function CategoriasPage() {
  const categories = await prisma.category.findMany({
    include: {
      _count: { select: { posts: { where: { published: true } } } },
    },
    orderBy: { name: "asc" },
  });

  return (
    <div>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Explore por{" "}
              <span className="font-serif italic font-normal text-gold">
                Categoria
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Nossos artigos organizados por tema. Encontre conteudos sobre
              vendas, CRM, gestao comercial e muito mais.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {categories.length === 0 ? (
          <p className="text-gray-500 text-center py-12">
            Nenhuma categoria criada ainda.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/categorias/${cat.slug}`}
                className="group block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-gold/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h2 className="text-lg font-bold text-navy group-hover:text-gold transition-colors">
                    {cat.name}
                  </h2>
                  <span className="bg-emerald/10 text-emerald text-xs font-bold px-2.5 py-1 rounded-full">
                    {cat._count.posts}
                  </span>
                </div>
                {cat.description && (
                  <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                    {cat.description}
                  </p>
                )}
                <div className="mt-4 text-sm font-semibold text-gold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver artigos
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
