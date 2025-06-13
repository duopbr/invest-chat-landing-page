import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Testimonials from "@/components/checkout/Testimonials";
import SecurityBadges from "@/components/checkout/SecurityBadges";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import PixPaymentDisplay from "@/components/checkout/PixPaymentDisplay";
import { useCheckoutSubmission } from "@/hooks/useCheckoutSubmission";
import { trackCheckoutInitiation, trackPurchaseComplete } from "@/utils/dataLayerUtils";
import { ArrowLeft } from "lucide-react";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { saveCheckoutData } = useCheckoutSubmission();
  const [planData, setPlanData] = useState<any>(null);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "pix">("card");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
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
    setShowPixPayment(false);
  };

  const validateForm = () => {
    if (!email || !name || !phone) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha seu nome, e-mail e telefone.",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  const handleStripeRedirect = async () => {
    if (!validateForm()) return;

    setIsLoading(true);

    const saved = await saveCheckoutData(name, email, phone, planData.title, planData.price, paymentMethod);
    
    if (!saved) {
      setIsLoading(false);
      return;
    }

    trackCheckoutInitiation(planData, email, phone, 'card');
    window.open(planData.stripeLink, '_blank');
    setIsLoading(false);
  };

  const handlePixPayment = async () => {
    if (!validateForm()) return;

    setIsLoading(true);

    const saved = await saveCheckoutData(name, email, phone, planData.title, planData.price, paymentMethod);
    
    if (!saved) {
      setIsLoading(false);
      return;
    }

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setShowPixPayment(true);
      trackCheckoutInitiation(planData, email, phone, 'pix');
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
    navigate("/obrigado", { 
      state: { 
        planName: planData.title,
        planPrice: planData.price,
        paymentMethod: "pix",
        pixCode: planData.pixCode,
        pixQrCodeImage: planData.pixQrCodeImage
      }
    });
    
    trackPurchaseComplete(planData, 'pix');
  };

  if (!planData) return null;

  if (showPixPayment && paymentMethod === "pix") {
    return <PixPaymentDisplay planData={planData} onBack={() => setShowPixPayment(false)} />;
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
            <CheckoutForm
              planData={planData}
              email={email}
              setEmail={setEmail}
              name={name}
              setName={setName}
              phone={phone}
              setPhone={setPhone}
              paymentMethod={paymentMethod}
              setPaymentMethod={handlePaymentMethodChange}
              isLoading={isLoading}
              onSubmit={paymentMethod === "card" ? handleStripeRedirect : handlePixPayment}
            />
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
