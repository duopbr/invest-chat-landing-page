import Navbar from "@/components/Navbar";
import TrialHeroSection from "@/components/TrialHeroSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FAQSection from "@/components/FAQSection";
import ComingSoonSection from "@/components/ComingSoonSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import TrialSignupModal from "@/components/TrialSignupModal";
import TrialFloatingButton from "@/components/TrialFloatingButton";
import { useState } from "react";

interface TrialProps {
  onTrialClick?: () => void;
}

const Trial: React.FC<TrialProps> = ({ onTrialClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTrialClick = () => {
    setIsModalOpen(true);
    if (onTrialClick) {
      onTrialClick();
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onTrialClick={handleTrialClick} />
      <main>
        <TrialHeroSection onTrialClick={handleTrialClick} />
        <ServicesSection />
        <HowItWorksSection onTrialClick={handleTrialClick} />
        <FeaturesSection onTrialClick={handleTrialClick} />
        <FAQSection />
        <ComingSoonSection />
        <TeamSection />
      </main>
      <Footer />
      <ScrollToTop />
      <TrialFloatingButton onTrialClick={handleTrialClick} />
      <TrialSignupModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default Trial;
