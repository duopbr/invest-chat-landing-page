
interface PricingDisplayProps {
  price: string;
  period: string;
  monthlyEquivalent?: string;
  discountPercentage: string;
  discountType: string;
}

const PricingDisplay = ({
  price,
  period,
  monthlyEquivalent,
  discountPercentage,
  discountType,
}: PricingDisplayProps) => {
  return (
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
  );
};

export default PricingDisplay;
