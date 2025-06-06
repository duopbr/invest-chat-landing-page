
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

interface PixPaymentSectionProps {
  onPaymentConfirm: () => void;
}

const PixPaymentSection = ({ onPaymentConfirm }: PixPaymentSectionProps) => {
  const [copied, setCopied] = useState(false);
  const pixCode = "00020126580014BR.GOV.BCB.PIX01364d4e22e8-4d45-4a9f-a8e7-123456789abc520400005303986540529.906204teste";

  const copyPixCode = () => {
    navigator.clipboard.writeText(pixCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Pagamento via PIX
        </h3>
        
        <div className="text-center mb-6">
          <div className="inline-block p-4 bg-white border-2 border-gray-200 rounded-lg">
            <div className="w-48 h-48 bg-gray-100 flex items-center justify-center rounded">
              <span className="text-gray-500">QR Code PIX</span>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <Label className="text-sm font-medium text-gray-700">
            Ou copie o código PIX:
          </Label>
          <div className="mt-2 flex">
            <Input
              value={pixCode}
              readOnly
              className="font-mono text-xs"
            />
            <Button
              onClick={copyPixCode}
              variant="outline"
              className="ml-2 flex-shrink-0"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h4 className="font-medium text-blue-800 mb-2">Como pagar:</h4>
          <ol className="text-sm text-blue-700 space-y-1">
            <li>1. Abra o app do seu banco</li>
            <li>2. Escaneie o QR Code ou cole o código PIX</li>
            <li>3. Confirme o pagamento</li>
            <li>4. Clique em "Já Paguei" abaixo</li>
          </ol>
        </div>

        <Button
          onClick={onPaymentConfirm}
          className="w-full bg-invest-green hover:bg-invest-green/90 text-white font-semibold py-3 text-lg"
        >
          Já Paguei
        </Button>

        <p className="text-xs text-gray-500 text-center mt-4">
          O pagamento será confirmado automaticamente em alguns minutos
        </p>
      </CardContent>
    </Card>
  );
};

export default PixPaymentSection;
