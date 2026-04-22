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
    description:
      category.description ||
      `Artigos sobre ${category.name} no Escola de CRM.`,
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
          category: true,
        },
      },
    },
  });

  if (!category) notFound();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Categorias", href: "/categorias" },
          { name: category.name },
        ]}
      />

      <h1 className="text-3xl sm:text-4xl font-bold text-navy mb-3">
        {category.name}
      </h1>
      {category.description && (
        <p className="text-gray-600 mb-10 max-w-2xl">{category.description}</p>
      )}

      {category.posts.length === 0 ? (
        <p className="text-gray-500 text-center py-12">
          Nenhum artigo nesta categoria ainda.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
  );
}
