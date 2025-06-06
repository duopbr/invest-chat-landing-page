
import { useIsMobile } from "@/hooks/use-mobile";
import PricingCard from "./PricingCard";

interface PricingSectionProps {
  showHeading?: boolean;
  preferredPayment?: 'pix' | null;
}

const PricingSection = ({ showHeading = true }: PricingSectionProps) => {
  const isMobile = useIsMobile();
  
  return (
    <section id="pricing" className="py-8 md:py-12 px-4 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-100 text-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {showHeading && (
            <>
              <div className="inline-flex items-center gap-2 bg-slate-600/10 px-4 py-2 rounded-full mb-4 md:mb-6">
                <span className="text-sm font-medium text-slate-700">Oferta por tempo limitado</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
                Consultor de investimentos 24/7 no <span className="text-slate-700 font-bold">WhatsApp</span>
              </h2>
              <p className="text-base md:text-lg max-w-2xl mb-6 md:mb-8 text-gray-700">
                Escolha o plano ideal para você e acesse análises, informações de mercado e tire dúvidas diretamente no WhatsApp.
              </p>
            </>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 w-full max-w-5xl">
            <div className="flex justify-center">
              <PricingCard 
                title="Plano Mensal"
                description="Ideal para quem quer testar a consultoria e acompanhar o mercado mês a mês."
                price="R$ 54,99"
                period="/mês"
                discountPercentage="50%"
                discountType="sobre o plano mensal"
                stripeLink="https://buy.stripe.com/6oE4go67w2nIgrC9AM"
                pixCode="00020126440014br.gov.bcb.pix0114547777530001370204DUOP520400005303986540554.995802BR5916GPR ANALISE LTDA6008BRASILIA62170513CLIENTEMENSAL63045711"
                benefits={[
                  "Acesso completo ao assistente financeiro no WhatsApp",
                  "Consultoria personalizada de carteira de investimentos",
                  "Oferta por tempo limitado"
                ]}
              />
            </div>
            <div className="flex justify-center">
              <PricingCard 
                title="Plano Trimestral"
                description="Economize e acompanhe o mercado com continuidade por 3 meses."
                price="R$ 131,99"
                period="/trimestre"
                monthlyEquivalent="Equivalente a R$ 44,00/mês"
                discountPercentage="60%"
                discountType="sobre o plano mensal"
                stripeLink="https://buy.stripe.com/cN2bIQ7bA5zU5MY8wJ"
                isPopular={true}
                pixCode="00020126440014br.gov.bcb.pix0114547777530001370204DUOP5204000053039865406131.995802BR5916GPR ANALISE LTDA6008BRASILIA62210517clientetrimestral630448A2"
                benefits={[
                  "Acesso completo ao assistente financeiro no WhatsApp",
                  "Consultoria personalizada de carteira de investimentos",
                  "Oferta por tempo limitado"
                ]}
              />
            </div>
            <div className="flex justify-center">
              <PricingCard 
                title="Plano Semestral"
                description="Para quem quer compromisso de longo prazo e o melhor custo-benefício."
                price="R$ 197,99"
                period="/semestre"
                monthlyEquivalent="Equivalente a R$ 33,00/mês"
                discountPercentage="70%"
                discountType="sobre o plano mensal"
                stripeLink="https://buy.stripe.com/5kA5ksdzY5zU8Za8wK"
                pixCode="00020126440014br.gov.bcb.pix0114547777530001370204DUOP5204000053039865406197.995802BR5916GPR ANALISE LTDA6008BRASILIA62200516clientesemestral6304F36F"
                benefits={[
                  "Acesso completo ao assistente financeiro no WhatsApp",
                  "Consultoria personalizada de carteira de investimentos",
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
