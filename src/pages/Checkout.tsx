
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, CreditCard, Smartphone, Shield, Users, Star, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Checkout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    paymentMethod: "card"
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [showPixPayment, setShowPixPayment] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePaymentMethodChange = (value: string) => {
    setFormData({
      ...formData,
      paymentMethod: value
    });
    setShowPixPayment(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome e e-mail.",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);

    if (formData.paymentMethod === "card") {
      // Redirecionar para Stripe
      window.open("https://buy.stripe.com/6oE4go67w2nIgrC9AM?success_url=" + encodeURIComponent(window.location.origin + "/obrigado"), "_blank");
    } else if (formData.paymentMethod === "pix") {
      // Mostrar PIX na mesma tela
      setShowPixPayment(true);
    }

    setIsProcessing(false);
  };

  const handlePixPaymentComplete = () => {
    navigate('/obrigado');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-white">
      {/* Header simples */}
      <div className="bg-white border-b border-green-100">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="p-2"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-semibold text-gray-800">Checkout Seguro</h1>
          <div className="ml-auto flex items-center gap-2 text-sm text-gray-600">
            <Shield className="h-4 w-4 text-green-600" />
            Ambiente Seguro
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Coluna da esquerda - Formulário */}
          <div className="space-y-6">
            <Card className="border-green-100 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">Finalize sua assinatura</CardTitle>
              </CardHeader>
              <CardContent>
                {!showPixPayment ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Dados pessoais */}
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name">Nome completo *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Seu nome completo"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="mt-1"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">E-mail *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="seu@email.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="mt-1"
                          required
                        />
                      </div>
                    </div>

                    {/* Método de pagamento */}
                    <div className="space-y-4">
                      <Label>Forma de pagamento</Label>
                      <RadioGroup 
                        value={formData.paymentMethod} 
                        onValueChange={handlePaymentMethodChange}
                        className="space-y-3"
                      >
                        <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-green-300 transition-colors">
                          <RadioGroupItem value="card" id="card" />
                          <CreditCard className="h-5 w-5 text-gray-600" />
                          <Label htmlFor="card" className="flex-1 cursor-pointer">
                            Cartão de crédito
                            <span className="block text-sm text-gray-500">Processamento via Stripe</span>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-green-300 transition-colors">
                          <RadioGroupItem value="pix" id="pix" />
                          <Smartphone className="h-5 w-5 text-gray-600" />
                          <Label htmlFor="pix" className="flex-1 cursor-pointer">
                            PIX
                            <span className="block text-sm text-gray-500">Aprovação imediata</span>
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                      disabled={isProcessing}
                    >
                      {isProcessing ? "Processando..." : "Finalizar Pagamento"}
                    </Button>
                  </form>
                ) : (
                  // Tela de pagamento PIX
                  <div className="text-center space-y-6">
                    <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                      <h3 className="text-lg font-semibold text-green-800 mb-4">Pagamento via PIX</h3>
                      <div className="bg-white p-4 rounded-lg inline-block">
                        <img 
                          src="/imagens/Plano Mensal.png" 
                          alt="QR Code PIX" 
                          className="w-48 h-48 mx-auto"
                        />
                      </div>
                      <p className="text-sm text-gray-600 mt-4">
                        Escaneie o QR Code com o app do seu banco ou copie o código PIX
                      </p>
                      <div className="mt-4 p-3 bg-gray-50 rounded border text-xs break-all">
                        00020126650014br.gov.bcb.pix0114547777530001370225WHATSAPPESPECIALISTASDUOP520400005303986540534.995802BR5916GPR ANALISE LTDA6008BRASILIA62070503***63048CF0
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Button
                        onClick={handlePixPaymentComplete}
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3"
                      >
                        Já realizei o pagamento
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setShowPixPayment(false)}
                        className="w-full"
                      >
                        Voltar
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Selos de segurança */}
            <div className="flex items-center justify-center gap-6 py-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield className="h-5 w-5 text-green-600" />
                <span>SSL Seguro</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CreditCard className="h-5 w-5 text-blue-600" />
                <span>Stripe</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Smartphone className="h-5 w-5 text-teal-600" />
                <span>PIX</span>
              </div>
            </div>
          </div>

          {/* Coluna da direita - Resumo e provas sociais */}
          <div className="space-y-6">
            {/* Resumo do plano */}
            <Card className="border-green-100 shadow-lg sticky top-8">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">Resumo do pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-b border-gray-100 pb-4">
                  <h3 className="font-semibold text-lg">Plano Mensal - Duop IA</h3>
                  <p className="text-gray-600 text-sm mt-1">Consultoria de investimentos no WhatsApp</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Acesso completo ao assistente financeiro</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Consultoria personalizada de carteira</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Suporte 24/7 no WhatsApp</span>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Preço original:</span>
                    <span className="line-through text-gray-500">R$ 139,80</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Desconto (50%):</span>
                    <span className="text-red-600">-R$ 69,90</span>
                  </div>
                  <div className="flex justify-between items-center text-lg font-bold border-t border-gray-200 pt-2 mt-2">
                    <span>Total:</span>
                    <span className="text-green-600">R$ 69,90/mês</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Depoimentos */}
            <Card className="border-green-100 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg text-gray-800 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  O que nossos clientes dizem
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 italic">
                    "Mudou completamente como eu invisto. Agora tenho uma segunda opinião sempre disponível."
                  </p>
                  <p className="text-xs text-gray-500 mt-2">- Carlos M., São Paulo</p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 italic">
                    "Praticidade incrível. Tiro dúvidas na hora e recebo análises detalhadas."
                  </p>
                  <p className="text-xs text-gray-500 mt-2">- Ana L., Rio de Janeiro</p>
                </div>
              </CardContent>
            </Card>

            {/* Garantia */}
            <Card className="border-green-100 shadow-lg bg-green-50">
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="font-semibold text-green-800">Garantia de 7 dias</span>
                </div>
                <p className="text-sm text-green-700">
                  Se não ficar satisfeito, cancelamos e devolvemos 100% do valor pago.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
