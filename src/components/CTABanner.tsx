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
  const bgClass = variant === 'primary' ? 'bg-[#1A56DB]' : 'bg-[#10B981]';
  const btnClass =
    variant === 'primary'
      ? 'bg-white text-[#1A56DB] hover:bg-gray-100'
      : 'bg-white text-[#10B981] hover:bg-gray-100';

  return (
    <div className={`${bgClass} rounded-xl px-6 py-8 sm:px-10 sm:py-10 text-center sm:text-left`}>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl font-bold text-white">{title}</h3>
          <p className="mt-2 text-white/90 text-sm sm:text-base">{description}</p>
        </div>
        <Link
          href={buttonLink}
          className={`${btnClass} inline-flex items-center px-6 py-3 rounded-lg font-semibold text-sm transition-colors shrink-0`}
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}
