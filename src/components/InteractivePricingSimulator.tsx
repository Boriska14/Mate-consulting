import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, Clock, Euro, CheckCircle2, Sliders, Shield, Coins, Sparkles } from 'lucide-react';

interface SimulatorProps {
  onSendSimulation: (simulation: {
    companyType: string;
    hours: number;
    recommendedOffer: string;
    rate: number;
    monthlyBudget: number;
    annualBudget: number;
    selectedTasks: string[];
    currency: string;
  }) => void;
}

const COMPANY_PROFILES = [
  {
    id: 'freelance',
    title: 'Indépendant & Profession Libérale',
    tag: 'Solo & Micro',
    recommendedOfferId: 'essentiel',
    recommendedOfferName: 'Formule Essentiel',
    defaultHours: 10,
    rate: 30,
    typicalTasks: [
      'Collecte et tri des justificatifs & notes de frais',
      'Saisie précomptable Qonto / Ipaidthat',
      'Rapprochements bancaires & pointage',
      'Échéancier déclaratif (URSSAF, TVA)',
    ],
  },
  {
    id: 'tpe',
    title: 'TPE, Artisan & Commerce (1 à 9 salariés)',
    tag: 'Forfait 20h+',
    recommendedOfferId: 'business',
    recommendedOfferName: 'Formule Business',
    defaultHours: 20,
    rate: 40,
    typicalTasks: [
      'Tout le socle précomptable & liaison expert-comptable',
      'Plan de trésorerie glissant à 12 semaines',
      'Relances clients graduelles & balance âgée',
      'Vérification des bons à payer fournisseurs',
    ],
  },
  {
    id: 'pme',
    title: 'PME & Startup en Croissance (10+ salariés)',
    tag: 'Recommandé',
    recommendedOfferId: 'performance',
    recommendedOfferName: 'Formule Performance',
    defaultHours: 25,
    rate: 50,
    typicalTasks: [
      'Pilotage financier externalisé & contrôle de gestion',
      'Budget prévisionnel annuel & contrôle des écarts',
      'Calcul du seuil de rentabilité (point mort) & marges',
      'Tableaux de bord KPIs de pilotage mensuel',
    ],
  },
  {
    id: 'projet',
    title: 'Projet d’Automatisation & Matrices',
    tag: 'Excel / Power BI',
    recommendedOfferId: 'optimisation',
    recommendedOfferName: 'Offre Optimisation & Automatisation',
    defaultHours: 20,
    rate: 65,
    typicalTasks: [
      'Création de matrices Excel/VBA sans frais de licence',
      'Connexion et tableaux de bord Power BI',
      'Automatisation de facturation & relances CRM',
      'Formation complète de vos équipes internes',
    ],
  },
];

export const InteractivePricingSimulator: React.FC<SimulatorProps> = ({ onSendSimulation }) => {
  const [selectedProfileId, setSelectedProfileId] = useState('pme');
  const [hours, setHours] = useState(25);
  const [currency, setCurrency] = useState<'EUR' | 'FCFA'>('EUR');

  const currentProfile = useMemo(() => {
    return COMPANY_PROFILES.find((p) => p.id === selectedProfileId) || COMPANY_PROFILES[1];
  }, [selectedProfileId]);

  const monthlyBudgetEUR = useMemo(() => {
    return hours * currentProfile.rate;
  }, [hours, currentProfile]);

  const annualBudgetEUR = useMemo(() => {
    return monthlyBudgetEUR * 12;
  }, [monthlyBudgetEUR]);

  const hoursSaved = useMemo(() => {
    return Math.round(hours * 1.8);
  }, [hours]);

  // Conversion rate 1 EUR = ~656 FCFA (XAF)
  const formatAmount = (eur: number) => {
    if (currency === 'FCFA') {
      const fcfa = Math.round(eur * 655.957);
      return `${fcfa.toLocaleString('fr-FR')} FCFA`;
    }
    return `${eur.toLocaleString('fr-FR')} €`;
  };

  const handleProfileChange = (profileId: string) => {
    setSelectedProfileId(profileId);
    const profile = COMPANY_PROFILES.find((p) => p.id === profileId);
    if (profile) {
      setHours(profile.defaultHours);
    }
  };

  const handleSend = () => {
    onSendSimulation({
      companyType: currentProfile.title,
      hours,
      recommendedOffer: currentProfile.recommendedOfferName,
      rate: currentProfile.rate,
      monthlyBudget: monthlyBudgetEUR,
      annualBudget: annualBudgetEUR,
      selectedTasks: currentProfile.typicalTasks,
      currency,
    });
  };

  return (
    <section id="simulateur" className="py-20 md:py-28 bg-white border-b border-[#0E1E37]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#C04A1A] mb-3">
            <Calculator className="w-4 h-4" />
            <span>Simulateur Budgétaire Transparent</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0E1E37] tracking-tight [text-wrap:balance]">
            Estimez précisément votre investissement mensuel
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#153258]/85 leading-relaxed font-normal">
            Ajustez le profil de votre entreprise et le volume d’heures souhaité. Nos tarifs sont sans engagement
            et s’adaptent au fil des saisons d’activité.
          </p>

          {/* Currency Switcher (EUR / FCFA as planned in Business Plan p. 9) */}
          <div className="mt-6 inline-flex items-center gap-1 p-1 bg-[#F6F1E9] rounded-xl border border-[#0E1E37]/10 text-xs">
            <span className="text-[11px] font-bold text-slate-500 px-2 flex items-center gap-1">
              <Coins className="w-3.5 h-3.5 text-[#C04A1A]" />
              Devise :
            </span>
            <button
              type="button"
              onClick={() => setCurrency('EUR')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                currency === 'EUR'
                  ? 'bg-[#153258] text-white shadow-xs'
                  : 'text-[#153258] hover:text-[#C04A1A]'
              }`}
            >
              Euros (€)
            </button>
            <button
              type="button"
              onClick={() => setCurrency('FCFA')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                currency === 'FCFA'
                  ? 'bg-[#153258] text-white shadow-xs'
                  : 'text-[#153258] hover:text-[#C04A1A]'
              }`}
            >
              FCFA (Afrique Centrale / CEMAC)
            </button>
          </div>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Settings */}
          <div className="lg:col-span-7 bg-[#F6F1E9]/80 rounded-3xl p-6 sm:p-8 border border-[#0E1E37]/15 shadow-sm">
            
            {/* Step 1: Profile Selection */}
            <div className="mb-8">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#153258] mb-3">
                1. Sélectionnez votre profil d'activité
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {COMPANY_PROFILES.map((profile) => {
                  const isSelected = selectedProfileId === profile.id;
                  return (
                    <button
                      key={profile.id}
                      type="button"
                      onClick={() => handleProfileChange(profile.id)}
                      className={`text-left p-4 rounded-2xl border text-xs font-medium transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#153258] text-white border-[#153258] shadow-md ring-2 ring-[#153258]/20'
                          : 'bg-white text-[#0E1E37] border-slate-200 hover:border-[#153258]/40 shadow-2xs'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-extrabold text-sm">{profile.title.split('(')[0]}</span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                          isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                        }`}>
                          {profile.tag}
                        </span>
                      </div>
                      <div className={`text-xs mt-1.5 font-semibold ${isSelected ? 'text-[#E2672F]' : 'text-[#C04A1A]'}`}>
                        {profile.recommendedOfferName}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Slider for Hours */}
            <div className="mb-8 p-5 bg-white rounded-2xl border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#153258] flex items-center gap-1.5">
                  <Sliders className="w-4 h-4 text-[#C04A1A]" />
                  <span>2. Volume horaire estimé :</span>
                </label>
                <div className="text-xl sm:text-2xl font-black text-[#C04A1A] font-mono tabular-nums">
                  {hours} h / mois
                </div>
              </div>

              <div className="text-xs text-slate-500 mb-4 flex items-center gap-2">
                <span>Soit en moyenne :</span>
                <strong className="text-[#153258] font-mono">
                  {(hours / 4.33).toFixed(1)} heures / semaine
                </strong>
                <span className="text-slate-400">· Réparties sur mesure</span>
              </div>

              <input
                type="range"
                min="10"
                max="40"
                step="1"
                value={hours}
                onChange={(e) => setHours(parseInt(e.target.value, 10))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#C04A1A]"
              />

              <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-3">
                <span className="hover:text-[#153258] cursor-pointer" onClick={() => setHours(10)}>10 h (Minimal)</span>
                <span className="hover:text-[#153258] cursor-pointer font-bold text-[#153258]" onClick={() => setHours(20)}>20 h (Croisière TPE)</span>
                <span className="hover:text-[#153258] cursor-pointer" onClick={() => setHours(40)}>40 h (Pilotage avancé)</span>
              </div>
            </div>

            {/* Typical tasks covered */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#153258] mb-3">
                Missions prioritaires incluses pour ce dimensionnement :
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700 bg-white/90 p-4 rounded-2xl border border-slate-200">
                {currentProfile.typicalTasks.map((task, tIdx) => (
                  <div key={tIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C04A1A] shrink-0 mt-0.5" />
                    <span className="leading-snug">{task}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: High-End Financial Recapitulation Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0E1E37] via-[#153258] to-[#0A1628] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#153258] relative">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E2672F]">
                Synthèse Financière
              </span>
              <span className="text-[10px] font-mono text-slate-300">
                Taux {currency === 'FCFA' ? formatAmount(currentProfile.rate) : `${currentProfile.rate} € HT`}/h
              </span>
            </div>

            <div className="text-2xl font-black mt-3 text-white tracking-tight">
              {currentProfile.recommendedOfferName}
            </div>

            {/* Prominent Budget Box */}
            <div className="my-6 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center">
              <span className="text-xs font-bold text-[#D9CDBB] uppercase tracking-wider block">
                Budget Mensuel Estimatif
              </span>
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-mono tabular-nums mt-1 tracking-tight">
                {formatAmount(monthlyBudgetEUR)}{' '}
                <span className="text-xs sm:text-sm font-normal text-slate-300">
                  {currency === 'EUR' ? 'HT / mois' : '/ mois'}
                </span>
              </div>
              <div className="text-xs text-slate-300 mt-2 font-mono tabular-nums">
                Projection annuelle : ~ {formatAmount(annualBudgetEUR)} {currency === 'EUR' ? 'HT / an' : '/ an'}
              </div>
            </div>

            {/* Executive ROI metrics */}
            <div className="space-y-3.5 text-xs mb-8">
              <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#E2672F]" />
                  Temps dirigeant libéré
                </span>
                <span className="font-extrabold text-white font-mono tabular-nums text-sm">
                  ~ {hoursSaved} heures / mois
                </span>
              </div>

              <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <Euro className="w-3.5 h-3.5 text-[#E2672F]" />
                  Économie vs recrutement interne
                </span>
                <span className="font-extrabold text-[#E2672F] font-mono tabular-nums text-sm">
                  Jusqu’à -70 %
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  Engagement contractuel
                </span>
                <span className="font-bold text-white">
                  0 engagement · Résiliable à tout moment
                </span>
              </div>
            </div>

            {/* Direct Action */}
            <button
              onClick={handleSend}
              className="w-full py-4 px-5 rounded-2xl font-extrabold text-xs tracking-wider uppercase text-[#0E1E37] bg-[#F6F1E9] hover:bg-white active:scale-98 transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              <span>Transmettre cette simulation pour devis</span>
              <ArrowRight className="w-4 h-4 text-[#C04A1A]" />
            </button>

            <p className="text-[11px] text-slate-400 text-center mt-3">
              Diagnostic flash 30 min offert pour valider le périmètre exact avec le consultant.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
