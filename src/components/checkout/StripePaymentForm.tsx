
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock } from "lucide-react";
import { useState } from "react";

interface StripePaymentFormProps {
  onSubmit: () => void;
  isLoading: boolean;
}

const StripePaymentForm = ({ onSubmit, isLoading }: StripePaymentFormProps) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Dados do Cartão
        </h3>
        <div className="space-y-4">
          <div>
            <Label htmlFor="cardNumber">Número do Cartão *</Label>
            <Input
              id="cardNumber"
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="1234 5678 9012 3456"
              className="mt-1"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="expiryDate">Data de Validade *</Label>
              <Input
                id="expiryDate"
                type="text"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                placeholder="MM/AA"
                className="mt-1"
                required
              />
            </div>
            <div>
              <Label htmlFor="cvv">CVV *</Label>
              <Input
                id="cvv"
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                placeholder="123"
                className="mt-1"
                required
              />
            </div>
          </div>
          <Button
            onClick={onSubmit}
            disabled={isLoading}
            className="w-full bg-invest-green hover:bg-invest-green/90 text-white font-semibold py-3 text-lg"
          >
            <Lock className="h-5 w-5 mr-2" />
            {isLoading ? "Processando..." : "Finalizar Pagamento"}
          </Button>
          <p className="text-xs text-gray-500 text-center">
            Seus dados são protegidos com criptografia SSL
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default StripePaymentForm;
