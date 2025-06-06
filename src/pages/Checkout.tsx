
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CheckoutHeader from "@/components/checkout/CheckoutHeader";
import PlanSummary from "@/components/checkout/PlanSummary";
import UserInfoForm from "@/components/checkout/UserInfoForm";
import PaymentMethodSelector from "@/components/checkout/PaymentMethodSelector";
import StripePaymentForm from "@/components/checkout/StripePaymentForm";
import PixPaymentSection from "@/components/checkout/PixPaymentSection";
import CheckoutSidebar from "@/components/checkout/CheckoutSidebar";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { planName, planPrice, planBenefits, planSlug } = location.state || {};

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isLoading, setIsLoading] = useState(false);

  // Redirect to plans if no plan is selected
  if (!planName) {
    navigate("/planos");
    return null;
  }

  const handleStripePayment = async () => {
    if (!name || !email) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Redirect to success page
      navigate("/obrigado", { 
        state: { 
          planName,
          planPrice,
          paymentMethod: "card"
        }
      });
    } catch (error) {
      alert("Erro no pagamento. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePixPayment = () => {
    if (!name || !email) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    // Redirect to success page
    navigate("/obrigado", { 
      state: { 
        planName,
        planPrice,
        paymentMethod: "pix"
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CheckoutHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Checkout Form */}
          <div className="lg:col-span-2">
            <PlanSummary 
              planName={planName}
              planPrice={planPrice}
              planBenefits={planBenefits}
            />
            
            <UserInfoForm 
              name={name}
              email={email}
              onNameChange={setName}
              onEmailChange={setEmail}
            />
            
            <PaymentMethodSelector 
              paymentMethod={paymentMethod}
              onPaymentMethodChange={setPaymentMethod}
            />
            
            {paymentMethod === "card" && (
              <StripePaymentForm 
                onSubmit={handleStripePayment}
                isLoading={isLoading}
              />
            )}
            
            {paymentMethod === "pix" && (
              <PixPaymentSection onPaymentConfirm={handlePixPayment} />
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <CheckoutSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
