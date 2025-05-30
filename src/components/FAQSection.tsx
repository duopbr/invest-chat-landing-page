
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useRef, useState } from "react";

const FAQSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="faq" className="py-16 px-4 bg-gradient-to-br from-green-50 via-emerald-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-5 w-20 h-20 bg-green-200 rounded-full opacity-20 animate-ping"></div>
      <div className="absolute bottom-20 right-5 w-28 h-28 bg-emerald-200 rounded-full opacity-15 animate-pulse delay-500"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-green-300 rounded-full opacity-25 animate-bounce delay-1000"></div>
      
      <div className="max-w-3xl mx-auto relative z-10">
        <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="text-green-600 font-semibold text-sm animate-pulse">DÚVIDAS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 hover:scale-105 transition-transform duration-300">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Respostas para as dúvidas mais comuns
          </p>
        </div>

        <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-2xl transition-all duration-500 hover:scale-105 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border-green-100 group hover:bg-green-50/50 transition-all duration-300 rounded-lg px-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="text-left hover:text-green-600 transition-all duration-300 group-hover:scale-105 group-hover:translate-x-2">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300 ml-4 border-l-2 border-green-200 pl-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className={`mt-10 text-center transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="mb-4 text-gray-700 animate-fade-in">Ainda tem dúvidas?</p>
          <a 
            href="mailto:contato@duop.com" 
            className="text-green-600 font-medium hover:underline hover:scale-110 transition-all duration-300 inline-block hover:text-green-700"
          >
            Entre em contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
