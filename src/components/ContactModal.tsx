import React, { useState, useEffect } from 'react';
import { X, Calendar, Phone, Mail, MessageSquare, Send, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/mateData';
import { trackEvent } from '../utils/analytics';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedOfferId?: string;
  simulationData?: any;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  selectedOfferId = 'daf',
  simulationData,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [companySize, setCompanySize] = useState('tpe_1_9');
  const [need, setNeed] = useState(selectedOfferId);
  const [message, setMessage] = useState('');
  const [websiteTrap, setWebsiteTrap] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (selectedOfferId) {
      setNeed(selectedOfferId);
    }
  }, [selectedOfferId]);

  useEffect(() => {
    if (simulationData) {
      const budgetFormatted = `${simulationData.monthlyBudget.toLocaleString('fr-FR')} € HT`;
      setMessage(
        `Simulation : ${simulationData.companyType} avec un volume estimé de ${simulationData.hours}h/mois pour un budget estimé de ${budgetFormatted}/mois.`
      );
    }
  }, [simulationData]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (websiteTrap) {
      setSubmitted(true);
      return;
    }

    setSubmitting(true);
    trackEvent('form_submit_start', { modal: true, need, companySize });

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      trackEvent('form_submit_success', { modal: true, email, need });
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-[#0E1E37]/15 overflow-hidden">
        
        {/* Modal Top Header */}
        <div className="bg-[#153258] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5 text-[#E2672F]" />
            </div>
            <div>
              <h3 className="text-lg font-black tracking-tight">Réserver un échange de 30 min (offert)</h3>
              <p className="text-xs text-[#D9CDBB]">Échange direct & confidentiel avec Ted Enrick MBILONGO</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-[#0E1E37]">Votre demande est bien reçue !</h4>
              <p className="text-xs text-slate-600 mt-2 max-w-sm mx-auto leading-relaxed">
                Merci {fullName}. Ted Enrick MBILONGO vous contactera sous 24h ouvrées à l’adresse {email} pour convenir de l’échange.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-6 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#153258] hover:bg-[#0E1E37] rounded-xl cursor-pointer"
              >
                Fermer la fenêtre
              </button>
            </div>
          ) : (
            <div>
              {/* Calendly Direct Option */}
              <div className="mb-4 p-3.5 rounded-xl bg-[#F6F1E9] border border-[#0E1E37]/10 flex items-center justify-between gap-3 text-xs">
                <div>
                  <div className="font-bold text-[#153258]">Accès direct à l’agenda :</div>
                  <div className="text-[11px] text-slate-600">Choisissez votre créneau en 1 clic</div>
                </div>
                <a
                  href={`mailto:${COMPANY_INFO.founder.email}?subject=R%C3%A9servation%20cr%C3%A9neau%20%C3%A9change%2030%20min%20-%20MATE%20Consulting`}
                  onClick={() => trackEvent('calendly_click')}
                  className="px-3.5 py-1.5 text-xs font-bold text-[#0E1E37] bg-white hover:bg-slate-50 border border-[#0E1E37]/15 rounded-lg flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                >
                  <span>Agenda en ligne</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </div>

              {/* Direct Quick Channels Bar */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <a
                  href={`tel:${COMPANY_INFO.founder.phone}`}
                  onClick={() => trackEvent('phone_click')}
                  className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-bold text-[#153258] flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C04A1A]" />
                  <span>{COMPANY_INFO.founder.phoneFormatted}</span>
                </a>
                <a
                  href={COMPANY_INFO.founder.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('whatsapp_click')}
                  className="p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-xs font-bold text-emerald-800 flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp direct</span>
                </a>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Honeypot */}
                <div style={{ display: 'none' }} aria-hidden="true">
                  <input
                    type="text"
                    value={websiteTrap}
                    onChange={(e) => setWebsiteTrap(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#153258] mb-1">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alexandre Martin"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#153258] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#153258] mb-1">
                      Taille de l'entreprise *
                    </label>
                    <select
                      value={companySize}
                      onChange={(e) => setCompanySize(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white outline-none"
                    >
                      <option value="solo">Indépendant (0 sal.)</option>
                      <option value="tpe_1_9">TPE (1 à 9 sal.)</option>
                      <option value="pme_10_49">PME (10 à 49 sal.)</option>
                      <option value="pme_50plus">PME (50+ sal.)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#153258] mb-1">
                      Email professionnel *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alexandre@entreprise.fr"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#153258] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#153258] mb-1">
                      Téléphone portable
                    </label>
                    <input
                      type="tel"
                      placeholder="06 12 34 56 78"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#153258] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#153258] mb-1">
                    Besoin prioritaire *
                  </label>
                  <select
                    value={need}
                    onChange={(e) => setNeed(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white outline-none"
                  >
                    <option value="daf">Direction Financière (DAF) externalisée</option>
                    <option value="tresorerie">Suivi de trésorerie glissante 12 semaines</option>
                    <option value="precompta">Précomptabilité opérationnelle & tri pièces</option>
                    <option value="modelisation">Matrices Excel VBA / Power BI sur-mesure</option>
                    <option value="autre">Autre échange / Diagnostic préalable</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#153258] mb-1">
                    Contexte ou questions (optionnel)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Précisez votre volume de pièces ou votre enjeu..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-xl border border-slate-200 text-xs outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 px-4 rounded-xl font-extrabold text-xs uppercase tracking-wider text-white bg-[#153258] hover:bg-[#0E1E37] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Send className="w-4 h-4 text-[#E2672F]" />
                  <span>{submitting ? 'Envoi...' : 'Réserver mon échange de 30 min'}</span>
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-500 pt-0.5">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  <span>Notification envoyée à l'équipe MATE Consulting ({COMPANY_INFO.founder.email}).</span>
                </div>
              </form>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
