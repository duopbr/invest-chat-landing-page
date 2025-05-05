
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Posso cancelar quando quiser?",
      answer: "Sim, você pode cancelar sua assinatura a qualquer momento, diretamente pelo WhatsApp ou pela plataforma de pagamento. Não há taxas de cancelamento ou período mínimo de permanência."
    },
    {
      question: "As análises são diárias?",
      answer: "Sim, você receberá análises diárias sobre o mercado financeiro, incluindo atualizações sobre ações, fundos imobiliários, renda fixa e outros investimentos relevantes para o mercado brasileiro."
    },
    {
      question: "Preciso ter conhecimento prévio em investimentos?",
      answer: "Não, nosso assistente foi projetado para atender tanto investidores iniciantes quanto experientes. Você pode fazer perguntas básicas ou avançadas, de acordo com seu nível de conhecimento."
    },
    {
      question: "O serviço oferece recomendações de investimentos específicos?",
      answer: "Nosso serviço oferece análises e informações educacionais sobre o mercado. Embora possamos discutir classes de ativos e estratégias, não fazemos recomendações diretas de compra ou venda de ativos específicos. Sempre consulte um profissional certificado para decisões finais."
    },
    {
      question: "Como funciona o pagamento?",
      answer: "O pagamento é realizado mensalmente através do Stripe, uma plataforma segura de pagamentos online. Você será cobrado R$34,99 por mês até que decida cancelar sua assinatura."
    },
    {
      question: "Posso fazer perguntas ilimitadas?",
      answer: "Sim, você pode fazer quantas perguntas quiser, 24 horas por dia, 7 dias por semana. Nosso assistente está sempre disponível para ajudar com suas dúvidas sobre investimentos."
    }
  ];

  return (
    <section id="faq" className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-invest-green font-semibold text-sm">PERGUNTAS FREQUENTES</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Respostas para as perguntas mais comuns sobre nosso serviço
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-10 text-center">
          <p className="mb-4 text-gray-600">Ainda tem dúvidas?</p>
          <a 
            href="mailto:contato@investchatai.com" 
            className="text-invest-green font-medium hover:underline"
          >
            Entre em contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
