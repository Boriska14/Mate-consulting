import React, { useState } from 'react';
import { FREQUENT_QUESTIONS } from '../data/mateData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white border-b border-[#0E1E37]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#C04A1A] mb-2 flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4" />
            <span>Transparence & Cadre de Travail</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E1E37] tracking-tight [text-wrap:balance]">
            Questions fréquentes
          </h2>
          <p className="mt-4 text-base text-[#153258]/80 leading-relaxed">
            Tout ce que vous devez savoir sur le fonctionnement d’une mission MATE Consulting.
          </p>
        </div>

        <div className="space-y-4">
          {FREQUENT_QUESTIONS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-[#0E1E37]/10 bg-[#F6F1E9]/40 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 font-semibold text-sm text-[#0E1E37] hover:text-[#153258] transition-colors"
                >
                  <span className="text-left">{item.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#C04A1A] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#153258]/85 leading-relaxed border-t border-[#0E1E37]/5 bg-white/60">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
