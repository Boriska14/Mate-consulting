import React from 'react';

interface MateLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'orange' | 'icon-only';
  layout?: 'horizontal' | 'stacked';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const MateLogo: React.FC<MateLogoProps> = ({
  className = '',
  variant = 'light',
  layout = 'horizontal',
  size = 'md',
  showSubtitle = false,
}) => {
  // Emblem dimensions matching the new MATE Consulting Brand Charter PDF
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  // Wordmark typography dimensions (Montserrat 800 for MATE, tracked CONSULTING)
  const titleSizes = {
    sm: 'text-[15px] leading-none',
    md: 'text-[22px] sm:text-[24px] leading-none',
    lg: 'text-3xl sm:text-4xl leading-none',
    xl: 'text-4xl sm:text-5xl leading-none',
  };

  const consultingSizes = {
    sm: 'text-[7px] tracking-[0.34em]',
    md: 'text-[9px] sm:text-[9.5px] tracking-[0.36em]',
    lg: 'text-xs tracking-[0.38em]',
    xl: 'text-sm tracking-[0.4em]',
  };

  // Official Brand Charter Palette (MATE_Consulting_Logo_et_charte_graphique)
  // Bleu marine: #0B1F3A | Orange: #F26B1D | Orange foncé (texte sur fond clair): #C2410C
  const isDark = variant === 'dark';
  const isOrange = variant === 'orange';

  const mateColor = isDark ? '#FFFFFF' : '#0B1F3A';
  const consultingColor = isDark ? '#F26B1D' : isOrange ? '#0B1F3A' : '#C2410C';

  // Icon colors according to Page 2 "Déclinaisons du logo"
  const badgeBg = isDark ? '#F26B1D' : '#0B1F3A';
  const leftLegColor = '#FFFFFF';
  const rightLegColor = isDark ? '#0B1F3A' : '#F26B1D';

  const renderEmblem = () => (
    <div className={`relative ${iconSizes[size]} shrink-0 flex items-center justify-center`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-hidden="true"
      >
        {/* Rounded Square Container */}
        <rect x="2" y="2" width="96" height="96" rx="22" fill={badgeBg} />

        {/* Ascending Growth Curve "M" - Left & Valley Leg */}
        <path
          d="M 24 68 L 24 41 L 46 58"
          stroke={leftLegColor}
          strokeWidth="10.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Ascending Growth Curve "M" - Rising Peak & Right Leg */}
        <path
          d="M 46 58 L 73 29 L 73 68"
          stroke={rightLegColor}
          strokeWidth="10.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );

  if (variant === 'icon-only') {
    return <div className={className}>{renderEmblem()}</div>;
  }

  if (layout === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center select-none ${className}`}>
        {renderEmblem()}

        <div className="mt-3 flex flex-col items-center">
          <span
            style={{ color: mateColor, fontFamily: "'Montserrat', sans-serif" }}
            className={`font-extrabold uppercase tracking-tight ${titleSizes[size]}`}
          >
            MATE
          </span>
          <span
            style={{ color: consultingColor }}
            className={`font-semibold uppercase mt-1 ${consultingSizes[size]}`}
          >
            CONSULTING
          </span>
        </div>

        {showSubtitle && (
          <div className="mt-3 pt-2.5 border-t-2 border-[#F26B1D] text-xs font-medium tracking-wide text-[#0B1F3A]">
            Votre gestion. Notre expertise. Votre performance.
          </div>
        )}
      </div>
    );
  }

  // Horizontal layout matching Page 1 & Page 2 of the Brand Charter PDF
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {renderEmblem()}

      <div className="flex flex-col justify-center">
        <span
          style={{ color: mateColor, fontFamily: "'Montserrat', sans-serif" }}
          className={`font-extrabold uppercase tracking-tight ${titleSizes[size]}`}
        >
          MATE
        </span>
        <span
          style={{ color: consultingColor }}
          className={`font-semibold uppercase mt-1 ${consultingSizes[size]}`}
        >
          CONSULTING
        </span>
      </div>
    </div>
  );
};
