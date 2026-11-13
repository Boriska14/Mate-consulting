import React, { useState } from 'react';
import { ArrowRight, FileCheck, Layers, ChevronDown, ChevronUp, HelpCircle, Calendar, Sparkles } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface ServicesSectionProps {
  onSelectOffer: (offerId: string) => void;
}

interface ServiceCard {
  id: string;
  number: string;
  title: string;
  category: string;
  problem: string;
  deliverables: string[];
  frequency: string;
  target: string;
  rateHint: string;
  budgetHint: string;
  popular?: boolean;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectOffer }) => {
  const [expandedId, setExpandedId] = useState<string | null>('pilotage');

  const topThreeServices: ServiceCard[] = [
    {
      id: 'precompta',
      number: '01',
      title: 'Précomptabilité Opérationnelle & Gestion Administrative',
      category: 'Secrétariat Financier & Organisation',
      problem:
        'La gestion des justificatifs, le tri des factures et les relances de votre expert-comptable génèrent une charge mentale quotidienne et des retards déclaratifs.',
      deliverables: [
        'Collecte, classement chronologique et numérisation des pièces justificatives',
        'Saisie préparatoire et affectation des opérations sur vos outils (Qonto, iPaidThat, Indy)',
        'Rapprochements bancaires exhaustifs et lettrage régulier',
        'Transmission de dossiers de clôture complets et ordonnés à l’expert-comptable',
      ],
      frequency: 'Hebdomadaire ou mensuelle (minimum 10h / mois : 10h à 20h)',
      target: 'Indépendants, consultants, professions libérales et micro-entreprises',
      rateHint: '25 à 35 € HT / h',
      budgetHint: 'Dès 250 € HT / mois (10h)',
    },
    {
      id: 'tresorerie',
      number: '02',
      title: 'Pilotage de Trésorerie & Gestion du Poste Clients',
      category: 'Sécurisation des Liquidités & Encaissements',
      problem:
        'Vous subissez des tensions de trésorerie imprévues, des retards de paiement clients qui s’accumulent et une absence de visibilité à 3 mois.',
      deliverables: [
        'Plan de trésorerie glissant à 12 semaines mis à jour continuellement',
        'Balance âgée des créances clients et classement par ancienneté de retard',
        'Relances clients amiables, graduelles et professionnelles (téléphone & email)',
        'Préparation et ordonnancement des propositions de paiement fournisseurs',
      ],
      frequency: 'Suivi hebdomadaire continu (minimum 20h / mois : 20h à 35h)',
      target: 'TPE, commerçants et PME ayant des flux commerciaux réguliers à sécuriser',
      rateHint: '35 à 45 € HT / h',
      budgetHint: 'Dès 700 € HT / mois (20h)',
    },
    {
      id: 'pilotage',
      number: '03',
      title: 'Gestion Financière Externalisée & Pilotage Stratégique',
      category: 'Externalisation Financière au Format Agile',
      problem:
        'Vous manquez de recul financier pour piloter vos marges, modéliser vos recrutements ou préparer vos dossiers d’investissement auprès des banques.',
      deliverables: [
        'Tableaux de bord de gestion personnalisés avec indicateurs clés (KPIs)',
        'Budget prévisionnel annuel et suivi des écarts réel vs prévisionnel',
        'Calcul du seuil de rentabilité (point mort) en chiffre d’affaires et en volume',
        'Réunions périodiques d’arbitrage décisionnel avec le dirigeant',
      ],
      frequency: 'Mensuelle ou trimestrielle (25h à 40h / mois selon vos besoins)',
      target: 'TPE et PME en structuration ou en forte croissance (5 à 50 salariés)',
      rateHint: '45 à 60 € HT / h ou forfait',
      budgetHint: 'Dès 1 125 € HT / mois (25h)',
      popular: true,
    },
  ];

  const fourthService: ServiceCard = {
    id: 'modelisation',
    number: '04',
    title: 'Automatisation de la Gestion Financière & Reporting',
    category: 'Collecte de Pièces, Association & Reporting',
    problem:
      'La collecte des justificatifs, l’association des pièces et l’édition de votre reporting financier sont encore manuelles, sources d’erreurs et trop chronophages pour vos équipes.',
    deliverables: [
      'Matrice de gestion automatisée sur-mesure (collecte de pièces, association et reporting)',
      'Formation et prise en main complète pour votre autonomie',
    ],
    frequency: 'Intervention au projet (forfait) ou mission dédiée',
    target: 'Entreprises souhaitant automatiser leur gestion financière et fiabiliser leur reporting',
    rateHint: '50 à 80 € HT / h ou forfait au projet sur diagnostic',
    budgetHint: 'Devis sur-mesure selon périmètre du projet',
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleCta = (serviceId: string) => {
    trackEvent('cta_services_click', { serviceId });
    onSelectOffer(serviceId);
  };

  return (
    <section id="services" className="py-10 md:py-14 bg-[#F6F1E9] border-b border-[#0E1E37]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#C04A1A] mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Offres de Services Dédiées aux Dirigeants</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[2.65rem] font-extrabold text-[#0E1E37] tracking-tight leading-tight [text-wrap:balance]">
            Quatre expertises concrètes pour piloter votre performance
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-[#153258]/85 leading-relaxed font-normal">
            Chaque accompagnement répond à un problème opérationnel précis, avec un quota minimum de 10h/mois
            et une cadence évolutive adaptée à votre activité.
          </p>
        </div>

        {/* Row 1: Top 3 Recurring Services on a Single Line (lg:grid-cols-3) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch mb-5">
          {topThreeServices.map((svc) => {
            const isExpanded = expandedId === svc.id;

            return (
              <div
                key={svc.id}
                className={`rounded-2xl bg-white border p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 shadow-sm ${
                  svc.popular
                    ? 'border-2 border-[#153258] shadow-xl ring-4 ring-[#C04A1A]/10 relative'
                    : 'border-[#0E1E37]/15 hover:shadow-md'
                }`}
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-start justify-between gap-2 pb-3 border-b border-slate-100">
                    <div>
                      <span className="text-xs font-mono font-bold text-[#5B84B1] uppercase tracking-wider">
                        SERVICE {svc.number}
                      </span>
                      <div className="text-[11px] font-bold text-[#C04A1A] uppercase tracking-wide mt-0.5">
                        {svc.category}
                      </div>
                    </div>
                    {svc.popular && (
                      <span className="inline-flex items-center gap-1 bg-[#C04A1A] text-white text-[10px] font-bold uppercase tracking-wider py-1 px-2.5 rounded-full shrink-0 shadow-xs">
                        <Sparkles className="w-3 h-3" />
                        Recommandé
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-black text-[#0E1E37] mt-3 mb-2 tracking-tight leading-snug">
                    {svc.title}
                  </h3>

                  {/* Problem & Target */}
                  <div className="space-y-2 mb-3.5 text-xs text-slate-700">
                    <div className="p-2.5 rounded-xl bg-rose-50/70 border border-rose-100">
                      <strong className="text-rose-900 block font-bold mb-0.5">
                        Le problème résolu :
                      </strong>
                      <span className="text-rose-800 leading-relaxed">{svc.problem}</span>
                    </div>

                    <div className="text-slate-600">
                      <span className="font-bold text-[#153258]">Public :</span>{' '}
                      <span>{svc.target}</span>
                    </div>

                    <div className="text-slate-600">
                      <span className="font-bold text-[#153258]">Volume :</span>{' '}
                      <span>{svc.frequency}</span>
                    </div>
                  </div>

                  {/* Pricing and Quote Hint */}
                  <div className="p-3 rounded-xl bg-[#F6F1E9] border border-[#0E1E37]/10 mb-3 flex items-center justify-between gap-2 text-xs">
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-bold">
                        Tarif horaire
                      </span>
                      <span className="font-bold text-[#153258] font-mono">
                        {svc.rateHint}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-bold">
                        Budget min.
                      </span>
                      <span className="font-extrabold text-[#C04A1A] font-mono">
                        {svc.budgetHint}
                      </span>
                    </div>
                  </div>

                  {/* Deliverables toggle */}
                  <button
                    onClick={() => toggleExpand(svc.id)}
                    className="w-full flex items-center justify-between text-xs font-bold text-[#153258] hover:text-[#C04A1A] py-2 border-t border-slate-100 transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-1.5">
                      <FileCheck className="w-4 h-4 text-[#C04A1A]" />
                      <span>{isExpanded ? 'Masquer les livrables' : 'Voir les livrables garantis'}</span>
                    </span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  {isExpanded && (
                    <div className="mt-2 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1 animate-in fade-in duration-200">
                      <div className="font-bold text-[#153258]">Livrables inclus :</div>
                      <ul className="list-disc list-inside space-y-1 text-slate-700">
                        {svc.deliverables.map((deliv, dIdx) => (
                          <li key={dIdx} className="leading-snug">{deliv}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Primary CTA (Uniform Blue across all 3 services) */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <button
                    onClick={() => handleCta(svc.id)}
                    className="w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#153258] hover:bg-[#0E1E37] active:scale-98 transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-white/90" />
                    <span>Réserver un échange de 30 min</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white/80" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Row 2: 4th Service Placed Below the First Three (Navy Blue Background) */}
        <div className="mb-6">
          <div className="rounded-2xl bg-gradient-to-br from-[#0E1E37] via-[#153258] to-[#0A1628] text-white border border-[#153258] p-5 sm:p-6 shadow-xl transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-start">
              
              {/* Left 7 Cols: Title, Problem & Target */}
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-white/10">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#D9CDBB] uppercase tracking-wider">
                      SERVICE {fourthService.number} · MISSION SUR-MESURE
                    </span>
                    <div className="text-[11px] font-bold text-[#E2672F] uppercase tracking-wide mt-0.5">
                      {fourthService.category}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white mt-3 mb-2.5 tracking-tight">
                  {fourthService.title}
                </h3>

                <div className="p-3 rounded-xl bg-white/10 border border-white/15 text-xs mb-3">
                  <strong className="text-[#E2672F] block font-bold mb-0.5">
                    Le problème que nous résolvons :
                  </strong>
                  <span className="text-slate-200 leading-relaxed">{fourthService.problem}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                  <div>
                    <span className="font-bold text-white block">Public concerné :</span>
                    <span>{fourthService.target}</span>
                  </div>
                  <div>
                    <span className="font-bold text-white block">Cadence :</span>
                    <span>{fourthService.frequency}</span>
                  </div>
                </div>
              </div>

              {/* Right 5 Cols: Pricing, Deliverables & CTA */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-3">
                <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 flex items-center justify-between gap-3 text-xs">
                  <div>
                    <span className="text-[10px] text-slate-300 uppercase tracking-wider block font-bold">
                      Tarification indicative
                    </span>
                    <span className="font-bold text-white font-mono">
                      {fourthService.rateHint}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-300 uppercase tracking-wider block font-bold">
                      Format
                    </span>
                    <span className="font-extrabold text-[#E2672F] font-mono">
                      {fourthService.budgetHint}
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/15 text-xs space-y-1">
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <FileCheck className="w-4 h-4 text-[#E2672F]" />
                    <span>Livrables concrets inclus :</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-slate-200">
                    {fourthService.deliverables.map((deliv, dIdx) => (
                      <li key={dIdx} className="leading-snug">{deliv}</li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleCta(fourthService.id)}
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#C04A1A] hover:bg-[#a63d12] active:scale-98 transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  <span>Réserver un échange de 30 min</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white/90" />
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Transparent Quote / Devis Policy Box */}
        <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#0E1E37]/15 shadow-sm flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C04A1A] mb-1">
              <HelpCircle className="w-4 h-4" />
              <span>Modalités d'établissement du devis</span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-[#0E1E37]">
              Comment votre devis personnalisé est-il établi ?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
              Nos propositions reposent sur une facturation horaire claire sans aucun forfait universel.
              Après votre échange initial de 30 minutes, nous calibrons le volume d’heures mensuel exact
              en fonction du volume de vos factures, de vos comptes bancaires et de la fréquence de reporting souhaitée.
              Si vos besoins évoluent, le forfait s’adapte d’un mois sur l’autre sans pénalité.
            </p>
          </div>
          
          <button
            onClick={() => handleCta('devis')}
            className="w-full md:w-auto px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#153258] bg-[#F6F1E9] hover:bg-slate-200 rounded-xl transition-all border border-[#0E1E37]/15 whitespace-nowrap cursor-pointer shrink-0"
          >
            Demander mon estimation
          </button>
        </div>

      </div>
    </section>
  );
};
