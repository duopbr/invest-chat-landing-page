
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
      answer: "O pagamento mensal de R$54,99 é feito pelo Stripe, uma plataforma segura, até que você decida cancelar."
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
            href="https://wa.me/5511999999999?text=Olá!%20Tenho%20algumas%20dúvidas%20sobre%20a%20Duop%20Invest" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
