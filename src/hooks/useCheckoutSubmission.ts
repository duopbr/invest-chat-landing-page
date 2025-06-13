
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const useCheckoutSubmission = () => {
  const { toast } = useToast();

  const saveCheckoutData = async (
    name: string, 
    email: string, 
    phone: string, 
    planTitle: string, 
    planPrice: string, 
    paymentMethod: string
  ) => {
    try {
      const { error } = await supabase
        .from('checkout_submissions')
        .insert([
          {
            name,
            email,
            phone,
            plan_title: planTitle,
            plan_price: planPrice,
            payment_method: paymentMethod
          }
        ]);

      if (error) {
        console.error('Erro ao salvar dados do checkout:', error);
        toast({
          title: "Erro ao salvar dados",
          description: "Ocorreu um erro ao processar suas informações. Tente novamente.",
          variant: "destructive",
        });
        return false;
      }

      console.log('Dados do checkout salvos com sucesso');
      return true;
    } catch (error) {
      console.error('Erro ao salvar dados do checkout:', error);
      toast({
        title: "Erro ao salvar dados",
        description: "Ocorreu um erro ao processar suas informações. Tente novamente.",
        variant: "destructive",
      });
      return false;
    }
  };

  return { saveCheckoutData };
};
