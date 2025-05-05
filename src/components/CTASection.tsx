
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="cta" className="py-16 px-4 bg-gradient-to-r from-invest-blue to-invest-blue/80 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para ter um consultor de investimentos 24/7?
          </h2>
          <p className="text-lg max-w-2xl mb-8 text-white/90">
            Comece agora e tenha acesso a análises personalizadas, informações de mercado e respostas para suas dúvidas de investimentos, direto no WhatsApp.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl w-full max-w-2xl">
            <h3 className="text-2xl font-bold mb-6">Comece agora. É grátis testar.</h3>
            
            <form className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="text" 
                  placeholder="Seu nome" 
                  className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 flex-1 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                
                <input 
                  type="tel" 
                  placeholder="Seu WhatsApp com DDD" 
                  className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 flex-1 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
              
              <Button className="w-full py-6 text-lg bg-invest-green hover:bg-invest-green/90 text-white">
                Quero testar meu assistente de investimentos
              </Button>
            </form>
            
            <p className="mt-4 text-sm text-white/70">
              Ao se registrar, você concorda com nossa política de privacidade e termos de uso.
              Não compartilhamos seus dados com terceiros.
            </p>
          </div>
          
          <div className="mt-10 flex items-center justify-center space-x-6">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Sem cartão de crédito</span>
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
