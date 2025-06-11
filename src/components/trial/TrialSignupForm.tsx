
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import TrialFormFields from "./TrialFormFields";
import TrialSecurityNotice from "./TrialSecurityNotice";
import TrialBenefits from "./TrialBenefits";

interface TrialSignupFormProps {
  onClose: () => void;
}

const TrialSignupForm = ({ onClose }: TrialSignupFormProps) => {
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
    // Remove all non-digits
    const numbers = value.replace(/\D/g, '');
    
    // Remove country code if it starts with 55
    const cleanNumbers = numbers.startsWith('55') ? numbers.slice(2) : numbers;
    
    if (cleanNumbers.length === 0) return '';
    if (cleanNumbers.length <= 2) return `+55 (${cleanNumbers}`;
    if (cleanNumbers.length <= 7) return `+55 (${cleanNumbers.slice(0, 2)}) ${cleanNumbers.slice(2)}`;
    if (cleanNumbers.length <= 11) return `+55 (${cleanNumbers.slice(0, 2)}) ${cleanNumbers.slice(2, 7)}-${cleanNumbers.slice(7)}`;
    
    // Limit to 11 digits (DDD + 9 digits)
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

    // More flexible phone validation - accept both 10 and 11 digit numbers
    const phoneNumbers = phone.replace(/\D/g, '');
    const cleanPhoneNumbers = phoneNumbers.startsWith('55') ? phoneNumbers.slice(2) : phoneNumbers;
    
    if (!phone) {
      newErrors.phone = "Telefone é obrigatório";
    } else if (cleanPhoneNumbers.length < 10 || cleanPhoneNumbers.length > 11) {
      newErrors.phone = "Telefone deve ter 10 ou 11 dígitos (DDD + número)";
    } else if (cleanPhoneNumbers.length === 10 && !['2', '3', '4', '5'].includes(cleanPhoneNumbers[2])) {
      newErrors.phone = "Para números fixos, o terceiro dígito deve ser 2, 3, 4 ou 5";
    } else if (cleanPhoneNumbers.length === 11 && cleanPhoneNumbers[2] !== '9') {
      newErrors.phone = "Para celulares, o terceiro dígito deve ser 9";
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
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          event: 'lead',
          lead_type: 'trial',
          form_location: 'modal'
        });
      }

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
      
      const whatsappMessage = encodeURIComponent(
        `Olá! Me cadastrei para o teste gratuito de 7 dias da consultoria de investimentos.`
      );
      const whatsappUrl = `https://wa.me/5521967135336?text=${whatsappMessage}`;
      
      window.open(whatsappUrl, "_blank");
      onClose();
      
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
    <form id="trialForm" className="space-y-4 py-4">
      <TrialFormFields
        email={email}
        setEmail={setEmail}
        phone={phone}
        handlePhoneChange={handlePhoneChange}
        patrimonio={patrimonio}
        setPatrimonio={setPatrimonio}
        valorMensal={valorMensal}
        setValorMensal={setValorMensal}
        errors={errors}
      />

      <TrialSecurityNotice />
      <TrialBenefits />

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
  );
};

export default TrialSignupForm;
