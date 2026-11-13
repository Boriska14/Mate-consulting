import React from 'react';
import sapLogo from '../assets/logos/sap.svg';
import bloombergLogo from '../assets/logos/bloomberg.svg';
import powerBiLogo from '../assets/logos/powerbi.svg';
import excelLogo from '../assets/logos/excel.svg';
import sqlLogo from '../assets/logos/postgresql.svg';
import pythonLogo from '../assets/logos/python.svg';
import amfLogo from '../assets/logos/amf.png';
import powerAutomateLogo from '../assets/logos/powerautomate.svg';
import qontoLogo from '../assets/logos/qonto.png';
import iPaidThatLogo from '../assets/logos/ipaidthat.png';
import indyLogo from '../assets/logos/indy.png';
import henrriLogo from '../assets/logos/henrri.png';
import silaeLogo from '../assets/logos/silae.svg';
import docusignLogo from '../assets/logos/docusign.svg';
import supabaseLogo from '../assets/logos/supabase.svg';

interface ToolItem {
  id: string;
  name: string;
  category: string;
  logo: string;
}

const TOOLS: ToolItem[] = [
  {
    id: 'sap',
    name: 'SAP',
    category: 'ERP & Finance',
    logo: sapLogo,
  },
  {
    id: 'bloomberg',
    name: 'Bloomberg',
    category: 'Analyse Marchés',
    logo: bloombergLogo,
  },
  {
    id: 'powerbi',
    name: 'Power BI',
    category: 'Décisionnel',
    logo: powerBiLogo,
  },
  {
    id: 'excel',
    name: 'Excel',
    category: 'Modélisation & VBA',
    logo: excelLogo,
  },
  {
    id: 'sql',
    name: 'SQL',
    category: 'Bases de Données',
    logo: sqlLogo,
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Data & Scripts',
    logo: pythonLogo,
  },
  {
    id: 'amf',
    name: 'AMF',
    category: 'Certifié 2024',
    logo: amfLogo,
  },
  {
    id: 'power-automate',
    name: 'Power Automate',
    category: 'Workflows',
    logo: powerAutomateLogo,
  },
  {
    id: 'qonto',
    name: 'Qonto',
    category: 'Compte Pro',
    logo: qontoLogo,
  },
  {
    id: 'ipaidthat',
    name: 'iPaidThat',
    category: 'Précomptabilité',
    logo: iPaidThatLogo,
  },
  {
    id: 'indy',
    name: 'Indy',
    category: 'Compta & Pilotage',
    logo: indyLogo,
  },
  {
    id: 'henrri',
    name: 'Henrri',
    category: 'Facturation',
    logo: henrriLogo,
  },
  {
    id: 'silae',
    name: 'Silae RH',
    category: 'Paie & Social',
    logo: silaeLogo,
  },
  {
    id: 'docusign',
    name: 'DocuSign',
    category: 'Signature Électronique',
    logo: docusignLogo,
  },
  {
    id: 'supabase',
    name: 'Supabase',
    category: 'Cloud & Data',
    logo: supabaseLogo,
  },
];

export const TrustBar: React.FC = () => {
  return (
    <section
      aria-label="Outils et logiciels maîtrisés"
      className="py-4 bg-white border-b border-[#0E1E37]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2.5 flex items-center justify-between">
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
              className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-[#F6F1E9]/65 border border-[#0E1E37]/10 shadow-2xs shrink-0 hover:bg-white hover:border-[#C04A1A]/40 transition-colors"
            >
              <div className="w-9 h-9 rounded-xl bg-white border border-[#0E1E37]/10 flex items-center justify-center p-1.5 shrink-0 shadow-2xs overflow-hidden">
                <img
                  src={tool.logo}
                  alt={`Logo ${tool.name}`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
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
