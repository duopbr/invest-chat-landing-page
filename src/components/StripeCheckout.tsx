
import { Button } from "@/components/ui/button";

interface StripeCheckoutProps {
  buttonText?: string;
  className?: string;
}

const StripeCheckout = ({ buttonText = "Assinar agora", className = "" }: StripeCheckoutProps) => {
  const handleCheckout = () => {
    // Open Stripe checkout and redirect to /obrigado page after success
    window.open("https://buy.stripe.com/6oE4go67w2nIgrC9AM?success_url=" + encodeURIComponent(window.location.origin + "/obrigado"), "_blank");
  };
  
  return (
    <div className={className}>
      <Button 
        onClick={handleCheckout}
        className="bg-invest-green hover:bg-invest-green/90 text-white font-medium py-3 px-6 rounded-lg text-base"
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default StripeCheckout;
