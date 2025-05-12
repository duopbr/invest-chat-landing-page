
import { Timer } from "lucide-react";
import PricingCard from "./PricingCard";
import { useIsMobile } from "@/hooks/use-mobile";

interface PricingSectionProps {
  showHeading?: boolean;
}

const PricingSection = ({ showHeading = true }: PricingSectionProps) => {
  const isMobile = useIsMobile();
  
  return (
    <section id="pricing" className="py-8 md:py-16 px-4 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {showHeading && (
            <>
              <div className="inline-flex items-center gap-2 bg-invest-blue/10 px-4 py-2 rounded-full mb-4 md:mb-6">
                <Timer className="h-4 w-4 text-invest-blue" />
                <span className="text-sm font-medium text-invest-blue">Oferta por tempo limitado</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
                Consultor de investimentos 24/7 no <span className="text-invest-green font-bold">WhatsApp</span>
              </h2>
              <p className="text-base md:text-lg max-w-2xl mb-6 md:mb-8 text-gray-600">
                Escolha o plano ideal para você e acesse análises, informações de mercado e tire dúvidas diretamente no WhatsApp.
              </p>
            </>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full max-w-5xl">
            <PricingCard 
              title="Plano Mensal"
              description="Ideal para quem quer testar a consultoria e acompanhar o mercado mês a mês."
              price="R$ 34,99/mês"
              discountPercentage="50%"
              discountType="o valor cheio"
              stripeLink="https://buy.stripe.com/6oE4go67w2nIgrC9AM?success_url=https://duopinvest.duop.com.br/obrigado"
              pixCode="00020126650014br.gov.bcb.pix0114547777530001370225WHATSAPPESPECIALISTASDUOP520400005303986540534.995802BR5916GPR ANALISE LTDA6008BRASILIA62070503***63048CF0"
              pixQrCodeImage="/lovable-uploads/0d74bf51-d9d2-40ea-934d-2baf983cf549.png"
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
              pixCode="00020126650014br.gov.bcb.pix0114547777530001370225WHATSAPPESPECIALISTASDUOP520400005303986540594.995802BR5916GPR ANALISE LTDA6008BRASILIA62070503***63048CF0"
              pixQrCodeImage="/lovable-uploads/0d74bf51-d9d2-40ea-934d-2baf983cf549.png"
            />
            <PricingCard 
              title="Plano Semestral"
              description="Para quem quer compromisso de longo prazo e o melhor custo-benefício."
              price="R$ 167,99/semestral"
              monthlyEquivalent="equivalente a R$ 27,99/mês"
              discountPercentage="70%"
              discountType="o plano mensal"
              stripeLink="https://buy.stripe.com/aEU8wA5ZsboQgrC8wC?success_url=https://duopinvest.duop.com.br/obrigado"
              pixCode="00020126650014br.gov.bcb.pix0114547777530001370225WHATSAPPESPECIALISTASDUOP520400005303986540167.995802BR5916GPR ANALISE LTDA6008BRASILIA62070503***63048CF0"
              pixQrCodeImage="/lovable-uploads/0d74bf51-d9d2-40ea-934d-2baf983cf549.png"
            />
          </div>
          
          <div className="mt-6 md:mt-10 flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 mr-2 text-invest-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm md:text-base">7 dias de garantia</span>
            </div>
            
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 mr-2 text-invest-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm md:text-base">Cancelamento fácil</span>
            </div>
            
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 mr-2 text-invest-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm md:text-base">Suporte dedicado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
