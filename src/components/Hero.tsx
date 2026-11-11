import React from 'react';
import { ArrowRight, ShieldCheck, TrendingUp, Calendar, ChevronDown, CheckCircle2, FileSpreadsheet, Sparkles, Building2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/mateData';
import { trackEvent } from '../utils/analytics';

interface HeroProps {
  onOpenContact: (mode?: 'diagnostic' | 'message') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const handlePrimaryCta = () => {
    trackEvent('cta_hero_click', { action: 'book_30min_call' });
    onOpenContact('diagnostic');
  };

  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-gradient-to-b from-[#F6F1E9] via-[#F6F1E9] to-[#EFE8DD] border-b border-[#0E1E37]/10">
      {/* Subtle mathematical / financial dot background */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(#153258_1.2px,transparent_1.2px)] [background-size:28px_28px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Proposition, Copy & Conversion */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Tagline & Pillars from PPTX Page 1 */}
            <div className="mb-4 space-y-1">
              <div className="text-[11px] font-bold tracking-[0.22em] text-[#5B84B1] uppercase flex items-center gap-2">
                <span className="w-5 h-[1.5px] bg-[#5B84B1]/50" />
                <span>{COMPANY_INFO.tagline}</span>
              </div>
              <div className="text-xs font-black tracking-[0.25em] text-[#C04A1A] uppercase flex items-center gap-2">
                <span>{COMPANY_INFO.pillars[0]}</span>
                <span className="text-[#D9CDBB]">·</span>
                <span>{COMPANY_INFO.pillars[1]}</span>
                <span className="text-[#D9CDBB]">·</span>
                <span>{COMPANY_INFO.pillars[2]}</span>
              </div>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-[#0E1E37] leading-[1.12] tracking-tight mb-6 [text-wrap:balance]">
              Votre gestion.{' '}
              <span className="text-[#153258]">Notre expertise.</span>{' '}
              <span className="relative inline-block text-[#C04A1A]">
                Votre performance.
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2.5 text-[#C04A1A]/30"
                  viewBox="0 0 200 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 5.5C45 2 155 2 199 5.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Value Narrative */}
            <p className="text-base sm:text-lg text-[#153258]/90 leading-relaxed max-w-2xl mb-8 font-normal">
              MATE Consulting est le <strong>DAF externalisé au format agile</strong> dédié aux TPE,
              startups, artisans et indépendants. De la précomptabilité opérationnelle
              (Qonto, Ipaidthat) à la modélisation décisionnelle sous Excel et Power BI,
              nous structurons vos finances et sécurisons votre trésorerie à coût maîtrisé.
            </p>

            {/* Piliers concrets de réassurance */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm font-semibold text-[#0E1E37] mb-9">
              <div className="flex items-center gap-2.5 bg-white/70 backdrop-blur-xs p-2.5 rounded-xl border border-[#0E1E37]/10 shadow-2xs">
                <div className="w-6 h-6 rounded-lg bg-[#C04A1A]/10 text-[#C04A1A] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Facturation au temps passé dès 25 € HT / h</span>
              </div>

              <div className="flex items-center gap-2.5 bg-white/70 backdrop-blur-xs p-2.5 rounded-xl border border-[#0E1E37]/10 shadow-2xs">
                <div className="w-6 h-6 rounded-lg bg-[#153258]/10 text-[#153258] flex items-center justify-center shrink-0">
                  <FileSpreadsheet className="w-4 h-4" />
                </div>
                <span>Matrices Excel sur-mesure (0 € licence logicielle)</span>
              </div>

              <div className="flex items-center gap-2.5 bg-white/70 backdrop-blur-xs p-2.5 rounded-xl border border-[#0E1E37]/10 shadow-2xs">
                <div className="w-6 h-6 rounded-lg bg-[#5B84B1]/15 text-[#5B84B1] flex items-center justify-center shrink-0">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <span>Trésorerie glissante 12 semaines & réduction DSO</span>
              </div>

              <div className="flex items-center gap-2.5 bg-white/70 backdrop-blur-xs p-2.5 rounded-xl border border-[#0E1E37]/10 shadow-2xs">
                <div className="w-6 h-6 rounded-lg bg-emerald-500/10 text-emerald-700 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span>100% modulable et sans engagement de durée</span>
              </div>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <button
                onClick={handlePrimaryCta}
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-4 text-xs sm:text-sm font-bold text-white bg-[#153258] hover:bg-[#0E1E37] active:scale-[0.98] rounded-xl shadow-md transition-all whitespace-nowrap cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#E2672F]" />
                <span>Réserver un échange de 30 min</span>
                <ArrowRight className="w-4 h-4 text-[#D9CDBB] group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 text-xs sm:text-sm font-bold text-[#153258] bg-white hover:bg-[#F6F1E9] active:scale-[0.98] border border-[#0E1E37]/15 rounded-xl transition-all shadow-2xs whitespace-nowrap"
              >
                <span>Voir les offres</span>
                <ChevronDown className="w-4 h-4 text-[#C04A1A]" />
              </a>
            </div>

            {/* Trust signals */}
            <div className="pt-6 border-t border-[#0E1E37]/15 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#153258]/85 font-semibold">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#C04A1A]" />
                <span>Certifications AMF 2024 & Bloomberg BMC</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-[#5B84B1]" />
                <span>Double Master Finance & Data Science (Major Promo)</span>
              </div>
              <div className="text-slate-500 font-mono text-[11px]">
                SIREN {COMPANY_INFO.siren} · France & Afrique francophone
              </div>
            </div>

          </div>

          {/* Right Column: Visual Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#0E1E37]/15 shadow-2xl bg-white group">
              
              <div className="aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] relative overflow-hidden bg-[#153258]">
                <img
                  src="/src/assets/images/mate_hero_consulting_1794400056701.jpg"
                  alt="Poste de travail et direction financière externalisée MATE Consulting"
                  width={640}
                  height={480}
                  loading="eager"
                  className="w-full h-full object-cover object-center transform group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/src/assets/images/mate_founder_workspace_1794400058048.jpg';
                  }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1E37]/90 via-[#0E1E37]/20 to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 bg-[#0E1E37]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 text-white flex items-center gap-2 text-xs font-semibold">
                  <div className="w-2 h-2 rounded-full bg-[#E2672F]" />
                  <span>Direction Financière Externalisée</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-base font-bold text-white tracking-tight">
                    Rigueur financière de marché, agilité opérationnelle
                  </div>
                  <p className="text-xs text-[#D9CDBB] mt-1">
                    Accompagnement continu à distance et sur site en Île-de-France & international.
                  </p>
                </div>
              </div>

              {/* Strip */}
              <div className="p-4 sm:p-5 bg-gradient-to-b from-white to-[#F6F1E9]/60 grid grid-cols-3 divide-x divide-[#0E1E37]/10 text-center">
                <div className="px-2">
                  <div className="text-lg sm:text-2xl font-extrabold text-[#153258] font-mono tabular-nums tracking-tight">
                    100 %
                  </div>
                  <div className="text-[11px] text-slate-600 font-semibold mt-0.5">
                    Modulable sans engagement
                  </div>
                </div>

                <div className="px-2">
                  <div className="text-lg sm:text-2xl font-extrabold text-[#C04A1A] font-mono tabular-nums tracking-tight">
                    12 sem.
                  </div>
                  <div className="text-[11px] text-slate-600 font-semibold mt-0.5">
                    Visibilité trésorerie
                  </div>
                </div>

                <div className="px-2">
                  <div className="text-lg sm:text-2xl font-extrabold text-[#153258] font-mono tabular-nums tracking-tight">
                    0 €
                  </div>
                  <div className="text-[11px] text-slate-600 font-semibold mt-0.5">
                    Coût fixe d'embauche
                  </div>
                </div>
              </div>

            </div>

            <div className="mt-3 flex items-center justify-between text-[11px] text-[#153258]/70 px-2 font-mono">
              <span>Entreprise Individuelle (EI)</span>
              <span className="text-[#C04A1A] font-bold">France & Afrique francophone</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
