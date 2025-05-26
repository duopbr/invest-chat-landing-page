
import { Check, MessageCircle, DollarSign, BadgeCheck } from "lucide-react";

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-16 px-4 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-emerald-600 font-semibold text-sm">PROCESSO</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Como Funciona
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Consultoria financeira em 3 passos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-emerald-100 hover:shadow-xl transition-shadow">
            <div className="h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-emerald-600 font-bold text-xl">1</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Assine o serviço</h3>
            <p className="text-gray-600 mb-4">
              Apenas R$34,99 por mês, sem fidelidade. Cancele quando quiser pelo WhatsApp.
            </p>
            <div className="flex items-center text-emerald-600 text-sm font-medium">
              <DollarSign className="h-4 w-4 mr-1" />
              <span>R$34,99/mês - Sem taxas</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-emerald-100 hover:shadow-xl transition-shadow">
            <div className="h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-emerald-600 font-bold text-xl">2</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Acesse no WhatsApp</h3>
            <p className="text-gray-600 mb-4">
              Após o pagamento, receba o link de acesso para seu consultor no WhatsApp.
            </p>
            <div className="flex items-center text-emerald-600 text-sm font-medium">
              <MessageCircle className="h-4 w-4 mr-1" />
              <span>Acesso instantâneo</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-emerald-100 hover:shadow-xl transition-shadow">
            <div className="h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-emerald-600 font-bold text-xl">3</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Tire dúvidas 24/7</h3>
            <p className="text-gray-600 mb-4">
              Converse com seu assistente a qualquer hora, receba análises e tire dúvidas.
            </p>
            <div className="flex items-center text-emerald-600 text-sm font-medium">
              <BadgeCheck className="h-4 w-4 mr-1" />
              <span>Disponível 24 horas</span>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-white to-emerald-50 p-6 rounded-xl shadow-lg border border-emerald-100 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-4">O que você recebe:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-start gap-2">
              <Check className="text-emerald-600 h-5 w-5 mt-1 flex-shrink-0" />
              <span>Análises diárias do mercado</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="text-emerald-600 h-5 w-5 mt-1 flex-shrink-0" />
              <span>Respostas ilimitadas</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="text-emerald-600 h-5 w-5 mt-1 flex-shrink-0" />
              <span>Alertas de oportunidades</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="text-emerald-600 h-5 w-5 mt-1 flex-shrink-0" />
              <span>Notícias importantes</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="text-emerald-600 h-5 w-5 mt-1 flex-shrink-0" />
              <span>Explicações de termos</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="text-emerald-600 h-5 w-5 mt-1 flex-shrink-0" />
              <span>Suporte em português 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
