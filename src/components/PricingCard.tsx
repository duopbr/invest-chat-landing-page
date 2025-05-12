
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
  monthlyEquivalent?: string;
  discountPercentage: string;
  discountType: string;
  stripeLink: string;
  isPopular?: boolean;
  pixCode?: string;
  pixQrCodeImage?: string;
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
  pixCode = "00020126650014br.gov.bcb.pix0114547777530001370225WHATSAPPESPECIALISTASDUOP520400005303986540534.995802BR5916GPR ANALISE LTDA6008BRASILIA62070503***63048CF0",
  pixQrCodeImage = "/lovable-uploads/0d74bf51-d9d2-40ea-934d-2baf983cf549.png",
}: PricingCardProps) => {
  const [pixDialogOpen, setPixDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleStripeCheckout = () => {
    window.open(stripeLink, "_blank");
  };

  const handleCopyPixKey = () => {
    navigator.clipboard.writeText(pixCode);
    toast({
      title: "Chave Pix copiada!",
      description: "A chave Pix foi copiada para a área de transferência.",
    });
  };

  return (
    <>
      <Card className={`w-full h-full ${isPopular ? "border-invest-green shadow-lg" : "border-gray-200"}`}>
        {isPopular && (
          <div className="bg-invest-green text-white text-center py-1 text-sm font-medium rounded-t-lg">
            Mais Popular
          </div>
        )}
        <CardHeader className="px-4 py-4 md:px-6 md:py-6">
          <CardTitle className="text-lg md:text-xl">{title}</CardTitle>
          <CardDescription className="text-sm mt-1">{description}</CardDescription>
        </CardHeader>
        <CardContent className="px-4 pt-0 pb-2 md:px-6 md:pb-4">
          <div className="space-y-3 md:space-y-4">
            <div>
              <p className="text-2xl md:text-3xl font-bold">{price}</p>
              {monthlyEquivalent && (
                <p className="text-xs md:text-sm text-gray-500">{monthlyEquivalent}</p>
              )}
              <div className="mt-2 bg-red-100 text-red-600 px-2 py-0.5 rounded-full text-xs font-bold inline-flex items-center">
                <span>{discountPercentage} de desconto sobre {discountType}</span>
              </div>
            </div>
            
            <div className="space-y-1.5 md:space-y-2">
              <div className="flex items-start gap-1.5 md:gap-2">
                <Check className="text-invest-green h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-xs md:text-sm">Acesso completo ao assistente financeiro no WhatsApp</span>
              </div>
              <div className="flex items-start gap-1.5 md:gap-2">
                <Check className="text-invest-green h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-xs md:text-sm">Sem fidelidade</span>
              </div>
              <div className="flex items-start gap-1.5 md:gap-2">
                <Check className="text-invest-green h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-xs md:text-sm">Acesso imediato</span>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2 px-4 py-4 md:px-6 md:py-6">
          <p className="text-xs text-gray-500 mb-1 text-center w-full">Oferta por tempo limitado</p>
          <div className="flex flex-col sm:flex-row gap-2 w-full">
            <Button 
              onClick={handleStripeCheckout}
              variant="default" 
              size="sm"
              className="flex-1 bg-invest-green hover:bg-invest-green/90 text-xs md:text-sm h-8 md:h-10"
            >
              <CreditCard className="mr-1.5 h-3.5 w-3.5" />
              Pagar com Cartão
            </Button>
            <Button 
              onClick={() => setPixDialogOpen(true)}
              variant="outline" 
              size="sm"
              className="flex-1 text-xs md:text-sm h-8 md:h-10"
            >
              Pagar via Pix
            </Button>
          </div>
        </CardFooter>
      </Card>

      <Dialog open={pixDialogOpen} onOpenChange={setPixDialogOpen}>
        <DialogContent className="max-w-md mx-auto">
          <DialogHeader>
            <DialogTitle>Pagamento via Pix</DialogTitle>
            <DialogDescription>Escaneie o QR Code ou copie a chave Pix</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center space-y-4">
            <div className="border-2 border-gray-200 p-2 md:p-4 rounded-lg">
              <img 
                src={pixQrCodeImage} 
                alt="QR Code Pix" 
                className="w-36 h-36 md:w-48 md:h-48 object-contain"
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
            <div className="mt-2 bg-yellow-50 p-3 rounded-md text-xs md:text-sm w-full">
              <p className="font-medium text-yellow-800">Importante:</p>
              <p className="text-yellow-700">
                Após realizar o pagamento, envie o comprovante para nosso WhatsApp
                (21) 96713-5336 para confirmação rápida do seu acesso.
              </p>
            </div>
            <Button 
              className="w-full mt-2 text-xs md:text-sm"
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
