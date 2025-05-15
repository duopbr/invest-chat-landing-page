import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, CreditCard } from "lucide-react";
import { useState, FormEvent, useEffect, ChangeEvent } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

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
  pixCode?: string;
  pixQrCodeImage?: string;
  benefits: string[];
  preferredPayment?: 'pix' | null;
  submittedPhoneNumber: string | null;
  showPixDetailsDirectly: boolean;
  onPhoneNumberSubmit: (phoneNumber: string, planTitle: string) => Promise<boolean>;
  isSubmittingPhoneNumber: boolean;
}

// Função para formatar o número de telefone
const formatPhoneNumber = (value: string): string => {
  if (!value) return "";
  const digits = value.replace(/\D/g, '');
  const N = digits.length;

  if (N <= 2) return `+${digits}`;
  if (N <= 4) return `+55 ${digits.substring(2)}`;
  if (N <= 9) return `+55 ${digits.substring(2, 4)} ${digits.substring(4)}`;
  if (N <= 13) return `+55 ${digits.substring(2, 4)} ${digits.substring(4, 9)}-${digits.substring(9)}`;
  // Limita a 13 dígitos (+55 DD 9XXXX XXXX)
  return `+55 ${digits.substring(2, 4)} ${digits.substring(4, 9)}-${digits.substring(9, 13)}`;
};

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
  pixCode,
  pixQrCodeImage,
  benefits,
  preferredPayment = null,
  submittedPhoneNumber,
  showPixDetailsDirectly,
  onPhoneNumberSubmit,
  isSubmittingPhoneNumber,
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
    }
  }, [showPixDetailsDirectly, submittedPhoneNumber]);

  const handleStripeCheckout = () => {
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
    } else {
      // Ao fechar, não resetamos o localPhoneNumber se já foi submetido globalmente
      // setCurrentShowPixDetails(false); // Não precisa resetar aqui, pois o useEffect e a lógica de abertura cuidam disso.
    }
  };

  return (
    <>
      <Card className={`w-full h-full overflow-hidden border ${isPopular ? "border-invest-green" : "border-gray-200"} max-w-[350px] mx-auto`}>
        {isPopular && (
          <div className="bg-invest-green text-white text-center py-1.5 text-sm font-medium">
            Mais Popular
          </div>
        )}
        <div className={`flex flex-col ${isPopular ? "border-t-0" : ""}`}>
          <CardHeader className="px-6 py-6 text-center">
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
            <div className="mt-4 flex flex-col items-center">
              <div className="flex items-baseline justify-center">
                <span className="text-3xl font-bold">{price}</span>
                <span className="text-base text-gray-500 ml-1">{period}</span>
              </div>
              {monthlyEquivalent && (
                <p className="text-sm text-gray-500 mt-1">{monthlyEquivalent}</p>
              )}
              <div className="mt-2 text-red-600 text-sm font-medium">
                <span>{discountPercentage} de desconto {discountType}</span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="px-6 py-0 flex-grow">
            <p className="text-gray-600 mb-4 text-center">{description}</p>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Check className="text-green-500 h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </CardContent>

          <CardFooter className="flex flex-col space-y-3 px-6 py-6 mt-4">
            {preferredPayment !== 'pix' && (
              <Button 
                onClick={handleStripeCheckout}
                className="w-full bg-[#00985B] text-white hover:bg-[#007F4D]"
              >
                <CreditCard className="mr-2 h-4 w-4" />
                Pagar com Cartão
              </Button>
            )}
            {(preferredPayment === 'pix' || preferredPayment === null) && (
              <Button 
                onClick={() => handleModalOpenChange(true)}
                className="w-full bg-[#D1FADF] text-green-800 hover:bg-[#BCF5D0] border border-green-800"
              >
                Pagar via Pix
              </Button>
            )}
          </CardFooter>
        </div>
      </Card>

      <Dialog open={pixDialogOpen} onOpenChange={handleModalOpenChange}>
        <DialogContent className="w-[95%] max-w-md mx-auto">
          <DialogHeader>
            <DialogTitle>Pagamento via Pix</DialogTitle>
            {!currentShowPixDetails && (
              <DialogDescription>Informe seu WhatsApp para identificarmos seu pagamento.</DialogDescription>
            )}
            {currentShowPixDetails && (
              <DialogDescription>Escaneie o QR Code ou copie a chave Pix</DialogDescription>
            )}
          </DialogHeader>
          
          {!currentShowPixDetails && (
            <form onSubmit={handleLocalPhoneFormSubmit} className="space-y-4 py-4">
              <div>
                <label htmlFor="ph" className="block text-sm font-medium text-gray-700 mb-1">
                  Seu número de WhatsApp (com DDD)
                </label>
                <Input 
                  id="ph"
                  type="tel" 
                  value={localPhoneNumber}
                  onChange={handlePhoneNumberChange}
                  placeholder="+55 21 99999-9999"
                  required 
                  maxLength={19}
                  className="w-full"
                  disabled={isSubmittingPhoneNumber || localIsSubmitting}
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmittingPhoneNumber || localIsSubmitting}>
                {(isSubmittingPhoneNumber || localIsSubmitting) ? 'Enviando...' : 'Continuar para PIX'}
              </Button>
            </form>
          )}
          
          {currentShowPixDetails && (
            <div className="flex flex-col items-center space-y-4 pt-4">
              <p className="text-sm text-gray-600">Número informado: {submittedPhoneNumber || localPhoneNumber}</p>
              <div className="border-2 border-gray-200 p-4 rounded-lg">
                <img 
                  src={pixQrCodeImage} 
                  alt="QR Code Pix" 
                  className="w-40 h-40 sm:w-48 sm:h-48 object-contain"
                />
              </div>
              <div className="w-full">
                <p className="text-center mb-2 text-sm">Chave Pix:</p>
                <div className="flex flex-wrap items-center w-full gap-2">
                  <code className="bg-gray-100 px-2 py-1 rounded text-xs break-all flex-grow min-w-0">
                    {pixCode}
                  </code>
                  <Button size="sm" onClick={handleCopyPixKey} className="text-xs h-7 whitespace-nowrap flex-shrink-0">Copiar</Button>
                </div>
              </div>
              <div className="mt-2 bg-yellow-50 p-3 rounded-md text-sm w-full">
                <p className="font-medium text-yellow-800 break-words">Importante:</p>
                <p className="text-yellow-700 break-words">
                  Entraremos em contato no seu WhatsApp (o número que você enviou).
                </p>
                <p className="text-yellow-700 break-words mt-1">
                  Qualquer dúvida, mandar mensagem para este número +55 21 97397-3673 ou para este email contato@duop.com.br
                </p>
              </div>
              <Button 
                className="w-full"
                onClick={() => window.open("https://wa.me/5521967135336?text=Oi%2C%20realizei%20um%20pagamento%20via%20PIX%20e%20gostaria%20de%20confirmar.%20Meu%20n%C3%BAmero:%20" + (submittedPhoneNumber || localPhoneNumber), "_blank")}
              >
                Enviar Comprovante no WhatsApp
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PricingCard;
