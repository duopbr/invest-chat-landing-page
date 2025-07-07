
import Navbar from "@/components/Navbar";
import NewHeroSection from "@/components/new/NewHeroSection";
import ProblemSection from "@/components/new/ProblemSection";
import SolutionSection from "@/components/new/SolutionSection";
import HowItWorksSection from "@/components/new/HowItWorksSection";
import NewTestimonialsSection from "@/components/new/NewTestimonialsSection";
import NewTeamSection from "@/components/new/NewTeamSection";
import NewPricingSection from "@/components/new/NewPricingSection";
import NewFAQSection from "@/components/new/NewFAQSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";

const Nova = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <NewHeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <NewTestimonialsSection />
        <NewTeamSection />
        <NewPricingSection />
        <NewFAQSection />
      </main>
      <Footer />
      <ScrollToTop />
      <StickyCtaButton />
    </div>
  );
};

export default Nova;
