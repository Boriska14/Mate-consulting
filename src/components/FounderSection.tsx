import React from 'react';
import { COMPANY_INFO } from '../data/mateData';
import { Award, GraduationCap, Briefcase, CheckCircle, ExternalLink, Mail, Phone, ShieldCheck, Quote } from 'lucide-react';

interface FounderSectionProps {
  onOpenContact: (mode?: 'diagnostic' | 'message') => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ onOpenContact }) => {
  const { founder } = COMPANY_INFO;

  return (
    <section id="fondateur" className="py-20 md:py-28 bg-white border-b border-[#0E1E37]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Executive Portrait & Proof */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-[#0E1E37]/15 shadow-2xl bg-[#F6F1E9] group">
              
              <div className="aspect-[4/3] sm:aspect-[1/1] relative overflow-hidden bg-[#153258]">
                <img
                  src="/src/assets/images/mate_founder_workspace_1794400058048.jpg"
                  alt="Poste de travail et modélisation financière MATE Consulting"
                  className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/src/assets/images/mate_collaboration_meeting_1794400057216.jpg';
                  }}
                />
                
                {/* Contrast Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1E37]/95 via-[#0E1E37]/30 to-transparent pointer-events-none" />

                {/* Overlaid Title */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-[11px] uppercase tracking-widest text-[#E2672F] font-bold">
                    Fondateur & Consultant Référent
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-white mt-0.5 tracking-tight">
                    {founder.name}
                  </div>
                  <div className="text-xs text-[#D9CDBB] mt-1 font-medium">
                    Double Master Finance & Big Data · Major de Promotion
                  </div>
                </div>
              </div>

              {/* Direct Reach Bar */}
              <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#153258]">
                <a
                  href={`tel:${founder.phone}`}
                  className="flex items-center gap-1.5 hover:text-[#C04A1A] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C04A1A]" />
                  <span className="font-mono tabular-nums">{founder.phoneFormatted}</span>
                </a>
                <span className="text-slate-200">|</span>
                <a
                  href={`mailto:${founder.email}`}
                  className="flex items-center gap-1.5 hover:text-[#C04A1A] transition-colors truncate max-w-[190px]"
                >
                  <Mail className="w-3.5 h-3.5 text-[#5B84B1]" />
                  <span className="truncate">{founder.email}</span>
                </a>
              </div>
            </div>

            {/* Official Legal Status Box */}
            <div className="mt-5 p-4 rounded-2xl bg-[#F6F1E9] border border-[#0E1E37]/10 text-xs text-slate-700">
              <div className="font-extrabold text-[#153258] flex items-center gap-2 mb-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Structure Professionnelle Immatriculée</span>
              </div>
              <p className="leading-relaxed">
                {COMPANY_INFO.legalName} immatriculée au Registre National des Entreprises sous le numéro SIREN <strong className="font-mono font-bold text-[#153258]">{COMPANY_INFO.siren}</strong>.
                Responsabilité civile professionnelle & respect absolu du secret des affaires.
              </p>
            </div>
          </div>

          {/* Right Column: Founder Narrative, Diplomas & Track Record */}
          <div className="lg:col-span-7">
            
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#C04A1A] mb-3">
              <Award className="w-4 h-4" />
              <span>Expertise & Parcours Compétitif</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0E1E37] tracking-tight [text-wrap:balance]">
              Une double compétence rare au service de votre rentabilité
            </h2>

            <p className="mt-4 text-base text-[#153258]/90 leading-relaxed font-normal">
              L’offre de valeur de MATE Consulting repose intégralement sur l’expertise technique
              de son fondateur, <strong>Ted Enrick MBILONGO</strong>. Son profil réunit des compétences rares
              à l’intersection de l’analyse financière d’entreprise, de la gestion comptable quotidienne
              et de l’ingénierie des données.
            </p>

            {/* Executive Quote Block */}
            <div className="my-6 p-4 rounded-2xl bg-slate-50 border-l-4 border-[#C04A1A] text-xs sm:text-sm text-slate-700 italic flex items-start gap-3">
              <Quote className="w-5 h-5 text-[#C04A1A] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                « Une TPE sur deux disparaît faute de visibilité sur sa trésorerie, alors même que son carnet de commandes est plein. Notre rôle est de vous apporter la rigueur d’une direction financière de haut niveau pour piloter chaque euro avec sérénité. »
              </p>
            </div>

            {/* Formations & Certifications Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Diplômes */}
              <div className="p-4 rounded-2xl bg-[#F6F1E9] border border-[#0E1E37]/10">
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#153258] mb-2.5">
                  <GraduationCap className="w-4 h-4 text-[#C04A1A]" />
                  <span>Formations d’Excellence</span>
                </div>
                <div className="space-y-3 text-xs text-slate-700">
                  {founder.degrees.map((deg, idx) => (
                    <div key={idx} className="pb-2.5 border-b border-slate-200/70 last:border-0 last:pb-0">
                      <div className="font-bold text-[#0E1E37]">
                        {deg.degree} {deg.honors && <span className="text-[#C04A1A] font-extrabold">({deg.honors})</span>}
                      </div>
                      <div className="text-[11px] text-slate-500 font-semibold mt-0.5">{deg.institution}</div>
                      <div className="text-[11px] text-slate-600 mt-1 leading-snug">{deg.specialty}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="p-4 rounded-2xl bg-[#F6F1E9] border border-[#0E1E37]/10">
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#153258] mb-2.5">
                  <Award className="w-4 h-4 text-[#C04A1A]" />
                  <span>Certifications Réglementaires</span>
                </div>
                <div className="space-y-3 text-xs text-slate-700">
                  {founder.certifications.map((cert, idx) => (
                    <div key={idx} className="pb-2.5 border-b border-slate-200/70 last:border-0 last:pb-0">
                      <div className="font-bold text-[#0E1E37] flex items-center justify-between">
                        <span>{cert.name}</span>
                        <span className="text-[10px] font-mono font-bold text-[#5B84B1] bg-white px-2 py-0.5 rounded border border-slate-200">
                          {cert.year}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-600 mt-1 leading-snug">{cert.details}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Career Timeline */}
            <div className="mt-5 p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#153258] mb-3">
                <Briefcase className="w-4 h-4 text-[#5B84B1]" />
                <span>Expériences Professionnelles Référentes</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-700">
                {founder.experiences.map((exp, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <div className="font-extrabold text-[#153258]">{exp.company}</div>
                    <div className="text-[11px] text-[#C04A1A] font-bold mt-0.5">{exp.role}</div>
                    <div className="text-[10px] text-slate-500 mt-1.5 line-clamp-3 leading-snug">
                      {exp.highlights}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action */}
            <div className="mt-6 flex items-center gap-4">
              <button
                onClick={() => onOpenContact('diagnostic')}
                className="py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-white bg-[#153258] hover:bg-[#0E1E37] rounded-xl transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Échanger directement avec Ted Enrick MBILONGO</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
