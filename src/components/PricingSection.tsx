
import { Timer } from "lucide-react";
import PricingCard from "./PricingCard";

interface PricingSectionProps {
  showHeading?: boolean;
}

const PricingSection = ({ showHeading = true }: PricingSectionProps) => {
  return (
    <section id="pricing" className="py-16 px-4 bg-gradient-to-r from-invest-blue to-invest-blue/80 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {showHeading && (
            <>
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
                <Timer className="h-4 w-4" />
                <span className="text-sm font-medium">Oferta por tempo limitado</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Consultor de investimentos 24/7 no <span className="text-invest-green font-bold">WhatsApp</span>
              </h2>
              <p className="text-lg max-w-2xl mb-8 text-white/90">
                Escolha o plano ideal para você e acesse análises, informações de mercado e tire dúvidas diretamente no WhatsApp.
              </p>
            </>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
            <PricingCard 
              title="Plano Mensal"
              description="Ideal para quem quer testar a consultoria e acompanhar o mercado mês a mês."
              price="R$ 34,99/mês"
              discountPercentage="50%"
              discountType="o valor cheio"
              stripeLink="https://buy.stripe.com/6oE4go67w2nIgrC9AM?success_url=https://duopinvest.duop.com.br/obrigado"
            />
            <PricingCard 
              title="Plano Trimestral"
              description="Economize e acompanhe o mercado com continuidade por 3 meses."
              price="R$ 94,99/trimestre"
              monthlyEquivalent="equivalente a R$ 31,66/mês"
              discountPercentage="60%"
              discountType="o plano mensal"
              stripeLink="https://buy.stripe.com/14k02Q67w1jE2OY3ch?success_url=https://duopinvest.duop.com.br/obrigado"
              isPopular={true}
            />
            <PricingCard 
              title="Plano Semestral"
              description="Para quem quer compromisso de longo prazo e o melhor custo-benefício."
              price="R$ 167,99/semestral"
              monthlyEquivalent="equivalente a R$ 27,99/mês"
              discountPercentage="70%"
              discountType="o plano mensal"
              stripeLink="https://buy.stripe.com/aEU8wA5ZsboQgrC8wC?success_url=https://duopinvest.duop.com.br/obrigado"
            />
          </div>
          
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>7 dias de garantia</span>
            </div>
            
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Cancelamento fácil</span>
            </div>
            
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Suporte dedicado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
