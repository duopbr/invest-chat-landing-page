
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

const Trial = () => {
  return (
    <div className="min-h-screen flex flex col">
      <Navbar />
      <main>
        <TrialHeroSection />
        <ServicesSection />
        <HowItWorksSection />
        <FeaturesSection />
        <FAQSection />
        <ComingSoonSection />
        <TeamSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Trial;
