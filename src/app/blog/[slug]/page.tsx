import { notFound } from "next/navigation";
import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { extractHeadings, injectHeadingIds } from "@/lib/extract-headings";
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
import TableOfContents from "@/components/TableOfContents";
import NewsletterWidget from "@/components/NewsletterWidget";

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
      title, description, type: "article",
      publishedTime: post.publishedAt?.toISOString(),
      modifiedTime: post.updatedAt.toISOString(),
      authors: [post.author.name],
      section: post.category.name,
      locale: post.locale.replace("-", "_"),
      images: post.ogImage ? [{ url: post.ogImage }] : [],
    },
    twitter: { card: "summary_large_image", title, description, images: post.ogImage ? [post.ogImage] : [] },
    alternates: { canonical: post.canonicalUrl || `${siteUrl}/blog/${post.slug}` },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await prisma.post.findUnique({
    where: { slug, published: true },
    include: { author: true, category: true, tags: { include: { tag: true } } },
  });
  if (!post) notFound();

  const relatedPosts = await prisma.post.findMany({
    where: { published: true, categoryId: post.categoryId, id: { not: post.id } },
    orderBy: { publishedAt: "desc" },
    take: 3,
    include: { author: true, category: true },
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
  const faqData = post.faqSchema as { question: string; answer: string }[] | null;

  const wordCount = Math.ceil(post.content.length / 5);
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  const contentWithIds = injectHeadingIds(post.content);
  const headings = extractHeadings(contentWithIds);

  const contentParts = (() => {
    const thirdPoint = Math.floor(contentWithIds.length / 3);
    const splitIndex = contentWithIds.indexOf("</p>", thirdPoint);
    if (splitIndex !== -1) {
      const breakPoint = splitIndex + 4;
      return { first: contentWithIds.slice(0, breakPoint), second: contentWithIds.slice(breakPoint) };
    }
    return { first: contentWithIds, second: "" };
  })();

  const postUrl = `${siteUrl}/blog/${post.slug}`;

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqData && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqData)) }} />
      )}

      {/* HERO */}
      <section className="brutal-hero">
        <div className="container-x">
          <Breadcrumb
            items={[
              { name: "Home", href: "/" },
              { name: "Blog", href: "/blog" },
              { name: post.category.name, href: `/categorias/${post.category.slug}` },
              { name: post.title },
            ]}
          />
          <span className="eyebrow"><span className="dot" />{post.category.name}</span>
          <h1>{post.title}</h1>
          <div className="flex flex-wrap items-center gap-3 mt-4" style={{ fontFamily: 'var(--font-mono)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.85 }}>
            <span>Por {post.author.name}</span>
            {post.publishedAt && (
              <>
                <span style={{ color: 'var(--magenta)' }}>·</span>
                <time dateTime={post.publishedAt.toISOString()}>
                  {new Intl.DateTimeFormat("pt-BR", { day: "numeric", month: "long", year: "numeric" }).format(post.publishedAt)}
                </time>
              </>
            )}
            <span style={{ color: 'var(--magenta)' }}>·</span>
            <span>{readingTime} min</span>
          </div>
        </div>
      </section>

      {/* COVER */}
      {post.coverImage && (
        <div className="container-x" style={{ marginTop: -40, position: 'relative', zIndex: 2 }}>
          <div
            style={{
              border: 'var(--border-thick)',
              boxShadow: 'var(--shadow-lg)',
              background: 'var(--paper)',
              overflow: 'hidden',
              maxHeight: 520,
            }}
          >
            <img
              src={post.coverImage}
              alt={post.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', maxHeight: 520, display: 'block' }}
            />
          </div>
        </div>
      )}

      {/* CONTENT */}
      <section className="brutal-section">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-[64px_1fr_260px] gap-10">
            <aside className="hidden lg:block">
              <ShareButtons url={postUrl} title={post.title} />
            </aside>

            <div className="min-w-0">
              <div
                className="brutal-prose"
                dangerouslySetInnerHTML={{ __html: contentParts.first }}
              />

              <CTABanner
                variant="primary"
                title="Materiais Gratuitos"
                description="Acesse guias, planilhas e checklists para aplicar CRM e vendas no seu negocio."
                buttonText="Ver materiais"
                buttonLink="/materiais"
              />

              {contentParts.second && (
                <div
                  className="brutal-prose"
                  dangerouslySetInnerHTML={{ __html: contentParts.second }}
                />
              )}

              {post.tags.length > 0 && (
                <div className="mt-10 flex flex-wrap gap-2">
                  {post.tags.map(({ tag }) => (
                    <a key={tag.id} href={`/tags/${tag.slug}`} className="pill">
                      #{tag.name}
                    </a>
                  ))}
                </div>
              )}

              {faqData && faqData.length > 0 && (
                <section className="mt-14">
                  <span className="section-num">PERGUNTAS FREQUENTES</span>
                  <h2 className="section-title" style={{ fontSize: 'clamp(28px, 4vw, 44px)', marginTop: 12, marginBottom: 24 }}>
                    Duvidas comuns.
                  </h2>
                  <FAQAccordion items={faqData} />
                </section>
              )}

              {post.keyQuestions.length > 0 && (
                <section
                  className="mt-12"
                  style={{
                    background: 'var(--yellow)',
                    border: 'var(--border-thick)',
                    boxShadow: 'var(--shadow)',
                    padding: 28,
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 14 }}>
                    Perguntas respondidas
                  </div>
                  <ul className="space-y-3">
                    {post.keyQuestions.map((q, i) => (
                      <li key={i} className="flex gap-3" style={{ fontSize: 15 }}>
                        <span style={{ color: 'var(--magenta)', fontWeight: 800, flexShrink: 0 }}>▸</span>
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              <div className="lg:hidden mt-10 flex justify-center">
                <ShareButtons url={postUrl} title={post.title} />
              </div>

              <div className="mt-14">
                <AuthorBox name={post.author.name} bio={post.author.bio || ""} slug={post.author.slug} />
              </div>
            </div>

            <aside className="hidden lg:block">
              <div className="space-y-6">
                <TableOfContents headings={headings} />
                <NewsletterWidget />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="brutal-section" style={{ background: 'var(--paper)', borderTop: 'var(--border-thick)' }}>
          <div className="container-x">
            <span className="section-num">RELACIONADOS</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', marginTop: 12, marginBottom: 32 }}>
              Continue lendo.
            </h2>
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
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
          </div>
        </section>
      )}

      <section className="brutal-section newsletter-sec">
        <div className="container-x">
          <CTABanner
            variant="secondary"
            title="Vamos conversar?"
            description="Agende uma chamada de diagnostico — sem compromisso. Apresento como funciona a mentoria e se faz sentido pro seu momento."
            buttonText="Agendar chamada"
            buttonLink="/contato"
          />
        </div>
      </section>
    </article>
  );
}
