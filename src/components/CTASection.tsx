
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import StripeCheckout from "./StripeCheckout";

const CTASection = () => {
  return (
    <section id="cta" className="py-16 px-4 bg-gradient-to-r from-invest-blue to-invest-blue/80 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para ter um consultor de investimentos 24/7 no <span className="text-invest-green font-bold">WhatsApp</span>?
          </h2>
          <p className="text-lg max-w-2xl mb-8 text-white/90">
            Comece agora e tenha acesso a análises personalizadas, informações de mercado e respostas para suas dúvidas de investimentos, direto no <span className="text-invest-green font-bold">WhatsApp</span>.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl w-full max-w-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Comece agora por apenas</h3>
              <div className="bg-invest-green/90 px-5 py-2 rounded-lg mt-3 md:mt-0">
                <span className="text-3xl font-bold">R$34,99</span>
                <span className="text-sm">/mês</span>
              </div>
            </div>
            
            <div className="my-4 flex justify-center">
              <StripeCheckout buttonText="Assinar agora" />
            </div>
            
            <p className="mt-4 text-sm text-white/70">
              Ao se registrar, você concorda com nossa política de privacidade e termos de uso.
              Não compartilhamos seus dados com terceiros.
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
