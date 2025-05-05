
const ComingSoonSection = () => {
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
  
  return (
    <section id="coming-soon" className="py-16 px-4 bg-invest-blue/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-invest-blue font-semibold text-sm">EM DESENVOLVIMENTO</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            🔜 Em breve
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Estamos trabalhando nestas funcionalidades para tornar seu assistente de investimentos ainda mais poderoso.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {upcomingFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-invest-blue/10 shadow-md relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-invest-blue/10 text-invest-blue text-xs font-bold px-3 py-1">
                Em breve
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-invest-blue/10 rounded-full flex items-center justify-center text-invest-blue flex-shrink-0 group-hover:bg-invest-blue/20 transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
              
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-tr from-invest-blue/5 to-transparent rounded-full z-0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;
