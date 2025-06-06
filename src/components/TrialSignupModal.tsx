import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { MessageCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface TrialSignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TrialSignupModal = ({ isOpen, onClose }: TrialSignupModalProps) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{ email?: string; phone?: string }>({});
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
    const newErrors: { email?: string; phone?: string } = {};

    if (!email || !email.includes("@")) {
      newErrors.email = "Email válido é obrigatório";
    }

    // Valida se o telefone está no formato completo +55 (XX) XXXXX-XXXX
    const phoneRegex = /^\+55 \(\d{2}\) \d{5}-\d{4}$/;
    if (!phone || !phoneRegex.test(phone)) {
      newErrors.phone = "Telefone deve estar no formato +55 (XX) XXXXX-XXXX";
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
          plan_title: 'Teste Gratuito 7 dias'
        });

      if (error) {
        console.error('Erro ao salvar no Supabase:', error);
        alert('Erro ao processar cadastro. Tente novamente.');
        return;
      }

      console.log("Cadastro realizado e salvo no Supabase:", { email, phone });
      
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
      <DialogContent className="sm:max-w-md">
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
