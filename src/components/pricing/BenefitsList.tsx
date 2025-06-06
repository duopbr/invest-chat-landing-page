
import { Check } from "lucide-react";

interface BenefitsListProps {
  benefits: string[];
}

const BenefitsList = ({ benefits }: BenefitsListProps) => {
  return (
    <ul className="space-y-3">
      {benefits.map((benefit, index) => (
        <li key={index} className="flex items-start">
          <Check className="text-green-500 h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
          <span className="text-sm">{benefit}</span>
        </li>
      ))}
    </ul>
  );
};

export default BenefitsList;
