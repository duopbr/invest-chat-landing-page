import { Check, MessageCircle, DollarSign, BadgeCheck, Gift } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface HowItWorksSectionProps {
  onTrialClick?: () => void;
}

const HowItWorksSection = ({ onTrialClick }: HowItWorksSectionProps) => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate cards one by one
            [0, 1, 2].forEach((index) => {
              setTimeout(() => {
                setVisibleCards(prev => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="how-it-works" className="py-16 px-4 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-emerald-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-green-200 rounded-full opacity-15 animate-bounce"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <span className="text-emerald-600 font-semibold text-sm animate-pulse">PROCESSO</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 transform hover:scale-105 transition-transform duration-300">
            Como Funciona
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Consultoria financeira em 3 passos
          </p>
        </div>

        {/* Trial Box - only show if onTrialClick is provided */}
        {onTrialClick && (
          <div className="mb-12 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl shadow-lg border-2 border-blue-200 max-w-4xl mx-auto hover:shadow-xl transition-all duration-500 hover:scale-105">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Gift className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">🎁 Teste Gratuito de 7 Dias</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Experimente nossa consultoria por 7 dias completos sem pagar nada. Acesso total a todas as funcionalidades!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center justify-center gap-2 text-blue-600">
                  <Check className="h-5 w-5" />
                  <span className="font-medium">Acesso completo</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-blue-600">
                  <Check className="h-5 w-5" />
                  <span className="font-medium">Sem cobrança</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-blue-600">
                  <Check className="h-5 w-5" />
                  <span className="font-medium">Cancele quando quiser</span>
                </div>
              </div>
              <button
                onClick={onTrialClick}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                🚀 Começar Teste Gratuito
              </button>
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "1",
              title: "Assine o serviço",
              description: "Apenas R$54,99 por mês, sem fidelidade. Cancele quando quiser pelo WhatsApp.",
              icon: <DollarSign className="h-4 w-4 mr-1" />,
              detail: "R$54,99/mês - Sem taxas",
              color: "emerald"
            },
            {
              step: "2", 
              title: "Acesse no WhatsApp",
              description: "Após o pagamento, receba o link de acesso para seu consultor no WhatsApp.",
              icon: <MessageCircle className="h-4 w-4 mr-1" />,
              detail: "Acesso instantâneo",
              color: "green"
            },
            {
              step: "3",
              title: "Tire dúvidas 24/7", 
              description: "Converse com seu assistente a qualquer hora, receba análises e tire dúvidas.",
              icon: <BadgeCheck className="h-4 w-4 mr-1" />,
              detail: "Disponível 24 horas",
              color: "teal"
            }
          ].map((item, index) => (
            <div 
              key={index}
              className={`bg-white p-6 rounded-xl shadow-lg border border-emerald-100 hover:shadow-2xl transition-all duration-500 group cursor-pointer transform ${
                visibleCards[index] 
                  ? 'translate-y-0 opacity-100 scale-100' 
                  : 'translate-y-10 opacity-0 scale-95'
              } hover:-translate-y-2 hover:scale-105`}
            >
              <div className={`h-12 w-12 bg-${item.color}-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-${item.color}-200 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                <span className={`text-${item.color}-600 font-bold text-xl group-hover:animate-pulse`}>{item.step}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-600 transition-colors duration-300">{item.title}</h3>
              <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                {item.description}
              </p>
              <div className={`flex items-center text-${item.color}-600 text-sm font-medium group-hover:scale-105 transition-transform duration-300`}>
                {item.icon}
                <span>{item.detail}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-white to-emerald-50 p-6 rounded-xl shadow-lg border border-emerald-100 max-w-3xl mx-auto hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in delay-600">
          <h3 className="text-xl font-bold mb-4 text-center">O que você recebe:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Análises diárias do mercado",
              "Respostas ilimitadas", 
              "Alertas de oportunidades",
              "Notícias importantes",
              "Explicações de termos",
              "Suporte em português 24/7"
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-2 transform hover:translate-x-2 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Check className="text-emerald-600 h-5 w-5 mt-1 flex-shrink-0 animate-bounce" style={{ animationDelay: `${index * 100}ms` }} />
                <span className="hover:text-emerald-600 transition-colors duration-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
