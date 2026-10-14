import React from 'react';

interface SectionHeadingProps {
  index: string;
  title: string;
  subtitle?: string;
  badge?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  index,
  title,
  subtitle,
  badge,
  align = 'left',
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <div
        className={`inline-flex items-center gap-2 mb-3.5 ${
          align === 'center' ? 'justify-center' : 'justify-start'
        }`}
      >
        <span className="font-mono text-xs text-[#C6FF4D] tracking-wider uppercase font-semibold">
          // {index}
        </span>
        <span className="w-8 h-[1px] bg-[#222622]" />
        {badge && (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wide bg-[#1E221E] text-[#9CA3AF] border border-[#2B332B]">
            {badge}
          </span>
        )}
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#F5F5F0] tracking-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-sm sm:text-base text-[#9CA3AF] max-w-2xl font-sans leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
