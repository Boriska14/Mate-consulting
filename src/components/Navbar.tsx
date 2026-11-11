import React, { useState, useEffect } from 'react';
import { MateLogo } from './MateLogo';
import { Phone, Calendar, Menu, X, Rocket, MessageSquare, Mail, ShieldCheck, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/mateData';
import { trackEvent } from '../utils/analytics';

interface NavbarProps {
  onOpenContact: (mode?: 'diagnostic' | 'message') => void;
  onOpenDeployGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onOpenDeployGuide }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCta = () => {
    trackEvent('cta_nav_click');
    onOpenContact('diagnostic');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* 1. Executive Top Micro-Bar (Collapses smoothly on scroll) */}
      <div
        className={`bg-[#0E1E37] text-slate-300 text-[11px] font-medium border-b border-white/10 transition-all duration-300 overflow-hidden ${
          isScrolled ? 'max-h-0 opacity-0 py-0' : 'max-h-12 opacity-100 py-1.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Regulatory Trust & Geolocation */}
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-200">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E2672F]" />
              <span className="font-semibold text-white">MATE Consulting</span>
              <span className="text-slate-400">· SIREN {COMPANY_INFO.siren}</span>
            </span>
            <span className="hidden md:inline text-slate-400" aria-hidden="true">|</span>
            <span className="hidden md:inline text-slate-300">
              France & Afrique francophone (Interventions à distance et sur site en Île-de-France)
            </span>
          </div>

          {/* Right: Quick Direct Contacts & Vercel indicator */}
          <div className="flex items-center gap-4 text-slate-300">
            <a
              href={`mailto:${COMPANY_INFO.founder.email}`}
              className="hidden sm:flex items-center gap-1 hover:text-white transition-colors"
            >
              <Mail className="w-3 h-3 text-[#5B84B1]" />
              <span className="font-mono">{COMPANY_INFO.founder.email}</span>
            </a>

            <span className="hidden sm:inline text-slate-500" aria-hidden="true">·</span>

            <a
              href={COMPANY_INFO.founder.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('whatsapp_click')}
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp Direct</span>
            </a>

            <button
              onClick={onOpenDeployGuide}
              className="hidden lg:flex items-center gap-1 text-[#E2672F] hover:text-white transition-colors font-semibold cursor-pointer"
            >
              <Rocket className="w-3 h-3" />
              <span>Vercel Ready</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F6F1E9]/95 backdrop-blur-md shadow-sm border-b border-[#0E1E37]/10 py-2.5'
            : 'bg-[#F6F1E9] border-b border-[#0E1E37]/10 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6 lg:gap-8">
            
            {/* Zone 1: Brand Wordmark & Official Emblem */}
            <a
              href="#"
              className="flex items-center gap-2 group transition-transform active:scale-98 whitespace-nowrap shrink-0"
              aria-label="Accueil MATE Consulting"
            >
              <MateLogo size="md" variant="light" showSubtitle={true} />
            </a>

            {/* Zone 2: Navigation Links (Clean, Editorial, Interactive Hover) */}
            <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-[#153258]">
              <a
                href="#services"
                className="relative py-1 hover:text-[#C04A1A] transition-colors whitespace-nowrap shrink-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C04A1A] hover:after:w-full after:transition-all"
              >
                Services
              </a>

              <a
                href="#methode"
                className="relative py-1 hover:text-[#C04A1A] transition-colors whitespace-nowrap shrink-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C04A1A] hover:after:w-full after:transition-all"
              >
                Comment ça marche
              </a>

              <a
                href="#simulateur"
                className="relative py-1 hover:text-[#C04A1A] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C04A1A] hover:after:w-full after:transition-all"
              >
                <span>Simulateur</span>
                <span className="text-[9px] font-mono font-bold bg-[#C04A1A]/10 text-[#C04A1A] px-1.5 py-0.5 rounded">
                  Live
                </span>
              </a>

              <a
                href="#outils"
                className="relative py-1 hover:text-[#C04A1A] transition-colors whitespace-nowrap shrink-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C04A1A] hover:after:w-full after:transition-all"
              >
                Matrices Excel & Power BI
              </a>

              <a
                href="#faq"
                className="relative py-1 hover:text-[#C04A1A] transition-colors whitespace-nowrap shrink-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C04A1A] hover:after:w-full after:transition-all"
              >
                FAQ
              </a>
            </nav>

            {/* Zone 3: Direct Phone & Primary Action CTA */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              
              {/* Direct Click-to-Call Phone Button */}
              <a
                href={`tel:${COMPANY_INFO.founder.phone}`}
                onClick={() => trackEvent('phone_click')}
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-[#153258] bg-white hover:bg-slate-50 border border-[#0E1E37]/15 rounded-xl transition-all shadow-2xs whitespace-nowrap shrink-0 group"
                title="Appeler directement le cabinet"
              >
                <div className="w-5 h-5 rounded-md bg-[#C04A1A]/10 text-[#C04A1A] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-3 h-3" />
                </div>
                <span className="font-mono tabular-nums">{COMPANY_INFO.founder.phoneFormatted}</span>
              </a>

              {/* Primary Action Button ("Réserver un échange de 30 min") */}
              <button
                onClick={handleCta}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white bg-[#153258] hover:bg-[#0E1E37] active:scale-[0.98] rounded-xl transition-all shadow-md whitespace-nowrap shrink-0 cursor-pointer border border-[#153258]"
              >
                <Calendar className="w-3.5 h-3.5 text-[#E2672F]" />
                <span>Réserver un échange de 30 min</span>
              </button>
            </div>

            {/* Mobile Actions Hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={handleCta}
                className="sm:hidden px-3 py-1.5 text-xs font-bold text-white bg-[#153258] rounded-lg shadow-xs"
              >
                Échange 30 min
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#153258] hover:bg-[#D9CDBB]/30 rounded-xl transition-colors cursor-pointer"
                aria-label="Ouvrir le menu de navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#C04A1A]" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* 3. Mobile Responsive Slide-Down Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F6F1E9] border-b border-[#0E1E37]/15 px-5 pt-4 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2 text-sm font-bold text-[#153258]">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2.5 px-3 hover:bg-white rounded-xl transition-colors"
            >
              <span>Nos 4 Services DAF & Précompta</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>

            <a
              href="#methode"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2.5 px-3 hover:bg-white rounded-xl transition-colors"
            >
              <span>Comment ça marche (4 étapes)</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>

            <a
              href="#simulateur"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2.5 px-3 hover:bg-white rounded-xl transition-colors"
            >
              <div className="flex items-center gap-2">
                <span>Simulateur de Budget</span>
                <span className="text-[10px] bg-[#C04A1A] text-white px-1.5 py-0.2 rounded font-mono">Calcul en direct</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>

            <a
              href="#outils"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2.5 px-3 hover:bg-white rounded-xl transition-colors"
            >
              <span>Matrices Excel & Tableaux Power BI</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>

            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2.5 px-3 hover:bg-white rounded-xl transition-colors"
            >
              <span>Questions Fréquentes & Déontologie</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>

            {/* Quick Actions inside mobile drawer */}
            <div className="mt-4 pt-4 border-t border-[#0E1E37]/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleCta();
                }}
                className="w-full flex items-center justify-center gap-2.5 py-3 text-xs font-extrabold uppercase tracking-wider text-white bg-[#153258] rounded-xl shadow-md"
              >
                <Calendar className="w-4 h-4 text-[#E2672F]" />
                <span>Réserver un échange de 30 min (offert)</span>
              </button>

              <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                <a
                  href={`tel:${COMPANY_INFO.founder.phone}`}
                  onClick={() => trackEvent('phone_click')}
                  className="flex items-center justify-center gap-2 py-2.5 text-[#153258] bg-white border border-slate-200 rounded-xl"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C04A1A]" />
                  <span className="font-mono tabular-nums">{COMPANY_INFO.founder.phoneFormatted}</span>
                </a>

                <a
                  href={COMPANY_INFO.founder.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('whatsapp_click')}
                  className="flex items-center justify-center gap-2 py-2.5 text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-xl"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDeployGuide();
                }}
                className="w-full py-2 text-xs font-medium text-slate-600 hover:text-[#153258] flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Rocket className="w-3.5 h-3.5 text-[#C04A1A]" />
                <span>Guide de déploiement Vercel</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
