import { Button } from "@/components/ui/button";
import { Calendar, Clock, Award, Microscope } from "lucide-react";
import heroImage from "@/assets/hero-scan.png";

export const Hero = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-b from-accent/30 to-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hautkrebs-Screening auf höchstem Niveau
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Frühzeitige Erkennung auffälliger Hautveränderungen dank hochpräzisem Total-Body-Mapping und digitaler Auflichtmikroskopie – befundet von erfahrenen Fachärzten für Dermatologie mit Unterstützung von künstlicher Intelligenz.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg">
                <Calendar className="mr-2 h-5 w-5" />
                Jetzt Termin buchen
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Mehr erfahren
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t">
              <div className="flex items-start gap-2">
                <Clock className="h-6 w-6 text-primary mt-1" />
                <div>
                  <div className="font-semibold text-sm">Termingarantie</div>
                  <div className="text-xs text-muted-foreground">innerhalb von 3 Tagen. Einzelläsionen auch ohne Termin heute</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Microscope className="h-6 w-6 text-primary mt-1" />
                <div>
                  <div className="font-semibold text-sm">Modernste Technik</div>
                  <div className="text-xs text-muted-foreground">KI-gestütztes Total-Body-Mapping und Dermatoskop</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Award className="h-6 w-6 text-primary mt-1" />
                <div>
                  <div className="font-semibold text-sm">Facharztstandard</div>
                  <div className="text-xs text-muted-foreground">Erfahrene Hautärzte</div>
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
