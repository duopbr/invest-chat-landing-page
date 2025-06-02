
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

const Trial = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onTrialClick={() => setIsModalOpen(true)} />
      <main>
        <TrialHeroSection onTrialClick={() => setIsModalOpen(true)} />
        <ServicesSection onTrialClick={() => setIsModalOpen(true)} />
        <HowItWorksSection onTrialClick={() => setIsModalOpen(true)} />
        <FeaturesSection onTrialClick={() => setIsModalOpen(true)} />
        <FAQSection onTrialClick={() => setIsModalOpen(true)} />
        <ComingSoonSection onTrialClick={() => setIsModalOpen(true)} />
        <TeamSection onTrialClick={() => setIsModalOpen(true)} />
      </main>
      <Footer onTrialClick={() => setIsModalOpen(true)} />
      <ScrollToTop />
      <TrialFloatingButton onTrialClick={() => setIsModalOpen(true)} />
      <TrialSignupModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default Trial;
