
import { CreditCard, MessageCircle, Clock, CheckCircle } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      icon: <CreditCard className="h-8 w-8 text-blue-600" />,
      title: "Assine o Serviço",
      description: "Escolha o plano ideal para você em poucos cliques.",
      color: "blue"
    },
    {
      number: "2",
      icon: <MessageCircle className="h-8 w-8 text-green-600" />,
      title: "Acesse no WhatsApp",
      description: "Receba seu link exclusivo e comece a conversar com seu consultor.",
      color: "green"
    },
    {
      number: "3",
      icon: <Clock className="h-8 w-8 text-purple-600" />,
      title: "Tire Dúvidas 24/7",
      description: "Tenha suporte e análises a qualquer hora, na palma da sua mão.",
      color: "purple"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm">PROCESSO SIMPLES</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-800">
            Como Funciona: Sua Consultoria Financeira em 3 Passos Simples
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Comece a investir melhor em poucos minutos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 text-center">
                <div className={`w-16 h-16 bg-${step.color}-100 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  {step.icon}
                </div>
                <div className={`w-8 h-8 bg-gradient-to-r from-${step.color}-500 to-${step.color}-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold`}>
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Exemplo Prático - Tesouro Selic */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4 text-center">
            Exemplo Prático: Descomplique o Tesouro Selic
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                "Entenda de forma simples como funciona e como ele pode proteger seu dinheiro, mesmo que você esteja começando agora."
              </p>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>Explicação clara e objetiva</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <CheckCircle className="h-5 w-5" />
                <span>Estratégias personalizadas</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <CheckCircle className="h-5 w-5" />
                <span>Suporte contínuo</span>
              </div>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-center">
                <MessageCircle className="h-12 w-12 mx-auto mb-4 text-white" />
                <p className="text-sm italic">
                  "Nossa IA em ação: análises precisas, linguagem simples, resultados reais."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
