
import { useEffect, useRef, useState } from "react";

const ComingSoonSection = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const upcomingFeatures = [
    {
      title: "Consultoria de Carteira",
      description: "Envie sua carteira e receba uma análise com sugestões de ajustes, correções e oportunidades, sem viés.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Alertas Automáticos",
      description: "Notificações em tempo real sobre balanços, fatos relevantes e oscilações fora do padrão dos ativos que você acompanha.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      )
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate cards one by one
            [0, 1].forEach((index) => {
              setTimeout(() => {
                setVisibleCards(prev => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }, index * 300);
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
    <section ref={sectionRef} id="coming-soon" className="py-16 px-4 bg-gray-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-10 left-1/4 w-32 h-32 bg-gray-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-gray-300 rounded-full opacity-15 animate-bounce delay-700"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <span className="text-green-600 font-semibold text-sm animate-pulse">EM DESENVOLVIMENTO</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 hover:scale-105 transition-transform duration-300">
            🔜 Em breve
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Estamos trabalhando nestas funcionalidades para tornar seu assistente de investimentos ainda mais poderoso.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {upcomingFeatures.map((feature, index) => (
            <div 
              key={index} 
              className={`bg-white p-6 rounded-xl border border-gray-200 shadow-lg relative overflow-hidden group hover:shadow-2xl transition-all duration-500 cursor-pointer transform ${
                visibleCards[index] 
                  ? 'translate-y-0 opacity-100 scale-100' 
                  : 'translate-y-10 opacity-0 scale-95'
              } hover:-translate-y-2 hover:scale-105`}
            >
              <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg group-hover:bg-green-600 transition-colors duration-300 animate-pulse">
                Em breve
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0 group-hover:bg-green-200 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <div className="group-hover:animate-spin">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{feature.description}</p>
                </div>
              </div>
              
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-tr from-green-100/50 to-transparent rounded-full z-0 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-125"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;
