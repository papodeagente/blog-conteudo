import Link from "next/link";

interface PostCardProps {
  title: string;
  slug: string;
  excerpt: string;
  coverImage?: string;
  publishedAt: string;
  authorName: string;
  categoryName: string;
  categorySlug: string;
}

export default function PostCard({
  title,
  slug,
  coverImage,
  publishedAt,
  categoryName,
}: PostCardProps) {
  const date = new Date(publishedAt);
  const formatted = new Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);

  return (
    <Link href={`/blog/${slug}`} className="post-card-b">
      <div className="cover">
        {coverImage ? (
          <img src={coverImage} alt={title} />
        ) : (
          <div style={{ width: '100%', height: '100%', background: 'var(--ink)' }} />
        )}
      </div>
      <div className="body">
        <span className="cat">{categoryName}</span>
        <h3>{title}</h3>
        <div className="meta">{formatted}</div>
      </div>
    </Link>
  );
}
