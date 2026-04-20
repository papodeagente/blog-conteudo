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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
        Categorias
      </h1>
      <p className="text-[#334155] mb-10 max-w-2xl">
        Explore nossos artigos organizados por tema. Encontre conteudos sobre vendas, CRM, gestao comercial e muito mais.
      </p>

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
              className="group block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-[#1A56DB]/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-lg font-bold text-[#0F172A] group-hover:text-[#1A56DB] transition-colors">
                  {cat.name}
                </h2>
                <span className="bg-[#1A56DB]/10 text-[#1A56DB] text-xs font-bold px-2.5 py-1 rounded-full">
                  {cat._count.posts}
                </span>
              </div>
              {cat.description && (
                <p className="text-sm text-[#334155] line-clamp-2 leading-relaxed">
                  {cat.description}
                </p>
              )}
              <div className="mt-4 text-sm font-semibold text-[#1A56DB] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
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
  );
}
