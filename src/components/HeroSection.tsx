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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Consultoria de Investimentos no <span className="text-invest-green font-bold">WhatsApp</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              Tire dúvidas, acompanhe mercados e receba análises personalizadas diretamente no WhatsApp.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-100">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="text-invest-green h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Orientação sem viés para investidores</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-invest-green h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Timing de mercado para ajustes de carteira</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-invest-green h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Explicações para as oscilações dos seus ativos</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
              <div className="w-full sm:w-auto">
                <div className="mb-2 bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold inline-flex items-center">
                  <Timer className="h-3 w-3 mr-1" />
                  50% OFF
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 text-sm line-through">R$69,99</span>
                  <StripeCheckout buttonText="Assinar por R$34,99/mês" />
                </div>
              </div>
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
              <span className="font-medium">Oferta por tempo limitado: garanta seu acesso agora!</span> Acesso completo por R$34,99/mês.
            </p>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="rounded-xl shadow-lg overflow-hidden max-w-[320px] mx-auto">
              <div className="relative" style={{ paddingBottom: "177.78%" }}>
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://youtube.com/embed/Ei0y7jhNKzM" 
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
