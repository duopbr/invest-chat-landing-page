
import { AlertTriangle, HelpCircle, DollarSign } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: <HelpCircle className="h-8 w-8 text-red-500" />,
      question: "Você se sente perdido no mundo dos investimentos?",
      description: "Tantas opções, informações conflitantes e termos técnicos que deixam você confuso?"
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-orange-500" />,
      question: "Tem medo de tomar decisões erradas e perder dinheiro?",
      description: "A sensação de que uma escolha errada pode comprometer seu futuro financeiro?"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-yellow-500" />,
      question: "Gostaria de ter um especialista ao seu lado, mas acha que é caro ou inacessível?",
      description: "Consultoria de qualidade parece ser privilégio de poucos com muito dinheiro?"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-5 w-24 h-24 bg-red-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-5 w-32 h-32 bg-orange-200 rounded-full opacity-10 animate-bounce"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Reconhece Alguma Dessas Situações?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Você não está sozinho. Milhares de investidores enfrentam os mesmos desafios todos os dias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
              <div className="flex justify-center mb-4">
                {problem.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center">
                {problem.question}
              </h3>
              <p className="text-gray-600 text-center text-sm">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full shadow-lg">
            <p className="text-lg font-semibold">
              Se você respondeu sim a alguma dessas perguntas, a Duop Invest foi feita para você.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
