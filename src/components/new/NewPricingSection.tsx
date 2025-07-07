
import PricingCard from "@/components/PricingCard";
import CountdownTimer from "@/components/CountdownTimer";
import { Clock, Users, Zap } from "lucide-react";

const NewPricingSection = () => {
  return (
    <section id="new-pricing" className="py-16 px-4 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-100 text-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full mb-6">
            <Clock className="h-4 w-4 text-red-600" />
            <span className="text-sm font-medium text-red-700">Oferta Exclusiva Limitada</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Escolha o Plano Ideal para Você e Transforme Seus Investimentos!
          </h2>
          
          <p className="text-lg max-w-3xl mb-6 text-gray-600">
            Acesso exclusivo com desconto especial para os primeiros investidores
          </p>
          
          <div className="mb-8">
            <CountdownTimer />
          </div>

          {/* Gatilho de Escassez */}
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-2xl p-6 mb-8 max-w-4xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="h-6 w-6" />
              <h3 className="text-xl font-bold">Acesso Exclusivo: Últimas Oportunidades!</h3>
            </div>
            <p className="text-center leading-relaxed">
              Devido à alta demanda e ao nosso compromisso com um atendimento de excelência, estamos liberando um número limitado de vagas com <strong>50% de desconto</strong>. Esta é a sua chance de ter um consultor de investimentos 24/7 no WhatsApp por um valor imperdível. Não perca esta oportunidade única de investir com mais inteligência e segurança.
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <Users className="h-5 w-5" />
              <span className="text-sm">Apenas para os próximos 100 investidores</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 w-full max-w-5xl">
            <div className="flex justify-center">
              <PricingCard 
                title="Plano Mensal"
                description="Ideal para quem quer testar a consultoria e acompanhar o mercado mês a mês."
                price="R$ 54,99"
                period="/mês"
                discountPercentage="50%"
                discountType="sobre o plano mensal"
                stripeLink="https://buy.stripe.com/6oE4go67w2nIgrC9AM"
                pixCode="00020126440014br.gov.bcb.pix0114547777530001370204DUOP520400005303986540554.995802BR5916GPR ANALISE LTDA6008BRASILIA62170513CLIENTEMENSAL63045711"
                benefits={[
                  "Acesso completo ao assistente financeiro no WhatsApp",
                  "Consultoria personalizada de carteira de investimentos",
                  "Análises diárias do mercado",
                  "Suporte 24/7 sem limitações"
                ]}
              />
            </div>
            <div className="flex justify-center">
              <PricingCard 
                title="Plano Trimestral"
                description="Economize e acompanhe o mercado com continuidade por 3 meses."
                price="R$ 131,99"
                period="/trimestre"
                monthlyEquivalent="Equivalente a R$ 44,00/mês"
                discountPercentage="60%"
                discountType="sobre o plano mensal"
                stripeLink="https://buy.stripe.com/cN2bIQ7bA5zU5MY8wJ"
                isPopular={true}
                pixCode="00020126440014br.gov.bcb.pix0114547777530001370204DUOP5204000053039865406131.995802BR5916GPR ANALISE LTDA6008BRASILIA62210517clientetrimestral630448A2"
                benefits={[
                  "Acesso completo ao assistente financeiro no WhatsApp",
                  "Consultoria personalizada de carteira de investimentos",
                  "Análises diárias do mercado",
                  "Suporte 24/7 sem limitações",
                  "Economia de 20% comparado ao mensal"
                ]}
              />
            </div>
            <div className="flex justify-center">
              <PricingCard 
                title="Plano Semestral"
                description="Para quem quer compromisso de longo prazo e o melhor custo-benefício."
                price="R$ 197,99"
                period="/semestre"
                monthlyEquivalent="Equivalente a R$ 33,00/mês"
                discountPercentage="70%"
                discountType="sobre o plano mensal"
                stripeLink="https://buy.stripe.com/5kA5ksdzY5zU8Za8wK"
                pixCode="00020126440014br.gov.bcb.pix0114547777530001370204DUOP5204000053039865406197.995802BR5916GPR ANALISE LTDA6008BRASILIA62200516clientesemestral6304F36F"
                benefits={[
                  "Acesso completo ao assistente financeiro no WhatsApp",
                  "Consultoria personalizada de carteira de investimentos",
                  "Análises diárias do mercado",
                  "Suporte 24/7 sem limitações",
                  "Máxima economia - 40% de desconto"
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewPricingSection;
