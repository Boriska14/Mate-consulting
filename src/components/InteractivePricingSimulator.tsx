import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, Clock, Euro, CheckCircle2, Sliders, Shield } from 'lucide-react';
import { MateLogo } from './MateLogo';

interface SimulatorProps {
  onSendSimulation: (simulation: {
    companyType: string;
    hours: number;
    recommendedOffer: string;
    rate: number;
    monthlyBudget: number;
    annualBudget: number;
    selectedTasks: string[];
  }) => void;
}

const COMPANY_PROFILES = [
  {
    id: 'freelance',
    title: 'Indépendant & Libéral',
    tag: 'Dès 10h / mois',
    recommendedOfferId: 'precompta',
    recommendedOfferName: '01. Précomptabilité Opérationnelle',
    defaultHours: 10,
    rate: 30,
    typicalTasks: [
      'Collecte, tri et classement des justificatifs & notes de frais',
      'Saisie précomptable et affectation des opérations',
      'Rapprochements bancaires & pointage régulier',
      'Échéancier déclaratif et préparation comptable',
    ],
  },
  {
    id: 'tpe',
    title: 'TPE, Artisan & Commerce',
    tag: 'Dès 20h / mois',
    recommendedOfferId: 'tresorerie',
    recommendedOfferName: '02. Pilotage de Trésorerie & Clients',
    defaultHours: 20,
    rate: 40,
    typicalTasks: [
      'Socle précomptable & liaison expert-comptable',
      'Plan de trésorerie glissant à 12 semaines',
      'Relances clients graduelles & balance âgée',
      'Vérification des bons à payer fournisseurs',
    ],
  },
  {
    id: 'pme',
    title: 'PME & Startup en Croissance',
    tag: 'Dès 25h / mois',
    recommendedOfferId: 'pilotage',
    recommendedOfferName: '03. Gestion Financière Externalisée',
    defaultHours: 25,
    rate: 50,
    typicalTasks: [
      'Pilotage financier externalisé & contrôle de gestion',
      'Budget prévisionnel annuel & suivi des écarts',
      'Calcul du seuil de rentabilité (point mort) & marges',
      'Tableaux de bord et revues de pilotage mensuel',
    ],
  },
  {
    id: 'projet',
    title: 'Projet d’Automatisation',
    tag: 'Au projet / Sur devis',
    recommendedOfferId: 'modelisation',
    recommendedOfferName: '04. Automatisation & Reporting',
    defaultHours: 20,
    rate: 65,
    typicalTasks: [
      'Collecte automatisée et classement des pièces',
      'Association des flux et rapprochement automatique',
      'Matrice de gestion automatisée et reporting',
      'Formation et prise en main de vos équipes',
    ],
  },
];

export const InteractivePricingSimulator: React.FC<SimulatorProps> = ({ onSendSimulation }) => {
  const [selectedProfileId, setSelectedProfileId] = useState('pme');
  const [hours, setHours] = useState(25);

  const currentProfile = useMemo(() => {
    return COMPANY_PROFILES.find((p) => p.id === selectedProfileId) || COMPANY_PROFILES[2];
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
    });
  };

  return (
    <section id="simulateur" className="py-10 md:py-14 bg-white border-b border-[#0E1E37]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#C04A1A] mb-2">
            <Calculator className="w-4 h-4" />
            <span>Simulateur Budgétaire Transparent</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[2.65rem] font-extrabold text-[#0E1E37] tracking-tight leading-tight [text-wrap:balance]">
            Estimez précisément votre investissement mensuel
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-[#153258]/85 leading-relaxed font-normal">
            Ajustez votre profil et le volume d’heures souhaité. Nos tarifs en euros sont sans engagement
            et s’adaptent au fil de votre activité.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Interactive Settings */}
          <div className="lg:col-span-7 bg-[#F6F1E9]/80 rounded-2xl p-5 sm:p-6 border border-[#0E1E37]/15 shadow-sm">
            
            {/* Step 1: Coherent Service Selection Mini-Boxes */}
            <div className="mb-5">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#153258] mb-2.5">
                1. Sélectionnez votre service et profil associé
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {COMPANY_PROFILES.map((profile) => {
                  const isSelected = selectedProfileId === profile.id;
                  return (
                    <button
                      key={profile.id}
                      type="button"
                      onClick={() => handleProfileChange(profile.id)}
                      className={`text-left p-3.5 rounded-xl border text-xs font-medium transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#0B1F3A] text-white border-[#0B1F3A] shadow-md ring-2 ring-[#0B1F3A]/20'
                          : 'bg-white text-[#0E1E37] border-slate-200 hover:border-[#0B1F3A]/40 shadow-2xs'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 w-full">
                        <span className="font-extrabold text-sm leading-tight">{profile.title}</span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-md whitespace-nowrap shrink-0 ${
                            isSelected ? 'bg-white/15 text-white' : 'bg-[#E8EEF6] text-[#0B1F3A]'
                          }`}
                        >
                          {profile.tag}
                        </span>
                      </div>
                      <div className={`text-xs mt-1.5 font-semibold ${isSelected ? 'text-[#F26B1D]' : 'text-[#C2410C]'}`}>
                        {profile.recommendedOfferName}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Slider for Hours */}
            <div className="mb-5 p-4 bg-white rounded-2xl border border-slate-200">
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#153258] flex items-center gap-1.5">
                  <Sliders className="w-4 h-4 text-[#C04A1A]" />
                  <span>2. Volume horaire estimé :</span>
                </label>
                <div className="text-xl sm:text-2xl font-black text-[#C04A1A] font-mono tabular-nums">
                  {hours} h / mois
                </div>
              </div>

              <div className="text-xs text-slate-500 mb-3 flex items-center gap-2">
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

              <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-2.5">
                <span className="hover:text-[#153258] cursor-pointer" onClick={() => setHours(10)}>10 h (Minimal)</span>
                <span className="hover:text-[#153258] cursor-pointer font-bold text-[#153258]" onClick={() => setHours(20)}>20 h (Croisière TPE)</span>
                <span className="hover:text-[#153258] cursor-pointer" onClick={() => setHours(40)}>40 h (Pilotage avancé)</span>
              </div>
            </div>

            {/* Typical tasks covered (no tool names) */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#153258] mb-2">
                Missions prioritaires incluses pour ce dimensionnement :
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 bg-white/90 p-3.5 rounded-2xl border border-slate-200">
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
          <div className="lg:col-span-5 bg-[#0B1F3A] text-white rounded-2xl p-5 sm:p-6 shadow-2xl border border-[#153258] relative">
            
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <MateLogo variant="dark" size="sm" />
              <span className="text-[10px] font-mono text-slate-300">
                Taux {currentProfile.rate} € HT / h
              </span>
            </div>

            <div className="text-xl sm:text-2xl font-black mt-3 text-white tracking-tight">
              {currentProfile.recommendedOfferName}
            </div>

            {/* Prominent Budget Box */}
            <div className="my-4 p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center">
              <span className="text-xs font-bold text-[#D9CDBB] uppercase tracking-wider block">
                Budget Mensuel Estimatif
              </span>
              <div className="text-3xl sm:text-4xl font-black text-white font-mono tabular-nums mt-1 tracking-tight">
                {monthlyBudgetEUR.toLocaleString('fr-FR')} €{' '}
                <span className="text-xs sm:text-sm font-normal text-slate-300">
                  HT / mois
                </span>
              </div>
              <div className="text-xs text-slate-300 mt-1.5 font-mono tabular-nums">
                Projection annuelle : ~ {annualBudgetEUR.toLocaleString('fr-FR')} € HT / an
              </div>
            </div>

            {/* Executive ROI metrics */}
            <div className="space-y-2.5 text-xs mb-5">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#F26B1D]" />
                  Temps dirigeant libéré
                </span>
                <span className="font-extrabold text-white font-mono tabular-nums text-sm">
                  ~ {hoursSaved} heures / mois
                </span>
              </div>

              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <Euro className="w-3.5 h-3.5 text-[#F26B1D]" />
                  Économie vs recrutement interne
                </span>
                <span className="font-extrabold text-[#F26B1D] font-mono tabular-nums text-sm">
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
              className="w-full py-3.5 px-5 rounded-xl font-extrabold text-xs tracking-wider uppercase text-[#0B1F3A] bg-[#F6F1E9] hover:bg-white active:scale-98 transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              <span>Transmettre cette simulation pour devis</span>
              <ArrowRight className="w-4 h-4 text-[#C2410C]" />
            </button>

            <p className="text-[11px] text-slate-400 text-center mt-2.5">
              Diagnostic flash 30 min offert pour valider le périmètre exact avec notre équipe.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
