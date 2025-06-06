import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { slugify, extractNumericPrice } from "@/utils/priceUtils";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useToast } from "@/components/ui/use-toast";
import { formatPhoneNumber } from "@/utils/phoneUtils";
import PricingDisplay from "./pricing/PricingDisplay";
import BenefitsList from "./pricing/BenefitsList";
import PopularBadge from "./pricing/PopularBadge";

// Adiciona a declaração global para window.dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}
// Garante que dataLayer exista
if (typeof window !== 'undefined') {
  window.dataLayer = window.dataLayer || [];
}

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  period: string;
  monthlyEquivalent?: string;
  discountPercentage: string;
  discountType: string;
  stripeLink: string;
  isPopular?: boolean;
  benefits: string[];
  onPlanSelect: () => void;
  showPixDetailsDirectly?: boolean;
  submittedPhoneNumber?: string;
  pixCode?: string;
  onPhoneNumberSubmit?: (phoneNumber: string, planTitle: string) => Promise<boolean>;
}

const PricingCard = ({
  title,
  description,
  price,
  period,
  monthlyEquivalent,
  discountPercentage,
  discountType,
  stripeLink,
  isPopular = false,
  benefits,
  onPlanSelect,
  showPixDetailsDirectly = false,
  submittedPhoneNumber = "",
  pixCode = "",
  onPhoneNumberSubmit = async () => false,
}: PricingCardProps) => {
  const [pixDialogOpen, setPixDialogOpen] = useState(false);
  const [localPhoneNumber, setLocalPhoneNumber] = useState("");
  const [localIsSubmitting, setLocalIsSubmitting] = useState(false);
  const [currentShowPixDetails, setCurrentShowPixDetails] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (showPixDetailsDirectly) {
      setCurrentShowPixDetails(true);
      if (submittedPhoneNumber) {
        setLocalPhoneNumber(formatPhoneNumber(submittedPhoneNumber));
      }
      
      // Disparar evento InitiateCheckout para PIX quando detalhes são mostrados diretamente
      const numericPrice = extractNumericPrice(price);
      console.log("[PricingCard - PIX useEffect] showPixDetailsDirectly:", showPixDetailsDirectly, "Submitted Phone:", submittedPhoneNumber);
      if (typeof window.dataLayer !== 'undefined') {
        const eventData = {
          event: 'InitiateCheckout',
          value: numericPrice,
          currency: 'BRL',
          payment_type: 'pix',
          ecommerce: {
            currency: 'BRL',
            value: numericPrice,
            items: [{
              item_name: title,
              item_category: 'Plano de Assinatura',
              price: numericPrice,
              quantity: 1
            }]
          },
        };
        console.log("[PricingCard - PIX useEffect] Pushing to dataLayer:", eventData);
        window.dataLayer.push(eventData);
      } else {
        console.error("[PricingCard - PIX useEffect] window.dataLayer is undefined.");
      }
    }
  }, [showPixDetailsDirectly, submittedPhoneNumber, price, title]);

  const handleStripeCheckout = () => {
    console.log("[PricingCard] handleStripeCheckout called for plan:", title);
    const numericPrice = extractNumericPrice(price);
    if (typeof window.dataLayer !== 'undefined') {
      const eventData = {
        event: 'InitiateCheckout',
        value: numericPrice,
        currency: 'BRL',
        payment_type: 'cartao',
        ecommerce: {
          currency: 'BRL',
          value: numericPrice,
          items: [{
            item_name: title, 
            item_category: 'Plano de Assinatura',
            price: numericPrice,
            quantity: 1
          }]
        },
      };
      console.log("[PricingCard - Stripe] Pushing to dataLayer:", eventData);
      window.dataLayer.push(eventData);
    } else {
      console.error("[PricingCard - Stripe] window.dataLayer is undefined.");
    }
    window.open(stripeLink, "_blank");
  };

  const handleCopyPixKey = () => {
    navigator.clipboard.writeText(pixCode || "");
    toast({
      title: "Chave Pix copiada!",
      description: "A chave Pix foi copiada para a área de transferência.",
    });
  };

  const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setLocalPhoneNumber(formatted);
  };

  const handleLocalPhoneFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Validação do formato completo
    const phoneRegex = /^\+55 \d{2} \d{5}-\d{4}$/;
    if (!phoneRegex.test(localPhoneNumber)) {
      toast({
        title: "Formato inválido",
        description: "Por favor, use o formato +55 DD 9XXXX-XXXX.",
        variant: "destructive",
      });
      return;
    }
    
    setLocalIsSubmitting(true);
    const success = await onPhoneNumberSubmit(localPhoneNumber, title);
    if (success) {
      // setCurrentShowPixDetails(true);
    } else {
      // O toast de erro já é mostrado pela função onPhoneNumberSubmit
    }
    setLocalIsSubmitting(false);
  };
  
  const handleModalOpenChange = (open: boolean) => {
    setPixDialogOpen(open);
    if (open) {
      if (showPixDetailsDirectly && submittedPhoneNumber) {
        setCurrentShowPixDetails(true);
        setLocalPhoneNumber(formatPhoneNumber(submittedPhoneNumber));
      } else {
        setCurrentShowPixDetails(false);
        setLocalPhoneNumber("");
      }
    }
  };

  return (
    <Card className={`w-full h-full overflow-hidden border ${isPopular ? "border-invest-green" : "border-gray-200"} max-w-[350px] mx-auto`}>
      {isPopular && <PopularBadge />}
      <div className={`flex flex-col ${isPopular ? "border-t-0" : ""}`}>
        <CardHeader className="px-6 py-6 text-center">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <PricingDisplay
            price={price}
            period={period}
            monthlyEquivalent={monthlyEquivalent}
            discountPercentage={discountPercentage}
            discountType={discountType}
          />
        </CardHeader>

        <CardContent className="px-6 py-0 flex-grow">
          <p className="text-gray-600 mb-4 text-center">{description}</p>
          <BenefitsList benefits={benefits} />
        </CardContent>

        <CardFooter className="flex flex-col space-y-3 px-6 py-6 mt-4">
          <Button
            id={`btn-select-${slugify(title)}`}
            data-plan-price={extractNumericPrice(price)}
            onClick={onPlanSelect}
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Escolher este plano
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default PricingCard;
