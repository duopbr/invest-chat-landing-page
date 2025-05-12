
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, CreditCard } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  monthlyEquivalent?: string;
  discountPercentage: string;
  discountType: string;
  stripeLink: string;
  isPopular?: boolean;
}

const PricingCard = ({
  title,
  description,
  price,
  monthlyEquivalent,
  discountPercentage,
  discountType,
  stripeLink,
  isPopular = false,
}: PricingCardProps) => {
  const [pixDialogOpen, setPixDialogOpen] = useState(false);

  const handleStripeCheckout = () => {
    window.open(stripeLink, "_blank");
  };

  const handleCopyPixKey = () => {
    navigator.clipboard.writeText("11122233344");
    alert("Chave Pix copiada!");
  };

  return (
    <>
      <Card className={`w-full ${isPopular ? "border-invest-green shadow-lg" : "border-gray-200"}`}>
        {isPopular && (
          <div className="bg-invest-green text-white text-center py-1 text-sm font-medium rounded-t-lg">
            Mais Popular
          </div>
        )}
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <p className="text-3xl font-bold">{price}</p>
              {monthlyEquivalent && (
                <p className="text-sm text-gray-500">{monthlyEquivalent}</p>
              )}
              <div className="mt-2 bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-bold inline-flex items-center">
                <span>{discountPercentage} de desconto sobre {discountType}</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Check className="text-invest-green h-5 w-5 mt-1 flex-shrink-0" />
                <span>Acesso completo ao assistente financeiro no WhatsApp</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="text-invest-green h-5 w-5 mt-1 flex-shrink-0" />
                <span>Sem fidelidade</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="text-invest-green h-5 w-5 mt-1 flex-shrink-0" />
                <span>Acesso imediato</span>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <p className="text-xs text-gray-500 mb-2 text-center w-full">Oferta por tempo limitado</p>
          <div className="flex gap-2 w-full">
            <Button 
              onClick={handleStripeCheckout}
              variant="default" 
              className="flex-1 bg-invest-green hover:bg-invest-green/90"
            >
              <CreditCard className="mr-2 h-4 w-4" />
              Pagar com Cartão
            </Button>
            <Button 
              onClick={() => setPixDialogOpen(true)}
              variant="outline" 
              className="flex-1"
            >
              Pagar via Pix
            </Button>
          </div>
        </CardFooter>
      </Card>

      <Dialog open={pixDialogOpen} onOpenChange={setPixDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Pagamento via Pix</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center space-y-4">
            <div className="border-2 border-gray-200 p-4 rounded-lg">
              {/* QR Code image would go here */}
              <div className="w-48 h-48 bg-gray-100 flex items-center justify-center">
                <p className="text-gray-500">QR Code Pix</p>
              </div>
            </div>
            <div>
              <p className="text-center mb-2">Chave Pix:</p>
              <div className="flex items-center">
                <code className="bg-gray-100 px-3 py-1 rounded mr-2">11122233344</code>
                <Button size="sm" onClick={handleCopyPixKey}>Copiar</Button>
              </div>
            </div>
            <div className="mt-4 bg-yellow-50 p-4 rounded-md text-sm">
              <p className="font-medium text-yellow-800">Importante:</p>
              <p className="text-yellow-700">
                Após realizar o pagamento, envie o comprovante para nosso WhatsApp
                (21) 96713-5336 para confirmação rápida do seu acesso.
              </p>
            </div>
            <Button 
              className="w-full mt-4"
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
