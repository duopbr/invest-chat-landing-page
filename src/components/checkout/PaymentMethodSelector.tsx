
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { CreditCard, Smartphone } from "lucide-react";

interface PaymentMethodSelectorProps {
  paymentMethod: string;
  onPaymentMethodChange: (method: string) => void;
}

const PaymentMethodSelector = ({ paymentMethod, onPaymentMethodChange }: PaymentMethodSelectorProps) => {
  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Forma de Pagamento
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div 
            className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
              paymentMethod === 'card' 
                ? 'border-invest-green bg-invest-green/5' 
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => onPaymentMethodChange('card')}
          >
            <div className="flex items-center space-x-3">
              <input
                type="radio"
                id="card"
                name="paymentMethod"
                value="card"
                checked={paymentMethod === 'card'}
                onChange={(e) => onPaymentMethodChange(e.target.value)}
                className="text-invest-green"
              />
              <CreditCard className="h-5 w-5 text-gray-600" />
              <Label htmlFor="card" className="cursor-pointer">
                Cartão de Crédito
              </Label>
            </div>
            <p className="text-sm text-gray-500 mt-2 ml-8">
              Pagamento seguro via Stripe
            </p>
          </div>

          <div 
            className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
              paymentMethod === 'pix' 
                ? 'border-invest-green bg-invest-green/5' 
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => onPaymentMethodChange('pix')}
          >
            <div className="flex items-center space-x-3">
              <input
                type="radio"
                id="pix"
                name="paymentMethod"
                value="pix"
                checked={paymentMethod === 'pix'}
                onChange={(e) => onPaymentMethodChange(e.target.value)}
                className="text-invest-green"
              />
              <Smartphone className="h-5 w-5 text-gray-600" />
              <Label htmlFor="pix" className="cursor-pointer">
                PIX
              </Label>
            </div>
            <p className="text-sm text-gray-500 mt-2 ml-8">
              Aprovação instantânea
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentMethodSelector;
