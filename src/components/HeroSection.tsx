
import { Button } from "@/components/ui/button";
import { MessageCircle, Check, Timer, Sparkles } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  
  const handleStripeCheckout = () => {
    window.open("https://buy.stripe.com/6oE4go67w2nIgrC9AM?success_url=https://duopinvest.duop.com.br/obrigado", "_blank");
  };
  
  const handleCopyPixKey = () => {
    navigator.clipboard.writeText("11122233344");
    alert("Chave Pix copiada!");
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 pt-28 pb-12 md:pt-32 md:pb-16 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200 rounded-full opacity-20 blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-300 rounded-full opacity-15 blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-emerald-100 rounded-full opacity-30 blur-lg animate-bounce-subtle"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm">
              <Sparkles className="h-4 w-4" />
              Inteligência Artificial para Investimentos
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Investir sem{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 bg-clip-text text-transparent font-extrabold">
                Complicação
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl font-medium">
              Tire dúvidas, acompanhe o mercado e receba análises com IA — tudo no WhatsApp.
            </p>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl mb-8 border border-emerald-100 shadow-lg">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-emerald-100 p-1 rounded-full">
                    <Check className="text-emerald-600 h-4 w-4" />
                  </div>
                  <span className="text-gray-700 font-medium">Segunda opinião de especialistas consolidados</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-emerald-100 p-1 rounded-full">
                    <Check className="text-emerald-600 h-4 w-4" />
                  </div>
                  <span className="text-gray-700 font-medium">Análises e insights sobre seus investimentos</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-emerald-100 p-1 rounded-full">
                    <Check className="text-emerald-600 h-4 w-4" />
                  </div>
                  <span className="text-gray-700 font-medium">Esclarecimento de dúvidas financeiras</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
              <div className="w-full sm:w-auto">
                <div className="mb-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold inline-flex items-center shadow-lg">
                  <Timer className="h-4 w-4 mr-2" />
                  50% OFF - Oferta Limitada
                </div>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-gray-500 text-lg">
                    de <span className="line-through">R$139,80</span>
                  </span>
                  <span className="text-emerald-600 font-bold text-2xl">
                    por R$69,90
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={handleStripeCheckout}
                    className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Pagar com Cartão
                  </Button>
                  <Button
                    onClick={() => navigate('/planos', { state: { preferredPayment: 'pix' } })}
                    className="bg-white text-emerald-700 hover:bg-emerald-50 border-2 border-emerald-600 font-semibold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Pagar via Pix
                  </Button>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 bg-white/60 p-3 rounded-lg border border-emerald-100">
              <span className="font-semibold text-emerald-700">🔥 Oferta por tempo limitado:</span> garanta seu acesso agora! Acesso completo por R$69,90/mês.
            </p>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div className="relative">
              <div className="rounded-2xl shadow-2xl overflow-hidden max-w-[320px] mx-auto relative z-10 bg-white p-2">
                <div className="relative" style={{ paddingBottom: "177.78%" }}>
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                    src="https://youtube.com/embed/Ei0y7jhNKzM" 
                    title="Duop Demo" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
