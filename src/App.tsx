import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ServicesSection } from './components/ServicesSection';
import { InteractivePricingSimulator } from './components/InteractivePricingSimulator';
import { FinancialToolsPreview } from './components/FinancialToolsPreview';
import { FounderSection } from './components/FounderSection';
import { WhyUsComparison } from './components/WhyUsComparison';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { VercelDeployGuideModal } from './components/VercelDeployGuideModal';

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [deployGuideOpen, setDeployGuideOpen] = useState(false);
  const [selectedOfferId, setSelectedOfferId] = useState<string>('business');
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
      setSelectedOfferId('essentiel');
    } else if (simData.recommendedOffer.toLowerCase().includes('performance')) {
      setSelectedOfferId('performance');
    } else if (simData.recommendedOffer.toLowerCase().includes('optimisation')) {
      setSelectedOfferId('optimisation');
    } else {
      setSelectedOfferId('business');
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
        {/* 1. Hero Section */}
        <Hero onOpenContact={handleOpenContact} />

        {/* 2. Tool & Ecosystem Bar */}
        <TrustBar />

        {/* 3. Catalog of Services & 3 Packages + Special Offer */}
        <ServicesSection onSelectOffer={handleSelectOffer} />

        {/* 4. Interactive Pricing & Workload Simulator */}
        <InteractivePricingSimulator onSendSimulation={handleSendSimulation} />

        {/* 5. Live Operational Tools Preview (12-week cash flow, aging, breakeven) */}
        <FinancialToolsPreview />

        {/* 6. Why MATE Consulting Comparison */}
        <WhyUsComparison />

        {/* 7. Founder & Track Record (Ted Enrick MBILONGO) */}
        <FounderSection onOpenContact={handleOpenContact} />

        {/* 8. Full Multi-channel Contact Section & 30-min Booking */}
        <ContactSection
          initialOffer={selectedOfferId}
          initialHours={simulationData ? simulationData.hours : 16}
        />

        {/* 9. Questions Fréquentes & Déontologie */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenContact={handleOpenContact}
        onOpenDeployGuide={() => setDeployGuideOpen(true)}
      />

      {/* Interactive Modals */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        selectedOfferId={selectedOfferId}
        simulationData={simulationData}
      />

      <VercelDeployGuideModal
        isOpen={deployGuideOpen}
        onClose={() => setDeployGuideOpen(false)}
      />
    </div>
  );
}
