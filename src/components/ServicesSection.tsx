import React, { useState } from 'react';
import { OFFERS, SPECIAL_OFFER } from '../data/mateData';
import { OfferPackage } from '../types';
import { Check, ArrowRight, Sparkles, Clock, FileCheck, Layers, ChevronDown, ChevronUp, CheckCircle, Database } from 'lucide-react';

interface ServicesSectionProps {
  onSelectOffer: (offerId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectOffer }) => {
  const [expandedOffer, setExpandedOffer] = useState<string | null>('business');
  const [activeUseCase, setActiveUseCase] = useState<number>(0);

  const useCases = [
    {
      title: 'Matrice de Coûts de Revient & Prix de Vente (Excel)',
      desc: 'Simulateur automatisé pour fixer vos grilles tarifaires et préserver votre marge brute sur chaque prestation.',
      tech: 'Excel Avancé + Formules dynamiques',
    },
    {
      title: 'Plan de Trésorerie Glissant 12 Semaines (VBA)',
      desc: 'Macro d’importation automatique de vos relevés de comptes bancaires avec alertes instantanées de découvert.',
      tech: 'VBA Macros + Connexion API bancaire',
    },
    {
      title: 'Dashboard de Direction & KPIs Commerciaux (Power BI)',
      desc: 'Visualisation graphique interactive de la rentabilité, du DSO et du panier moyen pour vos réunions d’associés.',
      tech: 'Microsoft Power BI + Modélisation DAX',
    },
  ];

  const toggleExpand = (id: string) => {
    setExpandedOffer(expandedOffer === id ? null : id);
  };

  return (
    <section id="offres" className="py-20 md:py-28 bg-[#F6F1E9] border-b border-[#0E1E37]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#C04A1A] mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Offres & Formules d'Accompagnement</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0E1E37] tracking-tight [text-wrap:balance]">
            Trois formules modulaires et une offre d’ingénierie sur-mesure
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#153258]/85 leading-relaxed font-normal">
            À la différence des forfaits génériques rigides, MATE Consulting adapte son volume d’intervention
            et son niveau d’expertise à vos cycles réels d’activité. Vous ne payez que le temps utile.
          </p>
        </div>

        {/* 3 Core Subscription Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {OFFERS.map((offer: OfferPackage, index) => {
            const isBusiness = offer.id === 'business';
            const isExpanded = expandedOffer === offer.id;
            const stepNumber = String(index + 1).padStart(2, '0');

            return (
              <div
                key={offer.id}
                className={`relative rounded-3xl flex flex-col transition-all duration-300 ${
                  isBusiness
                    ? 'bg-white border-2 border-[#153258] shadow-2xl ring-4 ring-[#153258]/10 lg:-translate-y-2'
                    : 'bg-white border border-[#0E1E37]/15 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Visual marker badge for flagship offer */}
                {offer.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#C04A1A] text-white text-[11px] font-extrabold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3 h-3 text-amber-200" />
                    <span>{offer.badge || 'Formule Recommandée TPE'}</span>
                  </div>
                )}

                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  {/* Step & Title */}
                  <div className="pb-5 border-b border-slate-100">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold tracking-wider text-[#5B84B1]">
                        FORMULE {stepNumber}
                      </span>
                      {isBusiness && (
                        <span className="text-[10px] font-bold uppercase text-[#C04A1A] tracking-wider">
                          Cœur d'expertise
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-extrabold text-[#0E1E37] mt-1 tracking-tight">
                      {offer.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#C04A1A] mt-1">
                      {offer.subtitle}
                    </p>
                    <p className="text-xs text-slate-500 mt-2 italic leading-relaxed">
                      Cible : {offer.target}
                    </p>
                  </div>

                  {/* Pricing Block */}
                  <div className="my-6 p-5 rounded-2xl bg-[#F6F1E9] border border-[#0E1E37]/10 flex flex-col justify-between">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                        Taux horaire
                      </span>
                      <span className="text-2xl font-black text-[#153258] font-mono tabular-nums">
                        {offer.hourlyRate}
                      </span>
                    </div>

                    <div className="flex items-baseline justify-between mt-3 pt-3 border-t border-[#0E1E37]/10 text-xs">
                      <span className="font-medium text-slate-600 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#C04A1A]" />
                        Temps préconisé
                      </span>
                      <span className="font-bold text-[#0E1E37] font-mono tabular-nums">
                        {offer.monthlyHours}
                      </span>
                    </div>

                    <div className="flex items-baseline justify-between mt-2 text-xs">
                      <span className="text-slate-600">Budget mensuel estimé</span>
                      <span className="font-extrabold text-[#C04A1A] font-mono tabular-nums">
                        {offer.recommendedBudget}
                      </span>
                    </div>
                  </div>

                  {/* Objective */}
                  <p className="text-xs sm:text-sm text-[#153258]/90 leading-relaxed mb-6 font-normal">
                    {offer.objective}
                  </p>

                  {/* Main Domains list */}
                  <div className="space-y-3 mb-6 flex-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#153258]">
                      Prestations Clés Incluses :
                    </div>
                    {offer.domains.slice(0, isExpanded ? offer.domains.length : 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#0E1E37]">
                        <CheckCircle className="w-4 h-4 text-[#C04A1A] shrink-0 mt-0.5" />
                        <div>
                          <strong className="font-bold text-[#153258]">{item.domain} :</strong>{' '}
                          <span className="text-slate-600 leading-relaxed">{item.details}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Expand button */}
                  <button
                    onClick={() => toggleExpand(offer.id)}
                    className="flex items-center justify-between text-xs font-bold text-[#153258] hover:text-[#C04A1A] py-2.5 border-t border-slate-100 transition-colors mb-4 cursor-pointer"
                  >
                    <span>{isExpanded ? 'Masquer le détail complet' : 'Voir l’intégralité des prestations & livrables'}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  {/* Expanded Deliverables Drawer */}
                  {isExpanded && (
                    <div className="mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2.5 animate-in fade-in duration-200">
                      <div className="font-bold text-[#153258] flex items-center gap-2">
                        <FileCheck className="w-4 h-4 text-[#C04A1A]" />
                        <span>Livrables documentaires garantis :</span>
                      </div>
                      <ul className="list-disc list-inside space-y-1.5 text-slate-700 pl-1">
                        {offer.deliverables.map((deliv, dIdx) => (
                          <li key={dIdx} className="leading-snug">{deliv}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Primary CTA for Offer */}
                  <button
                    onClick={() => onSelectOffer(offer.id)}
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer ${
                      isBusiness
                        ? 'bg-[#153258] hover:bg-[#0E1E37] text-white ring-2 ring-[#153258]/30'
                        : 'bg-white hover:bg-slate-100 text-[#153258] border border-[#153258]'
                    }`}
                  >
                    <span>Choisir cette formule</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Special Offer: Optimisation & Automatisation (Refined Visual Dark Card) */}
        <div className="rounded-3xl bg-gradient-to-br from-[#0E1E37] via-[#153258] to-[#0A1628] text-white p-8 sm:p-10 lg:p-12 shadow-2xl border border-white/10 relative overflow-hidden">
          {/* Subtle geometric pattern backdrop */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-5 bg-[radial-gradient(#E2672F_2px,transparent_2px)] [background-size:24px_24px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#E2672F] mb-3">
                <Sparkles className="w-4 h-4" />
                <span>Offre Spéciale Ponctuelle ou en Complément</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                {SPECIAL_OFFER.name}
              </h3>
              <p className="text-sm sm:text-base text-[#D9CDBB] mt-2 font-medium">
                {SPECIAL_OFFER.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed max-w-2xl">
                {SPECIAL_OFFER.objective} Évitez les logiciels ERP surdimensionnés et coûteux :
                nous développons des outils robustes sous Microsoft Excel et Power BI directement
                intégrés à votre quotidien.
              </p>

              {/* Interactive Showcase Tabs for special offer */}
              <div className="mt-8">
                <div className="text-xs font-bold uppercase tracking-wider text-[#D9CDBB] mb-3 flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-[#E2672F]" />
                  <span>Exemples de livrables sur-mesure développés :</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-3">
                  {useCases.map((uc, uIdx) => (
                    <button
                      key={uIdx}
                      type="button"
                      onClick={() => setActiveUseCase(uIdx)}
                      className={`text-left p-3 rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                        activeUseCase === uIdx
                          ? 'bg-white text-[#0E1E37] border-white font-bold shadow-md'
                          : 'bg-white/10 text-slate-200 border-white/10 hover:bg-white/15'
                      }`}
                    >
                      <div className="truncate">{uc.title.split('(')[0]}</div>
                    </button>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-white/10 border border-white/15 text-xs">
                  <div className="font-bold text-[#E2672F]">{useCases[activeUseCase].title}</div>
                  <div className="text-slate-300 mt-1">{useCases[activeUseCase].desc}</div>
                  <div className="text-[11px] text-[#D9CDBB] font-mono mt-2 flex items-center gap-1">
                    <span>Technologies :</span>
                    <strong className="text-white">{useCases[activeUseCase].tech}</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#D9CDBB] block">
                  Modalité d’intervention
                </span>
                <div className="text-2xl font-black text-white mt-1">
                  Sur Devis ou Régie Dédiée
                </div>
                <div className="text-lg font-mono text-[#E2672F] mt-1 font-bold">
                  {SPECIAL_OFFER.hourlyRate}
                </div>
                <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                  Audit préalable gratuit de vos fichiers actuels (Excel, exports bancaires)
                  suivi d’une proposition clé en main avec engagement de résultat.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/15 space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Aucun abonnement logiciel mensuel additionnel</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Code VBA et formules 100% commentés et transmis</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Formation et accompagnement à la prise en main</span>
                </div>

                <button
                  onClick={() => onSelectOffer('optimisation')}
                  className="w-full mt-4 py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-[#0E1E37] bg-white hover:bg-[#F6F1E9] active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Layers className="w-4 h-4 text-[#C04A1A]" />
                  <span>Demander un Diagnostic Automatisation</span>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
