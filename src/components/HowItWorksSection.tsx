
import { Check, MessageCircle, DollarSign, BadgeCheck } from "lucide-react";

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-invest-green font-semibold text-sm">PROCESSO SIMPLIFICADO</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Como Funciona
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Acesso simples a consultoria financeira de qualidade em 3 passos fáceis
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="h-12 w-12 bg-invest-green/10 rounded-full flex items-center justify-center mb-4">
              <span className="text-invest-green font-bold text-xl">1</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Assine o serviço</h3>
            <p className="text-gray-600 mb-4">
              Pague apenas R$34,99 por mês, sem fidelidade. Cancele quando quiser, diretamente pelo WhatsApp.
            </p>
            <div className="flex items-center text-invest-green text-sm font-medium">
              <DollarSign className="h-4 w-4 mr-1" />
              <span>R$34,99/mês - Sem taxas escondidas</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="h-12 w-12 bg-invest-green/10 rounded-full flex items-center justify-center mb-4">
              <span className="text-invest-green font-bold text-xl">2</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Receba acesso no WhatsApp</h3>
            <p className="text-gray-600 mb-4">
              Após o pagamento, você receberá um link para acessar seu consultor financeiro no WhatsApp imediatamente.
            </p>
            <div className="flex items-center text-invest-green text-sm font-medium">
              <MessageCircle className="h-4 w-4 mr-1" />
              <span>Acesso instantâneo após confirmação</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="h-12 w-12 bg-invest-green/10 rounded-full flex items-center justify-center mb-4">
              <span className="text-invest-green font-bold text-xl">3</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Tire dúvidas 24/7</h3>
            <p className="text-gray-600 mb-4">
              Converse com seu assistente de investimentos a qualquer hora, receba análises e tire dúvidas sobre o mercado.
            </p>
            <div className="flex items-center text-invest-green text-sm font-medium">
              <BadgeCheck className="h-4 w-4 mr-1" />
              <span>Disponível 24 horas, todos os dias</span>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-white p-6 rounded-xl shadow-sm border border-gray-100 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-4">O que você vai receber:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-start gap-2">
              <Check className="text-invest-green h-5 w-5 mt-1 flex-shrink-0" />
              <span>Análises diárias sobre o mercado financeiro</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="text-invest-green h-5 w-5 mt-1 flex-shrink-0" />
              <span>Respostas ilimitadas às suas dúvidas</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="text-invest-green h-5 w-5 mt-1 flex-shrink-0" />
              <span>Alertas sobre oportunidades de investimento</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="text-invest-green h-5 w-5 mt-1 flex-shrink-0" />
              <span>Acompanhamento de notícias importantes</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="text-invest-green h-5 w-5 mt-1 flex-shrink-0" />
              <span>Explicações simples sobre termos financeiros</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="text-invest-green h-5 w-5 mt-1 flex-shrink-0" />
              <span>Suporte em português, disponível 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
