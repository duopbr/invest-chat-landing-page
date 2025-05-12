
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, CreditCard } from "lucide-react";
import { useState } from "react";
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
}: PricingCardProps) => {
  const [pixDialogOpen, setPixDialogOpen] = useState(false);
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

  return (
    <>
      <Card className={`w-full h-full overflow-hidden ${isPopular ? "border-invest-green" : "border-gray-200"}`}>
        {isPopular && (
          <div className="bg-invest-green text-white text-center py-1.5 text-sm font-medium">
            Mais Popular
          </div>
        )}
        <div className={`flex flex-col h-full ${isPopular ? "border-t-0" : ""}`}>
          <CardHeader className="px-6 py-6">
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
            <div className="mt-4">
              <div className="flex items-baseline">
                <span className="text-3xl font-bold">{price}</span>
                <span className="text-base text-gray-500 ml-1">{period}</span>
              </div>
              {monthlyEquivalent && (
                <p className="text-sm text-gray-500 mt-1">{monthlyEquivalent}</p>
              )}
              <div className="mt-2 text-green-600 text-sm font-medium">
                <span>{discountPercentage} de desconto {discountType}</span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="px-6 py-0 flex-grow">
            <p className="text-gray-600 mb-4">{description}</p>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Check className="text-green-500 h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </CardContent>

          <CardFooter className="flex flex-col space-y-3 px-6 py-6 border-t">
            <Button 
              onClick={handleStripeCheckout}
              className="w-full bg-invest-green hover:bg-invest-green/90"
            >
              <CreditCard className="mr-2 h-4 w-4" />
              Pagar com Cartão
            </Button>
            <Button 
              onClick={() => setPixDialogOpen(true)}
              variant="outline" 
              className="w-full"
            >
              Pagar via Pix
            </Button>
          </CardFooter>
        </div>
      </Card>

      <Dialog open={pixDialogOpen} onOpenChange={setPixDialogOpen}>
        <DialogContent className="max-w-md mx-auto">
          <DialogHeader>
            <DialogTitle>Pagamento via Pix</DialogTitle>
            <DialogDescription>Escaneie o QR Code ou copie a chave Pix</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center space-y-4">
            <div className="border-2 border-gray-200 p-4 rounded-lg">
              <img 
                src={pixQrCodeImage} 
                alt="QR Code Pix" 
                className="w-48 h-48 object-contain"
              />
            </div>
            <div className="w-full">
              <p className="text-center mb-2 text-sm">Chave Pix:</p>
              <div className="flex items-center">
                <code className="bg-gray-100 px-2 py-1 rounded mr-2 text-xs overflow-auto max-w-[calc(100%-4rem)] truncate">
                  {pixCode}
                </code>
                <Button size="sm" onClick={handleCopyPixKey} className="text-xs h-7">Copiar</Button>
              </div>
            </div>
            <div className="mt-2 bg-yellow-50 p-3 rounded-md text-sm w-full">
              <p className="font-medium text-yellow-800">Importante:</p>
              <p className="text-yellow-700">
                Após realizar o pagamento, envie o comprovante para nosso WhatsApp
                (21) 96713-5336 para confirmação rápida do seu acesso.
              </p>
            </div>
            <Button 
              className="w-full"
              onClick={() => window.open("https://wa.me/5521967135336?text=Oi%2C%20realizei%20um%20pagamento%20via%20PIX%20e%20gostaria%20de%20confirmar", "_blank")}
            >
              Enviar Comprovante no WhatsApp
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PricingCard;
