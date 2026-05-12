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
    description: author.bio || `Artigos de ${author.name}.`,
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
        include: { author: true, category: true },
      },
    },
  });
  if (!author) notFound();

  const initials = author.name
    .split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();

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
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      <section className="brutal-hero">
        <div className="container-x">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            {author.avatar ? (
              <img
                src={author.avatar}
                alt={author.name}
                style={{
                  width: 100, height: 100,
                  border: 'var(--border-thick)',
                  boxShadow: '6px 6px 0 0 var(--magenta)',
                  objectFit: 'cover',
                  transform: 'rotate(-3deg)',
                }}
              />
            ) : (
              <div
                className="grid place-items-center shrink-0"
                style={{
                  width: 100, height: 100,
                  background: 'var(--grad)',
                  border: 'var(--border-thick)',
                  color: '#fff',
                  fontFamily: 'var(--font-display)',
                  fontSize: 42,
                  boxShadow: '6px 6px 0 0 var(--magenta)',
                  transform: 'rotate(-3deg)',
                }}
              >
                {initials}
              </div>
            )}
            <div>
              <span className="eyebrow"><span className="dot" />Autor</span>
              <h1 style={{ marginTop: 12 }}>{author.name}<em>.</em></h1>
              <p style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase', fontSize: 12, letterSpacing: '0.1em' }}>
                Especialista em Vendas e CRM
              </p>
            </div>
          </div>
          {author.bio && <p className="mt-6 max-w-2xl">{author.bio}</p>}
        </div>
      </section>

      <section className="brutal-section">
        <div className="container-x">
          <span className="section-num">ARTIGOS</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', marginTop: 12, marginBottom: 32 }}>
            Por {author.name}.
          </h2>

          {author.posts.length === 0 ? (
            <p style={{ textAlign: 'center', padding: '48px 0', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', opacity: 0.6 }}>
              Nenhum artigo publicado.
            </p>
          ) : (
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
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
      </section>
    </>
  );
}
