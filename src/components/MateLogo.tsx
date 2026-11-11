import React from 'react';

interface MateLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'orange' | 'icon-only';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
}

export const MateLogo: React.FC<MateLogoProps> = ({
  className = '',
  variant = 'light',
  size = 'md',
  showTagline = false,
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  };

  const titleSizes = {
    sm: 'text-base tracking-[0.08em]',
    md: 'text-xl tracking-[0.1em]',
    lg: 'text-2xl sm:text-3xl tracking-[0.12em]',
    xl: 'text-4xl tracking-[0.14em]',
  };

  const subSizes = {
    sm: 'text-[8px] tracking-[0.28em]',
    md: 'text-[10px] tracking-[0.32em]',
    lg: 'text-xs tracking-[0.36em]',
    xl: 'text-sm tracking-[0.4em]',
  };

  const textColor = variant === 'dark' ? 'text-white' : 'text-[#153258]';
  const subtitleColor = variant === 'dark' ? 'text-[#E2672F]' : variant === 'orange' ? 'text-[#0E1E37]' : 'text-[#C04A1A]';
  const taglineColor = variant === 'dark' ? 'text-slate-300' : 'text-[#5B84B1]';

  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      {/* Precision Emblem: Growth Chart Bars with Arrow transforming into an Optimization Wrench */}
      <div className={`relative ${iconSizes[size]} shrink-0 flex items-center justify-center`}>
        <svg
          viewBox="0 0 120 110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-xs"
        >
          {/* Ground baseline */}
          <rect x="8" y="96" width="104" height="3" rx="1.5" fill="#5B84B1" opacity="0.7" />

          {/* Bar 1 (light blue) */}
          <rect x="16" y="70" width="16" height="26" rx="2" fill="#8EA8C7" />

          {/* Bar 2 (medium-light blue) */}
          <rect x="38" y="56" width="16" height="40" rx="2" fill="#698BB4" />

          {/* Bar 3 (medium data blue) */}
          <rect x="60" y="42" width="16" height="54" rx="2" fill="#3D6898" />

          {/* Bar 4 (deep navy brand blue) */}
          <rect x="82" y="24" width="18" height="72" rx="2" fill="#153258" />

          {/* Ascending Trend Arrow (Orange Adobe #C04A1A) */}
          <path
            d="M 12 84 L 38 60 L 52 66 L 86 28"
            stroke="#C04A1A"
            strokeWidth="5.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Pivot points on the graph line */}
          <circle cx="12" cy="84" r="4" fill="#C04A1A" />
          <circle cx="38" cy="60" r="4" fill="#C04A1A" />
          <circle cx="52" cy="66" r="4" fill="#C04A1A" />

          {/* Stylized Open-End Mechanic Wrench at Apex of the Growth Line */}
          <g transform="translate(80, 5) rotate(22 15 15)">
            {/* Wrench outer body */}
            <path
              d="M 15 1 C 8 1 2 6 1 13 C 4 13 7 15 7 19 C 7 23 4 25 1 25 C 2 32 8 37 15 37 C 22 37 28 32 29 25 L 23 25 C 21 23 21 15 23 13 L 29 13 C 28 6 22 1 15 1 Z"
              fill="#C04A1A"
            />
            {/* Wrench Jaw Inner Cutout */}
            <circle cx="15" cy="19" r="6" fill={variant === 'dark' ? '#0E1E37' : '#F6F1E9'} />
            <polygon
              points="14,14 26,14 26,24 14,24"
              fill={variant === 'dark' ? '#0E1E37' : '#F6F1E9'}
            />
          </g>
        </svg>
      </div>

      {/* Brand Wordmark */}
      {variant !== 'icon-only' && (
        <div className="flex flex-col leading-none select-none">
          <div className="flex items-baseline gap-1.5">
            <span className={`font-black ${titleSizes[size]} ${textColor} font-sans uppercase`}>
              MATE
            </span>
            <span className={`font-black ${titleSizes[size]} ${subtitleColor} font-sans uppercase`}>
              CONSULTING
            </span>
          </div>

          <span className={`font-bold ${subSizes[size]} ${subtitleColor} uppercase tracking-[0.3em] font-sans mt-0.5`}>
            PILOTAGE FINANCIER
          </span>

          {showTagline && (
            <span className={`text-[10px] uppercase tracking-[0.2em] font-semibold ${taglineColor} mt-1`}>
              Data · Optimisation · Croissance
            </span>
          )}
        </div>
      )}
    </div>
  );
};
