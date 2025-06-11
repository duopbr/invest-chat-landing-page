
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { MessageCircle, Shield } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface TrialSignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TrialSignupModal = ({ isOpen, onClose }: TrialSignupModalProps) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [patrimonio, setPatrimonio] = useState("");
  const [valorMensal, setValorMensal] = useState("");
  const [errors, setErrors] = useState<{ 
    email?: string; 
    phone?: string; 
    patrimonio?: string; 
    valorMensal?: string; 
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formatPhoneNumber = (value: string) => {
    // Remove tudo que não for número
    const numbers = value.replace(/\D/g, '');
    
    // Se começar com 55, remove para recolocar depois
    const cleanNumbers = numbers.startsWith('55') ? numbers.slice(2) : numbers;
    
    // Aplica a máscara +55 (XX) XXXXX-XXXX
    if (cleanNumbers.length === 0) return '';
    if (cleanNumbers.length <= 2) return `+55 (${cleanNumbers}`;
    if (cleanNumbers.length <= 7) return `+55 (${cleanNumbers.slice(0, 2)}) ${cleanNumbers.slice(2)}`;
    if (cleanNumbers.length <= 11) return `+55 (${cleanNumbers.slice(0, 2)}) ${cleanNumbers.slice(2, 7)}-${cleanNumbers.slice(7)}`;
    
    // Limita a 11 dígitos (2 DDD + 9 número)
    return `+55 (${cleanNumbers.slice(0, 2)}) ${cleanNumbers.slice(2, 7)}-${cleanNumbers.slice(7, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
  };

  const validateForm = () => {
    const newErrors: { 
      email?: string; 
      phone?: string; 
      patrimonio?: string; 
      valorMensal?: string; 
    } = {};

    if (!email || !email.includes("@")) {
      newErrors.email = "Email válido é obrigatório";
    }

    // Valida se o telefone está no formato completo +55 (XX) XXXXX-XXXX
    const phoneRegex = /^\+55 \(\d{2}\) \d{5}-\d{4}$/;
    if (!phone || !phoneRegex.test(phone)) {
      newErrors.phone = "Telefone deve estar no formato +55 (XX) XXXXX-XXXX";
    }

    if (!patrimonio) {
      newErrors.patrimonio = "Patrimônio investido é obrigatório";
    }

    if (!valorMensal) {
      newErrors.valorMensal = "Valor disponível para investir é obrigatório";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      // Disparo do evento GTM
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          event: 'lead',
          lead_type: 'trial',
          form_location: 'modal'
        });
      }

      // Salvar no Supabase
      const { error } = await supabase
        .from('pix_phone_submissions')
        .insert({
          Email: email,
          phone_number: phone,
          plan_title: 'Teste Gratuito 7 dias',
          patrimonio_investido: patrimonio,
          valor_mensal_disponivel: valorMensal
        });

      if (error) {
        console.error('Erro ao salvar no Supabase:', error);
        alert('Erro ao processar cadastro. Tente novamente.');
        return;
      }

      console.log("Cadastro realizado e salvo no Supabase:", { 
        email, 
        phone, 
        patrimonio, 
        valorMensal 
      });
      
      // Redirecionar para WhatsApp
      const whatsappMessage = encodeURIComponent(
        `Olá! Me cadastrei para o teste gratuito de 7 dias da consultoria de investimentos.`
      );
      const whatsappUrl = `https://wa.me/5521967135336?text=${whatsappMessage}`;
      
      window.open(whatsappUrl, "_blank");
      onClose();
      
      // Reset form
      setEmail("");
      setPhone("");
      setPatrimonio("");
      setValorMensal("");
      setErrors({});
    } catch (error) {
      console.error('Erro inesperado:', error);
      alert('Erro inesperado. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold text-gray-800">
            Cadastre-se para o Teste Gratuito
          </DialogTitle>
        </DialogHeader>
        
        <form id="trialForm" className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefone *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+55 (11) 99999-9999"
              value={phone}
              onChange={handlePhoneChange}
              className={errors.phone ? "border-red-500" : ""}
              maxLength={19}
            />
            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="patrimonio">Patrimônio líquido investido *</Label>
            <Select value={patrimonio} onValueChange={setPatrimonio}>
              <SelectTrigger className={errors.patrimonio ? "border-red-500" : ""}>
                <SelectValue placeholder="Selecione..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="até-50mil">Até R$ 50 mil</SelectItem>
                <SelectItem value="50mil-150mil">R$ 50 mil - R$ 150 mil</SelectItem>
                <SelectItem value="150mil-300mil">R$ 150 mil - R$ 300 mil</SelectItem>
                <SelectItem value="300mil-500mil">R$ 300 mil - R$ 500 mil</SelectItem>
                <SelectItem value="500mil-1milhao">R$ 500 mil - R$ 1 milhão</SelectItem>
                <SelectItem value="acima-1milhao">Acima de R$ 1 milhão</SelectItem>
              </SelectContent>
            </Select>
            {errors.patrimonio && (
              <p className="text-sm text-red-500">{errors.patrimonio}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="valorMensal">Valor disponível para investir por mês *</Label>
            <Select value={valorMensal} onValueChange={setValorMensal}>
              <SelectTrigger className={errors.valorMensal ? "border-red-500" : ""}>
                <SelectValue placeholder="Selecione..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="até-100">Até R$ 100</SelectItem>
                <SelectItem value="100-300">R$ 100 - R$ 300</SelectItem>
                <SelectItem value="300-500">R$ 300 - R$ 500</SelectItem>
                <SelectItem value="500-800">R$ 500 - R$ 800</SelectItem>
                <SelectItem value="800-1000">R$ 800 - R$ 1.000</SelectItem>
                <SelectItem value="1000-3000">R$ 1.000 - R$ 3.000</SelectItem>
                <SelectItem value="3000-5000">R$ 3.000 - R$ 5.000</SelectItem>
                <SelectItem value="5000-10000">R$ 5.000 - R$ 10.000</SelectItem>
                <SelectItem value="acima-10000">Acima de R$ 10.000</SelectItem>
              </SelectContent>
            </Select>
            {errors.valorMensal && (
              <p className="text-sm text-red-500">{errors.valorMensal}</p>
            )}
          </div>

          <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="h-4 w-4 text-blue-600" />
              <p className="font-medium text-blue-800 text-sm">Seus dados estão 100% seguros</p>
            </div>
            <p className="text-xs text-blue-700">
              • Utilizamos criptografia avançada<br/>
              • Não compartilhamos com terceiros<br/>
              • Conformidade com LGPD<br/>
              • Dados usados apenas para consultoria personalizada
            </p>
          </div>

          <div className="bg-green-50 p-3 rounded-lg text-sm text-green-700">
            <p className="font-medium">✅ O que você receberá:</p>
            <ul className="mt-1 space-y-1 text-xs">
              <li>• 7 dias de acesso completo</li>
              <li>• Consultoria no WhatsApp</li>
              <li>• Análises personalizadas</li>
              <li>• Sem cobrança no teste</li>
            </ul>
          </div>

          <Button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 rounded-xl"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            {isSubmitting ? "Processando..." : "Enviar e Ir para o WhatsApp"}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            Aceito receber comunicações sobre investimentos e ofertas da Duop. Ao se cadastrar, você concorda com nossa política de privacidade e termos de uso.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TrialSignupModal;
