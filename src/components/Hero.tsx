import { Button } from "@/components/ui/button";
import { Calendar, Clock, Award, Microscope } from "lucide-react";
import heroImage from "@/assets/hero-scan.png";

export const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 bg-gradient-to-b from-accent/40 via-accent/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08),transparent_50%)]"></div>
      <div className="container mx-auto px-4 lg:px-6 relative">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
          <div className="space-y-6 md:space-y-7 lg:space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
              Hautkrebs-Screening auf höchstem Niveau
            </h1>
            <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              Frühzeitige Erkennung auffälliger Hautveränderungen dank hochpräzisem Total-Body-Mapping und digitaler Auflichtmikroskopie – befundet von erfahrenen Fachärzten für Dermatologie mit Unterstützung von künstlicher Intelligenz.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-200 text-base sm:text-lg h-14 sm:h-12 font-semibold">
                <Calendar className="mr-2 h-5 w-5" />
                Jetzt Termin buchen
              </Button>
              <Button size="lg" variant="outline" className="text-base sm:text-lg h-14 sm:h-12 font-semibold border-2 hover:bg-accent/50 transition-all duration-200">
                Mehr erfahren
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 pt-8 md:pt-10 border-t border-border/50">
              <div className="flex items-center gap-3 group">
                <div className="p-2.5 bg-primary/10 rounded-xl group-hover:bg-primary/15 transition-colors duration-200">
                  <Clock className="h-7 sm:h-8 w-7 sm:w-8 text-primary flex-shrink-0" />
                </div>
                <div>
                  <div className="font-semibold text-sm sm:text-base">Termingarantie</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">innerhalb von 3 Tagen</div>
                </div>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="p-2.5 bg-primary/10 rounded-xl group-hover:bg-primary/15 transition-colors duration-200">
                  <Microscope className="h-7 sm:h-8 w-7 sm:w-8 text-primary flex-shrink-0" />
                </div>
                <div>
                  <div className="font-semibold text-sm sm:text-base">Modernste Technik</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">KI-unterstützt</div>
                </div>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="p-2.5 bg-primary/10 rounded-xl group-hover:bg-primary/15 transition-colors duration-200">
                  <Award className="h-7 sm:h-8 w-7 sm:w-8 text-primary flex-shrink-0" />
                </div>
                <div>
                  <div className="font-semibold text-sm sm:text-base">Facharztstandard</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">erfahrene Hautärzte</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 rounded-3xl blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img 
              src={heroImage} 
              alt="Hautkrebs Screening mit digitaler Analyse" 
              className="relative rounded-2xl lg:rounded-3xl shadow-2xl w-full transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
