
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { slugify, extractNumericPrice } from "@/utils/priceUtils";
import PricingDisplay from "./pricing/PricingDisplay";
import BenefitsList from "./pricing/BenefitsList";
import PopularBadge from "./pricing/PopularBadge";

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
