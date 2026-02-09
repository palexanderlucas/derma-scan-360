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
            Hautkrebs-Screening 360°
          </h2>
          <p className="text-base text-muted-foreground max-w-4xl mx-auto leading-relaxed px-2">
            DermaScan360 kombiniert modernste Medizintechnik mit der Expertise erfahrener Dermatologen für eine präzise Früherkennung von Hautkrebs.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-28 xl:space-y-36">
          <TechCard icon={Scan} title="Total-Body-Mapping" image={bodyScanner} imageAlt="Total-Body-Mapping Scanner">
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
              Unser Ganzkörper-Scanner erstellt eine detaillierte Landkarte Ihrer gesamten Hautoberfläche. Auffällige Hautveränderungen lassen sich dadurch gezielt erfassen und genau analysieren. Bei Verlaufskontrollen werden alle Läsionen softwaregestützt übereinandergelegt und über die Zeit hinweg verglichen. So können neue Muttermale sowie kleinste Veränderungen in Form oder Farbe frühzeitig erkannt werden. Die integrierte künstliche Intelligenz unterstützt diesen Prozess und erhöht die diagnostische Sicherheit des Screenings.
            </p>
            
            <div className="hidden lg:block space-y-4 sm:space-y-5 lg:space-y-6">
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                Wir arbeiten mit dem Ganzkörper-Scanner IntelliStudio® des Herstellers Canfield®. Auch die zugehörige Software und künstliche Intelligenz stammen von Canfield®. Canfield® ist in dieser Technologie weltweit führend und entspricht dem Prinzip von FotoFinder®.
              </p>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                Bei den eingesetzten Systemen handelt es sich um zugelassene, etablierte Medizinprodukte, deren Nutzen in zahlreichen wissenschaftlichen Studien belegt ist. Immer mehr spezialisierte Zentren und Universitätskliniken setzen auf diese Technologie.
              </p>
            </div>

            <CollapsibleText isOpen={isOpen} onOpenChange={setIsOpen}>
              <p className="text-base text-muted-foreground leading-relaxed">
                Wir arbeiten mit dem Ganzkörper-Scanner IntelliStudio® des Herstellers Canfield®. Auch die zugehörige Software und künstliche Intelligenz stammen von Canfield®. Canfield® ist in dieser Technologie weltweit führend und entspricht dem Prinzip von FotoFinder®.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Bei den eingesetzten Systemen handelt es sich um zugelassene, etablierte Medizinprodukte, deren Nutzen in zahlreichen wissenschaftlichen Studien belegt ist. Immer mehr spezialisierte Zentren und Universitätskliniken setzen auf diese Technologie.
              </p>
            </CollapsibleText>
          </TechCard>

          <TechCard icon={Microscope} title="Digitale Auflichtmikroskopie" image={dermatoscope} imageAlt="Digitale Auflichtmikroskopie" reverse>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
              Mit der digitalen Auflichtmikroskopie lassen sich Muttermale stark vergrößert und äußerst präzise beurteilen. Durch den Einsatz von speziellem, polarisiertem Licht werden feine Muster und Strukturen sichtbar, die mit dem bloßen Auge nicht erkennbar sind und für die medizinische Beurteilung entscheidend sein können.
            </p>
            
            <div className="hidden lg:block space-y-4 sm:space-y-5 lg:space-y-6">
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                Die Auflichtmikroskopie gilt als wesentlicher Bestandteil einer hochwertigen Hautkrebsvorsorge und wird von dermatologischen Fachgesellschaften sowie medizinischen Leitlinien ausdrücklich empfohlen. Ihr diagnostischer Mehrwert ist wissenschaftlich gut belegt. Bei DermaScan360 verwenden wir mit dem Canfield® D2 Dermatoskop eines der modernsten und leistungsfähigsten Systeme auf dem Markt.
              </p>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                Alle auflichtmikroskopischen Aufnahmen werden direkt Ihrem persönlichen Haut-Avatar zugeordnet. Dadurch werden Total-Body-Mapping und Dermatoskopie sinnvoll miteinander kombiniert. Veränderungen einzelner Hautläsionen lassen sich so auch im zeitlichen Verlauf besonders präzise nachvollziehen.
              </p>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                Sämtliche Aufnahmen werden von einer künstlichen Intelligenz mitbeurteilt. Die abschließende medizinische Beurteilung und Befundung erfolgt jedoch immer durch einen erfahrenen Hautarzt.
              </p>
            </div>

            <CollapsibleText isOpen={isOpen2} onOpenChange={setIsOpen2}>
              <p className="text-base text-muted-foreground leading-relaxed">
                Die Auflichtmikroskopie gilt als wesentlicher Bestandteil einer hochwertigen Hautkrebsvorsorge und wird von dermatologischen Fachgesellschaften sowie medizinischen Leitlinien ausdrücklich empfohlen. Ihr diagnostischer Mehrwert ist wissenschaftlich gut belegt. Bei DermaScan360 verwenden wir mit dem Canfield® D2 Dermatoskop eines der modernsten und leistungsfähigsten Systeme auf dem Markt.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Alle auflichtmikroskopischen Aufnahmen werden direkt Ihrem persönlichen Haut-Avatar zugeordnet. Dadurch werden Total-Body-Mapping und Dermatoskopie sinnvoll miteinander kombiniert. Veränderungen einzelner Hautläsionen lassen sich so auch im zeitlichen Verlauf besonders präzise nachvollziehen.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Sämtliche Aufnahmen werden von einer künstlichen Intelligenz mitbeurteilt. Die abschließende medizinische Beurteilung und Befundung erfolgt jedoch immer durch einen erfahrenen Hautarzt.
              </p>
            </CollapsibleText>
          </TechCard>

          <TechCard icon={Brain} title="Dermatologische Befundung" image={doctorAnalysis} imageAlt="Dermatologische Befundung durch Hautarzt">
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
              Die Befundung durch unsere Hautärzt:innen erfolgt nach Ihrem Besuch bei DermaScan360 zeitversetzt anhand der digitalen Fotoaufnahmen. Bei Ihrem Termin vor Ort besteht kein direkter Arztkontakt.
            </p>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mt-4">
              Alle Befunde werden von Frau Reuther geprüft und signiert. Frau Reuther ist stellvertretende Leiterin des Hauttumorzentrums der Universitätsklinik Münster, verfügt über eine Zusatzbezeichnung für Tumortherapien und leitet regelmäßig Fortbildungen zu Hautkrebsvorsorge und Auflichtmikroskopie.
            </p>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mt-4">
              Als Ergebnis erhalten Sie einen Arztbrief mit der medizinischen Einschätzung und konkreten Handlungsempfehlung. Bei Auffälligkeiten erfolgt zusätzlich eine persönliche telefonische Besprechung des Untersuchungsergebnis.
            </p>
          </TechCard>
        </div>
      </div>
    </section>
  );
};