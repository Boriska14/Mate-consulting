import React from 'react';
import { Shield, FileSpreadsheet, BarChart3, Database, Building2 } from 'lucide-react';

export const TrustBar: React.FC = () => {
  return (
    <section className="py-8 bg-white border-b border-[#0E1E37]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="text-xs font-bold uppercase tracking-wider text-[#153258]/60 shrink-0">
            Écosystème & Compatibilité Outils
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:items-center gap-6 sm:gap-8 text-xs font-semibold text-[#153258]">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#C04A1A]" />
              <span>Qonto & Banques Pro</span>
            </div>

            <div className="flex items-center gap-2">
              <FileSpreadsheet className="w-4 h-4 text-[#5B84B1]" />
              <span>Excel & Macros VBA</span>
            </div>

            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-[#C04A1A]" />
              <span>Power BI & Dashboards</span>
            </div>

            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-[#5B84B1]" />
              <span>Ipaidthat & Pennylane</span>
            </div>

            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#153258]" />
              <span>Certifié AMF & Bloomberg</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
