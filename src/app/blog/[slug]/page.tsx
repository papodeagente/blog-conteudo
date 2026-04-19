import { notFound } from "next/navigation";
import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/structured-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await prisma.post.findUnique({
    where: { slug },
    include: { author: true, category: true },
  });

  if (!post) return {};

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const title = post.metaTitle || post.title;
  const description = post.metaDescription || post.excerpt || "";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.publishedAt?.toISOString(),
      modifiedTime: post.updatedAt.toISOString(),
      authors: [post.author.name],
      section: post.category.name,
      locale: post.locale.replace("-", "_"),
      images: post.ogImage ? [{ url: post.ogImage }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: post.ogImage ? [post.ogImage] : [],
    },
    alternates: {
      canonical: post.canonicalUrl || `${siteUrl}/blog/${post.slug}`,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await prisma.post.findUnique({
    where: { slug, published: true },
    include: {
      author: true,
      category: true,
      tags: { include: { tag: true } },
    },
  });

  if (!post) notFound();

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.metaDescription || post.excerpt || "",
    slug: post.slug,
    publishedAt: post.publishedAt?.toISOString() || post.createdAt.toISOString(),
    updatedAt: post.updatedAt.toISOString(),
    authorName: post.author.name,
    coverImage: post.coverImage || undefined,
    category: post.category.name,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: post.category.name, url: `/categorias/${post.category.slug}` },
    { name: post.title, url: `/blog/${post.slug}` },
  ]);

  const faqData = post.faqSchema as
    | { question: string; answer: string }[]
    | null;

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateFAQSchema(faqData)),
          }}
        />
      )}

      <nav className="text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
        <ol className="flex gap-2">
          <li>
            <a href="/" className="hover:text-gray-700">
              Home
            </a>
          </li>
          <li>/</li>
          <li>
            <a
              href={`/categorias/${post.category.slug}`}
              className="hover:text-gray-700"
            >
              {post.category.name}
            </a>
          </li>
          <li>/</li>
          <li className="text-gray-900">{post.title}</li>
        </ol>
      </nav>

      <header className="mb-10">
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
          <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-xs font-medium">
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
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
          {post.title}
        </h1>
        {post.excerpt && (
          <p className="text-xl text-gray-600 leading-relaxed">
            {post.excerpt}
          </p>
        )}
        <div className="mt-4 flex items-center gap-3 text-sm text-gray-500">
          <span>Por {post.author.name}</span>
        </div>
      </header>

      {post.coverImage && (
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full rounded-lg mb-10"
        />
      )}

      <div
        className="prose prose-lg max-w-none prose-headings:font-semibold prose-a:text-blue-600"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {post.tags.length > 0 && (
        <div className="mt-12 pt-6 border-t border-gray-100">
          <div className="flex flex-wrap gap-2">
            {post.tags.map(({ tag }) => (
              <a
                key={tag.id}
                href={`/tags/${tag.slug}`}
                className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm hover:bg-gray-200"
              >
                #{tag.name}
              </a>
            ))}
          </div>
        </div>
      )}

      {post.keyQuestions.length > 0 && (
        <section className="mt-12 bg-blue-50 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Perguntas respondidas neste artigo
          </h2>
          <ul className="space-y-2">
            {post.keyQuestions.map((q, i) => (
              <li key={i} className="text-gray-700 flex gap-2">
                <span className="text-blue-500 font-bold">?</span>
                {q}
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
