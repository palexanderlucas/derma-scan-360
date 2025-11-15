import profilImg from "@/assets/profil.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Team = () => {
  const founders = [
    {
      name: "Dr. med. Judith Reuther",
      image: profilImg,
      description: "Gründerin von DermaScan360 - Fachärztin für Dermatologie. Frau Dr. med. Reuther ist stellvertretende Leiterin des Hauttumorzentrums der Universitätsklinik Münster mit der Zusatzbezeichnung für Medikamentöse Tumortherapien. Sie ist verantwortlich für die Qualitätssicherung und medizinische Befundung."
    },
    {
      name: "Dr. med. Leon Hardung",
      image: profilImg,
      description: "Gründer von DermaScan360 - Arzt in der Hautklinik der Universitätsklinik Münster"
    },
    {
      name: "Dr. med. Alexander Lucas",
      image: profilImg,
      description: "Gründer von DermaScan360 - Arzt in der Hautklinik der Universitätsklinik Münster"
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
        
        {/* Mobile & Tablet: Carousel */}
        <div className="lg:hidden max-w-2xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {founders.map((founder, index) => (
                <CarouselItem key={index}>
                  <div className="flex flex-col items-center text-center px-4">
                    <div className="mb-6 rounded-lg overflow-hidden w-full max-w-md aspect-video">
                      <img 
                        src={founder.image} 
                        alt={founder.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {founder.name}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {founder.description}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {founders.map((founder, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-6 rounded-lg overflow-hidden w-full aspect-video">
                <img 
                  src={founder.image} 
                  alt={founder.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {founder.name}
              </h3>
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
