
import { Button } from "@/components/ui/button";
import { MessageCircle, Check, Timer } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import StripeCheckout from "./StripeCheckout";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <div className="inline-block bg-invest-green/20 text-invest-green font-medium px-4 py-1 rounded-full text-sm mb-4">
              <Timer className="inline-block w-4 h-4 mr-1" /> Oferta por tempo limitado
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Consultoria de <span className="gradient-heading">Investimentos</span> no <span className="text-invest-green font-bold">WhatsApp</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              Tire dúvidas, acompanhe mercados e receba análises personalizadas com um chatbot especializado.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-100">
              <h3 className="font-bold text-lg mb-2">Para quem é?</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="text-invest-green h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Investidores iniciantes</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-invest-green h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Pessoas que querem otimizar sua carteira</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-invest-green h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Quem busca entender o mercado</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
              <StripeCheckout buttonText="Assinar por R$34,99/mês" />
              <div className="flex items-center gap-2">
                <div className="bg-white px-3 py-1 rounded-full border border-gray-200 text-xs font-medium">
                  Sem fidelidade
                </div>
                <div className="bg-white px-3 py-1 rounded-full border border-gray-200 text-xs font-medium">
                  Cancele quando quiser
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              <span className="font-medium">Últimas vagas disponíveis!</span> Acesso completo por R$34,99/mês.
            </p>
          </div>
          <div className="w-full lg:w-1/2 relative">
            {/* Oferta por tempo limitado component moved up to avoid covering video title */}
            <div className="bg-white p-4 rounded-xl shadow-lg absolute -top-24 -left-10 hidden lg:block z-10 max-w-[280px] border-l-4 border-invest-green">
              <div className="flex items-start gap-2">
                <div className="bg-invest-green/20 p-2 rounded-full">
                  <Timer className="h-4 w-4 text-invest-green" />
                </div>
                <div>
                  <p className="font-medium">Oferta por tempo limitado</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl shadow-lg overflow-hidden max-w-[320px] mx-auto">
              <div className="relative" style={{ paddingBottom: "177.78%" }}>
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/wIjUHnEITeg" 
                  title="Duop Demo" 
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
