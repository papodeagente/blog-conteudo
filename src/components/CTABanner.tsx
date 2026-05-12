import Link from 'next/link';

interface CTABannerProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  variant: 'primary' | 'secondary';
}

export default function CTABanner({
  title,
  description,
  buttonText,
  buttonLink,
  variant,
}: CTABannerProps) {
  const bg = variant === 'primary' ? 'var(--ink)' : 'var(--pink)';
  const fg = variant === 'primary' ? 'var(--bg)' : '#fff';
  const btnClass = variant === 'primary' ? 'btn btn-pink' : 'btn btn-yellow';

  return (
    <div
      className="my-10 p-8 sm:p-10 relative overflow-hidden"
      style={{
        background: bg,
        color: fg,
        border: 'var(--border-thick)',
        boxShadow: 'var(--shadow-lg)',
      }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
        <div className="flex-1 min-w-0">
          <h3
            className="uppercase mb-3"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(24px, 3.4vw, 36px)',
              lineHeight: 1,
            }}
          >
            {title}
          </h3>
          <p style={{ fontSize: 16, opacity: 0.9, maxWidth: '60ch' }}>{description}</p>
        </div>
        <Link href={buttonLink} className={`${btnClass} sm:shrink-0 w-full sm:w-auto justify-center`}>
          {buttonText}
        </Link>
      </div>
    </div>
  );
}
