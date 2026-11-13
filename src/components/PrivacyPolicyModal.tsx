import React from 'react';
import { X, Lock } from 'lucide-react';
import { COMPANY_INFO } from '../data/mateData';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#0E1E37]/15 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#153258] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Lock className="w-5 h-5 text-[#E2672F]" />
            <h3 className="text-base sm:text-lg font-bold">Politique de Confidentialité (RGPD)</h3>
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
            <h4 className="font-bold text-sm text-[#0E1E37] mb-1.5">1. Responsable du traitement</h4>
            <p>
              Le responsable du traitement des données personnelles collectées sur ce site est :<br />
              <strong>Direction MATE Consulting</strong>.<br />
              Contact RGPD : Équipe MATE Consulting ({COMPANY_INFO.founder.email}).
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm text-[#0E1E37] mb-1.5">2. Données collectées & Finalités</h4>
            <p>
              Les données personnelles collectées via le formulaire de contact (nom, prénom, email professionnel, téléphone, taille de l’entreprise, description du besoin) sont traitées exclusivement pour :
            </p>
            <ul className="list-disc list-inside mt-1 space-y-1 text-slate-600">
              <li>Traiter et répondre à votre demande d’échange de 30 minutes.</li>
              <li>Établir une proposition d'accompagnement ou un devis personnalisé.</li>
              <li>Assurer le suivi commercial de votre demande.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm text-[#0E1E37] mb-1.5">3. Durée de conservation</h4>
            <p>
              Les données des prospects sont conservées pendant une durée maximale de 3 ans à compter du dernier contact. Les données des clients sont conservées pendant la durée contractuelle puis archivées conformément aux obligations légales et comptables.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm text-[#0E1E37] mb-1.5">4. Cookies & Traceurs</h4>
            <p>
              Ce site n’utilise aucun cookie publicitaire ni traceur invasif nécessitant un bandeau de consentement intrusif. La mesure d'audience est strictement anonymisée et respecte la vie privée.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm text-[#0E1E37] mb-1.5">5. Vos droits</h4>
            <p>
              Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d’un droit d’accès, de rectification, de portabilité et de suppression de vos données personnelles. Vous pouvez exercer ce droit à tout moment par courriel à : <strong>{COMPANY_INFO.founder.email}</strong>.
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
