import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, CreditCard } from "lucide-react";
import { useState, FormEvent } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { supabase } from '@/lib/supabaseClient';

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
  pixCode,
  pixQrCodeImage,
  benefits,
  preferredPayment = null,
}: PricingCardProps) => {
  const [pixDialogOpen, setPixDialogOpen] = useState(false);
  const [showPixDetails, setShowPixDetails] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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

  const handlePhoneSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!phoneNumber) {
      toast({ title: "Erro", description: "Por favor, insira seu número de WhatsApp.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase
        .from('pix_phone_submissions')
        .insert([
          { phone_number: phoneNumber, plan_title: title }
        ])
        .select();

      if (error) {
        throw error;
      }

      console.log("Número de WhatsApp enviado para Supabase:", phoneNumber, "Plano:", title, "Data:", data);
      toast({
        title: "Número enviado!",
        description: "Seu número foi registrado. Continue para o pagamento PIX.",
      });
      setShowPixDetails(true);
    } catch (error: any) {
      console.error("Erro ao enviar para Supabase:", error);
      toast({
        title: "Erro ao enviar número",
        description: error.message || "Não foi possível registrar seu número. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenChange = (open: boolean) => {
    setPixDialogOpen(open);
    if (!open) {
      setShowPixDetails(false);
      setPhoneNumber("");
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
                className="w-full bg-[#FFFBEA] text-gray-900 hover:bg-[#FFF8D4]"
              >
                <CreditCard className="mr-2 h-4 w-4" />
                Pagar com Cartão
              </Button>
            )}
            {(preferredPayment === 'pix' || preferredPayment === null) && (
              <Button 
                onClick={() => setPixDialogOpen(true)}
                className="w-full text-white bg-[#00B894] hover:bg-[#00A080]"
              >
                Pagar via Pix
              </Button>
            )}
          </CardFooter>
        </div>
      </Card>

      <Dialog open={pixDialogOpen} onOpenChange={handleOpenChange}>
        <DialogContent className="w-[95%] max-w-md mx-auto">
          <DialogHeader>
            <DialogTitle>Pagamento via Pix</DialogTitle>
            {!showPixDetails && (
              <DialogDescription>Informe seu WhatsApp para identificarmos seu pagamento.</DialogDescription>
            )}
            {showPixDetails && (
              <DialogDescription>Escaneie o QR Code ou copie a chave Pix</DialogDescription>
            )}
          </DialogHeader>
          
          {!showPixDetails && (
            <form onSubmit={handlePhoneSubmit} className="space-y-4 py-4">
              <div>
                <label htmlFor="whatsapp-number" className="block text-sm font-medium text-gray-700 mb-1">
                  Seu número de WhatsApp (com DDD)
                </label>
                <Input 
                  id="whatsapp-number"
                  type="tel" 
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="(XX) XXXXX-XXXX"
                  required 
                  className="w-full"
                  disabled={isSubmitting}
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Continuar para PIX'}
              </Button>
            </form>
          )}
          
          {showPixDetails && (
            <div className="flex flex-col items-center space-y-4 pt-4">
              <p className="text-sm text-gray-600">Número informado: {phoneNumber}</p>
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
                onClick={() => window.open("https://wa.me/5521967135336?text=Oi%2C%20realizei%20um%20pagamento%20via%20PIX%20e%20gostaria%20de%20confirmar.%20Meu%20n%C3%BAmero:%20" + phoneNumber, "_blank")}
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
