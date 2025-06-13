
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface FormErrors {
  email?: string;
  phone?: string;
  patrimonio?: string;
  valorMensal?: string;
}

export const useTrialForm = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [patrimonio, setPatrimonio] = useState("");
  const [valorMensal, setValorMensal] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    const cleanNumbers = numbers.startsWith('55') ? numbers.slice(2) : numbers;
    
    if (cleanNumbers.length === 0) return '';
    if (cleanNumbers.length <= 2) return `+55 (${cleanNumbers}`;
    if (cleanNumbers.length <= 7) return `+55 (${cleanNumbers.slice(0, 2)}) ${cleanNumbers.slice(2)}`;
    if (cleanNumbers.length <= 11) return `+55 (${cleanNumbers.slice(0, 2)}) ${cleanNumbers.slice(2, 7)}-${cleanNumbers.slice(7)}`;
    
    return `+55 (${cleanNumbers.slice(0, 2)}) ${cleanNumbers.slice(2, 7)}-${cleanNumbers.slice(7, 11)}`;
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!email || !email.includes("@")) {
      newErrors.email = "Email válido é obrigatório";
    }

    const phoneNumbers = phone.replace(/\D/g, '');
    const cleanPhoneNumbers = phoneNumbers.startsWith('55') ? phoneNumbers.slice(2) : phoneNumbers;
    
    if (!phone) {
      newErrors.phone = "Telefone é obrigatório";
    } else if (cleanPhoneNumbers.length !== 11) {
      newErrors.phone = "Telefone deve ter 11 dígitos (DDD + 9 dígitos do celular)";
    } else if (cleanPhoneNumbers[2] !== '9') {
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

  const submitForm = async () => {
    if (!validateForm()) return false;

    setIsSubmitting(true);
    
    try {
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          event: 'lead',
          lead_type: 'trial',
          form_location: 'modal',
          user_data: {
            em: email,
            ph: phone
          }
        });
      }

      const { error } = await supabase
        .from('pix_phone_submissions')
        .insert({
          Email: email,
          phone_number: phone,
          plan_title: 'Teste Gratuito 7 dias',
          Patrimonio: patrimonio,
          'Investir Mês': valorMensal
        });

      if (error) {
        console.error('Erro ao salvar no Supabase:', error);
        alert('Erro ao processar cadastro. Tente novamente.');
        return false;
      }

      console.log("Cadastro realizado com sucesso:", { 
        email, 
        phone, 
        patrimonio, 
        valorMensal 
      });

      return true;
    } catch (error) {
      console.error('Erro inesperado:', error);
      alert('Erro inesperado. Tente novamente.');
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setEmail("");
    setPhone("");
    setPatrimonio("");
    setValorMensal("");
    setErrors({});
  };

  return {
    email,
    setEmail,
    phone,
    setPhone: (value: string) => setPhone(formatPhoneNumber(value)),
    patrimonio,
    setPatrimonio,
    valorMensal,
    setValorMensal,
    errors,
    isSubmitting,
    validateForm,
    submitForm,
    resetForm,
    formatPhoneNumber
  };
};
