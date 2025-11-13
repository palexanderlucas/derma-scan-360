import { Button } from "@/components/ui/button";
import { Calendar, Clock, Award, Microscope } from "lucide-react";
import heroImage from "@/assets/hero-scan.png";
export const Hero = () => {
  return <section className="pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-32 md:pb-20 lg:pt-44 lg:pb-28 xl:pt-52 xl:pb-36 bg-gradient-to-b from-accent/40 via-accent/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08),transparent_50%)]"></div>
      <div className="container mx-auto px-3 sm:px-4 lg:px-8 xl:px-12 relative max-w-[1600px]">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-14 xl:gap-20 items-center">
          <div className="space-y-5 sm:space-y-6 lg:space-y-8 xl:space-y-10 max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
              Hautkrebs-Screening auf höchstem Niveau
            </h1>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-muted-foreground leading-relaxed">
              Innovative Hautkrebsvorsorge mit hochpräzisem Total-Body-Mapping und digitaler Auflichtmikroskopie – befundet von erfahrenen Dermatologen mit Unterstützung von künstlicher Intelligenz.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 pt-2 sm:pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-200 text-sm sm:text-base lg:text-lg h-11 sm:h-12 lg:h-14 xl:h-16 font-semibold px-6 sm:px-8">
                <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Jetzt Termin buchen
              </Button>
              <Button size="lg" variant="outline" className="text-sm sm:text-base lg:text-lg h-11 sm:h-12 lg:h-14 xl:h-16 font-semibold border-2 hover:bg-accent/50 transition-all duration-200 px-6 sm:px-8">
                Mehr erfahren
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-5 lg:gap-8 pt-6 sm:pt-8 lg:pt-10 border-t border-border/50">
              <div className="flex items-center gap-2.5 sm:gap-3 group">
                <div className="p-2 sm:p-2.5 lg:p-3 bg-primary/10 rounded-lg sm:rounded-xl group-hover:bg-primary/15 transition-colors duration-200 flex-shrink-0">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 xl:h-9 xl:w-9 text-primary" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-xs sm:text-sm lg:text-base whitespace-nowrap">Termingarantie</div>
                  <div className="text-[10px] sm:text-xs lg:text-sm text-muted-foreground whitespace-nowrap">innerhalb von 3 Tagen</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3 group">
                <div className="p-2 sm:p-2.5 lg:p-3 bg-primary/10 rounded-lg sm:rounded-xl group-hover:bg-primary/15 transition-colors duration-200 flex-shrink-0">
                  <Microscope className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 xl:h-9 xl:w-9 text-primary" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-xs sm:text-sm lg:text-base whitespace-nowrap">Modernste Technik</div>
                  <div className="text-[10px] sm:text-xs lg:text-sm text-muted-foreground whitespace-nowrap">KI-unterstützt</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3 group">
                <div className="p-2 sm:p-2.5 lg:p-3 bg-primary/10 rounded-lg sm:rounded-xl group-hover:bg-primary/15 transition-colors duration-200 flex-shrink-0">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 xl:h-9 xl:w-9 text-primary" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-xs sm:text-sm lg:text-base whitespace-nowrap">Facharztstandard</div>
                  <div className="text-[10px] sm:text-xs lg:text-sm text-muted-foreground whitespace-nowrap">erfahrene Hautärzte</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group mt-6 lg:mt-0">
            <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 rounded-2xl sm:rounded-3xl blur-2xl lg:blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img src={heroImage} alt="Hautkrebs Screening mit digitaler Analyse" className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-2xl w-full transition-transform duration-500 group-hover:scale-[1.02]" />
          </div>
        </div>
      </div>
    </section>;
};