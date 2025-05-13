interface FounderCardProps {
  imageSrc: string;
  name: string;
  bio: string;
}

const FounderCard: React.FC<FounderCardProps> = ({ imageSrc, name, bio }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center text-center p-6 border border-gray-200">
      <img 
        src={imageSrc} 
        alt={`Foto de ${name}`}
        className="w-40 h-52 rounded-xl object-cover mb-4 border-4 border-gray-100"
      />
      <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
    </div>
  );
};

const TeamSection = () => {
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

  return (
    <section id="team" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-invest-green font-semibold text-sm">NOSSO TIME</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-800">
            Conheça os Fundadores
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Apaixonados por finanças e tecnologia, dedicados a democratizar o acesso à consultoria de investimentos de qualidade.
          </p>
        </div>
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

export default TeamSection; 