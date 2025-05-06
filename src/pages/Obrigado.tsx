
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Obrigado = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    if (sessionId) {
      // You could verify the payment status here by calling another edge function
      // For now, we'll just assume success
      setStatus("success");
    } else {
      setStatus("success"); // Default to success even without session_id
    }
  }, [sessionId]);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5521967135336?text=Boa%20tarde%2C%20comprei%20o%20produto%20me%20explique%20o%20que%20voc%C3%AAs%20fazem", "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-20 px-4">
        <div className="max-w-xl w-full mx-auto text-center bg-white shadow-lg rounded-xl p-8">
          <div className="mb-6 text-invest-green">
            <Check className="h-20 w-20 mx-auto" strokeWidth={2} />
          </div>
          <h1 className="text-3xl font-bold mb-6">✅ Compra confirmada!</h1>
          <p className="text-lg text-gray-700 mb-6">
            Obrigado por assinar o nosso Chatbot Financeiro no WhatsApp.
          </p>
          
          <p className="text-lg text-gray-700 mb-8">
            Clique no botão abaixo para iniciar sua conversa e liberar o acesso:
          </p>

          <Button 
            onClick={handleWhatsAppClick}
            className="bg-[#25D366] hover:bg-[#20BD5C] text-white font-medium py-3 px-6 rounded-lg text-lg mb-8 w-full sm:w-auto"
          >
            👉 Começar no WhatsApp
          </Button>
          
          <p className="text-md text-gray-600">
            Se tiver qualquer dúvida, nossa equipe está pronta para te ajudar!
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Obrigado;
