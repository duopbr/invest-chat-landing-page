
import { Shield, TrendingUp, MessageCircle, BookOpen } from "lucide-react";

const SolutionSection = () => {
  const benefits = [
    {
      icon: <Shield className="h-10 w-10 text-blue-600" />,
      title: "Invista com a Segurança de uma Segunda Opinião Profissional",
      description: "Não tome decisões sozinho. Receba validação e insights de especialistas renomados do mercado financeiro, garantindo que suas escolhas estejam alinhadas com as melhores estratégias e minimizando riscos. Tenha a tranquilidade de saber que você está no caminho certo.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-green-600" />,
      title: "Transforme Dados em Lucros com Análises Inteligentes",
      description: "Chega de informações genéricas. Nossa IA analisa seus investimentos e o mercado em segundos, fornecendo insights acionáveis e personalizados que te ajudam a identificar as melhores oportunidades e a otimizar sua carteira para resultados superiores. Saiba exatamente onde e como investir para maximizar seus ganhos.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: <MessageCircle className="h-10 w-10 text-purple-600" />,
      title: "Suporte Financeiro Ilimitado, Quando Você Mais Precisa",
      description: "Tenha um consultor disponível 24 horas por dia, 7 dias por semana, diretamente no seu WhatsApp. Esclareça qualquer dúvida financeira, desde termos complexos até estratégias de investimento, sem burocracia ou espera. Sua tranquilidade não tem hora para acabar.",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: <BookOpen className="h-10 w-10 text-orange-600" />,
      title: "Conhecimento Atualizado e Descomplicado",
      description: "Mantenha-se sempre à frente com informações atualizadas sobre o mercado financeiro, legislação e tendências de investimento, tudo explicado de forma clara e acessível, mesmo para quem está começando.",
      gradient: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-green-600 font-semibold text-sm">A SOLUÇÃO</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-800">
            Como a Duop Invest Transforma Sua Jornada de Investimentos
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Descubra como nossa tecnologia e expertise podem resolver seus maiores desafios financeiros
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 group">
              <div className={`w-16 h-16 bg-gradient-to-r ${benefit.gradient} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-green-600 group-hover:bg-clip-text transition-all duration-300">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
