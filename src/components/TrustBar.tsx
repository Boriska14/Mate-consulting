import React from 'react';

interface ToolItem {
  id: string;
  name: string;
  category: string;
  accent: string;
  icon: React.ReactNode;
}

const TOOLS: ToolItem[] = [
  {
    id: 'sap',
    name: 'SAP',
    category: 'ERP & Finance',
    accent: '#0FAAFF',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" aria-hidden="true">
        <path d="M2 5h20l-6 14H2V5z" fill="#0070F2" />
        <text x="4.5" y="15" fill="#FFFFFF" fontSize="7.5" fontWeight="800" fontFamily="sans-serif">
          SAP
        </text>
      </svg>
    ),
  },
  {
    id: 'bloomberg',
    name: 'Bloomberg',
    category: 'Analyse Marchés',
    accent: '#0E1E37',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" aria-hidden="true">
        <rect x="2" y="3" width="20" height="18" rx="3" fill="#0E1E37" />
        <rect x="6" y="13" width="2.5" height="4" fill="#F97316" />
        <rect x="10.75" y="9" width="2.5" height="8" fill="#FFFFFF" />
        <rect x="15.5" y="7" width="2.5" height="10" fill="#38BDF8" />
      </svg>
    ),
  },
  {
    id: 'powerbi',
    name: 'Power BI',
    category: 'Décisionnel',
    accent: '#F2C811',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" aria-hidden="true">
        <rect x="4" y="13" width="4" height="8" rx="1" fill="#E6AD10" />
        <rect x="10" y="8" width="4" height="13" rx="1" fill="#F2C811" />
        <rect x="16" y="3" width="4" height="18" rx="1" fill="#C87D00" />
      </svg>
    ),
  },
  {
    id: 'excel',
    name: 'Excel',
    category: 'Modélisation & VBA',
    accent: '#107C41',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="3" fill="#107C41" />
        <path d="M8.5 8.5l7 7M15.5 8.5l-7 7" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'sql',
    name: 'SQL',
    category: 'Bases de Données',
    accent: '#336791',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" aria-hidden="true">
        <ellipse cx="12" cy="6.5" rx="7.5" ry="3" fill="#336791" />
        <path d="M4.5 6.5v5c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-5" stroke="#336791" strokeWidth="2" />
        <path d="M4.5 11.5v5c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-5" stroke="#336791" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Data & Scripts',
    accent: '#3776AB',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" aria-hidden="true">
        <path d="M11.8 3C8.5 3 8.8 4.4 8.8 4.4v2.3h3.2v.8H7.2S4.5 7.2 4.5 11.1c0 3.9 2.3 3.8 2.3 3.8h1.4v-2s-.1-2.3 2.2-2.3h3.5s2.1 0 2.1-2V5.3S16.3 3 11.8 3z" fill="#3776AB" />
        <path d="M12.2 21c3.3 0 3-1.4 3-1.4v-2.3H12v-.8h4.8s2.7.3 2.7-3.6c0-3.9-2.3-3.8-2.3-3.8h-1.4v2s.1 2.3-2.2 2.3h-3.5s-2.1 0-2.1 2v3.3S7.7 21 12.2 21z" fill="#FFD43B" />
      </svg>
    ),
  },
  {
    id: 'amf',
    name: 'AMF',
    category: 'Certifié 2024',
    accent: '#153258',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" aria-hidden="true">
        <path d="M12 2.5L4 6v5.8c0 5 3.4 9.6 8 10.7 4.6-1.1 8-5.7 8-10.7V6l-8-3.5z" fill="#153258" />
        <path d="M8.5 12.2l2.3 2.3 4.7-4.8" stroke="#E2672F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'power-automate',
    name: 'Power Automate',
    category: 'Workflows',
    accent: '#0066FF',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" aria-hidden="true">
        <path d="M3 6h9.5l5.5 6-5.5 6H3l5.5-6L3 6z" fill="#0066FF" />
        <path d="M11 6h5.5l4.5 6-4.5 6H11l4.5-6L11 6z" fill="#50A8FF" fillOpacity="0.85" />
      </svg>
    ),
  },
  {
    id: 'qonto',
    name: 'Qonto',
    category: 'Compte Pro',
    accent: '#635BFF',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="4" fill="#1D1D1F" />
        <circle cx="11.5" cy="11.5" r="4.5" stroke="#A78BFA" strokeWidth="2.2" />
        <path d="M14.5 14.5l3 3" stroke="#A78BFA" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'ipaidthat',
    name: 'iPaidThat',
    category: 'Précomptabilité',
    accent: '#2563EB',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" aria-hidden="true">
        <rect x="4" y="3" width="16" height="18" rx="3" fill="#2563EB" />
        <path d="M8.5 12.5l2.2 2.2 4.8-5" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'indy',
    name: 'Indy',
    category: 'Compta & Pilotage',
    accent: '#0D9488',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="#0D9488" />
        <rect x="10.7" y="7.5" width="2.6" height="9" rx="1.3" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    id: 'henrri',
    name: 'Henrri',
    category: 'Facturation',
    accent: '#EA580C',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="4" fill="#EA580C" />
        <path d="M8 7v10M16 7v10M8 12h8" stroke="#FFFFFF" strokeWidth="2.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'silae',
    name: 'Silae RH',
    category: 'Paie & Social',
    accent: '#E11D48',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="9" fill="#E11D48" />
        <path d="M14.5 9.2c0-1.2-1.1-2-2.5-2s-2.5.8-2.5 2c0 2.6 5 1.7 5 4.6 0 1.3-1.1 2.2-2.6 2.2s-2.6-.9-2.6-2.2" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'supabase',
    name: 'Supabase',
    category: 'Cloud & Data',
    accent: '#3ECF8E',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" aria-hidden="true">
        <path d="M13.3 20.4c-.5.6-1.6.3-1.6-.6v-6.5H6.1c-.9 0-1.4-1.1-.8-1.8L12.7 3.6c.5-.6 1.6-.3 1.6.6v6.5h5.6c.9 0 1.4 1.1.8 1.8l-7.4 7.9z" fill="#3ECF8E" />
      </svg>
    ),
  },
];

export const TrustBar: React.FC = () => {
  return (
    <section
      aria-label="Outils et logiciels maîtrisés"
      className="py-7 bg-white border-b border-[#0E1E37]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 flex items-center justify-between">
        <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#153258]/70">
          Outils, ERP & Technologies Maîtrisés
        </div>
        <div className="hidden sm:block text-[11px] font-medium text-slate-400">
          Intégration directe dans votre environnement
        </div>
      </div>

      {/* Scrolling Marquee Container */}
      <div className="relative marquee-container overflow-hidden py-1">
        {/* Left & Right Smooth Fade Masks */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10"
          aria-hidden="true"
        />

        <div className="animate-mate-marquee flex items-center gap-4">
          {[...TOOLS, ...TOOLS].map((tool, index) => (
            <div
              key={`${tool.id}-${index}`}
              className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#F6F1E9]/65 border border-[#0E1E37]/10 shadow-2xs shrink-0 hover:bg-white hover:border-[#C04A1A]/40 transition-colors"
            >
              <div className="w-8 h-8 rounded-xl bg-white border border-[#0E1E37]/10 flex items-center justify-center shrink-0 shadow-2xs">
                {tool.icon}
              </div>
              <div className="pr-1">
                <div className="text-xs font-extrabold text-[#0E1E37] leading-tight whitespace-nowrap">
                  {tool.name}
                </div>
                <div className="text-[10px] font-medium text-slate-500 leading-tight whitespace-nowrap">
                  {tool.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
