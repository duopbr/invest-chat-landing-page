
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";

const StickyCtaButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Mostra o botão após rolar 50% da primeira tela
      setIsVisible(scrollPosition > windowHeight * 0.5 && !isDismissed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleClick = () => {
    if (typeof window.dataLayer !== 'undefined') {
      window.dataLayer.push({
        event: 'StickyCtaClick',
        ecommerce: {
          currency: 'BRL'
        }
      });
    }
    navigate("/planos");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl border border-green-100 p-4 max-w-sm">
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute -top-2 -right-2 w-6 h-6 bg-gray-400 hover:bg-gray-500 text-white rounded-full flex items-center justify-center transition-colors"
        >
          <X className="h-3 w-3" />
        </button>
        
        <div className="mb-3">
          <div className="text-xs text-red-600 font-bold mb-1">⏰ OFERTA LIMITADA</div>
          <div className="text-sm font-semibold text-gray-800">
            50% OFF por apenas <span className="text-green-600 text-lg">R$54,99/mês</span>
          </div>
        </div>
        
        <Button
          onClick={handleClick}
          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Garantir Desconto
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default StickyCtaButton;
