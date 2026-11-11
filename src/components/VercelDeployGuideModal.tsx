import React, { useState } from 'react';
import { X, Rocket, Check, Copy, Terminal, Github, ExternalLink } from 'lucide-react';

interface VercelDeployGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VercelDeployGuideModal: React.FC<VercelDeployGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const copyCode = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#0E1E37]/15 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#0E1E37] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
              <Rocket className="w-5 h-5 text-[#E2672F]" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Déploiement sur Vercel prêt à l’emploi</h3>
              <p className="text-xs text-[#D9CDBB]">Configuration vercel.json et build Vite déjà intégrés</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto space-y-6">
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
              ✓
            </div>
            <div>
              <strong className="font-bold">Projet 100% prêt pour Vercel :</strong> Le fichier <code className="font-mono bg-emerald-100 px-1 py-0.5 rounded">vercel.json</code> est déjà configuré à la racine avec la commande de build <code className="font-mono bg-emerald-100 px-1 py-0.5 rounded">npm run build</code>, le dossier de sortie <code className="font-mono bg-emerald-100 px-1 py-0.5 rounded">dist</code> et la réécriture d'URL SPA.
            </div>
          </div>

          {/* Option 1: CLI */}
          <div className="rounded-xl border border-slate-200 p-5 bg-slate-50/50">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#153258] mb-2">
              <Terminal className="w-4 h-4 text-[#C04A1A]" />
              <span>Méthode 1 : Déploiement en 1 ligne via Vercel CLI (Le plus rapide)</span>
            </div>
            <p className="text-xs text-slate-600 mb-3">
              Ouvrez votre terminal dans le dossier du projet et exécutez simplement :
            </p>

            <div className="relative group bg-[#0E1E37] text-white p-3 rounded-lg font-mono text-xs overflow-x-auto flex items-center justify-between">
              <code>npx vercel --prod</code>
              <button
                onClick={() => copyCode('npx vercel --prod', 1)}
                className="ml-2 px-2.5 py-1 text-[11px] rounded bg-white/10 hover:bg-white/20 transition-colors flex items-center gap-1 shrink-0"
              >
                {copiedIndex === 1 ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedIndex === 1 ? 'Copié' : 'Copier'}</span>
              </button>
            </div>
            <p className="text-[11px] text-slate-500 mt-2">
              Vercel détectera automatiquement Vite et déploiera votre site avec un lien public immédiat en HTTPS.
            </p>
          </div>

          {/* Option 2: GitHub */}
          <div className="rounded-xl border border-slate-200 p-5 bg-slate-50/50">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#153258] mb-2">
              <Github className="w-4 h-4 text-[#153258]" />
              <span>Méthode 2 : Déploiement continu via GitHub & Vercel Dashboard</span>
            </div>
            <ol className="list-decimal list-inside text-xs text-slate-700 space-y-2 mt-2">
              <li>Poussez ce projet sur votre compte GitHub (public ou privé).</li>
              <li>Rendez-vous sur <a href="https://vercel.com/new" target="_blank" rel="noopener noreferrer" className="text-[#C04A1A] underline font-semibold inline-flex items-center gap-0.5">vercel.com/new <ExternalLink className="w-3 h-3" /></a>.</li>
              <li>Sélectionnez votre dépôt GitHub et cliquez sur <strong>Deploy</strong> (Framework Preset : <strong>Vite</strong>).</li>
              <li>Chaque mise à jour sur votre branche principale déploiera automatiquement le site !</li>
            </ol>
          </div>

          {/* Configuration preview */}
          <div className="rounded-xl border border-slate-200 p-4 bg-white text-xs">
            <div className="font-bold text-[#153258] mb-1.5">Fichier vercel.json actif :</div>
            <pre className="font-mono text-[11px] bg-slate-900 text-slate-200 p-3 rounded-lg overflow-x-auto">
{`{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}`}
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 p-4 border-t border-slate-200 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-[#153258] hover:bg-[#0E1E37] rounded-lg transition-colors"
          >
            J'ai compris, fermer
          </button>
        </div>
      </div>
    </div>
  );
};
