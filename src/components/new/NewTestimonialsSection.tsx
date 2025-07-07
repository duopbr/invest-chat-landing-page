
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Mariana S.",
    role: "Investidora Iniciante",
    content: "Com a Duop Invest, finalmente entendi o mercado! As análises são tão claras que me sinto confiante para tomar minhas próprias decisões. Em apenas 3 meses, minha carteira rendeu 15% a mais do que o esperado. É um divisor de águas!",
    rating: 5,
    image: "/lovable-uploads/0eeff8c3-537a-43c8-89a8-e68696b477af.png",
    highlight: "15% a mais de rendimento"
  },
  {
    name: "Fernando L.",
    role: "Empresário",
    content: "Eu estava perdendo dinheiro com investimentos ruins. A Duop me deu a segunda opinião que eu precisava e me ajudou a reorganizar tudo. O suporte 24/7 no WhatsApp é um diferencial absurdo. Recomendo de olhos fechados!",
    rating: 5,
    image: "/lovable-uploads/54442f75-591b-4301-beb4-3793cae2203e.png",
    highlight: "Suporte 24/7 diferencial"
  },
  {
    name: "Patrícia C.",
    role: "Profissional Liberal",
    content: "A precisão das análises da IA é impressionante. Recebo alertas de oportunidades que realmente fazem a diferença. Minha rentabilidade aumentou significativamente e agora invisto com muito mais segurança.",
    rating: 5,
    image: "/lovable-uploads/0d74bf51-d9d2-40ea-934d-2baf983cf549.png",
    highlight: "Rentabilidade aumentou significativamente"
  }
];

const NewTestimonialsSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-green-600 font-semibold text-sm">PROVA SOCIAL</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-800">
            O que Nossos Mais de 1.200 Investidores Satisfeitos Dizem
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Histórias reais de transformação financeira
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-green-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-green-500 opacity-50" />
                </div>
                
                <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                  {testimonial.highlight}
                </div>
                
                <p className="text-gray-700 mb-4 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                
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

        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-white/80 px-8 py-4 rounded-full shadow-lg">
            <div className="flex -space-x-2">
              {testimonials.map((testimonial, index) => (
                <img 
                  key={index}
                  src={testimonial.image} 
                  alt=""
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <div className="text-left">
              <span className="text-2xl font-bold text-green-600">+1.200</span>
              <span className="text-sm font-medium text-gray-700 block">investidores satisfeitos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewTestimonialsSection;
