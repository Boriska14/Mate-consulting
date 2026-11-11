import React from 'react';
import { COMPARISON_POINTS } from '../data/mateData';
import { Check, X, ShieldAlert } from 'lucide-react';

export const WhyUsComparison: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F6F1E9] border-b border-[#0E1E37]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#C04A1A] mb-2">
            Positionnement Unique & Valeur Ajoutée
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E1E37] tracking-tight [text-wrap:balance]">
            Pourquoi choisir le modèle MATE Consulting ?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#153258]/80 leading-relaxed">
            Un équilibre parfait : l’excellence technique d’une direction financière de haut niveau,
            la flexibilité opérationnelle du freelance et l’absence totale de coûts fixes d’embauche.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse bg-white rounded-2xl shadow-sm border border-[#0E1E37]/10 overflow-hidden">
            <thead>
              <tr className="border-b border-[#0E1E37]/10">
                <th className="py-4 px-6 text-sm font-bold text-[#0E1E37] w-1/4 bg-slate-50">
                  Critères Clés
                </th>
                <th className="py-4 px-6 text-sm font-extrabold text-white w-1/3 bg-[#153258] relative">
                  <div className="flex items-center justify-between">
                    <span>MATE Consulting</span>
                    <span className="text-[10px] font-medium bg-[#C04A1A] py-0.5 px-2 rounded-full uppercase">
                      Recommandé TPE
                    </span>
                  </div>
                </th>
                <th className="py-4 px-6 text-sm font-semibold text-slate-700 w-1/5 bg-slate-50">
                  Secrétaire Indépendante
                </th>
                <th className="py-4 px-6 text-sm font-semibold text-slate-700 w-1/5 bg-slate-50">
                  Grand Cabinet / DAF Salarié
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {COMPARISON_POINTS.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6 font-bold text-[#153258] bg-slate-50/60 align-top">
                    {row.criterion}
                  </td>
                  <td className="py-4 px-6 text-[#0E1E37] font-semibold bg-[#153258]/5 align-top">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{row.mateConsulting}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-slate-600 align-top">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <span>{row.traditionalSecretary}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-slate-600 align-top">
                    <div className="flex items-start gap-2">
                      <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{row.bigFirmDAF}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
