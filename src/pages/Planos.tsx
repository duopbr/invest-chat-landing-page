
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ServicesSection from "@/components/ServicesSection";

const Planos = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="pt-20 md:pt-24 pb-6 md:pb-8 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              Escolha o plano ideal para você
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
              Tenha acesso a um consultor de investimentos 24/7 no seu WhatsApp e tome decisões mais inteligentes para o seu patrimônio.
            </p>
          </div>
        </div>
        <PricingSection />
        <ServicesSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Planos;
