
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";

interface StripeCheckoutProps {
  buttonText?: string;
  className?: string;
}

declare global {
  interface Window {
    Stripe?: any;
  }
}

const StripeCheckout = ({ buttonText = "Assinar agora", className = "" }: StripeCheckoutProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const checkoutRef = useRef<HTMLDivElement>(null);
  const [showCheckout, setShowCheckout] = useState(false);
  
  useEffect(() => {
    // Load Stripe.js script
    if (!document.querySelector('script[src="https://js.stripe.com/v3/"]')) {
      const script = document.createElement("script");
      script.src = "https://js.stripe.com/v3/";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);
    setShowCheckout(true);
    
    try {
      // Make sure Stripe is loaded
      if (!window.Stripe) {
        throw new Error("Stripe não foi carregado corretamente.");
      }
      
      const stripe = window.Stripe("pk_live_51OiBDyGZeF5XUH08HXRoiEzILdWnQp9SkBQrGhKXAL56KElnAGbCXvfwmCX8pXXZDMfvYctGDVU8HBT4YqhcUCPW00pOx96Qls");
      
      // Call our serverless function to create a checkout session
      const response = await fetch(`${window.location.origin}/.netlify/functions/create-checkout-session`, {
        method: "POST",
      });
      
      if (!response.ok) {
        throw new Error("Falha ao iniciar o checkout.");
      }
      
      const { clientSecret } = await response.json();
      
      if (!clientSecret) {
        throw new Error("Resposta inválida do servidor.");
      }
      
      // Initialize the embedded checkout
      const checkout = await stripe.initEmbeddedCheckout({
        clientSecret,
      });
      
      // Mount the checkout form
      if (checkoutRef.current) {
        checkout.mount(checkoutRef.current);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ocorreu um erro ao processar seu pagamento.");
      setShowCheckout(false);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className={className}>
      {!showCheckout ? (
        <Button 
          onClick={handleCheckout} 
          disabled={loading}
          className="bg-invest-green hover:bg-invest-green/90 text-white font-medium py-3 px-6 rounded-lg text-base"
        >
          {loading ? "Carregando..." : buttonText}
        </Button>
      ) : (
        <div className="w-full">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          <div ref={checkoutRef} className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-1 min-h-[400px]"></div>
        </div>
      )}
    </div>
  );
};

export default StripeCheckout;
