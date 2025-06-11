
import { Shield, Lock, CreditCard } from "lucide-react";

const SecurityBadges = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Pagamento 100% Seguro</h3>
      <div className="grid grid-cols-1 gap-3">
        <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-100">
          <Shield className="w-5 h-5 text-green-600" />
          <div>
            <p className="text-sm font-medium text-gray-900">Ambiente Seguro</p>
            <p className="text-xs text-gray-500">Seus dados estão protegidos</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-100">
          <CreditCard className="w-5 h-5 text-green-600" />
          <div>
            <p className="text-sm font-medium text-gray-900">Pagamento via Stripe</p>
            <p className="text-xs text-gray-500">Processamento seguro de cartão</p>
          </div>
        </div>

        <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-100">
          <Lock className="w-5 h-5 text-green-600" />
          <div>
            <p className="text-sm font-medium text-gray-900">Pix Seguro</p>
            <p className="text-xs text-gray-500">Pagamento instantâneo e seguro</p>
          </div>
        </div>
      </div>

      <div className="text-xs text-gray-500 text-center mt-4">
        Precisa de ajuda? <a href="https://wa.me/5521998883771" className="text-green-600 hover:text-green-700">Fale com nosso suporte</a>
      </div>
    </div>
  );
};

export default SecurityBadges;
