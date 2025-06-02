import { Button } from "@/components/ui/button";
import { MessageCircle, Check, Timer, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

interface TrialHeroSectionProps {
  onTrialClick: () => void;
}

const TrialHeroSection = ({ onTrialClick }: TrialHeroSectionProps) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const chatMessages = [
    { type: 'user', text: 'Como funciona o Tesouro Selic e qual o cenário atual?', delay: 0 },
    { type: 'bot', text: 'O Tesouro Selic está atrelado à taxa básica de juros, atualmente em 14,75% a.a. - o maior patamar desde 2016. Características: liquidez diária (resgate D+1), rentabilidade pós-fixada que acompanha a Selic, tributação regressiva de IR (22,5% até 180 dias, caindo para 15% após 720 dias), IOF nos primeiros 30 dias, taxa de custódia B3 de 0,20% a.a. É o ativo mais seguro do país, garantido pelo Tesouro Nacional, ideal para reserva de emergência. Risco: praticamente zero. Liquidez: excelente. 📊', delay: 3000 },
    { type: 'user', text: 'Vale a pena investir considerando a inflação atual?', delay: 6000 },
    { type: 'bot', text: 'Absolutamente! Com IPCA acumulado em 4,87% (últimos 12 meses) e Selic a 14,75%, temos rentabilidade real de aproximadamente 9,4% a.a. - excelente para renda fixa! Historicamente, juro real acima de 6% é considerado muito atrativo. Recomendação de alocação: 60-80% da reserva em Tesouro Selic (liquidez), 20-40% em Tesouro IPCA+ 2029-2035 (proteção inflacionária de longo prazo). Cenário macro: Copom sinaliza manutenção da Selic elevada até inflação convergir para meta de 3%. Momento ótimo para renda fixa conservadora! 💰📈', delay: 9000 },
  ];

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      if (currentMessageIndex < chatMessages.length - 1) {
        setCurrentMessageIndex(currentMessageIndex + 1);
      } else {
        // Reset animation after all messages
        setTimeout(() => setCurrentMessageIndex(0), 2000);
      }
    }, chatMessages[currentMessageIndex]?.delay || 2000);

    return () => clearTimeout(timer);
  }, [currentMessageIndex, chatMessages]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-white pt-28 pb-12 md:pt-32 md:pb-16 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full opacity-20 blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-300 rounded-full opacity-15 blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-100 rounded-full opacity-30 blur-lg animate-bounce"></div>
      <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-emerald-200 rounded-full opacity-25 blur-md animate-ping"></div>
      <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-green-300 rounded-full opacity-20 blur-lg animate-pulse delay-500"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className={`w-full lg:w-1/2 mb-10 lg:mb-0 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <Sparkles className="h-4 w-4 animate-spin" />
              Teste Gratuito - 7 Dias
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              Investir sem{" "}
              <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 bg-clip-text text-transparent font-extrabold animate-pulse">
                Complicação
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl font-medium animate-fade-in delay-200">
              7 dias de acesso completo à consultoria de investimentos no WhatsApp. Sem compromisso.
            </p>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl mb-8 border border-green-100 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in delay-400">
              <ul className="space-y-4">
                <li className="flex items-start gap-3 transform hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-green-100 p-1 rounded-full animate-bounce">
                    <Check className="text-green-600 h-4 w-4" />
                  </div>
                  <span className="text-gray-700 font-medium">Acesso completo por 7 dias</span>
                </li>
                <li className="flex items-start gap-3 transform hover:translate-x-2 transition-transform duration-300 delay-100">
                  <div className="bg-green-100 p-1 rounded-full animate-bounce delay-200">
                    <Check className="text-green-600 h-4 w-4" />
                  </div>
                  <span className="text-gray-700 font-medium">Consultoria de investimentos no WhatsApp</span>
                </li>
                <li className="flex items-start gap-3 transform hover:translate-x-2 transition-transform duration-300 delay-200">
                  <div className="bg-green-100 p-1 rounded-full animate-bounce delay-400">
                    <Check className="text-green-600 h-4 w-4" />
                  </div>
                  <span className="text-gray-700 font-medium">Análises personalizadas de carteira</span>
                </li>
                <li className="flex items-start gap-3 transform hover:translate-x-2 transition-transform duration-300 delay-300">
                  <div className="bg-green-100 p-1 rounded-full animate-bounce delay-600">
                    <Check className="text-green-600 h-4 w-4" />
                  </div>
                  <span className="text-gray-700 font-medium">Sem cartão de crédito necessário</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start gap-6 mb-6 animate-fade-in delay-600">
              <div className="w-full sm:w-auto">
                <div className="mb-3 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-bold inline-flex items-center shadow-lg hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-[slide_8s_ease-in-out_infinite]"></div>
                  <Timer className="h-4 w-4 mr-2" />
                  Teste Gratuito - 7 Dias
                </div>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-gray-600 text-lg">
                    Experimente
                  </span>
                  <span className="text-green-600 font-bold text-2xl">
                    GRÁTIS
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={onTrialClick}
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
                  >
                    Começar Teste Gratuito
                  </Button>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 bg-white/60 p-3 rounded-lg border border-green-100 animate-fade-in delay-800 hover:bg-white/80 transition-all duration-300">
              <span className="font-semibold text-green-700">🎯 Sem compromisso:</span> teste por 7 dias gratuitamente. Cancele a qualquer momento.
            </p>
          </div>
          
          <div className={`w-full lg:w-1/2 relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
            <div className="relative">
              {/* Chat Simulation */}
              <div className="rounded-2xl shadow-2xl overflow-hidden max-w-[380px] mx-auto relative z-10 bg-white hover:shadow-3xl transition-all duration-500 hover:scale-105 animate-float">
                {/* WhatsApp Header */}
                <div className="bg-[#075E54] p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-400 rounded-full flex items-center justify-center animate-pulse">
                    <Sparkles className="h-5 w-5 text-white animate-spin" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Duop IA</h3>
                    <p className="text-green-200 text-xs animate-pulse">online</p>
                  </div>
                </div>
                
                {/* Chat Messages */}
                <div className="h-96 bg-[#E5DDD5] p-4 space-y-3 overflow-y-auto">
                  {chatMessages.slice(0, currentMessageIndex + 1).map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                    >
                      <div
                        className={`max-w-[85%] p-3 rounded-lg transform hover:scale-105 transition-all duration-300 ${
                          message.type === 'user'
                            ? 'bg-[#DCF8C6] text-gray-800 hover:bg-[#c8f7c5]'
                            : 'bg-white text-gray-800 shadow-sm hover:shadow-md'
                        }`}
                      >
                        <p className="text-xs leading-relaxed">{message.text}</p>
                        <div className="text-xs text-gray-500 mt-1 text-right">
                          {new Date().toLocaleTimeString('pt-BR', { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Typing indicator */}
                  {currentMessageIndex < chatMessages.length - 1 && (
                    <div className="flex justify-start animate-fade-in">
                      <div className="bg-white p-3 rounded-lg shadow-sm">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Input Area */}
                <div className="bg-[#F0F0F0] p-3 flex items-center gap-2">
                  <div className="flex-1 bg-white rounded-full px-4 py-2 hover:shadow-md transition-shadow duration-300">
                    <p className="text-gray-500 text-sm">Digite sua mensagem...</p>
                  </div>
                  <div className="w-8 h-8 bg-[#075E54] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <MessageCircle className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrialHeroSection;
