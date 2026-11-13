import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Calendar, ArrowRight } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface FaqSectionProps {
  onOpenContact?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenContact }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqItems = [
    {
      q: 'Quelle est la différence entre MATE Consulting et mon expert-comptable ?',
      a: 'MATE Consulting et votre expert-comptable sont parfaitement complémentaires. Votre expert-comptable valide et certifie vos comptes annuels, établit le bilan fiscal et atteste vos états financiers légaux. MATE Consulting intervient en amont au fil de l’eau : organisation des pièces justificatives, saisie précomptable, rapprochements bancaires réguliers, plan de trésorerie glissant à 12 semaines et relances clients. Nous transmettons à votre expert-comptable un dossier rigoureux et ordonné, ce qui lui fait gagner un temps précieux et réduit vos allers-retours stressants.',
    },
    {
      q: 'Quelle est la durée d’engagement pour un accompagnement ?',
      a: 'Nos forfaits sont sans aucun engagement de durée imposé. Nous croyons en une collaboration fondée sur la confiance et l’utilité concrète. Vous pouvez réajuster ou suspendre votre volume d’heures mensuel d’un mois sur l’autre selon vos fluctuations d’activité.',
    },
    {
      q: 'Quels sont les outils utilisés et compatibles avec mon entreprise ?',
      a: 'Nous nous intégrons directement à votre écosystème : SAP, Qonto, iPaidThat, Indy, Henrri, Silae RH, banques professionnelles, ainsi que nos solutions d’analyse et d’automatisation (Excel VBA, Power BI, Power Automate, SQL, Python, Supabase) et les données financières Bloomberg.',
    },
    {
      q: 'Comment garantissez-vous la confidentialité de mes données financières ?',
      a: 'La confidentialité fait partie de notre déontologie financière fondamentale. Nous signons un accord de confidentialité strict (NDA) avant toute intervention. Vos accès bancaires sont configurés en mode lecture seule ou préparatoire sans délégation de signature, et aucun document n’est partagé à des tiers sans votre validation écrite préalable.',
    },
    {
      q: 'Quel est le délai de démarrage après le premier échange ?',
      a: 'Après votre échange initial de 30 minutes et la validation conjointe de la proposition, nous démarrons l’intervention opérationnelle sous 5 jours ouvrés.',
    },
    {
      q: 'Qu’est-ce qui est inclus dans l’accompagnement et qu’est-ce qui ne l’est pas ?',
      a: 'Sont inclus : la précomptabilité opérationnelle, le tri et l’imputation des pièces, le suivi de trésorerie prévisionnelle, les relances clients amiables, les tableaux de bord et les matrices Excel décisionnelles. Ne sont pas inclus : les actes réglementés réservés par la loi aux experts-comptables inscrits à l’Ordre (tenue comptable officielle, certification du bilan et télédéclarations fiscales officielles), qui restent sous la responsabilité de votre cabinet comptable.',
    },
    {
      q: 'Comment le devis et les tarifs sont-ils établis ?',
      a: 'Nos tarifs sont transparents et basés sur une facturation horaire claire (grille indicative : 25 € à 60 € HT / h selon la formule retenue, dès 250 € HT / mois pour 10h). À l’issue du diagnostic de 30 minutes, nous dimensionnons le volume d’heures mensuel nécessaire selon le nombre de factures et la fréquence de reporting souhaitée. Vous recevez une proposition chiffrée claire, sans frais cachés.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-24 bg-white border-b border-[#0E1E37]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#C04A1A] mb-2 flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4" />
            <span>Transparence & Réponses Concrètes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E1E37] tracking-tight [text-wrap:balance]">
            Questions fréquentes des dirigeants
          </h2>
          <p className="mt-4 text-base text-[#153258]/80 leading-relaxed font-normal">
            Tout ce que vous devez savoir avant de démarrer un accompagnement en pilotage financier.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5">
          {faqItems.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#0E1E37]/10 bg-[#F6F1E9]/40 overflow-hidden transition-all shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-[#0E1E37] hover:text-[#153258] transition-colors cursor-pointer"
                >
                  <span className="text-left leading-snug">{item.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#C04A1A] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-2 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-[#0E1E37]/5 bg-white/70">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Reassurance prompt below FAQ */}
        {onOpenContact && (
          <div className="mt-12 text-center p-6 rounded-2xl bg-[#F6F1E9] border border-[#0E1E37]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left text-xs sm:text-sm text-slate-700">
              <strong className="text-[#0E1E37] block font-bold">Vous avez une question spécifique sur votre trésorerie ?</strong>
              <span>Échangez directement avec l'équipe MATE Consulting lors d'un audit de 30 minutes sans engagement.</span>
            </div>
            <button
              onClick={() => {
                trackEvent('cta_footer_click', { section: 'faq_box' });
                onOpenContact();
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#153258] hover:bg-[#0E1E37] rounded-xl transition-colors whitespace-nowrap cursor-pointer shrink-0"
            >
              <Calendar className="w-3.5 h-3.5 text-[#E2672F]" />
              <span>Réserver un échange de 30 min</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
