
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

interface FeaturesSectionProps {
  onTrialClick?: () => void;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onTrialClick }) => {
  const location = useLocation();

  const handleButtonClick = () => {
    if (location.pathname === '/trial' && onTrialClick) {
      onTrialClick();
    } else {
      // Comportamento original para outras páginas
      const ctaSection = document.getElementById('cta');
      if (ctaSection) {
        ctaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const buttonText = location.pathname === '/trial' ? 'Quero meu Teste Gratuito' : 'Comece a investir melhor hoje';

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="bg-invest-lightGray p-6 rounded-xl shadow-lg relative">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-invest-green text-white text-xs font-bold px-3 py-1 rounded-full">
                24/7
              </div>
              
              <div className="space-y-4">
                <div className="chat-bubble-left">
                  <p>Como funciona o Tesouro Selic?</p>
                </div>
                
                <div className="chat-bubble-right ml-auto">
                  <p className="text-gray-800">
                    O Tesouro Selic é um título público de renda fixa que acompanha a taxa básica de juros (Selic). 
                    Principais características:
                  </p>
                  <ul className="mt-2 ml-4 list-disc">
                    <li>Baixo risco (garantido pelo Tesouro Nacional)</li>
                    <li>Rentabilidade diária atrelada à Selic</li>
                    <li>Liquidez diária após 30 dias</li>
                    <li>Imposto de Renda regressivo (22,5% a 15%)</li>
                    <li>Taxa de custódia de 0,20% ao ano</li>
                  </ul>
                  <p className="mt-2">
                    É uma ótima opção para reserva de emergência ou investimentos de curto prazo.
                  </p>
                </div>
                
                <div className="chat-bubble-left">
                  <p>Como está o cenário para FIIs em 2025?</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <span className="text-invest-green font-semibold text-sm">POR QUE ESCOLHER NOSSA SOLUÇÃO</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Consultoria Especializada no seu Bolso
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-invest-blue/10 rounded-full flex items-center justify-center text-invest-blue flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Disponível 24 horas</h3>
                  <p className="text-gray-600">
                    Tire suas dúvidas a qualquer momento, sem esperar por horários comerciais ou agendamentos.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-invest-green/10 rounded-full flex items-center justify-center text-invest-green flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Sem viés comercial</h3>
                  <p className="text-gray-600">
                    Análises imparciais e focadas no seu perfil, sem tentar vender produtos financeiros específicos.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-invest-gold/10 rounded-full flex items-center justify-center text-invest-gold flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Conhecimento atualizado</h3>
                  <p className="text-gray-600">
                    Informações sempre atualizadas sobre o mercado financeiro, legislação e tendências de investimento.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button 
                onClick={handleButtonClick}
                className="bg-invest-blue hover:bg-invest-blue/90 text-white px-6 py-3"
              >
                {buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
