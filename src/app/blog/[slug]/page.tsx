import { notFound } from "next/navigation";
import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/structured-data";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";
import ShareButtons from "@/components/ShareButtons";
import FAQAccordion from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";
import PostCard from "@/components/PostCard";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-dynamic";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await prisma.post.findUnique({
    where: { slug },
    include: { author: true, category: true },
  });

  if (!post) return {};

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

  // Related posts: same category, exclude current
  const relatedPosts = await prisma.post.findMany({
    where: {
      published: true,
      categoryId: post.categoryId,
      id: { not: post.id },
    },
    orderBy: { publishedAt: "desc" },
    take: 3,
    include: {
      author: true,
      category: true,
    },
  });

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

  // Estimated reading time
  const wordCount = Math.ceil(post.content.length / 5);
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  // Split content for mid-article CTA
  const contentParts = (() => {
    const thirdPoint = Math.floor(post.content.length / 3);
    // Find a closing tag near the 1/3 mark
    const splitIndex = post.content.indexOf("</p>", thirdPoint);
    if (splitIndex !== -1) {
      const breakPoint = splitIndex + 4;
      return {
        first: post.content.slice(0, breakPoint),
        second: post.content.slice(breakPoint),
      };
    }
    return { first: post.content, second: "" };
  })();

  const postUrl = `${siteUrl}/blog/${post.slug}`;

  return (
    <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
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

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: post.category.name, href: `/categorias/${post.category.slug}` },
          { name: post.title },
        ]}
      />

      {/* Header */}
      <header className="max-w-3xl mx-auto mb-10">
        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[#1A56DB]/10 text-[#1A56DB] mb-4">
          {post.category.name}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] leading-tight mb-4">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-[#334155]">
          <span className="font-medium">{post.author.name}</span>
          {post.publishedAt && (
            <>
              <span className="text-gray-300">|</span>
              <time dateTime={post.publishedAt.toISOString()}>
                {new Intl.DateTimeFormat("pt-BR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }).format(post.publishedAt)}
              </time>
            </>
          )}
          <span className="text-gray-300">|</span>
          <span>{readingTime} min de leitura</span>
        </div>
      </header>

      {/* Cover Image */}
      {post.coverImage && (
        <div className="max-w-4xl mx-auto mb-10">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full rounded-xl object-cover max-h-[480px]"
          />
        </div>
      )}

      {/* Three-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[64px_1fr_240px] gap-8 max-w-5xl mx-auto">
        {/* Left: Share Buttons (sticky) */}
        <aside className="hidden lg:block">
          <ShareButtons url={postUrl} title={post.title} />
        </aside>

        {/* Center: Content */}
        <div>
          {/* First part of content */}
          <div
            className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-[#0F172A] prose-a:text-[#1A56DB] prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg"
            dangerouslySetInnerHTML={{ __html: contentParts.first }}
          />

          {/* Mid-article CTA */}
          <CTABanner
            variant="primary"
            title="Materiais Gratuitos da Escola de CRM"
            description="Acesse guias, planilhas e checklists para aplicar CRM e vendas no seu negocio."
            buttonText="Ver Materiais"
            buttonLink="/materiais"
          />

          {/* Second part of content */}
          {contentParts.second && (
            <div
              className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-[#0F172A] prose-a:text-[#1A56DB] prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg"
              dangerouslySetInnerHTML={{ __html: contentParts.second }}
            />
          )}

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-10 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {post.tags.map(({ tag }) => (
                  <a
                    key={tag.id}
                    href={`/tags/${tag.slug}`}
                    className="bg-gray-100 text-[#334155] px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    #{tag.name}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* FAQ Section */}
          {faqData && faqData.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-[#0F172A] mb-6">
                Perguntas Frequentes
              </h2>
              <FAQAccordion items={faqData} />
            </section>
          )}

          {/* Key Questions */}
          {post.keyQuestions.length > 0 && (
            <section className="mt-12 bg-[#F8FAFC] rounded-xl p-6 border border-gray-200">
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">
                Perguntas respondidas neste artigo
              </h2>
              <ul className="space-y-3">
                {post.keyQuestions.map((q, i) => (
                  <li key={i} className="flex gap-3 text-[#334155]">
                    <span className="text-[#1A56DB] font-bold shrink-0">?</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Mobile Share Buttons */}
          <div className="lg:hidden mt-8 flex justify-center">
            <div className="flex gap-3">
              <ShareButtons url={postUrl} title={post.title} />
            </div>
          </div>

          {/* Author Box */}
          <div className="mt-12">
            <AuthorBox
              name={post.author.name}
              bio={post.author.bio || ""}
              slug={post.author.slug}
            />
          </div>
        </div>

        {/* Right: Sidebar (TOC placeholder) */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 bg-[#F8FAFC] rounded-xl p-5 border border-gray-200">
            <h4 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider mb-3">
              Neste artigo
            </h4>
            <p className="text-xs text-gray-400">
              Indice de conteudo em breve.
            </p>
          </div>
        </aside>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="max-w-5xl mx-auto mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-8">
            Artigos Relacionados
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((related) => (
              <PostCard
                key={related.id}
                title={related.title}
                slug={related.slug}
                excerpt={related.excerpt || ""}
                coverImage={related.coverImage || undefined}
                publishedAt={related.publishedAt?.toISOString() || related.createdAt.toISOString()}
                authorName={related.author.name}
                categoryName={related.category.name}
                categorySlug={related.category.slug}
              />
            ))}
          </div>
        </section>
      )}

      {/* Final CTA */}
      <div className="max-w-3xl mx-auto mt-12">
        <CTABanner
          variant="secondary"
          title="Pronto para escalar suas vendas?"
          description="Acesse nossos guias, planilhas e materiais gratuitos para dominar vendas e CRM."
          buttonText="Comecar Teste Gratis"
          buttonLink="#"
        />
      </div>
    </article>
  );
}
