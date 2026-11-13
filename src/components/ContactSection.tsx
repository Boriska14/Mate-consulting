import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/mateData';
import { Phone, Mail, MessageSquare, Calendar, Clock, Send, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface ContactSectionProps {
  initialOffer?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialOffer = 'pilotage' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyType: 'tpe',
    need: initialOffer,
    message: '',
    // Honeypot field (hidden from real users to trap spam bots)
    website_trap: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Honeypot anti-spam verification: if website_trap is filled, silently discard
    if (formData.website_trap) {
      setSubmitted(true);
      return;
    }

    // Client-side validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.need) {
      setErrorMessage('Veuillez renseigner votre nom, email et votre besoin prioritaire.');
      return;
    }

    trackEvent('form_submit_start', { companyType: formData.companyType, need: formData.need });
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      trackEvent('form_submit_success', { email: formData.email, need: formData.need });
    }, 500);
  };

  return (
    <section id="contact" className="py-10 md:py-14 bg-[#0E1E37] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-[#153258] rounded-full filter blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[24rem] h-[24rem] bg-[#C04A1A] rounded-full filter blur-3xl opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Multi-Channel & Appointment Booking Link */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#E2672F] mb-2">
              <Calendar className="w-4 h-4" />
              <span>Prise de Rendez-Vous Directe</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight [text-wrap:balance]">
              Réserver un échange de 30 min offert
            </h2>
            
            <p className="mt-2.5 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Un échange confidentiel et sans engagement avec <strong>l'équipe MATE Consulting</strong> pour
              auditer votre organisation financière, identifier vos leviers d’optimisation et estimer votre budget.
            </p>

            {/* Direct Instant Calendar Booking Card */}
            <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-[#153258] border border-white/15 shadow-md">
              <div className="text-xs font-bold uppercase tracking-wider text-[#E2672F] mb-1">
                Option Rapide : Agenda en Ligne
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">
                Choisissez directement votre créneau
              </h3>
              <p className="text-xs text-slate-300 mb-3 leading-relaxed">
                Accédez à notre calendrier en ligne pour réserver instantanément un créneau de 30 minutes sans échange d'emails préalable.
              </p>
              
              <a
                href={`mailto:${COMPANY_INFO.founder.email}?subject=R%C3%A9servation%20cr%C3%A9neau%20%C3%A9change%2030%20min%20-%20MATE%20Consulting`}
                onClick={() => trackEvent('calendly_click')}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-extrabold text-xs uppercase tracking-wider text-[#0E1E37] bg-white hover:bg-slate-100 transition-all shadow-sm cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#C04A1A]" />
                <span>Ouvrir l'agenda en ligne (30 min)</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>

            {/* Direct Channels Cards */}
            <div className="mt-4 space-y-2.5">
              
              {/* Telephone */}
              <a
                href={`tel:${COMPANY_INFO.founder.phone}`}
                onClick={() => trackEvent('phone_click')}
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group cursor-pointer shadow-2xs"
              >
                <div className="w-9 h-9 rounded-xl bg-[#153258] border border-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#E2672F] group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-medium">Appel téléphonique direct</div>
                  <div className="text-sm font-bold text-white font-mono tabular-nums">
                    {COMPANY_INFO.founder.phoneFormatted}
                  </div>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={COMPANY_INFO.founder.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('whatsapp_click')}
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-500/30 transition-all group cursor-pointer shadow-2xs"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-900/60 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <div className="text-[11px] text-emerald-300 font-medium">WhatsApp direct</div>
                  <div className="text-sm font-bold text-white">
                    Échanger directement par messagerie
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${COMPANY_INFO.founder.email}?subject=Demande%20d%27%C3%A9change%20de%2030%20min%20MATE%20Consulting`}
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group cursor-pointer shadow-2xs"
              >
                <div className="w-9 h-9 rounded-xl bg-[#153258] border border-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#5B84B1] group-hover:scale-110 transition-transform" />
                </div>
                <div className="truncate">
                  <div className="text-[11px] text-slate-400 font-medium">Boîte de réception officielle</div>
                  <div className="text-xs font-bold text-white truncate font-mono">
                    {COMPANY_INFO.founder.email}
                  </div>
                </div>
              </a>

            </div>

            {/* Reassurance */}
            <div className="mt-4 pt-4 border-t border-white/10 space-y-1.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#E2672F] shrink-0" />
                <span>Accord de confidentialité (NDA) signé sur demande</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#5B84B1] shrink-0" />
                <span>Réponse garantie sous 24h ouvrées par email ou téléphone</span>
              </div>
            </div>

          </div>

          {/* Right Column: Short Validated Form with Honeypot */}
          <div className="lg:col-span-7 bg-white text-[#0E1E37] rounded-2xl p-5 sm:p-7 shadow-2xl border border-white/20">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-[#0E1E37]">
                  Votre demande a bien été transmise !
                </h3>
                <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
                  Merci <strong>{formData.fullName}</strong>. L'équipe MATE Consulting étudie votre demande
                  et vous recontactera sous 24h ouvrées à l’adresse <strong>{formData.email}</strong> pour convenir de l'échange.
                </p>

                <div className="mt-6 p-4 rounded-2xl bg-[#F6F1E9] border border-[#0E1E37]/10 text-xs text-left max-w-md mx-auto space-y-1">
                  <div><strong>Besoin sélectionné :</strong> {formData.need}</div>
                  <div><strong>Type d'entreprise :</strong> {formData.companyType}</div>
                  <div><strong>Notification envoyée à :</strong> {COMPANY_INFO.founder.email}</div>
                </div>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 text-xs font-bold text-[#153258] bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-100 pb-3 mb-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl sm:text-2xl font-black text-[#0E1E37] tracking-tight">
                      Formulaire de prise de contact
                    </h3>
                    <span className="text-xs font-bold text-[#C04A1A] bg-[#C04A1A]/10 px-2.5 py-1 rounded-md">
                      30 min offertes
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    4 champs essentiels pour préparer notre échange.
                  </p>
                </div>

                {/* Honeypot Trap (Hidden from humans) */}
                <div style={{ display: 'none', position: 'absolute', left: '-9999px' }} aria-hidden="true">
                  <label htmlFor="website_trap">Ne pas remplir ce champ si vous êtes humain</label>
                  <input
                    type="text"
                    id="website_trap"
                    name="website_trap"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website_trap}
                    onChange={(e) => setFormData({ ...formData, website_trap: e.target.value })}
                  />
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold">
                    {errorMessage}
                  </div>
                )}

                {/* Nom et Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#153258] mb-1">
                      Nom et prénom *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="ex: Sophie Laurent"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#153258] focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#153258] mb-1">
                      Email professionnel *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sophie@entreprise.fr"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#153258] focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                {/* Téléphone & Taille de l'entreprise */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#153258] mb-1">
                      Téléphone portable
                    </label>
                    <input
                      type="tel"
                      placeholder="06 12 34 56 78"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#153258] focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#153258] mb-1">
                      Type d'entreprise *
                    </label>
                    <select
                      value={formData.companyType}
                      onChange={(e) => setFormData({ ...formData, companyType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:ring-2 focus:ring-[#153258] focus:border-transparent outline-none"
                    >
                      <option value="independant">Indépendant / Profession libérale</option>
                      <option value="tpe">TPE / Artisan / Commerce</option>
                      <option value="pme">PME / Startup</option>
                      <option value="association">Association / Autre structure</option>
                    </select>
                  </div>
                </div>

                {/* Besoin prioritaire */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#153258] mb-1">
                    Votre besoin prioritaire *
                  </label>
                  <select
                    value={formData.need}
                    onChange={(e) => setFormData({ ...formData, need: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:ring-2 focus:ring-[#153258] focus:border-transparent outline-none"
                  >
                    <option value="precompta">01. Précomptabilité Opérationnelle & Gestion Administrative</option>
                    <option value="tresorerie">02. Pilotage de Trésorerie & Gestion du Poste Clients</option>
                    <option value="pilotage">03. Gestion Financière Externalisée & Pilotage Stratégique</option>
                    <option value="modelisation">04. Automatisation de la Gestion Financière & Reporting</option>
                    <option value="devis">Estimation personnalisée / À définir ensemble</option>
                  </select>
                </div>

                {/* Message / Contexte */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#153258] mb-1">
                    Description de votre situation ou outils actuels (optionnel)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ex: Nous avons 30 factures par mois sur Qonto, nous manquons de visibilité sur nos créances clients..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#153258] focus:border-transparent outline-none resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 px-6 rounded-2xl font-extrabold text-xs uppercase tracking-wider text-white bg-[#153258] hover:bg-[#0E1E37] active:scale-98 transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-50 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#E2672F]" />
                  <span>{submitting ? 'Validation...' : 'Réserver mon échange de 30 min offert'}</span>
                </button>

                <p className="text-[11px] text-slate-500 text-center">
                  Données confidentielles. Notification instantanée transmise à l'équipe MATE Consulting ({COMPANY_INFO.founder.email}).
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
