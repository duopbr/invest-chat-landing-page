
import { Button } from "@/components/ui/button";
import { MessageCircle, Check, Timer, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  
  const chatMessages = [
    { type: 'user', text: 'Como funciona o Tesouro Selic e qual o cenário atual?', delay: 0 },
    { type: 'bot', text: 'O Tesouro Selic é indexado à taxa básica de juros (atualmente 14,75% a.a.). Características principais: liquidez diária, rentabilidade pós-fixada, tributação regressiva de IR (22,5% a 15%), taxa de custódia B3 de 0,20% a.a. Ideal para reserva de emergência devido à baixa volatilidade e proteção contra risco de crédito pelo Tesouro Nacional. 📊', delay: 3000 },
    { type: 'user', text: 'Vale a pena investir considerando a inflação atual?', delay: 6000 },
    { type: 'bot', text: 'Com IPCA em 4,87% (12 meses) e Selic a 14,75%, temos rentabilidade real de aproximadamente 9,4% a.a. - excelente para renda fixa! O diferencial de juros reais está historicamente atrativo. Para perfil conservador, recomendo 60-80% em Tesouro Selic na reserva, complementando com IPCA+ para proteção inflacionária de longo prazo. Cenário macro favorável com política monetária restritiva. 💰📈', delay: 9000 },
  ];

  useEffect(() => {
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
  
  const handleStripeCheckout = () => {
    window.open("https://buy.stripe.com/6oE4go67w2nIgrC9AM?success_url=https://duopinvest.duop.com.br/obrigado", "_blank");
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 pt-28 pb-12 md:pt-32 md:pb-16 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-300 rounded-full opacity-15 blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-indigo-100 rounded-full opacity-30 blur-lg animate-bounce-subtle"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm">
              <Sparkles className="h-4 w-4" />
              Inteligência Artificial para Investimentos
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Investir sem{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 bg-clip-text text-transparent font-extrabold">
                Complicação
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl font-medium">
              Tire dúvidas, acompanhe o mercado e receba análises com IA — tudo no WhatsApp.
            </p>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl mb-8 border border-blue-100 shadow-lg">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-blue-100 p-1 rounded-full">
                    <Check className="text-blue-600 h-4 w-4" />
                  </div>
                  <span className="text-gray-700 font-medium">Segunda opinião de especialistas consolidados</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-blue-100 p-1 rounded-full">
                    <Check className="text-blue-600 h-4 w-4" />
                  </div>
                  <span className="text-gray-700 font-medium">Análises e insights sobre seus investimentos</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-blue-100 p-1 rounded-full">
                    <Check className="text-blue-600 h-4 w-4" />
                  </div>
                  <span className="text-gray-700 font-medium">Esclarecimento de dúvidas financeiras</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
              <div className="w-full sm:w-auto">
                <div className="mb-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold inline-flex items-center shadow-lg">
                  <Timer className="h-4 w-4 mr-2" />
                  50% OFF - Oferta Limitada
                </div>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-gray-500 text-lg">
                    de <span className="line-through">R$139,80</span>
                  </span>
                  <span className="text-blue-600 font-bold text-2xl">
                    por R$69,90
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={handleStripeCheckout}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Pagar com Cartão
                  </Button>
                  <Button
                    onClick={() => navigate('/planos', { state: { preferredPayment: 'pix' } })}
                    className="bg-white text-blue-700 hover:bg-blue-50 border-2 border-blue-600 font-semibold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Pagar via Pix
                  </Button>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 bg-white/60 p-3 rounded-lg border border-blue-100">
              <span className="font-semibold text-blue-700">🔥 Oferta por tempo limitado:</span> garanta seu acesso agora! Acesso completo por R$69,90/mês.
            </p>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div className="relative">
              {/* Chat Simulation */}
              <div className="rounded-2xl shadow-2xl overflow-hidden max-w-[380px] mx-auto relative z-10 bg-white">
                {/* WhatsApp Header */}
                <div className="bg-[#075E54] p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-400 rounded-full flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Duop IA</h3>
                    <p className="text-green-200 text-xs">online</p>
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
                        className={`max-w-[85%] p-3 rounded-lg ${
                          message.type === 'user'
                            ? 'bg-[#DCF8C6] text-gray-800'
                            : 'bg-white text-gray-800 shadow-sm'
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
                    <div className="flex justify-start">
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
                  <div className="flex-1 bg-white rounded-full px-4 py-2">
                    <p className="text-gray-500 text-sm">Digite sua mensagem...</p>
                  </div>
                  <div className="w-8 h-8 bg-[#075E54] rounded-full flex items-center justify-center">
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
