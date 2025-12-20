import profilImg from "@/assets/profil.jpg";
import judithImg from "@/assets/judith-reuther.webp";
import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { LazyImage } from "@/components/LazyImage";
export const Team = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const founders = [{
    name: "Judith Reuther",
    image: judithImg,
    description: "Gründerin von DermaScan360 - Fachärztin für Dermatologie. Frau Reuther ist stellvertretende Leiterin des Hauttumorzentrums der Universitätsklinik Münster mit der Zusatzbezeichnung für Medikamentöse Tumortherapien. Sie ist verantwortlich für die Qualitätssicherung und medizinische Befundung."
  }, {
    name: "Dr. med. Leon Hardung",
    image: profilImg,
    description: "Gründer von DermaScan360 - Arzt in der Hautklinik der Universitätsklinik Münster"
  }, {
    name: "Dr. med. Alexander Lucas",
    image: profilImg,
    description: "Gründer von DermaScan360 - Arzt in der Hautklinik der Universitätsklinik Münster"
  }];
  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return <section id="team" className="py-16 md:py-24 bg-muted/60">
      <div className="container mx-auto px-4">
        <h2 className="md:text-4xl font-bold text-center mb-4 text-foreground lg:text-6xl text-3xl">
          Wer wir sind
        </h2>
        <p className="text-center text-muted-foreground mb-12 md:mb-16 max-w-3xl mx-auto md:text-xl text-base">
          Gemeinsam mit unserem Team arbeiten wir leidenschaftlich daran, Hautkrebsvorsorge für jeden einfach und zugänglich zu machen.
        </p>
        
        {/* Mobile & Tablet: Carousel */}
        <div className="lg:hidden max-w-2xl mx-auto">
          <Carousel className="w-full" setApi={setApi}>
            <CarouselContent>
              {founders.map((founder, index) => <CarouselItem key={index}>
                  <div className="flex flex-col items-center text-center px-4">
                    <div className="mb-6 rounded-lg overflow-hidden w-full max-w-md aspect-video">
                      <LazyImage src={founder.image} alt={founder.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-3 text-lg">
                      {founder.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {founder.description}
                    </p>
                  </div>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          
          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {founders.map((_, index) => <button key={index} onClick={() => api?.scrollTo(index)} className={`h-2 rounded-full transition-all duration-300 ${current === index ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"}`} aria-label={`Zu Gründer ${index + 1} wechseln`} />)}
          </div>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {founders.map((founder, index) => <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-6 rounded-lg overflow-hidden w-full aspect-video">
                <LazyImage src={founder.image} alt={founder.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-foreground mb-3 text-2xl">
                {founder.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {founder.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};