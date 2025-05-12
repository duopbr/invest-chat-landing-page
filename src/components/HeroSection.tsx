
import { Button } from "@/components/ui/button";
import { MessageCircle, Check, Timer } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const HeroSection = () => {
  const [pixDialogOpen, setPixDialogOpen] = useState(false);
  
  const handleStripeCheckout = () => {
    window.open("https://buy.stripe.com/6oE4go67w2nIgrC9AM?success_url=https://duopinvest.duop.com.br/obrigado", "_blank");
  };
  
  const handleCopyPixKey = () => {
    navigator.clipboard.writeText("11122233344");
    alert("Chave Pix copiada!");
  };

  return (
    <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Consultoria de Investimentos no <span className="text-invest-green font-bold">WhatsApp</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              Tire dúvidas, acompanhe mercados e receba análises personalizadas diretamente no WhatsApp.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-100">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="text-invest-green h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Orientação sem viés para investidores</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-invest-green h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Timing de mercado para ajustes de carteira</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-invest-green h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Explicações para as oscilações dos seus ativos</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
              <div className="w-full sm:w-auto">
                <div className="mb-2 bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold inline-flex items-center">
                  <Timer className="h-3 w-3 mr-1" />
                  50% OFF
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 text-sm line-through">R$69,99</span>
                  <div className="flex gap-2">
                    <Button
                      onClick={handleStripeCheckout}
                      className="bg-invest-green hover:bg-invest-green/90 text-white font-medium py-3 px-6 rounded-lg text-base"
                    >
                      Pagar com Cartão
                    </Button>
                    <Button
                      onClick={() => setPixDialogOpen(true)}
                      variant="outline"
                      className="font-medium py-3 px-6 rounded-lg text-base"
                    >
                      Pagar via Pix
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-white px-3 py-1 rounded-full border border-gray-200 text-xs font-medium">
                  Sem fidelidade
                </div>
                <div className="bg-white px-3 py-1 rounded-full border border-gray-200 text-xs font-medium">
                  Cancele quando quiser
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              <span className="font-medium">Oferta por tempo limitado: garanta seu acesso agora!</span> Acesso completo por R$34,99/mês.
            </p>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="rounded-xl shadow-lg overflow-hidden max-w-[320px] mx-auto">
              <div className="relative" style={{ paddingBottom: "177.78%" }}>
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://youtube.com/embed/Ei0y7jhNKzM" 
                  title="Duop Demo" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pix Payment Dialog */}
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
    </section>
  );
};

export default HeroSection;
