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
  const bgClass = variant === 'primary' ? 'bg-navy' : 'bg-emerald';
  const btnClass =
    variant === 'primary'
      ? 'border-2 border-gold text-gold hover:bg-gold/10'
      : 'bg-navy text-white hover:bg-navy-light';

  return (
    <div className={`${bgClass} rounded-xl px-4 py-6 sm:px-10 sm:py-10 text-center sm:text-left my-8 overflow-hidden`}>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl font-bold text-white">{title}</h3>
          <p className="mt-2 text-white/90 text-sm sm:text-base">{description}</p>
        </div>
        <Link
          href={buttonLink}
          className={`${btnClass} inline-flex items-center px-6 py-3 rounded-lg font-semibold text-sm transition-colors sm:shrink-0 w-full sm:w-auto justify-center`}
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}
