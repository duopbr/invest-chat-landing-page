
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Consultoria de <span className="gradient-heading">Investimentos</span> direto no <span className="text-invest-green font-bold">WhatsApp</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              Tire dúvidas, acompanhe mercados e receba análises personalizadas 24 horas por dia, 
              com um chatbot inteligente e especializado em investimentos.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="#cta">
                <Button className="w-full sm:w-auto bg-invest-green hover:bg-invest-green/90 text-white text-lg px-8 py-6">
                  <MessageCircle className="mr-2" />
                  Começar agora
                </Button>
              </a>
              <span className="text-gray-500 text-base mt-2 sm:mt-0">Apenas R$34,99/mês</span>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="rounded-xl shadow-lg overflow-hidden max-w-[320px] mx-auto">
              <div className="relative" style={{ paddingBottom: "177.78%" }}>
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/wIjUHnEITeg" 
                  title="InvestChat AI Demo" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
