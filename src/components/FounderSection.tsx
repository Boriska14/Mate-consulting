import React from 'react';
import { COMPANY_INFO } from '../data/mateData';
import { ShieldCheck, Calendar, CheckCircle2 } from 'lucide-react';
import { trackEvent } from '../utils/analytics';
import teamCollabImg from '../assets/images/mate_collaboration_meeting_1794400057216.jpg';

interface FounderSectionProps {
  onOpenContact: (mode?: 'diagnostic' | 'message') => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ onOpenContact }) => {
  const { founder } = COMPANY_INFO;

  const handleCta = () => {
    trackEvent('cta_footer_click', { section: 'founder_condensed' });
    onOpenContact('diagnostic');
  };

  return (
    <section id="fondateur" className="py-8 md:py-12 bg-white border-b border-[#0E1E37]/10 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Condensed Executive Block (3 to 4 lines maximum focusing on method & results) */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#F6F1E9] border border-[#0E1E37]/15 shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-5 sm:gap-6">
            
            {/* Visual Portrait */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-[#153258] shrink-0 border-2 border-white shadow-sm">
              <img
                src={teamCollabImg}
                alt="L'équipe de gestion financière externalisée MATE Consulting"
                width={360}
                height={360}
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Condensed Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-1">
                <span className="text-sm sm:text-base font-extrabold text-[#0E1E37]">
                  L’Équipe MATE Consulting
                </span>
                <span className="text-slate-300 hidden sm:inline">·</span>
                <span className="text-xs font-semibold text-[#C04A1A]">
                  Gestion Financière Externalisée & Pilotage Opérationnel
                </span>
              </div>

              {/* Focus purely on competencies and client mission */}
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                Composée de consultants seniors certifiés AMF 2024 et Bloomberg BMC, l’équipe MATE Consulting associe maîtrise comptable et précomptable, pilotage prédictif de trésorerie, automatisation des flux (Power Automate, Excel VBA) et mise en place d’outils d’aide à la décision sous Power BI, SQL et Python. Notre mission : décharger durablement les dirigeants de leur charge administrative et fiabiliser leur visibilité financière.
              </p>

              <div className="mt-4 flex flex-wrap items-center justify-center md:justify-start gap-y-2 gap-x-4 text-[11px] font-semibold text-[#153258]">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Certifié AMF 2024 & Bloomberg BMC</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C04A1A]" />
                  <span>SIREN {COMPANY_INFO.siren} · Secret professionnel strict</span>
                </span>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="shrink-0 w-full md:w-auto">
              <button
                onClick={handleCta}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#153258] hover:bg-[#0E1E37] rounded-xl transition-all shadow-xs cursor-pointer whitespace-nowrap"
              >
                <Calendar className="w-3.5 h-3.5 text-[#E2672F]" />
                <span>Réserver un échange de 30 min</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
