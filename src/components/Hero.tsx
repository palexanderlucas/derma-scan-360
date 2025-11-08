import { Button } from "@/components/ui/button";
import { Calendar, Clock, Award, Microscope } from "lucide-react";
import heroImage from "@/assets/hero-scan.png";

export const Hero = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-b from-accent/30 to-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-5 md:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hautkrebs-Screening auf höchstem Niveau
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              Frühzeitige Erkennung auffälliger Hautveränderungen dank hochpräzisem Total-Body-Mapping und digitaler Auflichtmikroskopie – befundet von erfahrenen Fachärzten für Dermatologie mit Unterstützung von künstlicher Intelligenz.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 md:pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-base sm:text-lg h-12 sm:h-11">
                <Calendar className="mr-2 h-5 w-5" />
                Jetzt Termin buchen
              </Button>
              <Button size="lg" variant="outline" className="text-base sm:text-lg h-12 sm:h-11">
                Mehr erfahren
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 md:pt-8 border-t">
              <div className="flex items-center gap-3">
                <Clock className="h-7 sm:h-8 w-7 sm:w-8 text-primary flex-shrink-0" />
                <div>
                  <div className="font-semibold text-sm sm:text-base">Termingarantie</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">innerhalb von 3 Tagen</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Microscope className="h-7 sm:h-8 w-7 sm:w-8 text-primary flex-shrink-0" />
                <div>
                  <div className="font-semibold text-sm sm:text-base">Modernste Technik</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">KI-unterstützt</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Award className="h-7 sm:h-8 w-7 sm:w-8 text-primary flex-shrink-0" />
                <div>
                  <div className="font-semibold text-sm sm:text-base">Facharztstandard</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">erfahrene Hautärzte</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
            <img 
              src={heroImage} 
              alt="Hautkrebs Screening mit digitaler Analyse" 
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
