import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ServicesSection from "@/components/ServicesSection";
import { useLocation } from "react-router-dom";

const Planos = () => {
  const location = useLocation();
  const preferredPayment = location.state?.preferredPayment; // Pode ser 'pix' ou null

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-12">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            Complete sua assinatura
          </h1>
          <p className="text-base md:text-lg text-gray-600">
            Escolha o plano ideal para você e a forma de pagamento que preferir
          </p>
        </div>
        <PricingSection showHeading={false} preferredPayment={preferredPayment} />
        <ServicesSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Planos;
