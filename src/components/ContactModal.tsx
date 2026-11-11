import React, { useState, useEffect } from 'react';
import { X, Calendar, Phone, Mail, MessageSquare, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/mateData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedOfferId?: string;
  simulationData?: any;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  selectedOfferId = 'business',
  simulationData,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [offer, setOffer] = useState(selectedOfferId);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (selectedOfferId) {
      setOffer(selectedOfferId);
    }
  }, [selectedOfferId]);

  useEffect(() => {
    if (simulationData) {
      const currencyLabel = simulationData.currency === 'FCFA' ? 'FCFA' : '€ HT';
      const budgetFormatted = simulationData.currency === 'FCFA'
        ? `${Math.round(simulationData.monthlyBudget * 655.957).toLocaleString('fr-FR')} FCFA`
        : `${simulationData.monthlyBudget.toLocaleString('fr-FR')} € HT`;

      setMessage(
        `Simulation : ${simulationData.companyType} avec un volume estimé de ${simulationData.hours}h/mois pour un budget estimé de ${budgetFormatted}/mois.`
      );
    }
  }, [simulationData]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
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
              <h3 className="text-lg font-black tracking-tight">Diagnostic Flash 30 min (Offert)</h3>
              <p className="text-xs text-[#D9CDBB]">Échange confidentiel avec Ted Enrick MBILONGO</p>
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
                Merci {fullName}. Ted Enrick MBILONGO vous contactera sous 24h ouvrées pour confirmer votre créneau.
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
              {/* Direct Quick Channels Bar */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <a
                  href={`tel:${COMPANY_INFO.founder.phone}`}
                  className="p-3 rounded-xl bg-[#F6F1E9] hover:bg-[#ebdcc8] border border-[#0E1E37]/10 text-xs font-bold text-[#153258] flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C04A1A]" />
                  <span>{COMPANY_INFO.founder.phoneFormatted}</span>
                </a>
                <a
                  href={COMPANY_INFO.founder.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-xs font-bold text-emerald-800 flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp direct</span>
                </a>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#153258] mb-1">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jean Dupont"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#153258] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#153258] mb-1">
                      Société / Activité
                    </label>
                    <input
                      type="text"
                      placeholder="Nom de l'entreprise"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#153258] outline-none"
                    />
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
                      placeholder="jean@societe.fr"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#153258] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#153258] mb-1">
                      Téléphone mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="06 12 34 56 78"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#153258] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#153258] mb-1">
                    Formule souhaitée
                  </label>
                  <select
                    value={offer}
                    onChange={(e) => setOffer(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs bg-white outline-none"
                  >
                    <option value="essentiel">Formule 01 – Essentiel (25 à 35 €/h)</option>
                    <option value="business">Formule 02 – Business (35 à 45 €/h - Recommandé)</option>
                    <option value="performance">Formule 03 – Performance (45 à 60 €/h)</option>
                    <option value="optimisation">Offre Spéciale – Automatisation & Excel VBA</option>
                    <option value="diagnostic">Diagnostic Libre & Conseil</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#153258] mb-1">
                    Précisions sur votre besoin ou volume
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Précisez votre enjeu prioritaire..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 px-4 rounded-xl font-extrabold text-xs uppercase tracking-wider text-white bg-[#153258] hover:bg-[#0E1E37] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Send className="w-4 h-4 text-[#E2672F]" />
                  <span>{submitting ? 'Validation...' : 'Confirmer ma demande de diagnostic'}</span>
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Vos données sont protégées par le secret professionnel.</span>
                </div>
              </form>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
