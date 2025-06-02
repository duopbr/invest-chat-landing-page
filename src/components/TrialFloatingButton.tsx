
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface TrialFloatingButtonProps {
  onTrialClick: () => void;
}

const TrialFloatingButton = ({ onTrialClick }: TrialFloatingButtonProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className={`fixed bottom-20 left-6 z-50 transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
      <Button 
        onClick={onTrialClick}
        className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse"
        aria-label="Teste Gratuito"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-300">
        Teste Gratuito
      </div>
    </div>
  );
};

export default TrialFloatingButton;
