
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Star, Users } from "lucide-react";

const CheckoutSidebar = () => {
  return (
    <div className="space-y-6">
      {/* Security Badges */}
      <Card>
        <CardContent className="p-4">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
            <Shield className="h-5 w-5 mr-2 text-invest-green" />
            Pagamento Seguro
          </h3>
          <div className="space-y-2">
            <div className="flex items-center text-sm text-gray-600">
              <div className="w-3 h-3 bg-invest-green rounded-full mr-2"></div>
              Criptografia SSL 256-bits
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <div className="w-3 h-3 bg-invest-green rounded-full mr-2"></div>
              Processamento via Stripe
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <div className="w-3 h-3 bg-invest-green rounded-full mr-2"></div>
              PIX instantâneo e seguro
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Testimonials */}
      <Card>
        <CardContent className="p-4">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
            <Star className="h-5 w-5 mr-2 text-yellow-500" />
            O que dizem nossos clientes
          </h3>
          <div className="space-y-3">
            <div className="border-l-2 border-invest-green pl-3">
              <p className="text-sm text-gray-600 italic">
                "Triplicou meus lucros em 3 meses!"
              </p>
              <p className="text-xs text-gray-500 mt-1">- João, empresário</p>
            </div>
            <div className="border-l-2 border-invest-green pl-3">
              <p className="text-sm text-gray-600 italic">
                "Análises incríveis e suporte excelente."
              </p>
              <p className="text-xs text-gray-500 mt-1">- Maria, investidora</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <Card>
        <CardContent className="p-4">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
            <Users className="h-5 w-5 mr-2 text-invest-blue" />
            Junte-se a milhares
          </h3>
          <div className="grid grid-cols-2 gap-3 text-center">
            <div>
              <p className="text-lg font-bold text-invest-green">1.500+</p>
              <p className="text-xs text-gray-600">Clientes ativos</p>
            </div>
            <div>
              <p className="text-lg font-bold text-invest-green">98%</p>
              <p className="text-xs text-gray-600">Satisfação</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CheckoutSidebar;
