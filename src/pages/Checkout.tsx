import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Testimonials from "@/components/checkout/Testimonials";
import SecurityBadges from "@/components/checkout/SecurityBadges";
import PixPaymentSection from "@/components/checkout/PixPaymentSection";
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
  const [showPixPayment, setShowPixPayment] = useState(false);

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
    setShowPixPayment(false); // Reset PIX display when changing payment method
  };

  const saveCheckoutData = async () => {
    try {
      const { error } = await supabase
        .from('checkout_submissions')
        .insert([
          {
            name,
            email,
            plan_title: planData.title,
            plan_price: planData.price,
            payment_method: paymentMethod
          }
        ]);

      if (error) {
        console.error('Erro ao salvar dados do checkout:', error);
        toast({
          title: "Erro ao salvar dados",
          description: "Ocorreu um erro ao processar suas informações. Tente novamente.",
          variant: "destructive",
        });
        return false;
      }

      console.log('Dados do checkout salvos com sucesso');
      return true;
    } catch (error) {
      console.error('Erro ao salvar dados do checkout:', error);
      toast({
        title: "Erro ao salvar dados",
        description: "Ocorreu um erro ao processar suas informações. Tente novamente.",
        variant: "destructive",
      });
      return false;
    }
  };

  const handleStripeRedirect = async () => {
    if (!email || !name) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha seu nome e e-mail.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Salvar dados no Supabase antes do redirecionamento
    const saved = await saveCheckoutData();
    
    if (!saved) {
      setIsLoading(false);
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

    // Salvar dados no Supabase
    const saved = await saveCheckoutData();
    
    if (!saved) {
      setIsLoading(false);
      return;
    }

    try {
      // Simula um tempo de processamento para mostrar o PIX
      await new Promise(resolve => setTimeout(resolve, 1000));
      setShowPixPayment(true);
      
      // Evento de início de checkout PIX
      if (typeof window.dataLayer !== 'undefined') {
        window.dataLayer.push({
          event: 'InitiateCheckout',
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
        title: "Erro ao processar PIX",
        description: "Ocorreu um erro ao processar o pagamento. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handlePixPaymentConfirm = () => {
          // Redireciona para a página de obrigado com os dados do plano
      navigate("/obrigado", { 
        state: { 
          planName: planData.title,
          planPrice: planData.price,
          paymentMethod: "pix",
          pixCode: planData.pixCode,
          pixQrCodeImage: planData.pixQrCodeImage
        }
      });
    
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
  };

  if (!planData) return null;



  // Se está mostrando a tela de PIX
  if (showPixPayment && paymentMethod === "pix") {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Button
            variant="ghost"
            className="mb-6"
            onClick={() => setShowPixPayment(false)}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>

          <PixPaymentSection
            onPaymentConfirm={handlePixPaymentConfirm}
            pixCode={planData.pixCode || "00020126580014BR.GOV.BCB.PIX013636297118000121"}
            pixQrCodeImage={planData.pixQrCodeImage || "/placeholder.svg"}
          />
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

              <Button
                onClick={paymentMethod === "card" ? handleStripeRedirect : handlePixPayment}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                disabled={isLoading}
              >
                {isLoading ? "Processando..." : "Finalizar Pagamento"}
              </Button>
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
