
import { Button } from "@/components/ui/button";
import { MessageCircle, Timer, Check } from "lucide-react";
import StripeCheckout from "./StripeCheckout";

const CTASection = () => {
  return (
    <section id="cta" className="py-16 px-4 bg-gradient-to-r from-invest-blue to-invest-blue/80 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
            <Timer className="h-4 w-4" />
            <span className="text-sm font-medium">Oferta por tempo limitado</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Consultor de investimentos 24/7 no <span className="text-invest-green font-bold">WhatsApp</span>
          </h2>
          <p className="text-lg max-w-2xl mb-8 text-white/90">
            Acesse análises, informações de mercado e tire dúvidas diretamente no WhatsApp.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl w-full max-w-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold">Comece por apenas</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-gray-300 line-through">R$69,99</span>
                  <span className="bg-red-500/80 text-white px-2 py-0.5 rounded text-xs font-bold">50% OFF</span>
                </div>
              </div>
              <div className="bg-invest-green/90 px-5 py-2 rounded-lg mt-3 md:mt-0">
                <span className="text-3xl font-bold">R$34,99</span>
                <span className="text-sm">/mês</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mb-6 text-left">
              <div className="flex items-start gap-2">
                <Check className="text-invest-green h-5 w-5 mt-1 flex-shrink-0" />
                <span>Cancele quando quiser</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="text-invest-green h-5 w-5 mt-1 flex-shrink-0" />
                <span>Sem fidelidade</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="text-invest-green h-5 w-5 mt-1 flex-shrink-0" />
                <span>Acesso imediato</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="text-invest-green h-5 w-5 mt-1 flex-shrink-0" />
                <span>Suporte em português</span>
              </div>
            </div>
            
            <div className="my-4 flex justify-center">
              <StripeCheckout buttonText="Assinar - R$34,99/mês" />
            </div>
            
            <div className="bg-white/10 p-3 rounded-lg text-center mt-6">
              <p className="text-sm font-medium">OFERTA POR TEMPO LIMITADO</p>
            </div>
            
            <p className="mt-4 text-sm text-white/70">
              Ao se registrar, você concorda com nossa política de privacidade e termos de uso.
            </p>
          </div>
          
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>7 dias de garantia</span>
            </div>
            
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Cancelamento fácil</span>
            </div>
            
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Suporte dedicado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
