import Link from 'next/link';
import Image from 'next/image';

interface PostCardProps {
  title: string;
  slug: string;
  excerpt: string;
  categoryName: string;
  categorySlug: string;
  authorName: string;
  publishedAt: string;
  coverImage?: string;
}

export default function PostCard({
  title,
  slug,
  excerpt,
  categoryName,
  categorySlug,
  authorName,
  publishedAt,
  coverImage,
}: PostCardProps) {
  const formattedDate = new Date(publishedAt).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return (
    <article className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link href={`/blog/${slug}`} className="block">
        {coverImage ? (
          <div className="relative aspect-video">
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ) : (
          <div className="aspect-video bg-[#F8FAFC] flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.41a2.25 2.25 0 013.182 0l2.909 2.91m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
          </div>
        )}
      </Link>

      <div className="p-5">
        <Link
          href={`/categorias/${categorySlug}`}
          className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[#1A56DB]/10 text-[#1A56DB] hover:bg-[#1A56DB]/20 transition-colors"
        >
          {categoryName}
        </Link>

        <Link href={`/blog/${slug}`} className="block mt-3">
          <h2 className="text-lg font-bold text-[#0F172A] leading-snug hover:text-[#1A56DB] transition-colors line-clamp-2">
            {title}
          </h2>
        </Link>

        <p className="mt-2 text-sm text-[#334155] line-clamp-2">
          {excerpt}
        </p>

        <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
          <span className="font-medium">{authorName}</span>
          <time dateTime={publishedAt}>{formattedDate}</time>
        </div>
      </div>
    </article>
  );
}
