
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import PricingCard from "./PricingCard";
import { supabase } from '@/lib/supabaseClient';
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

interface PricingSectionProps {
  showHeading?: boolean;
  preferredPayment?: 'pix' | null;
}

const PricingSection = ({ showHeading = true, preferredPayment = null }: PricingSectionProps) => {
  const isMobile = useIsMobile();
  const { toast } = useToast();
  const navigate = useNavigate();

  const [submittedPhoneNumber, setSubmittedPhoneNumber] = useState<string | null>(null);
  const [showPixForAllCards, setShowPixForAllCards] = useState(false);
  const [isSubmittingGlobal, setIsSubmittingGlobal] = useState(false);

  const handlePhoneNumberProvided = async (phoneNumber: string, planTitle: string) => {
    if (!phoneNumber) {
      toast({ title: "Erro", description: "Por favor, insira seu número de WhatsApp.", variant: "destructive" });
      return false;
    }
    setIsSubmittingGlobal(true);
    try {
      const { data, error } = await supabase
        .from('pix_phone_submissions')
        .insert([{ phone_number: phoneNumber, plan_title: planTitle }])
        .select();

      if (error) throw error;

      console.log("Supabase: Número", phoneNumber, "Plano:", planTitle, "Data:", data);
      toast({ title: "Número enviado!", description: "Continue para o pagamento PIX." });
      setSubmittedPhoneNumber(phoneNumber);
      setShowPixForAllCards(true);
      setIsSubmittingGlobal(false);
      return true;
    } catch (error: any) {
      console.error("Erro Supabase:", error);
      toast({ title: "Erro", description: error.message || "Não foi possível registrar. Tente novamente.", variant: "destructive" });
      setIsSubmittingGlobal(false);
      return false;
    }
  };

  // Função para redirecionar para checkout
  const handleCheckoutClick = () => {
    navigate('/checkout');
  };
  
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
                price="R$ 69,90"
                period="/mês"
                discountPercentage="50%"
                discountType="sobre o plano mensal"
                stripeLink="https://buy.stripe.com/6oE4go67w2nIgrC9AM"
                pixCode="00020126650014br.gov.bcb.pix0114547777530001370225WHATSAPPESPECIALISTASDUOP520400005303986540534.995802BR5916GPR ANALISE LTDA6008BRASILIA62070503***63048CF0"
                pixQrCodeImage="/imagens/Plano Mensal.png"
                preferredPayment={preferredPayment}
                submittedPhoneNumber={submittedPhoneNumber}
                showPixDetailsDirectly={showPixForAllCards}
                onPhoneNumberSubmit={handlePhoneNumberProvided}
                isSubmittingPhoneNumber={isSubmittingGlobal}
                onCheckoutClick={handleCheckoutClick}
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
                price="R$ 167,90"
                period="/trimestre"
                monthlyEquivalent="Equivalente a R$ 55,97/mês"
                discountPercentage="60%"
                discountType="sobre o plano mensal"
                stripeLink="https://buy.stripe.com/cN2bIQ7bA5zU5MY8wJ"
                isPopular={true}
                pixCode="00020126680014br.gov.bcb.pix0114547777530001370228WHATSAPP ESPECIALISTAS DUOP 520400005303986540594.995802BR5916GPR ANALISE LTDA6008BRASILIA62070503***6304C79D"
                pixQrCodeImage="/imagens/Plano Trimestral.png"
                preferredPayment={preferredPayment}
                submittedPhoneNumber={submittedPhoneNumber}
                showPixDetailsDirectly={showPixForAllCards}
                onPhoneNumberSubmit={handlePhoneNumberProvided}
                isSubmittingPhoneNumber={isSubmittingGlobal}
                onCheckoutClick={handleCheckoutClick}
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
                price="R$ 251,90"
                period="/semestre"
                monthlyEquivalent="Equivalente a R$ 41,98/mês"
                discountPercentage="70%"
                discountType="sobre o plano mensal"
                stripeLink="https://buy.stripe.com/5kA5ksdzY5zU8Za8wK"
                pixCode="00020126680014br.gov.bcb.pix0114547777530001370228WHATSAPP ESPECIALISTAS DUOP 5204000053039865406167.995802BR5916GPR ANALISE LTDA6008BRASILIA62070503***6304C3F2"
                pixQrCodeImage="/imagens/Plano Semestral.png"
                preferredPayment={preferredPayment}
                submittedPhoneNumber={submittedPhoneNumber}
                showPixDetailsDirectly={showPixForAllCards}
                onPhoneNumberSubmit={handlePhoneNumberProvided}
                isSubmittingPhoneNumber={isSubmittingGlobal}
                onCheckoutClick={handleCheckoutClick}
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
