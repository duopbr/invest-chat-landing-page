
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import TrialFormFields from "./TrialFormFields";
import TrialSecurityNotice from "./TrialSecurityNotice";
import TrialBenefits from "./TrialBenefits";
import { useTrialForm } from "@/hooks/useTrialForm";

interface TrialSignupFormProps {
  onClose: () => void;
}

const TrialSignupForm = ({ onClose }: TrialSignupFormProps) => {
  const {
    email,
    setEmail,
    phone,
    setPhone,
    patrimonio,
    setPatrimonio,
    valorMensal,
    setValorMensal,
    errors,
    isSubmitting,
    submitForm,
    resetForm
  } = useTrialForm();

  const handleSubmit = async () => {
    const success = await submitForm();
    
    if (success) {
      onClose();
      resetForm();
      
      setTimeout(() => {
        const whatsappMessage = encodeURIComponent(
          `Olá! Me cadastrei para o teste gratuito de 7 dias da consultoria de investimentos.`
        );
        const whatsappUrl = `https://wa.me/5521998883771?text=${whatsappMessage}`;
        
        console.log("Redirecionando para WhatsApp:", whatsappUrl);
        window.open(whatsappUrl, "_blank");
      }, 500);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
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
