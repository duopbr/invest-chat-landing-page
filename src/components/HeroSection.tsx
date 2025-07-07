import { Button } from "@/components/ui/button";
import { MessageCircle, Check, Timer, Sparkles, Brain, TrendingUp, HelpCircle, Shield } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CountdownTimer from "./CountdownTimer";

const HeroSection = () => {
  const navigate = useNavigate();
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
  
  const handleClick = () => {
    // Evento de visualização de planos
    if (typeof window.dataLayer !== 'undefined') {
      window.dataLayer.push({
        event: 'ViewPlans',
        ecommerce: {
          currency: 'BRL'
        }
      });
    }
    navigate("/planos");
  };

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
              Inteligência Artificial para Investimentos
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight animate-fade-in">
              Decisões mais inteligentes, análises em segundos e{" "}
              <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 bg-clip-text text-transparent font-extrabold animate-pulse">
                suporte contínuo com IA
              </span>{" "}
              no WhatsApp
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl font-medium animate-fade-in delay-200">
              Invista com confiança: tenha acesso a uma segunda opinião, insights validados e orientação sempre que precisar.
            </p>
            
            {/* Proposta de valor otimizada com ícones visuais */}
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl mb-8 border border-green-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in delay-400">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-full mb-4 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                    <Brain className="text-blue-600 h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Segunda Opinião</h3>
                  <p className="text-sm text-gray-600">De especialistas consolidados no mercado</p>
                </div>
                
                <div className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
                  <div className="bg-gradient-to-br from-green-100 to-green-200 p-4 rounded-full mb-4 group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300">
                    <TrendingUp className="text-green-600 h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Análises & Insights</h3>
                  <p className="text-sm text-gray-600">Sobre seus investimentos e o mercado</p>
                </div>
                
                <div className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
                  <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-4 rounded-full mb-4 group-hover:from-purple-200 group-hover:to-purple-300 transition-all duration-300">
                    <HelpCircle className="text-purple-600 h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Tire Dúvidas</h3>
                  <p className="text-sm text-gray-600">Esclarecimento de questões financeiras</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start gap-6 mb-6 animate-fade-in delay-600">
              <div className="w-full sm:w-auto">
                <div className="mb-4 flex flex-col gap-3">
                  <CountdownTimer />
                  <div className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 text-white px-6 py-3 rounded-full text-sm font-bold inline-flex items-center shadow-lg hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-[slide_8s_ease-in-out_infinite]"></div>
                    <Timer className="h-4 w-4 mr-2" />
                    50% OFF - Últimas Vagas
                  </div>
                </div>
                
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-gray-600 text-xl font-semibold">
                    de <span className="line-through text-2xl font-bold text-gray-700 bg-red-100 px-2 py-1 rounded">R$109,99</span>
                  </span>
                  <span className="text-green-600 font-bold text-3xl animate-pulse">
                    por R$54,99
                  </span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={handleClick}
                    className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-4 px-10 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Garantir Vaga com Desconto
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 p-4 rounded-lg border border-green-100 animate-fade-in delay-800 hover:bg-white/90 transition-all duration-300">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="font-semibold text-green-700">🔐 Pagamento 100% Seguro</span>
                <Shield className="h-5 w-5 text-green-600" />
              </div>
              <div className="flex items-center justify-center gap-4 text-xs text-gray-600">
                <span className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-blue-500 rounded"></div>
                  Stripe
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-orange-500 rounded"></div>
                  PIX Seguro
                </span>
              </div>
              <p className="text-sm text-gray-600 text-center mt-2">
                <span className="font-semibold text-red-600">🔥 Restam apenas 47 vagas</span> com desconto de 50%. Garante seu acesso agora!
              </p>
            </div>
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

export default HeroSection;
