
import { Award, TrendingUp, Users } from "lucide-react";

interface FounderCardProps {
  imageSrc: string;
  name: string;
  bio: string;
}

const FounderCard: React.FC<FounderCardProps> = ({ imageSrc, name, bio }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100">
      <div className="p-6 text-center">
        <img 
          src={imageSrc} 
          alt={`Foto de ${name}`}
          className="w-32 h-40 rounded-xl object-cover mx-auto mb-6 border-4 border-gradient-to-r from-blue-200 to-green-200"
        />
        <h3 className="text-xl font-bold text-gray-800 mb-3">{name}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
      </div>
    </div>
  );
};

const NewTeamSection = () => {
  const founders: FounderCardProps[] = [
    {
      imageSrc: "/imagens/Lipe.png",
      name: "Philippe Drevon",
      bio: "Engenheiro pela Puc RJ. Mestre em Economia e finanças pela EPGE FGV. 12 anos no mercado financeiro, 9 anos na gestão de fundos multimercados."
    },
    {
      imageSrc: "/imagens/Teix.png",
      name: "Gustavo Teixeira, CFA",
      bio: "Engenheiro pela Puc RJ. 14 anos no mercado financeiro, 9 anos na gestão de fundos multimercados e 5 anos em assessoria de investimentos."
    },
    {
      imageSrc: "/imagens/Lamas.png",
      name: "Rodrigo Lamas",
      bio: "Engenheiro pelo ITA e matemática pela UFJF. Mestre em Economia e finanças pela FGV EPGE e doutor em Administração pela FGV EBAPE. Sócio fundador da Rede de Ensino Apogeu, responsável pela M&A entre o Grupo PENSI de Ensino e Gera Venture Capital que criou a Holding Eleva de Educação."
    }
  ];

  const achievements = [
    {
      icon: <Award className="h-8 w-8 text-gold-500" />,
      title: "Décadas de Experiência",
      description: "Experiência combinada em gestão de fundos multimercados"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-500" />,
      title: "Resultados Comprovados",
      description: "Histórico de sucesso na gestão de investimentos"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Milhares de Vidas Transformadas",
      description: "Metodologia que já ajudou mais de 1.200 investidores"
    }
  ];

  return (
    <section id="team" className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm">AUTORIDADE</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-800">
            Conheça a Mente por Trás da Sua Próxima Grande Decisão de Investimento
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Nossa equipe de fundadores não é apenas apaixonada por finanças e tecnologia; eles são os pilares de uma metodologia que já transformou a vida de milhares de investidores. Com décadas de experiência combinada em gestão de fundos multimercados e assessoria de investimentos, Philippe Drevon, Gustavo Teixeira (CFA) e Rodrigo Lamas uniram seus conhecimentos para democratizar o acesso à consultoria de investimentos de alta qualidade.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>Eles não apenas entendem o mercado; eles o moldam, e agora, essa expertise está ao seu alcance, 24 horas por dia, no seu WhatsApp.</strong>
            </p>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100">
              <div className="flex justify-center mb-4">
                {achievement.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Founders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <FounderCard 
              key={index} 
              imageSrc={founder.imageSrc} 
              name={founder.name} 
              bio={founder.bio} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewTeamSection;
