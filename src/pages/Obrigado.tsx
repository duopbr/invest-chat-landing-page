import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, MessageCircle, HeadphonesIcon, ArrowRight } from "lucide-react";

const Obrigado = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [status, setStatus] = useState("loading");
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (sessionId) {
      setStatus("success");
    } else {
      setStatus("success");
    }
    // Mostrar animação após um pequeno delay
    setTimeout(() => setShowAnimation(true), 500);
  }, [sessionId]);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5521967135336?text=Boa%20tarde%2C%20comprei%20o%20produto%20me%20explique%20o%20que%20voc%C3%AAs%20fazem", "_blank");
  };

  const handleSupportClick = () => {
    window.open("https://wa.me/5521967135336?text=Preciso%20de%20ajuda%20com%20meu%20pagamento", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full mx-auto">
        <Card className="shadow-2xl border-green-100 overflow-hidden">
          <CardContent className="p-8 text-center">
            {/* Animação de sucesso */}
            <div className={`mb-8 transform transition-all duration-1000 ${showAnimation ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
              <div className="relative">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <Check className="h-12 w-12 text-green-600 animate-bounce" strokeWidth={3} />
                </div>
                <div className="absolute inset-0 w-24 h-24 bg-green-200 rounded-full mx-auto animate-ping opacity-20"></div>
              </div>
            </div>

            {/* Título principal */}
            <h1 className={`text-3xl md:text-4xl font-bold mb-4 text-gray-800 transform transition-all duration-1000 delay-300 ${showAnimation ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              ✅ Pagamento Confirmado!
            </h1>

            {/* Subtítulo */}
            <p className={`text-lg text-gray-600 mb-8 transform transition-all duration-1000 delay-500 ${showAnimation ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Parabéns! Sua assinatura foi ativada com sucesso.
            </p>

            {/* Card de próximos passos */}
            <div className={`bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200 mb-8 transform transition-all duration-1000 delay-700 ${showAnimation ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-xl font-semibold text-green-800 mb-4 flex items-center justify-center gap-2">
                <ArrowRight className="h-5 w-5" />
                Próximos Passos
              </h2>
              <div className="space-y-3 text-left">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">1</div>
                  <div>
                    <p className="font-medium text-gray-800">Acesse o WhatsApp</p>
                    <p className="text-sm text-gray-600">Clique no botão abaixo para iniciar sua conversa</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</div>
                  <div>
                    <p className="font-medium text-gray-800">Libere seu acesso</p>
                    <p className="text-sm text-gray-600">Nossa equipe ativará sua conta imediatamente</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</div>
                  <div>
                    <p className="font-medium text-gray-800">Comece a investir melhor</p>
                    <p className="text-sm text-gray-600">Tire dúvidas e receba análises personalizadas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Botões de ação */}
            <div className={`space-y-4 transform transition-all duration-1000 delay-1000 ${showAnimation ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex justify-center mt-8">
                <Button
                  onClick={handleWhatsAppClick}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Começar no WhatsApp
                </Button>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  variant="outline"
                  onClick={handleSupportClick}
                  className="text-gray-600 border-gray-300 hover:bg-gray-50 flex items-center gap-2"
                >
                  <HeadphonesIcon className="h-4 w-4" />
                  Preciso de ajuda
                </Button>
              </div>
            </div>

            {/* Informação adicional */}
            <div className={`mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200 transform transition-all duration-1000 delay-1200 ${showAnimation ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <p className="text-sm text-blue-800">
                <strong>💡 Dica:</strong> Salve nosso número para ter acesso rápido às análises e consultoria sempre que precisar!
              </p>
            </div>

            {/* Garantia */}
            <div className={`mt-6 text-center transform transition-all duration-1000 delay-1400 ${showAnimation ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <p className="text-sm text-gray-500">
                🛡️ <strong>Garantia de 7 dias:</strong> Não ficou satisfeito? Devolvemos 100% do seu dinheiro.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Obrigado;
