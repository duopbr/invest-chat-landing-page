
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, TrendingUp } from "lucide-react";

const NewHeroSection = () => {
  const scrollToPlans = () => {
    const plansSection = document.getElementById('new-pricing');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 px-4 pt-20">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-green-200 rounded-full opacity-15 animate-bounce"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-emerald-300 rounded-full opacity-25 animate-ping"></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-6">
            <MessageCircle className="h-4 w-4 text-green-600" />
            <span className="text-sm font-medium text-green-700">Consultoria 24/7 no WhatsApp</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-green-600 to-emerald-600 bg-clip-text text-transparent leading-tight">
            Duop Invest: Seu Consultor de Investimentos com IA no WhatsApp
          </h1>
          
          <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
            Decisões Inteligentes, Lucros Reais.
          </p>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Cansado de incertezas no mercado? Tenha acesso a análises precisas, insights validados e suporte contínuo 24/7, diretamente no seu WhatsApp. Invista com confiança e maximize seus resultados.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
          <Button
            onClick={scrollToPlans}
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-8 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Comece a Investir Melhor Agora!
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-gray-600">
            Acesse seu consultor 24/7 no WhatsApp e transforme seus resultados
          </p>
        </div>

        {/* Visual element */}
        <div className="relative max-w-2xl mx-auto animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              WhatsApp + IA + Especialistas
            </h3>
            <p className="text-gray-600">
              A combinação perfeita para seus investimentos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHeroSection;
