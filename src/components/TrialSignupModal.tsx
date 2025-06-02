
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { MessageCircle } from "lucide-react";

interface TrialSignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TrialSignupModal = ({ isOpen, onClose }: TrialSignupModalProps) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; phone?: string; consent?: string }>({});

  const validateForm = () => {
    const newErrors: { email?: string; phone?: string; consent?: string } = {};

    if (!email || !email.includes("@")) {
      newErrors.email = "Email válido é obrigatório";
    }

    if (!phone || phone.length < 10) {
      newErrors.phone = "Telefone válido é obrigatório";
    }

    if (!consent) {
      newErrors.consent = "É necessário aceitar o consentimento";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Aqui você pode implementar a lógica para salvar os dados
      console.log("Cadastro realizado:", { email, phone, consent });
      
      // Redirecionar para WhatsApp
      const whatsappMessage = encodeURIComponent(
        `Olá! Me cadastrei para o teste gratuito de 7 dias da consultoria de investimentos. Meu email: ${email}`
      );
      const whatsappUrl = `https://wa.me/5511999999999?text=${whatsappMessage}`;
      
      window.open(whatsappUrl, "_blank");
      onClose();
      
      // Reset form
      setEmail("");
      setPhone("");
      setConsent(false);
      setErrors({});
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
        
        <div className="space-y-4 py-4">
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
              placeholder="(11) 99999-9999"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={errors.phone ? "border-red-500" : ""}
            />
            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone}</p>
            )}
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="consent"
              checked={consent}
              onCheckedChange={(checked) => setConsent(checked as boolean)}
              className={errors.consent ? "border-red-500" : ""}
            />
            <div className="grid gap-1.5 leading-none">
              <Label
                htmlFor="consent"
                className="text-sm font-normal leading-relaxed peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Aceito receber comunicações sobre investimentos e ofertas da Duop por email e WhatsApp. *
              </Label>
              {errors.consent && (
                <p className="text-sm text-red-500">{errors.consent}</p>
              )}
            </div>
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
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 rounded-xl"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Enviar e Ir para o WhatsApp
          </Button>

          <p className="text-xs text-gray-500 text-center">
            Ao se cadastrar, você concorda com nossa política de privacidade e termos de uso.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TrialSignupModal;
