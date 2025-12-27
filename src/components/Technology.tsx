import { Scan, Microscope, Brain, ChevronDown } from "lucide-react";
import { useState } from "react";
import bodyScanner from "@/assets/total-body-mapping-ganzkoerper-screening.webp";
import dermatoscope from "@/assets/digitale-dermatoskopie-auflichtmikroskop.webp";
import doctorAnalysis from "@/assets/hautkrebs-screening-arzt-befundung.webp";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { TechCard } from "@/components/TechCard";

const CollapsibleText = ({ 
  isOpen, 
  onOpenChange, 
  children 
}: { 
  isOpen: boolean; 
  onOpenChange: (open: boolean) => void; 
  children: React.ReactNode;
}) => (
  <Collapsible open={isOpen} onOpenChange={onOpenChange} className="lg:hidden">
    <CollapsibleTrigger className="flex items-center gap-2 text-sm font-medium text-primary hover:underline">
      {isOpen ? "Weniger anzeigen" : "Mehr anzeigen"}
      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
    </CollapsibleTrigger>
    <CollapsibleContent className="space-y-4 mt-4">
      {children}
    </CollapsibleContent>
  </Collapsible>
);

export const Technology = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  return (
    <section id="technologie" className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-36 bg-muted/60">
      <div className="container mx-auto px-3 sm:px-4 lg:px-8 xl:px-12 max-w-[1600px]">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 tracking-tight">
            Modernste Technologie für Ihre Sicherheit
          </h2>
          <p className="text-base text-muted-foreground max-w-4xl mx-auto leading-relaxed px-2">
            DermaScan360 setzt auf weltweit führende Medizintechnik von Canfield® für präzise Früherkennung
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-28 xl:space-y-36">
          <TechCard icon={Scan} title="Total-Body-Mapping" image={bodyScanner} imageAlt="Total-Body-Mapping Scanner">
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
              Unser Ganzkörper-Scanner erstellt eine Landkarte der gesamten Hautoberfläche. 
              Auf diese Weise können auffällige Veränderungen genau analysiert werden. Bei Verlaufskontrollen 
              werden alle Läsionen von einer Software übereinandergelegt und über die Zeit hinweg verglichen. 
              Neue Muttermale oder Veränderungen in Form und Farbe können so präzise detektiert werden. 
              Dank künstlicher Intelligenz werden auch sehr kleine Veränderungen frühzeitig erkannt. 
              Die Sicherheit des Screenings wird so maximiert.
            </p>
            
            <div className="hidden lg:block space-y-4 sm:space-y-5 lg:space-y-6">
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                Wir arbeiten mit dem Ganzkörper-Scanner "IntelliStudio®" der Marke Canfield®. Auch die Software und künstliche Intelligenz werden von Canfield® zur Verfügung gestellt. Canfield® ist in dieser Technologie weltweit führend und entspricht dem Prinzip von FotoFinder®.
              </p>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                Es handelt sich um zugelassene und etablierte Medizinprodukte. Der Mehrwert konnte bereits 
                in zahlreichen Studien nachgewiesen werden. Immer mehr spezialisierte Zentren und 
                Universitätskliniken setzen auf diese Technologie.
              </p>
            </div>

            <CollapsibleText isOpen={isOpen} onOpenChange={setIsOpen}>
              <p className="text-base text-muted-foreground leading-relaxed">
                Wir arbeiten mit dem Ganzkörper-Scanner "IntelliStudio®" der Marke Canfield®. Auch die Software und künstliche Intelligenz werden von Canfield® zur Verfügung gestellt. Canfield® ist in dieser Technologie weltweit führend und entspricht dem Prinzip von FotoFinder®.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Es handelt sich um zugelassene und etablierte Medizinprodukte. Der Mehrwert konnte bereits 
                in zahlreichen Studien nachgewiesen werden. Immer mehr spezialisierte Zentren und 
                Universitätskliniken setzen auf diese Technologie.
              </p>
            </CollapsibleText>
          </TechCard>

          <TechCard icon={Microscope} title="Digitale Auflichtmikroskopie" image={dermatoscope} imageAlt="Digitale Auflichtmikroskopie" reverse>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
              Mit einem Auflichtmikroskop können Muttermale stark vergrößert und sehr detailliert 
              beurteilt werden. Dank speziellem und polarisiertem Licht können Muster und Strukturen 
              dargestellt werden, die mit dem bloßen Auge nicht erkennbar sind.
            </p>
            
            <div className="hidden lg:block space-y-4 sm:space-y-5 lg:space-y-6">
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                Auflichtmikroskopische Nahaufnahmen erhöhen anerkannterweise die Genauigkeit eines Hautkrebsscreenings und werden 
                von sämtlichen Fachgesellschaften und Leitlinien empfohlen. Der Nutzen wurde in zahlreichen 
                Studien belegt. Wir verwenden eines der modernsten Dermatoskope auf dem Markt (Canfield® D2 Dermatoskop).
              </p>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                Die auflichtmikroskopischen Nahaufnahmen werden auf der Landkarte Ihrer Haut (Ihrem persönlichen Avatar) abgespeichert. Total-Body-Mapping und Dermatoskopie werden hierdurch kombiniert. So können auch auflichtmikroskopische Veränderungen im zeitlichen Verlauf präzise erkannt werden.
              </p>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                Sämtliche Nahaufnahmen werden von einer künstlichen Intelligenz mitbeurteilt. Die abschließende Befundung erfolgt immer von einem erfahrenen Hautarzt.
              </p>
            </div>

            <CollapsibleText isOpen={isOpen2} onOpenChange={setIsOpen2}>
              <p className="text-base text-muted-foreground leading-relaxed">
                Auflichtmikroskopische Nahaufnahmen erhöhen anerkannterweise die Genauigkeit eines Hautkrebsscreenings und werden von sämtlichen Fachgesellschaften und Leitlinien empfohlen. Der Nutzen wurde in zahlreichen Studien belegt. Wir verwenden eines der modernsten Dermatoskope auf dem Markt (Canfield® D2 Dermatoskop).
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Die auflichtmikroskopischen Nahaufnahmen werden auf der Landkarte Ihrer Haut (Ihrem persönlichen Avatar) abgespeichert. Total-Body-Mapping und Dermatoskopie werden hierdurch kombiniert. So können auch auflichtmikroskopische Veränderungen im zeitlichen Verlauf präzise erkannt werden.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Sämtliche Nahaufnahmen werden von einer künstlichen Intelligenz mitbeurteilt. Die abschließende Befundung erfolgt immer von einem erfahrenen Hautarzt.
              </p>
            </CollapsibleText>
          </TechCard>

          <TechCard icon={Brain} title="Dermatologische Befundung" image={doctorAnalysis} imageAlt="Dermatologische Befundung durch Hautarzt">
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
              Bei DermaScan360 wird jeder Befund von einem erfahrenen Hautarzt erstellt. Zusätzlich erfolgt eine Qualitätssicherung durch Frau Reuther. Sie ist stellvertretende Leiterin des Hauttumorzentrums der Universitätsklinik Münster und hat eine Zusatzbezeichnung für Tumortherapien erworben. Zudem hält sie regelmäßig Fortbildungen zum Thema Hautkrebsvorsorge und Auflichtmikroskopie. Die Befundung wird von Frau Reuther supervidiert und signiert. Bei Auffälligkeiten erfolgt zusätzlich eine telefonische Befundbesprechung.
            </p>
          </TechCard>
        </div>
      </div>
    </section>
  );
};