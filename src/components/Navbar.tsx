
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isStripeLoaded, setIsStripeLoaded] = useState(false);
  const stripeButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if Stripe script is already loaded
    if (!document.querySelector('script[src="https://js.stripe.com/v3/buy-button.js"]')) {
      const script = document.createElement("script");
      script.src = "https://js.stripe.com/v3/buy-button.js";
      script.async = true;
      script.onload = () => setIsStripeLoaded(true);
      document.body.appendChild(script);
    } else {
      setIsStripeLoaded(true);
    }
  }, []);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img 
                src="public/lovable-uploads/54442f75-591b-4301-beb4-3793cae2203e.png" 
                alt="Duop Logo" 
                className="h-10 w-auto"
              />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#services" className="text-gray-600 hover:text-invest-blue px-3 py-2 rounded-md text-sm font-medium">
                Serviços
              </a>
              <a href="#coming-soon" className="text-gray-600 hover:text-invest-blue px-3 py-2 rounded-md text-sm font-medium">
                Em breve
              </a>
              <div className="ml-4 stripe-checkout-container">
                {isStripeLoaded && (
                  <stripe-buy-button
                    buy-button-id="buy_btn_1PH7E1GZeF5XUH08kNV1F6Wm"
                    publishable-key="pk_live_51OiBDyGZeF5XUH08HXRoiEzILdWnQp9SkBQrGhKXAL56KElnAGbCXvfwmCX8pXXZDMfvYctGDVU8HBT4YqhcUCPW00pOx96Qls"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-invest-blue hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <a 
            href="#services" 
            className="text-gray-600 hover:text-invest-blue block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Serviços
          </a>
          <a 
            href="#coming-soon" 
            className="text-gray-600 hover:text-invest-blue block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Em breve
          </a>
          <div className="block px-3 py-2">
            {isStripeLoaded && (
              <stripe-buy-button
                buy-button-id="buy_btn_1PH7E1GZeF5XUH08kNV1F6Wm"
                publishable-key="pk_live_51OiBDyGZeF5XUH08HXRoiEzILdWnQp9SkBQrGhKXAL56KElnAGbCXvfwmCX8pXXZDMfvYctGDVU8HBT4YqhcUCPW00pOx96Qls"
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
