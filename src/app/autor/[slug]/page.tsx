import { notFound } from "next/navigation";
import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import PostCard from "@/components/PostCard";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ slug: string }>;
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const author = await prisma.author.findUnique({ where: { slug } });
  if (!author) return {};

  return {
    title: author.name,
    description: author.bio || `Artigos de ${author.name} no Escola de CRM.`,
  };
}

export default async function AuthorPage({ params }: Props) {
  const { slug } = await params;
  const author = await prisma.author.findUnique({
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

  if (!author) notFound();

  const initials = author.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    url: `${siteUrl}/autor/${author.slug}`,
    description: author.bio || undefined,
    email: author.email || undefined,
    jobTitle: "Especialista em Vendas e CRM",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* Author Profile Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        {author.avatar ? (
          <img
            src={author.avatar}
            alt={author.name}
            className="w-28 h-28 rounded-full object-cover mx-auto mb-6 border-4 border-white shadow-lg"
          />
        ) : (
          <div className="w-28 h-28 rounded-full bg-navy flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-lg">
            {initials}
          </div>
        )}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy mb-2">
          {author.name}
        </h1>
        <p className="text-gold font-semibold mb-4">
          Especialista em Vendas e CRM
        </p>
        {author.bio && (
          <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
            {author.bio}
          </p>
        )}
        {author.email && (
          <a
            href={`mailto:${author.email}`}
            className="inline-block mt-4 text-sm text-gold hover:text-gold-light transition-colors"
          >
            {author.email}
          </a>
        )}
      </div>

      {/* Author Posts */}
      <div>
        <h2 className="text-2xl font-bold text-navy mb-8">
          Artigos de {author.name}
        </h2>

        {author.posts.length === 0 ? (
          <p className="text-gray-500 text-center py-12">
            Nenhum artigo publicado por este autor ainda.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {author.posts.map((post) => (
              <PostCard
                key={post.id}
                title={post.title}
                slug={post.slug}
                excerpt={post.excerpt || ""}
                coverImage={post.coverImage || undefined}
                publishedAt={post.publishedAt?.toISOString() || post.createdAt.toISOString()}
                authorName={author.name}
                categoryName={post.category.name}
                categorySlug={post.category.slug}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
