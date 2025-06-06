
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

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
  onPlanSelect: () => void;
}

const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

const extractNumericPrice = (priceString: string): number => {
  if (!priceString) return 0;
  // Remove "R$", espaços.
  let numericString = priceString.replace(/R\$\s*/, '');
  // Remove pontos de milhar.
  numericString = numericString.replace(/\.(?=\d{3})/g, ''); 
  // Substitui a vírgula decimal por ponto.
  numericString = numericString.replace(',', '.');
  return parseFloat(numericString) || 0;
};

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
  onPlanSelect,
}: PricingCardProps) => {

  return (
    <Card className={`w-full h-full overflow-hidden border ${isPopular ? "border-invest-green" : "border-gray-200"} max-w-[350px] mx-auto`}>
      {isPopular && (
        <div className="bg-invest-green text-white text-center py-1.5 text-sm font-medium">
          Mais Popular
        </div>
      )}
      <div className={`flex flex-col ${isPopular ? "border-t-0" : ""}`}>
        <CardHeader className="px-6 py-6 text-center">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <div className="mt-4 flex flex-col items-center">
            <div className="flex items-baseline justify-center">
              <span className="text-3xl font-bold">{price}</span>
              <span className="text-base text-gray-500 ml-1">{period}</span>
            </div>
            {monthlyEquivalent && (
              <p className="text-sm text-gray-500 mt-1">{monthlyEquivalent}</p>
            )}
            <div className="mt-2 text-red-600 text-sm font-medium">
              <span>{discountPercentage} de desconto {discountType}</span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="px-6 py-0 flex-grow">
          <p className="text-gray-600 mb-4 text-center">{description}</p>
          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <Check className="text-green-500 h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{benefit}</span>
              </li>
            ))}
          </ul>
        </CardContent>

        <CardFooter className="flex flex-col space-y-3 px-6 py-6 mt-4">
          <Button
            id={`btn-select-${slugify(title)}`}
            data-plan-price={extractNumericPrice(price)}
            onClick={onPlanSelect}
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Escolher este plano
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default PricingCard;
