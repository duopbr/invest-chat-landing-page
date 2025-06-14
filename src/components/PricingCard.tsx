import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { slugify, extractNumericPrice } from "@/utils/priceUtils";
import PricingDisplay from "./pricing/PricingDisplay";
import BenefitsList from "./pricing/BenefitsList";
import PopularBadge from "./pricing/PopularBadge";
import { useNavigate } from "react-router-dom";

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  period: string;
  monthlyEquivalent?: string;
  discountPercentage: string;
  discountType: string;
  stripeLink: string;
  isPopular?: boolean;
  benefits: string[];
  pixCode?: string;
}

const PricingCard = ({
  title,
  description,
  price,
  period,
  monthlyEquivalent,
  discountPercentage,
  discountType,
  stripeLink,
  isPopular = false,
  benefits,
}: PricingCardProps) => {
  const navigate = useNavigate();

  const handlePlanSelect = () => {
    // Determina qual imagem e código PIX usar baseado no título do plano
    let qrCodeImage = '';
    let pixCodeValue = '';

    if (title.toLowerCase().includes('mensal')) {
      qrCodeImage = '/imagens/Plano Mensal.png';
      pixCodeValue = '00020126650014br.gov.bcb.pix0114547777530001370225WHATSAPPESPECIALISTASDUOP520400005303986540534.995802BR5916GPR ANALISE LTDA6008BRASILIA62070503***63048CF0';
    } else if (title.toLowerCase().includes('trimestral')) {
      qrCodeImage = '/imagens/Plano Trimestral.png';
      pixCodeValue = '00020126680014br.gov.bcb.pix0114547777530001370228WHATSAPP ESPECIALISTAS DUOP 520400005303986540594.995802BR5916GPR ANALISE LTDA6008BRASILIA62070503***6304C79D';
    } else if (title.toLowerCase().includes('semestral')) {
      qrCodeImage = '/imagens/Plano Semestral.png';
      pixCodeValue = '00020126680014br.gov.bcb.pix0114547777530001370228WHATSAPP ESPECIALISTAS DUOP 5204000053039865406167.995802BR5916GPR ANALISE LTDA6008BRASILIA62070503***6304C3F2';
    }

    const planData = {
      title,
      price,
      period,
      monthlyEquivalent,
      discountPercentage,
      discountType,
      stripeLink,
      benefits,
      pixCode: pixCodeValue,
      pixQrCodeImage: qrCodeImage
    };

    // Evento de seleção do plano
    if (typeof window.dataLayer !== 'undefined') {
      window.dataLayer.push({
        event: 'SelectPlan',
        value: extractNumericPrice(price),
        currency: 'BRL',
        ecommerce: {
          currency: 'BRL',
          value: extractNumericPrice(price),
          items: [{
            item_name: title,
            item_category: 'Plano de Assinatura',
            price: extractNumericPrice(price),
            quantity: 1
          }]
        }
      });
    }

    navigate("/checkout", { state: { planData } });
  };

  return (
    <Card className={`w-full h-full overflow-hidden border ${isPopular ? "border-invest-green" : "border-gray-200"} max-w-[350px] mx-auto`}>
      {isPopular && <PopularBadge />}
      <div className={`flex flex-col ${isPopular ? "border-t-0" : ""}`}>
        <CardHeader className="px-6 py-6 text-center">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <PricingDisplay
            price={price}
            period={period}
            monthlyEquivalent={monthlyEquivalent}
            discountPercentage={discountPercentage}
            discountType={discountType}
          />
        </CardHeader>

        <CardContent className="px-6 py-0 flex-grow">
          <p className="text-gray-600 mb-4 text-center">{description}</p>
          <BenefitsList benefits={benefits} />
        </CardContent>

        <CardFooter className="flex flex-col space-y-3 px-6 py-6 mt-4">
          <Button
            id={`btn-select-${slugify(title)}`}
            data-plan-price={extractNumericPrice(price)}
            onClick={handlePlanSelect}
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Assinar agora
          </Button>
          <p className="text-xs text-gray-500 text-center">
            Pagamento seguro via cartão ou PIX
          </p>
        </CardFooter>
      </div>
    </Card>
  );
};

export default PricingCard;
