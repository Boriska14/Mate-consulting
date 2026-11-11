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
  // Emblem dimensions
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  // Typography dimensions
  const titleSizes = {
    sm: 'text-base',
    md: 'text-xl sm:text-2xl',
    lg: 'text-3xl sm:text-4xl',
    xl: 'text-4xl sm:text-5xl',
  };

  const sublineSizes = {
    sm: 'text-[7.5px] tracking-[0.2em]',
    md: 'text-[9px] sm:text-[10px] tracking-[0.24em]',
    lg: 'text-xs tracking-[0.28em]',
    xl: 'text-sm tracking-[0.32em]',
  };

  const pillarSizes = {
    sm: 'text-[7px] tracking-[0.25em]',
    md: 'text-[8.5px] sm:text-[9.5px] tracking-[0.3em]',
    lg: 'text-xs tracking-[0.35em]',
    xl: 'text-sm tracking-[0.38em]',
  };

  // Palette according to MATE Consulting official brand book
  // Bleu Classique: #153258, Orange Adobe: #C04A1A, Bleu Nuit: #0E1E37, Orange Vif: #E2672F, Bleu Données: #5B84B1
  const mateColor = variant === 'dark' ? '#FFFFFF' : '#153258';
  const consultingColor = variant === 'dark' ? '#E2672F' : variant === 'orange' ? '#0E1E37' : '#C04A1A';
  const ruleLineColor = variant === 'dark' ? '#5B84B1' : '#5B84B1';
  const subtextColor = variant === 'dark' ? '#BDCFE2' : '#5B84B1';
  const pillarsColor = variant === 'dark' ? '#FFFFFF' : '#153258';

  // Exact vector reproduction of the emblem from the PPTX
  const renderEmblem = () => (
    <div className={`relative ${iconSizes[size]} shrink-0 flex items-center justify-center`}>
      <svg
        viewBox="0 0 110 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Baseline footer bar (Bleu Données) */}
        <rect x="6" y="88" width="98" height="3" rx="1.5" fill="#5B84B1" opacity="0.85" />

        {/* 4 Graduated Bar Charts (from light blue to classic navy) */}
        {/* Bar 1: Lightest Blue */}
        <rect x="14" y="66" width="16" height="22" rx="1.5" fill="#B4C7DF" />

        {/* Bar 2: Soft Blue */}
        <rect x="34" y="52" width="16" height="36" rx="1.5" fill="#7FA3CB" />

        {/* Bar 3: Bleu Données */}
        <rect x="54" y="38" width="16" height="50" rx="1.5" fill="#5B84B1" />

        {/* Bar 4: Bleu Classique (Tallest) */}
        <rect x="74" y="22" width="16" height="66" rx="1.5" fill="#153258" />

        {/* Dynamic Trajectory Line (Orange Adobe #C04A1A) */}
        <path
          d="M 9 76 L 22 56 L 33 63 L 73 22"
          stroke="#C04A1A"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Pivot Nodes along the trajectory line */}
        <circle cx="9" cy="76" r="3.2" fill="#C04A1A" />
        <circle cx="22" cy="56" r="3.2" fill="#C04A1A" />
        <circle cx="33" cy="63" r="3.2" fill="#C04A1A" />

        {/* Mechanic Optimization Spanner / Wrench at the Top (Identical to PPTX Page 1 & 3) */}
        <g transform="translate(68, 5) rotate(24 16 16)">
          {/* Main wrench head profile with open hex jaw */}
          <path
            d="M 16 2 C 9 2 4 7 3 13 C 6 13 8.5 15 8.5 18 C 8.5 21 6 23 3 23 C 4 29 9 34 16 34 C 23 34 28 29 29 23 L 23 23 C 21 21 21 15 23 13 L 29 13 C 28 7 23 2 16 2 Z"
            fill="#C04A1A"
          />
          {/* Inner cutout jaw */}
          <circle cx="16" cy="18" r="5" fill={variant === 'dark' ? '#0E1E37' : variant === 'orange' ? '#C04A1A' : '#F6F1E9'} />
          <polygon
            points="14,13 25,13 25,23 14,23"
            fill={variant === 'dark' ? '#0E1E37' : variant === 'orange' ? '#C04A1A' : '#F6F1E9'}
          />
        </g>
      </svg>
    </div>
  );

  if (variant === 'icon-only') {
    return <div className={className}>{renderEmblem()}</div>;
  }

  // STACKED LAYOUT (matching Slide 1 of the PPTX presentation)
  if (layout === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center select-none ${className}`}>
        {renderEmblem()}

        {/* MATE CONSULTING */}
        <div className="mt-4 flex items-center justify-center gap-2 font-black uppercase tracking-tight">
          <span style={{ color: mateColor }} className={titleSizes[size]}>
            MATE
          </span>
          <span style={{ color: consultingColor }} className={titleSizes[size]}>
            CONSULTING
          </span>
        </div>

        {/* EXTERNALISATION DU PILOTAGE FINANCIER (Framed with thin rules) */}
        <div className="w-full max-w-md mt-3 flex items-center justify-center gap-3">
          <div className="h-[1px] flex-1" style={{ backgroundColor: ruleLineColor, opacity: 0.4 }} />
          <span
            style={{ color: subtextColor }}
            className={`font-semibold uppercase whitespace-nowrap ${sublineSizes[size]}`}
          >
            EXTERNALISATION DU PILOTAGE FINANCIER
          </span>
          <div className="h-[1px] flex-1" style={{ backgroundColor: ruleLineColor, opacity: 0.4 }} />
        </div>

        {/* DATA · OPTIMISATION · CROISSANCE */}
        <div
          style={{ color: pillarsColor }}
          className={`mt-2 font-bold uppercase ${pillarSizes[size]}`}
        >
          <span>DATA</span>
          <span className="mx-2 opacity-60">·</span>
          <span>OPTIMISATION</span>
          <span className="mx-2 opacity-60">·</span>
          <span>CROISSANCE</span>
        </div>
      </div>
    );
  }

  // HORIZONTAL LAYOUT (matching Slide 3 of the PPTX for Navbars & Cards)
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {renderEmblem()}

      <div className="flex flex-col leading-none">
        {/* Wordmark: MATE in Navy, CONSULTING in Orange */}
        <div className="flex items-baseline gap-1.5 font-black uppercase tracking-tight">
          <span style={{ color: mateColor }} className={titleSizes[size]}>
            MATE
          </span>
          <span style={{ color: consultingColor }} className={titleSizes[size]}>
            CONSULTING
          </span>
        </div>

        {showSubtitle ? (
          <span
            style={{ color: subtextColor }}
            className={`font-semibold uppercase mt-1 ${sublineSizes[size]}`}
          >
            EXTERNALISATION DU PILOTAGE FINANCIER
          </span>
        ) : (
          <span
            style={{ color: consultingColor }}
            className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.28em] mt-0.5 opacity-90"
          >
            PILOTAGE FINANCIER
          </span>
        )}
      </div>
    </div>
  );
};
