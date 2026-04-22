import type { ReactNode } from 'react';

interface CalloutBlockProps {
  type: 'tip' | 'warning' | 'example';
  title: string;
  children: ReactNode;
}

const config = {
  tip: {
    borderColor: 'border-l-[#10B981]',
    bgColor: 'bg-[#10B981]/5',
    titleColor: 'text-[#10B981]',
    icon: (
      <svg className="w-5 h-5 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  warning: {
    borderColor: 'border-l-[#F59E0B]',
    bgColor: 'bg-[#F59E0B]/5',
    titleColor: 'text-[#F59E0B]',
    icon: (
      <svg className="w-5 h-5 text-[#F59E0B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  example: {
    borderColor: 'border-l-navy',
    bgColor: 'bg-navy/5',
    titleColor: 'text-navy',
    icon: (
      <svg className="w-5 h-5 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
};

export default function CalloutBlock({ type, title, children }: CalloutBlockProps) {
  const { borderColor, bgColor, titleColor, icon } = config[type];

  return (
    <div className={`${bgColor} ${borderColor} border-l-4 rounded-r-lg p-5 my-6`}>
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <span className={`text-sm font-bold ${titleColor}`}>{title}</span>
      </div>
      <div className="text-sm text-gray-600 leading-relaxed">
        {children}
      </div>
    </div>
  );
}
