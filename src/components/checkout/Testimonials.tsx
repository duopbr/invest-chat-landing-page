import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "João Silva",
    role: "Investidor Iniciante",
    content: "O assistente me ajudou muito a entender melhor o mercado. As análises são claras e objetivas.",
    rating: 5
  },
  {
    name: "Maria Santos",
    role: "Investidora Experiente",
    content: "Excelente ferramenta para acompanhar o mercado. O suporte é rápido e eficiente.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">O que dizem nossos clientes</h3>
      <div className="space-y-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-white">
            <CardContent className="p-4">
              <div className="flex items-center mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-600 mb-2">{testimonial.content}</p>
              <div className="text-sm">
                <span className="font-medium text-gray-900">{testimonial.name}</span>
                <span className="text-gray-500"> • {testimonial.role}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Testimonials; 