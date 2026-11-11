import React from 'react';
import { X, Shield } from 'lucide-react';
import { COMPANY_INFO } from '../data/mateData';

interface LegalNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LegalNoticeModal: React.FC<LegalNoticeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#0E1E37]/15 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#153258] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Shield className="w-5 h-5 text-[#E2672F]" />
            <h3 className="text-base sm:text-lg font-bold">Mentions Légales</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-5 text-xs text-slate-700 leading-relaxed">
          <div>
            <h4 className="font-bold text-sm text-[#0E1E37] mb-1.5">1. Éditeur du site</h4>
            <p>
              Le site <strong>mateconsulting-pi.vercel.app</strong> est édité par l'entreprise :
            </p>
            <ul className="list-disc list-inside mt-1.5 space-y-1 text-slate-600">
              <li><strong>Raison sociale :</strong> MATE Consulting</li>
              <li><strong>Forme juridique :</strong> Entreprise Individuelle (EI)</li>
              <li><strong>Numéro SIREN :</strong> {COMPANY_INFO.siren}</li>
              <li><strong>Adresse du siège :</strong> Paris, France (RCS Paris)</li>
              <li><strong>TVA :</strong> Franchise en base de TVA (art. 293 B du CGI)</li>
              <li><strong>Téléphone :</strong> {COMPANY_INFO.founder.phone}</li>
              <li><strong>Email :</strong> {COMPANY_INFO.founder.email}</li>
              <li><strong>Directeur de la publication :</strong> {COMPANY_INFO.founder.name}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm text-[#0E1E37] mb-1.5">2. Hébergement</h4>
            <p>
              Le site est hébergé par la société <strong>Vercel Inc.</strong><br />
              Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.<br />
              Site internet : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#C04A1A] underline">vercel.com</a>
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm text-[#0E1E37] mb-1.5">3. Propriété intellectuelle</h4>
            <p>
              L’ensemble des contenus (textes, logos, éléments graphiques, matrices présentées) figurant sur ce site sont protégés par le droit d’auteur et la propriété intellectuelle. Toute reproduction, même partielle, est interdite sans autorisation écrite préalable.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm text-[#0E1E37] mb-1.5">4. Nature des prestations & Déontologie</h4>
            <p>
              MATE Consulting propose des services de conseil en gestion administrative et financière, précomptabilité opérationnelle, modélisation décisionnelle et pilotage de la trésorerie. Les travaux réglementés d'expertise comptable (tenue et certification légale des comptes) sont confiés aux experts-comptables habilités.
            </p>
          </div>
        </div>

        <div className="bg-slate-50 p-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-white bg-[#153258] hover:bg-[#0E1E37] rounded-xl transition-colors cursor-pointer"
          >
            Fermer
          </button>
        </div>

      </div>
    </div>
  );
};
