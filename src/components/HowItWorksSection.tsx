import React from 'react';
import { Calendar, FileSearch, Sliders, CheckCircle2, ArrowRight } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface HowItWorksProps {
  onOpenContact: (mode?: 'diagnostic' | 'message') => void;
}

export const HowItWorksSection: React.FC<HowItWorksProps> = ({ onOpenContact }) => {
  const steps = [
    {
      number: '01',
      title: 'Échange initial de 30 min (offert)',
      description:
        'Audit flash de votre situation, de vos volumes de pièces justificatives et de vos besoins prioritaires (trésorerie, précomptabilité, relances).',
      duration: '30 minutes en visio ou téléphone',
    },
    {
      number: '02',
      title: 'Cadrage & proposition personnalisée',
      description:
        'Définition conjointe du volume horaire mensuel utile, du niveau d’expertise requis et de la méthode de travail, sans aucun engagement de durée.',
      duration: 'Proposition chiffrée sous 48h ouvrées',
    },
    {
      number: '03',
      title: 'Déploiement opérationnel des outils',
      description:
        'Connexion à vos outils (Qonto, Ipaidthat, banques), structuration du plan de trésorerie glissant à 12 semaines et transmission fluide avec votre expert-comptable.',
      duration: 'Opérationnel sous 5 jours ouvrés',
    },
    {
      number: '04',
      title: 'Pilotage continu & revues régulières',
      description:
        'Suivi hebdomadaire de la trésorerie, relances clients coordonnées et réunions de synthèse pour éclairer vos arbitrages de gestion et de croissance.',
      duration: 'Rythme mensuel ou bimensuel',
    },
  ];

  const handleCtaClick = () => {
    trackEvent('cta_services_click', { section: 'how_it_works' });
    onOpenContact('diagnostic');
  };

  return (
    <section id="methode" className="py-20 md:py-24 bg-white border-b border-[#0E1E37]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#C04A1A] mb-3">
            <Sliders className="w-3.5 h-3.5" />
            <span>Méthode & Organisation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E1E37] tracking-tight [text-wrap:balance]">
            Comment ça marche : un démarrage simple en 4 étapes
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#153258]/85 leading-relaxed font-normal">
            Une mise en place rapide, sans friction ni bouleversement de votre organisation actuelle.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-2xl bg-[#F6F1E9] border border-[#0E1E37]/10 flex flex-col justify-between hover:border-[#153258]/30 transition-all shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black font-mono text-[#C04A1A]">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider bg-white/80 px-2 py-0.5 rounded border border-slate-200">
                    Étape {idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#0E1E37] mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#0E1E37]/10 flex items-center gap-1.5 text-[11px] font-semibold text-[#153258]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{step.duration}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#153258] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <h3 className="text-lg sm:text-xl font-bold">
              Prêt à faire le point sur votre trésorerie et vos finances ?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Échangez pendant 30 minutes avec l'équipe MATE Consulting pour évaluer vos gains immédiats.
            </p>
          </div>
          <button
            onClick={handleCtaClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#0E1E37] bg-white hover:bg-[#F6F1E9] active:scale-98 rounded-xl transition-all shadow-sm whitespace-nowrap cursor-pointer shrink-0"
          >
            <Calendar className="w-4 h-4 text-[#C04A1A]" />
            <span>Réserver un échange de 30 min</span>
            <ArrowRight className="w-4 h-4 text-[#153258]" />
          </button>
        </div>

      </div>
    </section>
  );
};
