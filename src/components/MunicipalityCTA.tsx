import { Mail } from "lucide-react";

export const MunicipalityCTA = () => {
  return (
    <section id="kommunen" className="py-12 sm:py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="sm:text-3xl font-bold mb-3 sm:mb-4 md:text-5xl text-3xl">
            Für Kommunen
          </h2>
          <p className="sm:text-lg md:text-xl text-muted-foreground mb-4 sm:mb-6 text-base">
            Schließen Sie Versorgungslücken in Ihrer Region.
          </p>
          <p className="sm:text-base text-muted-foreground mb-6 sm:mb-8 md:text-lg text-base text-left sm:text-center">
            Wir sind mobil und unterstützen Kommunen dabei, Hautkrebsvorsorge direkt vor Ort anzubieten – schnell, niedrigschwellig und medizinisch hochwertig. Ob Stadt, Gemeinde oder Landkreis: Wir kommen mit unseren erfahrenen Hautärzten und modernen Screening-Systemen direkt zu Ihnen und ermöglichen BürgerInnen eine professionelle Hautkrebsvorsorge ohne lange Wege und Wartezeiten. Ideal für Aktionstage, Gesundheitswochen oder kommunale Präventionsprogramme.
          </p>
          <div className="flex items-center justify-center gap-2 text-base sm:text-lg">
            <Mail className="h-5 w-5 text-primary" />
            <span className="font-medium">Kontaktieren Sie uns jetzt:</span>
            <a 
              href="mailto:info@dermascan360.de" 
              className="text-primary hover:underline font-semibold"
            >
              info@dermascan360.de
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
