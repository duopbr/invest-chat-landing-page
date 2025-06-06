import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";
import Testimonials from "@/components/checkout/Testimonials";
import SecurityBadges from "@/components/checkout/SecurityBadges";
import { Check, ArrowLeft } from "lucide-react";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

if (typeof window !== 'undefined') {
  window.dataLayer = window.dataLayer || [];
}

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [planData, setPlanData] = useState<any>(null);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "pix">("card");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const state = location.state;
    if (!state || !state.planData) {
      navigate("/");
      return;
    }
    setPlanData(state.planData);
  }, [location, navigate]);

  const handlePaymentMethodChange = (value: string) => {
    setPaymentMethod(value as "card" | "pix");
  };

  const handleStripeRedirect = () => {
    if (!email || !name) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha seu nome e e-mail.",
        variant: "destructive",
      });
      return;
    }

    // Evento de início de checkout
    if (typeof window.dataLayer !== 'undefined') {
      window.dataLayer.push({
        event: 'InitiateCheckout',
        value: planData.price,
        currency: 'BRL',
        payment_type: 'card',
        ecommerce: {
          currency: 'BRL',
          value: planData.price,
          items: [{
            item_name: planData.title,
            item_category: 'Plano de Assinatura',
            price: planData.price,
            quantity: 1
          }]
        }
      });
    }

    // Redireciona para o link do Stripe
    window.location.href = planData.stripeLink;
  };

  const handlePixPayment = async () => {
    if (!email || !name) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha seu nome e e-mail.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      // Simula um tempo de processamento
      await new Promise(resolve => setTimeout(resolve, 2000));
      setShowSuccess(true);
      
      // Evento de compra concluída
      if (typeof window.dataLayer !== 'undefined') {
        window.dataLayer.push({
          event: 'Purchase',
          value: planData.price,
          currency: 'BRL',
          payment_type: 'pix',
          ecommerce: {
            currency: 'BRL',
            value: planData.price,
            items: [{
              item_name: planData.title,
              item_category: 'Plano de Assinatura',
              price: planData.price,
              quantity: 1
            }]
          }
        });
      }
    } catch (error) {
      toast({
        title: "Erro ao gerar PIX",
        description: "Ocorreu um erro ao gerar o QR Code. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!planData) return null;

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <Check className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Pagamento Confirmado!</h2>
              <p className="text-gray-600 mb-4">
                Obrigado por assinar o {planData.title}. Você receberá um e-mail com as instruções de acesso.
              </p>
              <Button onClick={() => navigate("/")} className="w-full">
                Voltar para a página inicial
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Resumo do Plano</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-bold text-gray-900">{planData.title}</h3>
                <p className="text-2xl font-bold text-green-600 mt-2">R$ {planData.price}</p>
                <p className="text-sm text-gray-500 mb-4">{planData.period}</p>
                <ul className="space-y-2">
                  {planData.benefits.map((benefit: string, index: number) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <Check className="h-4 w-4 text-green-600 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <div>
                <Label htmlFor="name">Nome completo</Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Digite seu nome completo"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Digite seu e-mail"
                  className="mt-1"
                />
              </div>

              <div>
                <Label>Forma de pagamento</Label>
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={handlePaymentMethodChange}
                  className="mt-2 space-y-2"
                >
                  <div className="flex items-center space-x-2 p-3 rounded-lg border border-gray-200">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex-grow cursor-pointer">Cartão de crédito</Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 rounded-lg border border-gray-200">
                    <RadioGroupItem value="pix" id="pix" />
                    <Label htmlFor="pix" className="flex-grow cursor-pointer">PIX</Label>
                  </div>
                </RadioGroup>
              </div>

              {paymentMethod === "card" ? (
                <Button
                  onClick={handleStripeRedirect}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Finalizar compra
                </Button>
              ) : (
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <img
                      src={planData.pixQrCodeImage}
                      alt="QR Code PIX"
                      className="mx-auto w-48 h-48"
                    />
                    <p className="text-center text-sm text-gray-600 mt-2">
                      Escaneie o QR Code ou copie a chave PIX
                    </p>
                    <div className="mt-4">
                      <Input
                        value={planData.pixCode}
                        readOnly
                        className="text-center"
                      />
                      <Button
                        onClick={() => {
                          navigator.clipboard.writeText(planData.pixCode);
                          toast({
                            title: "Chave PIX copiada!",
                            description: "A chave foi copiada para a área de transferência.",
                          });
                        }}
                        variant="outline"
                        className="w-full mt-2"
                      >
                        Copiar chave PIX
                      </Button>
                    </div>
                  </div>
                  <Button
                    onClick={handlePixPayment}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    disabled={isLoading}
                  >
                    {isLoading ? "Processando..." : "Já realizei o pagamento"}
                  </Button>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-8">
            <Testimonials />
            <SecurityBadges />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
