
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

interface PlanSummaryProps {
  planName: string;
  planPrice: string;
  planBenefits: string[];
}

const PlanSummary = ({ planName, planPrice, planBenefits }: PlanSummaryProps) => {
  // Remove R$ duplicado se existir
  const cleanPrice = planPrice.replace(/^R\$\s*R\$\s*/, 'R$ ');
  
  return (
    <Card className="mb-8 border-invest-green/20">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Resumo do Plano
        </h2>
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-medium text-invest-green">
              {planName}
            </h3>
            <p className="text-2xl font-bold text-gray-900">{cleanPrice}</p>
          </div>
        </div>
        <div className="border-t pt-4">
          <h4 className="text-sm font-medium text-gray-900 mb-3">
            Principais benefícios:
          </h4>
          <ul className="space-y-2">
            {planBenefits.slice(0, 3).map((benefit, index) => (
              <li key={index} className="flex items-start">
                <Check className="text-invest-green h-4 w-4 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlanSummary;
