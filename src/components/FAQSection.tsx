
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
      answer: "Sim, você pode cancelar sua assinatura a qualquer momento, diretamente pelo WhatsApp ou plataforma de pagamento, sem taxas de cancelamento."
    },
    {
      question: "As análises são diárias?",
      answer: "Sim, você receberá análises diárias sobre o mercado financeiro, incluindo ações, fundos imobiliários, renda fixa e outros investimentos."
    },
    {
      question: "Preciso ter conhecimento prévio?",
      answer: "Não, nosso assistente atende tanto investidores iniciantes quanto experientes com explicações adequadas ao seu nível."
    },
    {
      question: "Oferece recomendações específicas?",
      answer: "Oferecemos análises e informações educacionais. Para decisões finais, consulte um profissional certificado."
    },
    {
      question: "Como funciona o pagamento?",
      answer: "O pagamento mensal de R$34,99 é feito pelo Stripe, uma plataforma segura, até que você decida cancelar."
    },
    {
      question: "Posso fazer perguntas ilimitadas?",
      answer: "Sim, pergunte à vontade, 24 horas por dia, todos os dias da semana."
    }
  ];

  return (
    <section id="faq" className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-invest-green font-semibold text-sm">DÚVIDAS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Respostas para as dúvidas mais comuns
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
            href="mailto:contato@duop.com" 
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
