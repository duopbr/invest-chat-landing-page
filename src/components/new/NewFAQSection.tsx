
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle, HelpCircle } from "lucide-react";

const NewFAQSection = () => {
  const faqs = [
    {
      question: "Posso cancelar quando quiser?",
      answer: "Sim, você pode cancelar sua assinatura a qualquer momento, diretamente pelo WhatsApp ou plataforma de pagamento, sem taxas de cancelamento. Sua tranquilidade é nossa prioridade."
    },
    {
      question: "As análises são realmente diárias?",
      answer: "Sim, você receberá análises diárias personalizadas sobre o mercado financeiro, incluindo ações, fundos imobiliários, renda fixa e outros investimentos. Nossa IA trabalha 24/7 para manter você sempre atualizado."
    },
    {
      question: "Preciso ter conhecimento prévio para usar o serviço?",
      answer: "Não, nosso assistente foi desenvolvido para atender tanto investidores iniciantes quanto experientes. Explicamos tudo de forma simples e clara, adequando a linguagem ao seu nível de conhecimento."
    },
    {
      question: "Vocês oferece recomendações específicas de investimentos?",
      answer: "Oferecemos análises educacionais, insights de mercado e orientações estratégicas. Para recomendações específicas de investimento, sempre sugerimos consultar um profissional certificado, mas fornecemos todas as informações necessárias para suas decisões."
    },
    {
      question: "Como funciona o sistema de pagamento?",
      answer: "O pagamento é processado de forma segura pelo Stripe, uma das plataformas mais confiáveis do mundo. Você pode pagar com cartão de crédito ou PIX, e o valor é cobrado automaticamente conforme o plano escolhido."
    },
    {
      question: "Posso fazer perguntas ilimitadas?",
      answer: "Sim! Pergunte à vontade, quantas vezes quiser, 24 horas por dia, todos os dias da semana. Não há limites para suas dúvidas - nossa missão é te ajudar a investir melhor."
    },
    {
      question: "O que acontece se eu não ficar satisfeito?",
      answer: "Temos confiança na qualidade do nosso serviço, mas se por algum motivo você não ficar satisfeito, pode cancelar a qualquer momento. Nosso objetivo é sua satisfação e sucesso nos investimentos."
    },
    {
      question: "Como posso ter certeza de que as informações são confiáveis?",
      answer: "Nossas análises são baseadas em dados de mercado em tempo real, combinadas com a expertise de nossos fundadores, que possuem décadas de experiência no mercado financeiro. Toda informação passa por rigorosa validação."
    }
  ];

  return (
    <section id="new-faq" className="py-16 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-5 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-5 w-28 h-28 bg-purple-200 rounded-full opacity-15 animate-bounce"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-indigo-300 rounded-full opacity-25 animate-ping"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm">PERGUNTAS FREQUENTES</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-800">
            Esclarecemos Suas Principais Dúvidas
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Respostas diretas e tranquilizadoras para suas preocupações mais comuns
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-100">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border-blue-100 group hover:bg-blue-50/50 transition-all duration-300 rounded-lg px-4"
              >
                <AccordionTrigger className="text-left hover:text-blue-600 transition-all duration-300 font-semibold">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-blue-500" />
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed ml-8 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ainda Tem Dúvidas?</h3>
            <p className="mb-6 text-lg">
              Nossa equipe está pronta para te ajudar! Fale conosco diretamente no WhatsApp.
            </p>
            <a 
              href="https://wa.me/5511999999999?text=Olá!%20Tenho%20algumas%20dúvidas%20sobre%20a%20Duop%20Invest" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="h-6 w-6" />
              Falar no WhatsApp Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewFAQSection;
