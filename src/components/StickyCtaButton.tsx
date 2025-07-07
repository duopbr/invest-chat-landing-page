import { useState, useEffect } from "react";
import { ModernButton } from "@/components/ui/modern-button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, X, Sparkles } from "lucide-react";

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
      <div className="group relative bg-white/95 backdrop-blur-md rounded-3xl shadow-strong border border-green-100/50 p-5 max-w-sm hover:shadow-xl transition-all duration-500 hover:scale-105">
        {/* Gradient border effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute -top-3 -right-3 w-8 h-8 bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 rounded-full flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110"
        >
          <X className="h-4 w-4" />
        </button>
        
        <div className="relative mb-4">
          <div className="flex items-center gap-2 text-red-600 font-bold mb-2">
            <Sparkles className="h-4 w-4 animate-pulse" />
            <span className="text-sm">OFERTA LIMITADA</span>
          </div>
          <div className="text-sm font-semibold text-gray-800 leading-relaxed">
            50% OFF por apenas{" "}
            <span className="text-green-600 text-lg font-bold bg-green-50 px-2 py-1 rounded-lg">
              R$54,99/mês
            </span>
          </div>
        </div>
        
        <ModernButton
          onClick={handleClick}
          className="w-full group/btn"
          size="default"
        >
          <span>Garantir Desconto</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </ModernButton>
      </div>
    </div>
  );
};

export default StickyCtaButton;
