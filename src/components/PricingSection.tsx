
import { useIsMobile } from "@/hooks/use-mobile";
import PricingCard from "./PricingCard";

interface PricingSectionProps {
  showHeading?: boolean;
}

const PricingSection = ({ showHeading = true }: PricingSectionProps) => {
  const isMobile = useIsMobile();
  
  return (
    <section id="pricing" className="py-8 md:py-12 px-4 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {showHeading && (
            <>
              <div className="inline-flex items-center gap-2 bg-invest-blue/10 px-4 py-2 rounded-full mb-4 md:mb-6">
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 w-full max-w-5xl">
            <div className="flex justify-center">
              <PricingCard 
                title="Plano Mensal"
                description="Ideal para quem quer testar a consultoria e acompanhar o mercado mês a mês."
                price="R$ 34,99"
                period="/mês"
                discountPercentage="50%"
                discountType="sobre o plano mensal"
                stripeLink="https://buy.stripe.com/6oE4go67w2nIgrC9AM?success_url=https://duopinvest.duop.com.br/obrigado"
                pixCode="00020126650014br.gov.bcb.pix0114547777530001370225WHATSAPPESPECIALISTASDUOP520400005303986540534.995802BR5916GPR ANALISE LTDA6008BRASILIA62070503***63048CF0"
                pixQrCodeImage="/lovable-uploads/0d74bf51-d9d2-40ea-934d-2baf983cf549.png"
                benefits={[
                  "Acesso completo ao assistente financeiro no WhatsApp",
                  "Oferta por tempo limitado"
                ]}
              />
            </div>
            <div className="flex justify-center">
              <PricingCard 
                title="Plano Trimestral"
                description="Economize e acompanhe o mercado com continuidade por 3 meses."
                price="R$ 94,99"
                period="/trimestre"
                monthlyEquivalent="Equivalente a R$ 31,66/mês"
                discountPercentage="60%"
                discountType="sobre o plano mensal"
                stripeLink="https://buy.stripe.com/14k02Q67w1jE2OY3ch?success_url=https://duopinvest.duop.com.br/obrigado"
                isPopular={true}
                pixCode="00020126650014br.gov.bcb.pix0114547777530001370225WHATSAPPESPECIALISTASDUOP520400005303986540594.995802BR5916GPR ANALISE LTDA6008BRASILIA62070503***63048CF0"
                pixQrCodeImage="/lovable-uploads/0d74bf51-d9d2-40ea-934d-2baf983cf549.png"
                benefits={[
                  "Acesso completo ao assistente financeiro no WhatsApp",
                  "Oferta por tempo limitado"
                ]}
              />
            </div>
            <div className="flex justify-center">
              <PricingCard 
                title="Plano Semestral"
                description="Para quem quer compromisso de longo prazo e o melhor custo-benefício."
                price="R$ 167,99"
                period="/semestre"
                monthlyEquivalent="Equivalente a R$ 27,99/mês"
                discountPercentage="70%"
                discountType="sobre o plano mensal"
                stripeLink="https://buy.stripe.com/aEU8wA5ZsboQgrC8wC?success_url=https://duopinvest.duop.com.br/obrigado"
                pixCode="00020126650014br.gov.bcb.pix0114547777530001370225WHATSAPPESPECIALISTASDUOP520400005303986540167.995802BR5916GPR ANALISE LTDA6008BRASILIA62070503***63048CF0"
                pixQrCodeImage="/lovable-uploads/0d74bf51-d9d2-40ea-934d-2baf983cf549.png"
                benefits={[
                  "Acesso completo ao assistente financeiro no WhatsApp",
                  "Oferta por tempo limitado"
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
