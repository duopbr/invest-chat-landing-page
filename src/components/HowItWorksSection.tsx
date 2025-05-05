
import { Check, MessageCircle, DollarSign, BadgeCheck, Bot } from "lucide-react";

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-invest-green font-semibold text-sm">PROCESSO</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Como Funciona
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Consultoria financeira com IA em 3 passos simples
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="h-12 w-12 bg-invest-green/10 rounded-full flex items-center justify-center mb-4">
              <span className="text-invest-green font-bold text-xl">1</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Assine o serviço</h3>
            <p className="text-gray-600 mb-4">
              Apenas R$34,99 por mês, sem fidelidade. Cancele quando quiser pelo WhatsApp.
            </p>
            <div className="flex items-center text-invest-green text-sm font-medium">
              <DollarSign className="h-4 w-4 mr-1" />
              <span>R$34,99/mês - Sem taxas</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="h-12 w-12 bg-invest-green/10 rounded-full flex items-center justify-center mb-4">
              <span className="text-invest-green font-bold text-xl">2</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Acesse no WhatsApp</h3>
            <p className="text-gray-600 mb-4">
              Após o pagamento, receba o link para acessar seu chatbot consultor de investimentos no WhatsApp.
            </p>
            <div className="flex items-center text-invest-green text-sm font-medium">
              <MessageCircle className="h-4 w-4 mr-1" />
              <span>Acesso instantâneo</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="h-12 w-12 bg-invest-green/10 rounded-full flex items-center justify-center mb-4">
              <span className="text-invest-green font-bold text-xl">3</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Tire dúvidas 24/7</h3>
            <p className="text-gray-600 mb-4">
              Converse com seu assistente de IA a qualquer hora, receba análises e tire dúvidas sobre investimentos.
            </p>
            <div className="flex items-center text-invest-green text-sm font-medium">
              <BadgeCheck className="h-4 w-4 mr-1" />
              <span>Disponível 24 horas</span>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-white p-6 rounded-xl shadow-sm border border-gray-100 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-4">O que você recebe:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-start gap-2">
              <Check className="text-invest-green h-5 w-5 mt-1 flex-shrink-0" />
              <span>Análises diárias do mercado</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="text-invest-green h-5 w-5 mt-1 flex-shrink-0" />
              <span>Respostas ilimitadas via IA</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="text-invest-green h-5 w-5 mt-1 flex-shrink-0" />
              <span>Alertas de oportunidades</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="text-invest-green h-5 w-5 mt-1 flex-shrink-0" />
              <span>Notícias importantes</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="text-invest-green h-5 w-5 mt-1 flex-shrink-0" />
              <span>Explicações de termos financeiros</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="text-invest-green h-5 w-5 mt-1 flex-shrink-0" />
              <span>Suporte em português 24/7</span>
            </div>
          </div>
          
          <div className="mt-6 bg-invest-green/10 p-4 rounded-lg">
            <p className="text-center font-medium">
              Conteúdo desenvolvido por especialistas com mais de 10 anos de experiência, incluindo profissional com certificação CFA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
