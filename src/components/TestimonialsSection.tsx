
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "Investidor há 5 anos",
    content: "Finalmente tenho um consultor disponível 24h! As análises são muito precisas e me ajudaram a reorganizar minha carteira. Recomendo!",
    rating: 5,
    image: "/lovable-uploads/0d74bf51-d9d2-40ea-934d-2baf983cf549.png"
  },
  {
    name: "Ana Paula Santos",
    role: "Profissional Liberal",
    content: "O suporte no WhatsApp é incrível. Tire dúvidas rapidamente e recebo insights valiosos sobre o mercado. Valeu cada centavo!",
    rating: 5,
    image: "/lovable-uploads/0eeff8c3-537a-43c8-89a8-e68696b477af.png"
  },
  {
    name: "Roberto Silva",
    role: "Empresário",
    content: "Uso há 3 meses e já vejo resultados. As recomendações são baseadas em análises sólidas, sem viés comercial.",
    rating: 5,
    image: "/lovable-uploads/54442f75-591b-4301-beb4-3793cae2203e.png"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-green-600 font-semibold text-sm">DEPOIMENTOS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-800">
            O que dizem nossos clientes
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Mais de 1.200 investidores já confiam em nossa consultoria 24/7
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-500 hover:scale-105 border border-green-100">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-green-100"
                  />
                  <div>
                    <span className="font-semibold text-gray-800 block">{testimonial.name}</span>
                    <span className="text-gray-600 text-sm">{testimonial.role}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 bg-white/80 px-6 py-3 rounded-full shadow-md">
            <div className="flex -space-x-2">
              {testimonials.map((testimonial, index) => (
                <img 
                  key={index}
                  src={testimonial.image} 
                  alt=""
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-700">
              +1.200 investidores satisfeitos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
