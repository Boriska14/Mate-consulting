import React from 'react';
import { MateLogo } from './MateLogo';
import { COMPANY_INFO } from '../data/mateData';
import { Phone, Mail, MessageSquare, Rocket, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onOpenContact: (mode?: 'diagnostic' | 'message') => void;
  onOpenDeployGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact, onOpenDeployGuide }) => {
  return (
    <footer className="bg-[#0E1E37] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Pillars */}
          <div className="lg:col-span-5">
            <MateLogo size="lg" variant="dark" />
            <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Direction Administrative et Financière externalisée, précomptabilité opérationnelle
              et matrices de gestion décisionnelles pour TPE, startups et indépendants.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-[#E2672F] font-semibold tracking-wider uppercase">
              <span>{COMPANY_INFO.pillars[0]}</span>
              <span aria-hidden="true">·</span>
              <span>{COMPANY_INFO.pillars[1]}</span>
              <span aria-hidden="true">·</span>
              <span>{COMPANY_INFO.pillars[2]}</span>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={onOpenDeployGuide}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/15 rounded-lg border border-white/10 transition-colors"
              >
                <Rocket className="w-3.5 h-3.5 text-[#E2672F]" />
                <span>Déployer sur Vercel</span>
              </button>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 text-xs space-y-2.5">
            <div className="font-bold uppercase tracking-wider text-[#D9CDBB] mb-3">
              Navigation
            </div>
            <div>
              <a href="#offres" className="text-slate-300 hover:text-white transition-colors">
                Formules d'accompagnement
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
              <a href="#fondateur" className="text-slate-300 hover:text-white transition-colors">
                L'expertise de Ted Enrick MBILONGO
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
              Contacter l'équipe
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Phone className="w-4 h-4 text-[#E2672F] shrink-0" />
              <a href={`tel:${COMPANY_INFO.founder.phone}`} className="hover:text-white font-mono tabular-nums">
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
                className="hover:text-emerald-300"
              >
                Échange direct WhatsApp
              </a>
            </div>
            <div className="text-[11px] text-slate-400 pt-2">
              {COMPANY_INFO.founder.location}
            </div>
            <button
              onClick={() => onOpenContact('diagnostic')}
              className="mt-2 w-full py-2.5 px-3 text-xs font-semibold text-white bg-[#153258] hover:bg-[#1a3d6b] rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <span>Prendre un rendez-vous (30 min offert)</span>
            </button>
          </div>
        </div>

        {/* Regulatory & Ethical Disclaimer */}
        <div className="pt-8 pb-4 text-[11px] text-slate-400 leading-relaxed border-b border-white/5">
          <div className="flex items-start gap-2 max-w-4xl">
            <ShieldCheck className="w-4 h-4 text-[#E2672F] shrink-0 mt-0.5" />
            <p>
              <strong>Cadre déontologique et réglementaire :</strong> MATE Consulting propose des
              services de conseil en gestion financière, précomptabilité opérationnelle, saisie préparatoire,
              aide à la décision et modélisation administrative. Les travaux réglementés de tenue officielle de comptes,
              clôture de bilan et certification des comptes sont confiés aux professionnels de l'expertise-comptable
              avec lesquels nous collaborons étroitement.
            </p>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.legalName} · SIREN {COMPANY_INFO.siren} · Tous droits réservés.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Paris, France</span>
            <span>·</span>
            <span>Site optimisé pour déploiement Vercel</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
