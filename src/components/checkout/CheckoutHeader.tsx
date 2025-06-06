
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CheckoutHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Finalizar Compra
        </h1>
        <p className="text-gray-600">
          Complete seus dados para finalizar a assinatura
        </p>
      </div>
      <Button
        variant="outline"
        onClick={() => navigate("/planos")}
        className="flex items-center gap-2"
      >
        <ArrowLeft className="h-4 w-4" />
        Alterar Plano
      </Button>
    </div>
  );
};

export default CheckoutHeader;
