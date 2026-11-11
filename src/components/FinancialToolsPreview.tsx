import React, { useState } from 'react';
import { FileSpreadsheet, TrendingUp, AlertTriangle, CheckCircle, BarChart2, ArrowUpRight, Calculator, PieChart, Sparkles } from 'lucide-react';

export const FinancialToolsPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'treasury' | 'aging' | 'breakeven' | 'reporting'>('treasury');
  
  // Interactive break-even simulation sliders inside tab 3
  const [fixedCosts, setFixedCosts] = useState(4850);
  const [marginRate, setMarginRate] = useState(65);

  const breakEvenCA = Math.round(fixedCosts / (marginRate / 100));

  return (
    <section id="outils" className="py-20 md:py-28 bg-[#F6F1E9] border-b border-[#0E1E37]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#C04A1A] mb-3">
            <FileSpreadsheet className="w-4 h-4" />
            <span>Savoir-Faire Opérationnel & Modélisation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0E1E37] tracking-tight [text-wrap:balance]">
            Matrices de gestion automatisées & tableaux de bord
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#153258]/85 leading-relaxed font-normal">
            Découvrez concrètement les outils délivrés à nos clients : prévisionnels glissants,
            balances âgées dynamiques et simulateurs de rentabilité sous Microsoft Excel VBA et Power BI.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8">
          <button
            onClick={() => setActiveTab('treasury')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer border ${
              activeTab === 'treasury'
                ? 'bg-[#153258] text-white border-[#153258] shadow-md ring-2 ring-[#153258]/20'
                : 'bg-white text-[#153258] border-slate-200 hover:border-[#153258]/40 shadow-2xs'
            }`}
          >
            01. Plan de Trésorerie 12 Semaines
          </button>
          
          <button
            onClick={() => setActiveTab('aging')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer border ${
              activeTab === 'aging'
                ? 'bg-[#153258] text-white border-[#153258] shadow-md ring-2 ring-[#153258]/20'
                : 'bg-white text-[#153258] border-slate-200 hover:border-[#153258]/40 shadow-2xs'
            }`}
          >
            02. Balance Âgée & DSO Recouvrement
          </button>
          
          <button
            onClick={() => setActiveTab('breakeven')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer border ${
              activeTab === 'breakeven'
                ? 'bg-[#153258] text-white border-[#153258] shadow-md ring-2 ring-[#153258]/20'
                : 'bg-white text-[#153258] border-slate-200 hover:border-[#153258]/40 shadow-2xs'
            }`}
          >
            03. Seuil de Rentabilité & Point Mort
          </button>
          
          <button
            onClick={() => setActiveTab('reporting')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer border ${
              activeTab === 'reporting'
                ? 'bg-[#153258] text-white border-[#153258] shadow-md ring-2 ring-[#153258]/20'
                : 'bg-white text-[#153258] border-slate-200 hover:border-[#153258]/40 shadow-2xs'
            }`}
          >
            04. Cockpit Direction Power BI
          </button>
        </div>

        {/* Deliverable Mockup Window */}
        <div className="bg-white rounded-3xl border border-[#0E1E37]/15 shadow-2xl overflow-hidden">
          
          {/* Mock Window Top Titlebar (Authentic Financial Suite UI) */}
          <div className="bg-[#0E1E37] text-white px-5 py-3 flex items-center justify-between text-xs border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="font-mono text-[11px] text-[#D9CDBB]">
                {activeTab === 'treasury' && 'MATE_Matrice_Tresorerie_Glissante_v2026.xlsm'}
                {activeTab === 'aging' && 'MATE_Balance_Agee_Clients_Relances.xlsx'}
                {activeTab === 'breakeven' && 'MATE_Simulateur_Rentabilite_PointMort.xlsm'}
                {activeTab === 'reporting' && 'MATE_Cockpit_Direction_KPIs.pbix'}
              </span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-slate-300">
              <span className="hidden sm:inline">Macro VBA activée</span>
              <span className="text-emerald-400 font-bold">✓ Données synchronisées</span>
            </div>
          </div>

          {/* Formula Bar Simulation */}
          <div className="bg-slate-50 border-b border-slate-200 px-4 py-2 flex items-center gap-3 text-xs font-mono text-slate-600">
            <span className="font-bold text-[#153258] bg-slate-200 px-2 py-0.5 rounded text-[11px]">fx</span>
            <span className="text-[#0E1E37] truncate">
              {activeTab === 'treasury' && '=SOMME(C6:C12) - SOMME(C15:C22) + C5'}
              {activeTab === 'aging' && '=NB.SI.ENS(TableauClients[RetardJours]; ">30"; TableauClients[Statut]; "Relancé")'}
              {activeTab === 'breakeven' && '=CoutsFixes / TauxMargeSurCoutVariable'}
              {activeTab === 'reporting' && 'EVALUATE CALCULATE([MargeNette%], DATESYTD(Calendrier[Date]))'}
            </span>
          </div>

          <div className="p-6 sm:p-8">
            
            {/* TAB 1: TREASURY FORECAST */}
            {activeTab === 'treasury' && (
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0E1E37] tracking-tight">
                      Plan Prévisionnel de Trésorerie Glissant à 12 Semaines
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Suivi quotidien des soldes bancaires, prévision des encaissements facturés et calendrier des charges fiscales/sociales.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-50 px-3.5 py-2 rounded-xl border border-emerald-200 self-start sm:self-auto">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Coussin de sécurité conforme (&gt; 25 000 €)</span>
                  </div>
                </div>

                <div className="overflow-x-auto mt-6">
                  <table className="w-full text-xs text-left">
                    <thead>
                      <tr className="bg-slate-50 text-[#153258] border-b border-slate-200">
                        <th className="py-3 px-4 font-bold">Postes de Trésorerie</th>
                        <th className="py-3 px-4 font-mono font-bold text-right">Semaine 01</th>
                        <th className="py-3 px-4 font-mono font-bold text-right">Semaine 02</th>
                        <th className="py-3 px-4 font-mono font-bold text-right">Semaine 03</th>
                        <th className="py-3 px-4 font-mono font-bold text-right">Semaine 04</th>
                        <th className="py-3 px-4 font-mono font-bold text-right text-[#C04A1A]">Mois +1 (S5-S8)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-mono tabular-nums">
                      <tr className="bg-slate-50/50">
                        <td className="py-3 px-4 font-sans font-bold text-[#153258]">Solde d'Ouverture Bancaire</td>
                        <td className="py-3 px-4 text-right font-bold text-slate-900">24 500 €</td>
                        <td className="py-3 px-4 text-right font-bold text-slate-900">28 200 €</td>
                        <td className="py-3 px-4 text-right font-bold text-slate-900">22 100 €</td>
                        <td className="py-3 px-4 text-right font-bold text-slate-900">26 450 €</td>
                        <td className="py-3 px-4 text-right font-bold text-[#153258]">31 800 €</td>
                      </tr>
                      <tr className="text-emerald-700 bg-emerald-50/30">
                        <td className="py-3 px-4 font-sans font-medium">(+) Encaissements clients confirmés</td>
                        <td className="py-3 px-4 text-right">+ 8 400 €</td>
                        <td className="py-3 px-4 text-right">+ 2 100 €</td>
                        <td className="py-3 px-4 text-right">+ 9 850 €</td>
                        <td className="py-3 px-4 text-right">+ 11 200 €</td>
                        <td className="py-3 px-4 text-right font-bold">+ 34 500 €</td>
                      </tr>
                      <tr className="text-rose-700 bg-rose-50/20">
                        <td className="py-3 px-4 font-sans font-medium">(-) Règlements fournisseurs & sous-traitance</td>
                        <td className="py-3 px-4 text-right">- 3 200 €</td>
                        <td className="py-3 px-4 text-right">- 4 800 €</td>
                        <td className="py-3 px-4 text-right">- 2 100 €</td>
                        <td className="py-3 px-4 text-right">- 1 650 €</td>
                        <td className="py-3 px-4 text-right font-bold">- 14 200 €</td>
                      </tr>
                      <tr className="text-rose-700 bg-rose-50/20">
                        <td className="py-3 px-4 font-sans font-medium">(-) Salaires nets & charges URSSAF</td>
                        <td className="py-3 px-4 text-right">- 1 500 €</td>
                        <td className="py-3 px-4 text-right">- 3 400 €</td>
                        <td className="py-3 px-4 text-right">- 3 400 €</td>
                        <td className="py-3 px-4 text-right">- 4 200 €</td>
                        <td className="py-3 px-4 text-right font-bold">- 16 000 €</td>
                      </tr>
                      <tr className="bg-[#153258]/10 font-black text-[#153258]">
                        <td className="py-3.5 px-4 font-sans text-sm">(=) Solde de Clôture Estimé</td>
                        <td className="py-3.5 px-4 text-right text-emerald-700 text-sm">28 200 €</td>
                        <td className="py-3.5 px-4 text-right text-emerald-700 text-sm">22 100 €</td>
                        <td className="py-3.5 px-4 text-right text-emerald-700 text-sm">26 450 €</td>
                        <td className="py-3.5 px-4 text-right text-emerald-700 text-sm">31 800 €</td>
                        <td className="py-3.5 px-4 text-right text-[#C04A1A] font-extrabold text-base">36 100 €</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
                  <AlertTriangle className="w-4 h-4 text-[#C04A1A] shrink-0 mt-0.5" />
                  <div>
                    <strong>Impact décisif pour le dirigeant :</strong> Vous repérez les décalages de trésorerie avant qu’ils ne surviennent. Vous évitez les agios bancaires et pilotez vos échéances en toute confiance.
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: AGING & DSO */}
            {activeTab === 'aging' && (
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0E1E37] tracking-tight">
                      Balance Âgée Clients & Cadencement du Recouvrement
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Visualisation des créances clients par niveau d’ancienneté et planning des relances amiables (DSO).
                    </p>
                  </div>
                  <div className="text-xs font-bold text-[#153258] bg-[#F6F1E9] px-3.5 py-2 rounded-xl border border-[#0E1E37]/10">
                    DSO Moyen : <strong className="font-mono text-[#C04A1A] text-sm">29 jours</strong> (-18 jours grâce à MATE)
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 my-6 font-mono tabular-nums">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="text-xs font-sans text-slate-500">Non Échu (0 - 30j)</div>
                    <div className="text-2xl font-extrabold text-[#153258] mt-1">42 800 €</div>
                    <div className="text-[11px] text-emerald-600 font-sans mt-2 font-medium">✓ En cours normal</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
                    <div className="text-xs font-sans text-amber-800">Retard 1 à 15 jours</div>
                    <div className="text-2xl font-extrabold text-amber-900 mt-1">6 450 €</div>
                    <div className="text-[11px] text-amber-800 font-sans mt-2 font-medium">Relance préventive par mail</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200">
                    <div className="text-xs font-sans text-[#C04A1A]">Retard 16 à 30 jours</div>
                    <div className="text-2xl font-extrabold text-[#C04A1A] mt-1">2 100 €</div>
                    <div className="text-[11px] text-[#C04A1A] font-sans mt-2 font-medium">Relance téléphonique cordiale</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200">
                    <div className="text-xs font-sans text-rose-700">Retard &gt; 30 jours</div>
                    <div className="text-2xl font-extrabold text-rose-900 mt-1">850 €</div>
                    <div className="text-[11px] text-rose-800 font-sans mt-2 font-medium">Suivi protocole amiable</div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                  <p className="leading-relaxed">
                    <strong>Processus MATE Consulting :</strong> Nos relances respectent scrupuleusement la courtoisie commerciale de votre entreprise. Vos factures sont payées plus rapidement et votre besoin en fonds de roulement (BFR) s’allège immédiatement.
                  </p>
                </div>
              </div>
            )}

            {/* TAB 3: BREAK-EVEN SIMULATOR */}
            {activeTab === 'breakeven' && (
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0E1E37] tracking-tight">
                      Calculateur Dynamique de Point Mort & Seuil de Rentabilité
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Ajustez les curseurs ci-dessous pour voir l'impact en temps réel sur le chiffre d’affaires d’équilibre.
                    </p>
                  </div>
                  <div className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3.5 py-2 rounded-xl border border-emerald-200">
                    Point Mort : <strong className="font-mono text-sm">Jour 18 du mois</strong>
                  </div>
                </div>

                {/* Interactive Sliders within tab */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 p-5 bg-[#F6F1E9]/60 rounded-2xl border border-slate-200">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-bold text-[#153258]">Coûts Fixes Mensuels :</span>
                      <span className="font-mono font-bold text-base text-[#153258]">{fixedCosts.toLocaleString('fr-FR')} €</span>
                    </div>
                    <input
                      type="range"
                      min="2000"
                      max="15000"
                      step="250"
                      value={fixedCosts}
                      onChange={(e) => setFixedCosts(parseInt(e.target.value, 10))}
                      className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-[#153258]"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-bold text-[#C04A1A]">Taux de Marge s/ Coûts Variables :</span>
                      <span className="font-mono font-bold text-base text-[#C04A1A]">{marginRate} %</span>
                    </div>
                    <input
                      type="range"
                      min="30"
                      max="90"
                      step="1"
                      value={marginRate}
                      onChange={(e) => setMarginRate(parseInt(e.target.value, 10))}
                      className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-[#C04A1A]"
                    />
                  </div>
                </div>

                {/* Calculation Outputs */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                  <div className="p-5 rounded-2xl bg-white border border-slate-200">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Charges Fixes</span>
                    <div className="text-2xl font-black text-[#153258] font-mono tabular-nums mt-1">
                      {fixedCosts.toLocaleString('fr-FR')} € <span className="text-xs font-normal text-slate-400">/ mois</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1">Loyer, abonnements, assurances, comptabilité.</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-slate-200">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Taux de Marge</span>
                    <div className="text-2xl font-black text-[#C04A1A] font-mono tabular-nums mt-1">
                      {marginRate} %
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1">Marge brute contributive sur chaque vente.</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#153258] text-white border border-[#153258] shadow-md">
                    <span className="text-xs font-semibold text-[#D9CDBB] uppercase tracking-wide">Chiffre d’Affaires d’Équilibre</span>
                    <div className="text-2xl font-black text-white font-mono tabular-nums mt-1">
                      {breakEvenCA.toLocaleString('fr-FR')} € <span className="text-xs font-normal text-slate-300">HT / mois</span>
                    </div>
                    <p className="text-[11px] text-[#D9CDBB] mt-1">Au-delà de ce seuil, chaque euro génère du bénéfice net.</p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: POWER BI COCKPIT */}
            {activeTab === 'reporting' && (
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0E1E37] tracking-tight">
                      Cockpit de Direction & Pilotage Stratégique
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Tableau de bord de synthèse financière interactif connecté à vos flux bancaires et factures.
                    </p>
                  </div>
                  <div className="text-xs font-bold text-[#153258] bg-[#F6F1E9] px-3.5 py-2 rounded-xl border border-[#0E1E37]/10 flex items-center gap-1.5">
                    <BarChart2 className="w-4 h-4 text-[#C04A1A]" />
                    <span>Microsoft Power BI / DAX</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6 text-center">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="text-xs text-slate-500 font-medium">Chiffre d’Affaires Réalisé</div>
                    <div className="text-2xl font-black text-[#153258] font-mono tabular-nums mt-1">18 400 €</div>
                    <div className="text-[11px] text-emerald-600 font-bold mt-1.5 flex items-center justify-center gap-0.5">
                      <ArrowUpRight className="w-3.5 h-3.5" /> +12% vs budget
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="text-xs text-slate-500 font-medium">Marge Nette d'Exploitation</div>
                    <div className="text-2xl font-black text-[#C04A1A] font-mono tabular-nums mt-1">31,4 %</div>
                    <div className="text-[11px] text-emerald-600 font-bold mt-1.5 flex items-center justify-center gap-0.5">
                      <TrendingUp className="w-3.5 h-3.5" /> Au-dessus cible
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="text-xs text-slate-500 font-medium">BFR / Délais Clients</div>
                    <div className="text-2xl font-black text-[#153258] font-mono tabular-nums mt-1">29 jours</div>
                    <div className="text-[11px] text-emerald-600 font-bold mt-1.5">Trésorerie saine</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="text-xs text-slate-500 font-medium">Ratio de Liquidité</div>
                    <div className="text-2xl font-black text-[#153258] font-mono tabular-nums mt-1">1,94</div>
                    <div className="text-[11px] text-slate-500 font-bold mt-1.5">Solvabilité optimale</div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Chaque fin de mois, le dirigeant reçoit une synthèse commentée d’une page synthétisant les résultats clés,
                  les alertes éventuelles et les recommandations d’arbitrage d’investissement.
                </p>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};
