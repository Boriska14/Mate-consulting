import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/mateData';
import { Phone, Mail, MessageSquare, Calendar, Clock, Send, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  initialOffer?: string;
  initialHours?: number;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialOffer = 'business', initialHours = 16 }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    companyType: 'tpe',
    selectedOffer: initialOffer,
    monthlyVolumeHours: initialHours,
    estimatedBudget: initialHours * 40,
    preferredDate: '',
    preferredTimeSlot: '10h00 - 10h30',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#0E1E37] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-[#153258] rounded-full filter blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[24rem] h-[24rem] bg-[#C04A1A] rounded-full filter blur-3xl opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Multi-Channel Coordinates */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#E2672F] mb-3">
              <Calendar className="w-4 h-4" />
              <span>Contact Direct & Réservation de Créneau</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight [text-wrap:balance]">
              Réservez votre diagnostic financier de 30 minutes offert
            </h2>
            
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Un échange confidentiel et sans engagement avec <strong>Ted Enrick MBILONGO</strong> pour
              auditer vos processus administratifs, estimer votre charge mensuelle et identifier
              vos gains immédiats de trésorerie.
            </p>

            {/* Direct Channels Cards */}
            <div className="mt-8 space-y-3.5">
              
              {/* Telephone */}
              <a
                href={`tel:${COMPANY_INFO.founder.phone}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group cursor-pointer shadow-2xs"
              >
                <div className="w-12 h-12 rounded-xl bg-[#153258] border border-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#E2672F] group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Ligne directe du consultant</div>
                  <div className="text-lg font-bold text-white font-mono tabular-nums">
                    {COMPANY_INFO.founder.phoneFormatted}
                  </div>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={COMPANY_INFO.founder.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-500/30 transition-all group cursor-pointer shadow-2xs"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-900/60 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <div className="text-xs text-emerald-300 font-medium">Message instantané WhatsApp</div>
                  <div className="text-base font-bold text-white">
                    Démarrer une conversation directe
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${COMPANY_INFO.founder.email}?subject=Contact%20MATE%20Consulting`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group cursor-pointer shadow-2xs"
              >
                <div className="w-12 h-12 rounded-xl bg-[#153258] border border-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#5B84B1] group-hover:scale-110 transition-transform" />
                </div>
                <div className="truncate">
                  <div className="text-xs text-slate-400 font-medium">Courriel professionnel</div>
                  <div className="text-sm font-bold text-white truncate font-mono">
                    {COMPANY_INFO.founder.email}
                  </div>
                </div>
              </a>

            </div>

            {/* Commitments */}
            <div className="mt-8 pt-6 border-t border-white/10 space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#E2672F] shrink-0" />
                <span>Accord de confidentialité (NDA) signé sur demande</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#5B84B1] shrink-0" />
                <span>Prise de contact sous 24h ouvrées garantie</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Missions à distance (France entière) et sur site (Île-de-France)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Lead & Booking Form */}
          <div className="lg:col-span-7 bg-white text-[#0E1E37] rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/20">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-[#0E1E37]">
                  Votre demande est bien enregistrée !
                </h3>
                <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
                  Merci <strong>{formData.fullName}</strong>. Ted Enrick MBILONGO analyse vos éléments
                  et prendra contact avec vous dans la journée au <strong>{formData.phone}</strong> ou par courriel.
                </p>

                <div className="mt-6 p-5 rounded-2xl bg-[#F6F1E9] border border-[#0E1E37]/10 text-xs text-left max-w-md mx-auto space-y-1.5">
                  <div><strong>Formule d'intérêt :</strong> {formData.selectedOffer}</div>
                  <div><strong>Entreprise :</strong> {formData.companyName || 'Non précisé'}</div>
                  {formData.preferredDate && (
                    <div><strong>Créneau indicatif :</strong> {formData.preferredDate} ({formData.preferredTimeSlot})</div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-3 text-xs font-bold text-[#153258] bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
                >
                  Envoyer une autre demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-100 pb-3 mb-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl sm:text-2xl font-black text-[#0E1E37] tracking-tight">
                      Planifier un échange d’audit
                    </h3>
                    <span className="text-xs font-bold text-[#C04A1A] bg-[#C04A1A]/10 px-2.5 py-1 rounded-md">
                      30 min offertes
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Renseignez vos coordonnées pour valider votre créneau et recevoir un devis personnalisé.
                  </p>
                </div>

                {/* Identity */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#153258] mb-1">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="ex: Alexandre Martin"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#153258] focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#153258] mb-1">
                      Nom de la société / Studio
                    </label>
                    <input
                      type="text"
                      placeholder="ex: Atelier Studio SAS"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#153258] focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#153258] mb-1">
                      Email professionnel *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alexandre@entreprise.fr"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#153258] focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#153258] mb-1">
                      Téléphone mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="06 12 34 56 78"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#153258] focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                {/* Company Type & Formula Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#153258] mb-1">
                      Profil d'entreprise
                    </label>
                    <select
                      value={formData.companyType}
                      onChange={(e) => setFormData({ ...formData, companyType: e.target.value as any })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:ring-2 focus:ring-[#153258] focus:border-transparent outline-none"
                    >
                      <option value="freelance">Indépendant / Profession Libérale</option>
                      <option value="tpe">TPE / Artisan / Commerce (1-9 salariés)</option>
                      <option value="pme">PME / Startup en croissance (10+)</option>
                      <option value="other">Autre structure</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#153258] mb-1">
                      Formule ciblée
                    </label>
                    <select
                      value={formData.selectedOffer}
                      onChange={(e) => setFormData({ ...formData, selectedOffer: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:ring-2 focus:ring-[#153258] focus:border-transparent outline-none"
                    >
                      <option value="essentiel">Formule 01 – Essentiel (25 à 35 €/h)</option>
                      <option value="business">Formule 02 – Business (35 à 45 €/h - Recommandé)</option>
                      <option value="performance">Formule 03 – Performance (45 à 60 €/h)</option>
                      <option value="optimisation">Offre Spéciale – Automatisation & Excel VBA</option>
                      <option value="diagnostic">Diagnostic Libre & Conseil Préalable</option>
                    </select>
                  </div>
                </div>

                {/* Preferred slot */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-bold text-[#153258] mb-2 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#C04A1A]" />
                    <span>Créneau souhaité pour le diagnostic (30 min offert) :</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="px-3.5 py-2 rounded-xl border border-slate-200 text-xs bg-white outline-none"
                    />
                    <select
                      value={formData.preferredTimeSlot}
                      onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
                      className="px-3.5 py-2 rounded-xl border border-slate-200 text-xs bg-white outline-none"
                    >
                      <option value="09h00 - 09h30">Matinée : 09h00 - 09h30</option>
                      <option value="11h00 - 11h30">Matinée : 11h00 - 11h30</option>
                      <option value="14h00 - 14h30">Après-midi : 14h00 - 14h30</option>
                      <option value="16h30 - 17h00">Fin de journée : 16h30 - 17h00</option>
                      <option value="autre">Me recontacter pour fixer le créneau</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#153258] mb-1">
                    Votre enjeu prioritaire (trésorerie, factures impayées, précomptabilité...)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ex: Nous souhaitons déléguer la relance de nos factures clients et mettre en place un prévisionnel de trésorerie sur Excel..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#153258] focus:border-transparent outline-none resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 px-6 rounded-2xl font-extrabold text-xs uppercase tracking-wider text-white bg-[#153258] hover:bg-[#0E1E37] active:scale-98 transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-50 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#E2672F]" />
                  <span>{submitting ? 'Validation...' : 'Valider ma demande de diagnostic 30 min offert'}</span>
                </button>

                <p className="text-[11px] text-slate-500 text-center">
                  Secret professionnel garanti. Vos données financières ne sont jamais transmises à des tiers.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
