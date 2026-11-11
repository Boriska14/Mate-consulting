import React, { useState } from 'react';
import { ArrowRight, Clock, FileCheck, Layers, ChevronDown, ChevronUp, CheckCircle, Database, HelpCircle, Calendar, Sparkles } from 'lucide-react';
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
  const [expandedId, setExpandedId] = useState<string | null>('daf');

  const services: ServiceCard[] = [
    {
      id: 'daf',
      number: '01',
      title: 'DAF Externalisé & Pilotage Stratégique',
      category: 'Direction Financière à Temps Partagé',
      problem:
        'Vous manquez de recul financier pour piloter vos marges, modéliser vos recrutements ou préparer vos dossiers d’investissement auprès des banques.',
      deliverables: [
        'Tableaux de bord de direction personnalisés avec indicateurs clés (KPIs)',
        'Budget prévisionnel annuel et suivi des écarts réel vs prévisionnel',
        'Calcul du seuil de rentabilité (point mort) en chiffre d’affaires et en volume',
        'Réunions périodiques d’arbitrage décisionnel avec le dirigeant',
      ],
      frequency: 'Mensuelle ou trimestrielle (15h à 40h / mois selon vos besoins)',
      target: 'TPE et PME en structuration ou en forte croissance (5 à 50 salariés)',
      rateHint: '45 à 60 € HT / h ou forfait mensuel sur devis',
      budgetHint: 'Dès 675 € HT / mois (forfait 15h)',
      popular: true,
    },
    {
      id: 'precompta',
      number: '02',
      title: 'Précomptabilité Opérationnelle & Gestion Administrative',
      category: 'Secrétariat Financier & Organisation',
      problem:
        'La gestion des justificatifs, le tri des factures et les relances de votre expert-comptable génèrent une charge mentale quotidienne et des retards déclaratifs.',
      deliverables: [
        'Collecte, classement chronologique et numérisation des pièces justificatives',
        'Saisie préparatoire et affectation des opérations sur vos outils (Qonto, Ipaidthat, Pennylane)',
        'Rapprochements bancaires exhaustifs et lettrage régulier',
        'Transmission de dossiers de clôture complets et ordonnés à l’expert-comptable',
      ],
      frequency: 'Hebdomadaire ou mensuelle (5h à 20h / mois)',
      target: 'Indépendants, consultants, professions libérales et micro-entreprises',
      rateHint: '25 à 35 € HT / h selon volumétrie de pièces',
      budgetHint: 'Dès 125 € HT / mois (forfait 5h)',
    },
    {
      id: 'tresorerie',
      number: '03',
      title: 'Pilotage de Trésorerie & Gestion du Poste Clients',
      category: 'Sécurisation des Liquidités & DSO',
      problem:
        'Vous subissez des tensions de trésorerie imprévues, des retards de paiement clients qui s’accumulent et une absence de visibilité à 3 mois.',
      deliverables: [
        'Plan de trésorerie glissant à 12 semaines mis à jour continuellement',
        'Balance âgée des créances clients et classement par ancienneté de retard',
        'Relances clients amiables, graduelles et professionnelles (téléphone & email)',
        'Préparation et ordonnancement des propositions de paiement fournisseurs',
      ],
      frequency: 'Suivi hebdomadaire continu et point d’alerte en direct',
      target: 'TPE, commerçants et PME ayant des flux commerciaux réguliers à sécuriser',
      rateHint: '35 à 45 € HT / h',
      budgetHint: 'Dès 350 € HT / mois (forfait 10h)',
    },
    {
      id: 'modelisation',
      number: '04',
      title: 'Modélisation Décisionnelle & Outils Excel / Power BI',
      category: 'Ingénierie des Données & Automatisation',
      problem:
        'Vos calculs de prix de revient sont manuels et sources d’erreurs, et les logiciels ERP du marché sont trop coûteux et surdimensionnés.',
      deliverables: [
        'Matrices de gestion automatisées sous Excel avec macros VBA pérennes (0 € de licence logicielle tierce)',
        'Simulateurs de coûts de revient et calculateurs de prix de vente optimisés',
        'Tableaux de bord interactifs connectés sous Microsoft Power BI',
        'Documentation technique complète et formation à la prise en main',
      ],
      frequency: 'Intervention au projet (forfait) ou mission dédiée',
      target: 'Entreprises souhaitant automatiser leurs outils et fiabiliser leurs marges',
      rateHint: '50 à 80 € HT / h ou forfait au projet sur diagnostic',
      budgetHint: 'Devis sur-mesure selon complexité de la matrice',
    },
  ];

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleCta = (serviceId: string) => {
    trackEvent('cta_services_click', { serviceId });
    onSelectOffer(serviceId);
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#F6F1E9] border-b border-[#0E1E37]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#C04A1A] mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Offres de Services Dédiées aux Dirigeants</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0E1E37] tracking-tight [text-wrap:balance]">
            Quatre expertises concrètes pour piloter votre performance
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#153258]/85 leading-relaxed font-normal">
            Chaque accompagnement répond à un problème opérationnel précis, avec des livrables concrets
            et une cadence adaptée à votre rythme d’activité.
          </p>
        </div>

        {/* 4 Structured Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-16">
          {services.map((svc) => {
            const isExpanded = expandedId === svc.id;

            return (
              <div
                key={svc.id}
                className={`rounded-3xl bg-white border p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 shadow-sm ${
                  svc.popular
                    ? 'border-2 border-[#153258] shadow-lg ring-4 ring-[#153258]/5'
                    : 'border-[#0E1E37]/15 hover:shadow-md'
                }`}
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <div>
                      <span className="text-xs font-mono font-bold text-[#5B84B1] uppercase tracking-wider">
                        SERVICE {svc.number}
                      </span>
                      <div className="text-[11px] font-bold text-[#C04A1A] uppercase tracking-wide mt-0.5">
                        {svc.category}
                      </div>
                    </div>
                    {svc.popular && (
                      <span className="bg-[#153258] text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                        Formule Recommandée
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-black text-[#0E1E37] mt-4 mb-3 tracking-tight">
                    {svc.title}
                  </h3>

                  {/* Problem & Target */}
                  <div className="space-y-3 mb-5 text-xs text-slate-700">
                    <div className="p-3.5 rounded-xl bg-rose-50/70 border border-rose-100">
                      <strong className="text-rose-900 block font-bold mb-1">
                        Le problème que nous résolvons :
                      </strong>
                      <span className="text-rose-800 leading-relaxed">{svc.problem}</span>
                    </div>

                    <div className="flex items-baseline gap-1.5 text-slate-600">
                      <span className="font-bold text-[#153258]">Public concerné :</span>
                      <span>{svc.target}</span>
                    </div>

                    <div className="flex items-baseline gap-1.5 text-slate-600">
                      <span className="font-bold text-[#153258]">Fréquence :</span>
                      <span>{svc.frequency}</span>
                    </div>
                  </div>

                  {/* Pricing and Quote Hint */}
                  <div className="p-4 rounded-xl bg-[#F6F1E9] border border-[#0E1E37]/10 mb-5 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-bold">
                        Tarification indicative
                      </span>
                      <span className="font-bold text-[#153258] font-mono">
                        {svc.rateHint}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-bold">
                        Budget mensuel
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
                      <span>{isExpanded ? 'Masquer les livrables' : 'Voir les livrables concrets garantis'}</span>
                    </span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  {isExpanded && (
                    <div className="mt-3 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2 animate-in fade-in duration-200">
                      <div className="font-bold text-[#153258]">Livrables concrets livrés à chaque échéance :</div>
                      <ul className="list-disc list-inside space-y-1.5 text-slate-700">
                        {svc.deliverables.map((deliv, dIdx) => (
                          <li key={dIdx} className="leading-snug">{deliv}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Primary CTA */}
                <div className="mt-6 pt-5 border-t border-slate-100">
                  <button
                    onClick={() => handleCta(svc.id)}
                    className="w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#153258] hover:bg-[#0E1E37] active:scale-98 transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-[#E2672F]" />
                    <span>Réserver un échange de 30 min</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D9CDBB]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transparent Quote / Devis Policy Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#0E1E37]/15 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C04A1A] mb-1">
              <HelpCircle className="w-4 h-4" />
              <span>Modalités d'établissement du devis</span>
            </div>
            <h4 className="text-lg font-bold text-[#0E1E37]">
              Comment votre devis personnalisé est-il établi ?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Nos propositions sont établies au temps passé sans aucun forfait universel forcé.
              Après votre échange initial de 30 minutes, nous calibrons le volume d’heures mensuel exact
              en fonction du volume de vos factures, de vos comptes bancaires et de la fréquence de reporting souhaitée.
              Si vos besoins évoluent, le forfait s’adapte d’un mois sur l’autre sans pénalité.
            </p>
          </div>
          
          <button
            onClick={() => handleCta('devis')}
            className="w-full md:w-auto px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#153258] bg-[#F6F1E9] hover:bg-slate-200 rounded-xl transition-all border border-[#0E1E37]/15 whitespace-nowrap cursor-pointer shrink-0"
          >
            Demander mon estimation
          </button>
        </div>

      </div>
    </section>
  );
};
