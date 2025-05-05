
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Consultoria de <span className="gradient-heading">Investimentos</span> direto no seu WhatsApp
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              Tire dúvidas, acompanhe mercados e receba análises personalizadas 24 horas por dia, 
              com um chatbot inteligente e especializado em investimentos.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="#cta">
                <Button className="w-full sm:w-auto bg-invest-green hover:bg-invest-green/90 text-white text-lg px-8 py-6">
                  Quero testar meu assistente
                </Button>
              </a>
              <span className="text-gray-500 text-base mt-2 sm:mt-0">Apenas R$34,99/mês</span>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="bg-white p-6 rounded-xl shadow-lg max-w-md mx-auto animate-fade-in">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-invest-green flex items-center justify-center text-white font-bold">
                  IA
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-800">InvestChat AI</p>
                  <p className="text-xs text-gray-500">Online agora</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="chat-bubble-left">
                  <p className="text-gray-800">Olá! Sou seu assistente de investimentos. Como posso ajudar hoje?</p>
                </div>
                
                <div className="chat-bubble-right ml-auto">
                  <p>O que você acha dos últimos resultados da Petrobras?</p>
                </div>
                
                <div className="chat-bubble-left">
                  <p className="text-gray-800">A Petrobras apresentou resultados sólidos no último trimestre, com EBITDA de R$XX bilhões, superando estimativas do mercado em Y%. Principais destaques:</p>
                  <ul className="mt-2 ml-4 list-disc text-gray-700">
                    <li>Aumento na produção de petróleo em 3,5%</li>
                    <li>Redução de custos operacionais</li>
                    <li>Dividendos atrativos anunciados</li>
                  </ul>
                  <p className="mt-2 text-gray-800">Quer que eu detalhe algum aspecto específico?</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-5 w-20 h-20 bg-invest-gold/20 rounded-full z-[-1]"></div>
            <div className="absolute -top-5 -left-5 w-16 h-16 bg-invest-blue/10 rounded-full z-[-1]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
