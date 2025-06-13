
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface PixPaymentDisplayProps {
  planData: any;
  onBack: () => void;
}

const PixPaymentDisplay = ({ planData, onBack }: PixPaymentDisplayProps) => {
  const { toast } = useToast();

  const handleCopyPixCode = () => {
    navigator.clipboard.writeText(planData.pixCode);
    toast({
      title: "Chave PIX copiada!",
      description: "A chave foi copiada para a área de transferência.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={onBack}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar
        </Button>

        <div className="bg-gray-50 p-4 rounded-lg">
          {planData.pixQrCodeImage && (
            <img
              src={planData.pixQrCodeImage}
              alt={`QR Code PIX para ${planData.title}`}
              className="mx-auto w-48 h-48 object-contain"
            />
          )}
          <p className="text-center text-sm text-gray-600 mt-2">
            Escaneie o QR Code ou copie a chave PIX
          </p>
          <div className="mt-4">
            <Input
              value={planData.pixCode}
              readOnly
              className="text-center text-sm font-mono bg-white"
            />
            <Button
              onClick={handleCopyPixCode}
              variant="outline"
              className="w-full mt-2"
            >
              Copiar chave PIX
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PixPaymentDisplay;
