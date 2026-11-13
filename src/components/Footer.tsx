import React from 'react';
import { MateLogo } from './MateLogo';
import { COMPANY_INFO } from '../data/mateData';
import { Phone, Mail, MessageSquare, ShieldCheck, Lock } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface FooterProps {
  onOpenContact: (mode?: 'diagnostic' | 'message') => void;
  onOpenLegal: () => void;
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenContact,
  onOpenLegal,
  onOpenPrivacy,
}) => {
  return (
    <footer className="bg-[#0E1E37] text-white border-t border-white/10 pt-10 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-white/10">
          
          {/* Brand & Pillars */}
          <div className="lg:col-span-5">
            <MateLogo size="md" variant="dark" showSubtitle={true} />
            <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Externalisation de la gestion financière au format agile, précomptabilité
              et outils d'aide à la décision sous Excel et Power BI pour PME, TPE, startups, artisans et indépendants.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-[#E2672F] font-bold tracking-wider uppercase">
              <span>{COMPANY_INFO.pillars[0]}</span>
              <span aria-hidden="true">·</span>
              <span>{COMPANY_INFO.pillars[1]}</span>
              <span aria-hidden="true">·</span>
              <span>{COMPANY_INFO.pillars[2]}</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 text-xs space-y-2.5">
            <div className="font-bold uppercase tracking-wider text-[#D9CDBB] mb-3">
              Plan du site
            </div>
            <div>
              <a href="#services" className="text-slate-300 hover:text-white transition-colors">
                Nos 4 services gestion & précompta
              </a>
            </div>
            <div>
              <a href="#methode" className="text-slate-300 hover:text-white transition-colors">
                Comment ça marche (4 étapes)
              </a>
            </div>
            <div>
              <a href="#simulateur" className="text-slate-300 hover:text-white transition-colors">
                Simulateur de budget mensuel
              </a>
            </div>
            <div>
              <a href="#outils" className="text-slate-300 hover:text-white transition-colors">
                Matrices Excel & Power BI
              </a>
            </div>
            <div>
              <a href="#faq" className="text-slate-300 hover:text-white transition-colors">
                Questions fréquentes & Déontologie
              </a>
            </div>
          </div>

          {/* Direct Contact */}
          <div className="lg:col-span-4 text-xs space-y-3">
            <div className="font-bold uppercase tracking-wider text-[#D9CDBB] mb-3">
              Contacter le cabinet
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Phone className="w-4 h-4 text-[#E2672F] shrink-0" />
              <a
                href={`tel:${COMPANY_INFO.founder.phone}`}
                onClick={() => trackEvent('phone_click')}
                className="hover:text-white font-mono tabular-nums"
              >
                {COMPANY_INFO.founder.phoneFormatted}
              </a>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Mail className="w-4 h-4 text-[#5B84B1] shrink-0" />
              <a href={`mailto:${COMPANY_INFO.founder.email}`} className="hover:text-white truncate">
                {COMPANY_INFO.founder.email}
              </a>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
              <a
                href={COMPANY_INFO.founder.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('whatsapp_click')}
                className="hover:text-emerald-300"
              >
                Échange direct WhatsApp
              </a>
            </div>
            
            <button
              onClick={() => {
                trackEvent('cta_footer_click');
                onOpenContact('diagnostic');
              }}
              className="mt-3 w-full py-3 px-3 text-xs font-bold uppercase tracking-wider text-white bg-[#153258] hover:bg-[#1a3d6b] rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Réserver un échange de 30 min</span>
            </button>
          </div>
        </div>

        {/* Regulatory & Ethical Disclaimer */}
        <div className="pt-8 pb-4 text-[11px] text-slate-400 leading-relaxed border-b border-white/5">
          <div className="flex items-start gap-2 max-w-4xl">
            <ShieldCheck className="w-4 h-4 text-[#E2672F] shrink-0 mt-0.5" />
            <p>
              <strong>Cadre déontologique et réglementaire :</strong> MATE Consulting propose des services de conseil en gestion financière, précomptabilité opérationnelle, saisie préparatoire, aide à la décision et modélisation administrative. Les travaux réglementés d'expertise comptable (tenue officielle et certification des comptes légaux) sont réalisés en étroite collaboration avec les cabinets d'expertise-comptable habilités.
            </p>
          </div>
        </div>

        {/* Legal links & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.legalName} · SIREN {COMPANY_INFO.siren}.
          </div>
          
          <div className="flex items-center gap-4 text-[11px]">
            <button
              onClick={onOpenLegal}
              className="hover:text-white underline transition-colors cursor-pointer"
            >
              Mentions Légales
            </button>
            <span>·</span>
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white underline transition-colors cursor-pointer"
            >
              Politique de Confidentialité
            </button>
            <span>·</span>
            <span className="text-slate-400">mateconsulting.fr</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
