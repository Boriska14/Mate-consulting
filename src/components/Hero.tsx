import React from 'react';
import { ArrowRight, ShieldCheck, TrendingUp, Calendar, ChevronDown, CheckCircle2, FileSpreadsheet, Sparkles, Building2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/mateData';

interface HeroProps {
  onOpenContact: (mode?: 'diagnostic' | 'message') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-gradient-to-b from-[#F6F1E9] via-[#F6F1E9] to-[#EFE8DD] border-b border-[#0E1E37]/10">
      {/* Refined subtle financial background mesh */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(#153258_1.2px,transparent_1.2px)] [background-size:28px_28px]" />
      
      {/* Decorative ambient gradient blooms */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#5B84B1]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[30rem] h-[30rem] bg-[#C04A1A]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Proposition, Copy & Conversion */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Elegant Brand Kicker with Warm Sable Divider */}
            <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] text-[#C04A1A] uppercase mb-5">
              <span>{COMPANY_INFO.pillars[0]}</span>
              <span className="text-[#D9CDBB]" aria-hidden="true">/</span>
              <span>{COMPANY_INFO.pillars[1]}</span>
              <span className="text-[#D9CDBB]" aria-hidden="true">/</span>
              <span>{COMPANY_INFO.pillars[2]}</span>
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

            {/* Core Value Highlights (Clean, Unboxed) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm font-semibold text-[#0E1E37] mb-9">
              <div className="flex items-center gap-2.5 bg-white/70 backdrop-blur-xs p-2.5 rounded-xl border border-[#0E1E37]/10 shadow-2xs">
                <div className="w-6 h-6 rounded-lg bg-[#C04A1A]/10 text-[#C04A1A] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Facturation au temps passé (dès 25 €/h)</span>
              </div>

              <div className="flex items-center gap-2.5 bg-white/70 backdrop-blur-xs p-2.5 rounded-xl border border-[#0E1E37]/10 shadow-2xs">
                <div className="w-6 h-6 rounded-lg bg-[#153258]/10 text-[#153258] flex items-center justify-center shrink-0">
                  <FileSpreadsheet className="w-4 h-4" />
                </div>
                <span>Matrices Excel sur-mesure (0 € licence)</span>
              </div>

              <div className="flex items-center gap-2.5 bg-white/70 backdrop-blur-xs p-2.5 rounded-xl border border-[#0E1E37]/10 shadow-2xs">
                <div className="w-6 h-6 rounded-lg bg-[#5B84B1]/15 text-[#5B84B1] flex items-center justify-center shrink-0">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <span>Trésorerie glissante 12 semaines & DSO</span>
              </div>

              <div className="flex items-center gap-2.5 bg-white/70 backdrop-blur-xs p-2.5 rounded-xl border border-[#0E1E37]/10 shadow-2xs">
                <div className="w-6 h-6 rounded-lg bg-emerald-500/10 text-emerald-700 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span>100% sans engagement de durée</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <button
                onClick={() => onOpenContact('diagnostic')}
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-4 text-xs sm:text-sm font-bold text-white bg-[#153258] hover:bg-[#0E1E37] active:scale-[0.98] rounded-xl shadow-md transition-all whitespace-nowrap cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#E2672F]" />
                <span>Réserver un Diagnostic Flash (30 min offert)</span>
                <ArrowRight className="w-4 h-4 text-[#D9CDBB] group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#offres"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 text-xs sm:text-sm font-bold text-[#153258] bg-white hover:bg-[#F6F1E9] active:scale-[0.98] border border-[#0E1E37]/15 rounded-xl transition-all shadow-2xs whitespace-nowrap"
              >
                <span>Découvrir nos 3 Formules</span>
                <ChevronDown className="w-4 h-4 text-[#C04A1A]" />
              </a>
            </div>

            {/* Trust Markers Bar */}
            <div className="pt-6 border-t border-[#0E1E37]/15 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#153258]/85 font-semibold">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#C04A1A]" />
                <span>Certifications AMF 2024 & Bloomberg BMC</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-[#5B84B1]" />
                <span>Double Master Finance & Data (Major Promo)</span>
              </div>
              <div className="text-slate-500 font-mono text-[11px]">
                SIREN {COMPANY_INFO.siren} · Paris
              </div>
            </div>
          </div>

          {/* Right Column: Layered Executive Visual Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#0E1E37]/15 shadow-2xl bg-white group">
              
              {/* Media Image with warm grading */}
              <div className="aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] relative overflow-hidden bg-[#153258]">
                <img
                  src="/src/assets/images/mate_hero_consulting_1794400056701.jpg"
                  alt="Cabinet de conseil financier MATE Consulting Paris"
                  className="w-full h-full object-cover object-center transform group-hover:scale-103 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/src/assets/images/mate_founder_workspace_1794400058048.jpg';
                  }}
                />
                
                {/* Visual Vignette Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1E37]/90 via-[#0E1E37]/20 to-transparent pointer-events-none" />

                {/* Floating Top Status Badge */}
                <div className="absolute top-4 left-4 bg-[#0E1E37]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 text-white flex items-center gap-2 text-xs font-semibold">
                  <div className="w-2 h-2 rounded-full bg-[#E2672F]" />
                  <span>Direction Financière Externalisée</span>
                </div>

                {/* Bottom Overlay Story Card */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-base font-bold text-white tracking-tight">
                    Rigueur de salle des marchés, agilité de proximité
                  </div>
                  <p className="text-xs text-[#D9CDBB] mt-1 line-clamp-2">
                    Accompagnement continu à Paris et en France entière : visio ou sur site.
                  </p>
                </div>
              </div>

              {/* High-Impact Performance Metrics Strip */}
              <div className="p-4 sm:p-5 bg-gradient-to-b from-white to-[#F6F1E9]/60 grid grid-cols-3 divide-x divide-[#0E1E37]/10 text-center">
                <div className="px-2">
                  <div className="text-lg sm:text-2xl font-extrabold text-[#153258] font-mono tabular-nums tracking-tight">
                    -65 %
                  </div>
                  <div className="text-[11px] text-slate-600 font-semibold mt-0.5">
                    Charge mentale dirigeant
                  </div>
                </div>

                <div className="px-2">
                  <div className="text-lg sm:text-2xl font-extrabold text-[#C04A1A] font-mono tabular-nums tracking-tight">
                    12 sem.
                  </div>
                  <div className="text-[11px] text-slate-600 font-semibold mt-0.5">
                    Trésorerie anticipée
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

            {/* Subtle decorative accent pill at bottom */}
            <div className="mt-3 flex items-center justify-between text-[11px] text-[#153258]/70 px-2 font-mono">
              <span>Modèle Micro-BNC / Flexibilité maximale</span>
              <span className="text-[#C04A1A] font-bold">Paris & Île-de-France / Remote</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
