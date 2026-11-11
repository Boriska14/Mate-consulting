import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ServicesSection } from './components/ServicesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { InteractivePricingSimulator } from './components/InteractivePricingSimulator';
import { FinancialToolsPreview } from './components/FinancialToolsPreview';
import { WhyUsComparison } from './components/WhyUsComparison';
import { FounderSection } from './components/FounderSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { LegalNoticeModal } from './components/LegalNoticeModal';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { VercelDeployGuideModal } from './components/VercelDeployGuideModal';

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [deployGuideOpen, setDeployGuideOpen] = useState(false);
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [selectedOfferId, setSelectedOfferId] = useState<string>('daf');
  const [simulationData, setSimulationData] = useState<any>(null);

  const handleOpenContact = (offerId?: string) => {
    if (offerId) {
      setSelectedOfferId(offerId);
    }
    setContactModalOpen(true);
  };

  const handleSelectOffer = (offerId: string) => {
    setSelectedOfferId(offerId);
    setContactModalOpen(true);
  };

  const handleSendSimulation = (simData: any) => {
    setSimulationData(simData);
    if (simData.recommendedOffer.toLowerCase().includes('essentiel')) {
      setSelectedOfferId('precompta');
    } else if (simData.recommendedOffer.toLowerCase().includes('performance')) {
      setSelectedOfferId('daf');
    } else if (simData.recommendedOffer.toLowerCase().includes('optimisation')) {
      setSelectedOfferId('modelisation');
    } else {
      setSelectedOfferId('tresorerie');
    }
    setContactModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F1E9] text-[#0E1E37] font-sans antialiased selection:bg-[#C04A1A] selection:text-white">
      {/* Top Bar */}
      <Navbar
        onOpenContact={handleOpenContact}
        onOpenDeployGuide={() => setDeployGuideOpen(true)}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section (H1 DAF externalisé + Subtitle + Primary CTA) */}
        <Hero onOpenContact={handleOpenContact} />

        {/* 2. Tool & Ecosystem Bar */}
        <TrustBar />

        {/* 3. Catalog of Services (DAF, Précompta, Trésorerie, Modélisation) */}
        <ServicesSection onSelectOffer={handleSelectOffer} />

        {/* 4. Section "Comment ça marche" (4 étapes) */}
        <HowItWorksSection onOpenContact={handleOpenContact} />

        {/* 5. Interactive Pricing Simulator */}
        <InteractivePricingSimulator onSendSimulation={handleSendSimulation} />

        {/* 6. Live Operational Tools Preview (12-week cash flow, aging, breakeven, Power BI) */}
        <FinancialToolsPreview />

        {/* 7. Why MATE Consulting Comparison */}
        <WhyUsComparison />

        {/* 8. Founder Section (Condensed 3-4 lines focusing on method & results) */}
        <FounderSection onOpenContact={handleOpenContact} />

        {/* 9. Contact & Appointment Section (Short form, honeypot, Calendly link) */}
        <ContactSection initialOffer={selectedOfferId} />

        {/* 10. FAQ (7 questions réelles) */}
        <FaqSection onOpenContact={() => handleOpenContact('diagnostic')} />
      </main>

      {/* Footer with Legal & Privacy Modal Triggers */}
      <Footer
        onOpenContact={handleOpenContact}
        onOpenDeployGuide={() => setDeployGuideOpen(true)}
        onOpenLegal={() => setLegalModalOpen(true)}
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
      />

      {/* Interactive Modals */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        selectedOfferId={selectedOfferId}
        simulationData={simulationData}
      />

      <LegalNoticeModal
        isOpen={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
      />

      <PrivacyPolicyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />

      <VercelDeployGuideModal
        isOpen={deployGuideOpen}
        onClose={() => setDeployGuideOpen(false)}
      />
    </div>
  );
}
