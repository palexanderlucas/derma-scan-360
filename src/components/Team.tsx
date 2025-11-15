import judithImg from "@/assets/judith.jpg";
import leonImg from "@/assets/leon.jpg";
import alexImg from "@/assets/alex.jpg";

export const Team = () => {
  const founders = [
    {
      name: "Dr. med. Judith Reuther",
      image: judithImg,
      description: "Gründerin DermaScan360 - Fachärztin für Dermatologie - stellvertretende Leiterin Hauttumorzentrum Universitätsklinik Münster - Zusatzbezeichnung für Medikamentöse Tumortherapie. Verantwortlich für Qualitätssicherung und Befundung."
    },
    {
      name: "Dr. med. Leon Hardung",
      image: leonImg,
      description: "Gründer DermaScan360 - Arzt in der Hautklinik der Universitätsklinik Münster"
    },
    {
      name: "Dr. med. Alexander Lucas",
      image: alexImg,
      description: "Gründer DermaScan360 - Arzt in der Hautklinik der Universitätsklinik Münster"
    }
  ];

  return (
    <section id="team" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-foreground">
          Wer wir sind
        </h2>
        <p className="text-lg md:text-xl text-center text-muted-foreground mb-12 md:mb-16 max-w-3xl mx-auto">
          Gemeinsam mit unserem Team arbeiten wir leidenschaftlich daran, Hautkrebsvorsorge für jeden einfach und zugänglich zu machen.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {founders.map((founder, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-6 rounded-lg overflow-hidden w-48 h-48 md:w-56 md:h-56">
                <img 
                  src={founder.image} 
                  alt={founder.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                {founder.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
