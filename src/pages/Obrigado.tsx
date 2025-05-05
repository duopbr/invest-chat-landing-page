
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Obrigado = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    if (sessionId) {
      // You could verify the payment status here by calling another edge function
      // For now, we'll just assume success
      setStatus("success");
    }
  }, [sessionId]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 text-invest-green">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold mb-6">Obrigado pela sua compra!</h1>
          <p className="text-xl text-gray-600 mb-8">
            Estamos muito felizes em tê-lo como cliente. Você receberá instruções para acessar seu consultor de investimentos no WhatsApp em breve.
          </p>
          <a href="/" className="bg-invest-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-invest-blue/90 transition-colors">
            Voltar para a página inicial
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Obrigado;
