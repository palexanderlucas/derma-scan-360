import { Scan, Microscope, Brain, ChevronDown } from "lucide-react";
import { useState } from "react";
import bodyScanner from "@/assets/body-scanner.jpg";
import dermatoscope from "@/assets/dermatoscope.jpg";
import doctorAnalysis from "@/assets/doctor-analysis.png";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
export const Technology = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  return <section id="technologie" className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-36 bg-muted/60">
      <div className="container mx-auto px-3 sm:px-4 lg:px-8 xl:px-12 max-w-[1600px]">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <h2 className="sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 tracking-tight text-2xl">
            Modernste Technologie für Ihre Sicherheit
          </h2>
          <p className="text-base text-muted-foreground max-w-4xl mx-auto leading-relaxed px-2">
            Wir setzen auf weltweit führende Medizintechnik von Canfield® für präzise Früherkennung
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-28 xl:space-y-36">
          {/* Total-Body-Mapping */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-14 xl:gap-20 items-center">
            <div className="space-y-4 sm:space-y-5 lg:space-y-6 max-w-2xl">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 lg:p-4 bg-gradient-to-br from-primary/15 to-primary/5 rounded-xl sm:rounded-2xl shadow-sm">
                  <Scan className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-primary" />
                </div>
                <h3 className="sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-xl">Total-Body-Mapping</h3>
              </div>
              
              {/* Image for mobile only - between title and text */}
              <div className="relative group lg:hidden">
                <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-br from-primary/20 to-accent/10 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <img src={bodyScanner} alt="Total-Body-Mapping Scanner" className="relative rounded-xl sm:rounded-2xl shadow-xl w-full transition-transform duration-300 group-hover:scale-[1.02]" />
              </div>
              
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                Unser Ganzkörper-Scanner erstellt eine Landkarte der gesamten Hautoberfläche. 
                Auf diese Weise können auffällige Veränderungen genau analysiert werden. Bei Verlaufskontrollen 
                werden alle Läsionen von einer Software übereinandergelegt und über die Zeit hinweg verglichen. 
                Neue Muttermale oder Veränderungen in Form und Farbe können so präzise detektiert werden. 
                Dank künstlicher Intelligenz werden auch sehr kleine Veränderungen frühzeitig erkannt. 
                Die Sicherheit des Screenings wird so maximiert.
              </p>
              
              {/* Desktop version - always visible */}
              <div className="hidden lg:block space-y-4 sm:space-y-5 lg:space-y-6">
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">Wir arbeiten mit dem Ganzkörper-Scanner "IntelliStudio®" der Marke Canfield®. Auch die Software und künstliche Intelligenz werden von Canfield® zur Verfügung gestellt. Canfield® ist in dieser Technologie weltweit führend und entspricht dem Prinzip von FotoFinder®.</p>
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                  Es handelt sich um zugelassene und etablierte Medizinprodukte. Der Mehrwert konnte bereits 
                  in zahlreichen Studien nachgewiesen werden. Immer mehr spezialisierte Zentren und 
                  Universitätskliniken setzen auf diese Technologie.
                </p>
              </div>

              {/* Mobile version - collapsible */}
              <Collapsible open={isOpen} onOpenChange={setIsOpen} className="lg:hidden">
                <CollapsibleTrigger className="flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                  {isOpen ? "Weniger anzeigen" : "Mehr anzeigen"}
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-4 mt-4">
                  <p className="text-base text-muted-foreground leading-relaxed font-sans">Wir arbeiten mit dem Ganzkörper-Scanner "IntelliStudio®" der Marke Canfield®. Auch die Software und künstliche Intelligenz werden von Canfield® zur Verfügung gestellt. Canfield® ist in dieser Technologie weltweit führend und entspricht dem Prinzip von FotoFinder®.</p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Es handelt sich um zugelassene und etablierte Medizinprodukte. Der Mehrwert konnte bereits 
                    in zahlreichen Studien nachgewiesen werden. Immer mehr spezialisierte Zentren und 
                    Universitätskliniken setzen auf diese Technologie.
                  </p>
                </CollapsibleContent>
              </Collapsible>
            </div>
            {/* Image for desktop/tablet only */}
            <div className="relative group hidden lg:block">
              <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-br from-primary/20 to-accent/10 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <img src={bodyScanner} alt="Total-Body-Mapping Scanner" className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-xl w-full transition-transform duration-300 group-hover:scale-[1.02]" />
            </div>
          </div>

          {/* Auflichtmikroskopie */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-14 xl:gap-20 items-center">
            <div className="relative order-2 lg:order-1 group hidden lg:block">
              <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-br from-primary/20 to-accent/10 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <img src={dermatoscope} alt="Digitale Auflichtmikroskopie" className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-xl w-full transition-transform duration-300 group-hover:scale-[1.02]" />
            </div>
            <div className="space-y-4 sm:space-y-5 lg:space-y-6 order-1 lg:order-2 max-w-2xl">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 lg:p-4 bg-gradient-to-br from-primary/15 to-primary/5 rounded-xl sm:rounded-2xl shadow-sm">
                  <Microscope className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">Digitale Auflichtmikroskopie</h3>
              </div>
              
              {/* Image for mobile only - between title and text */}
              <div className="relative group lg:hidden">
                <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-br from-primary/20 to-accent/10 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <img src={dermatoscope} alt="Digitale Auflichtmikroskopie" className="relative rounded-xl sm:rounded-2xl shadow-xl w-full transition-transform duration-300 group-hover:scale-[1.02]" />
              </div>
              
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                Mit einem Auflichtmikroskop können Muttermale stark vergrößert und sehr detailliert 
                beurteilt werden. Dank speziellem und polarisiertem Licht können Muster und Strukturen 
                dargestellt werden, die mit dem bloßen Auge nicht erkennbar sind.
              </p>
              
              {/* Desktop version - additional text always visible */}
              <p className="hidden lg:block text-base lg:text-lg text-muted-foreground leading-relaxed">
                Auflichtmikroskopische Nahaufnahmen erhöhen anerkannterweise die Genauigkeit eines Hautkrebsscreenings und werden 
                von sämtlichen Fachgesellschaften und Leitlinien empfohlen. Der Nutzen wurde in zahlreichen 
                Studien belegt. Wir verwenden eines der modernsten Dermatoskope auf dem Markt (Canfield® D2 Dermatoskop).
              </p>
              
              {/* Desktop version - always visible */}
              <div className="hidden lg:block space-y-4 sm:space-y-5 lg:space-y-6">
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">Die auflichtmikroskopischen Nahaufnahmen werden auf der Landkarte Ihrer Haut (Ihrem persönlichen Avatar) abgespeichert. Total-Body-Mapping und Dermatoskopie werden hierdurch kombiniert. So können auch auflichtmikroskopische Veränderungen im zeitlichen Verlauf präzise erkannt werden.</p>
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">Sämtliche Nahaufnahmen werden von einer künstlichen Intelligenz mitbeurteilt. Die abschließende Befundung erfolgt immer von einem erfahrenen Hautarzt.</p>
              </div>

              {/* Mobile version - collapsible */}
              <Collapsible open={isOpen2} onOpenChange={setIsOpen2} className="lg:hidden">
                <CollapsibleTrigger className="flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                  {isOpen2 ? "Weniger anzeigen" : "Mehr anzeigen"}
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen2 ? "rotate-180" : ""}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-4 mt-4 text-base">
                  <p className="text-base text-muted-foreground leading-relaxed">Auflichtmikroskopische Nahaufnahmen erhöhen anerkannterweise die Genauigkeit eines Hautkrebsscreenings und werden von sämtlichen Fachgesellschaften und Leitlinien empfohlen. Der Nutzen wurde in zahlreichen Studien belegt. Wir verwenden eines der modernsten Dermatoskope auf dem Markt (Canfield® D2 Dermatoskop).</p>
                  <p className="text-base text-muted-foreground leading-relaxed">Die auflichtmikroskopischen Nahaufnahmen werden auf der Landkarte Ihrer Haut (Ihrem persönlichen Avatar) abgespeichert. Total-Body-Mapping und Dermatoskopie werden hierdurch kombiniert. So können auch auflichtmikroskopische Veränderungen im zeitlichen Verlauf präzise erkannt werden.</p>
                  <p className="text-base text-muted-foreground leading-relaxed">Sämtliche Nahaufnahmen werden von einer künstlichen Intelligenz mitbeurteilt. Die abschließende Befundung erfolgt immer von einem erfahrenen Hautarzt.</p>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>

          {/* KI-Unterstützung */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-14 xl:gap-20 items-center">
            <div className="space-y-4 sm:space-y-5 lg:space-y-6 max-w-2xl">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 lg:p-4 bg-gradient-to-br from-primary/15 to-primary/5 rounded-xl sm:rounded-2xl shadow-sm">
                  <Brain className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">Qualitätssicherung</h3>
              </div>
              
              {/* Image for mobile only - between title and text */}
              <div className="relative group lg:hidden">
                <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-br from-primary/20 to-accent/10 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <img src={doctorAnalysis} alt="Qualitätssicherung durch Hautarzt" className="relative rounded-xl sm:rounded-2xl shadow-xl w-full transition-transform duration-300 group-hover:scale-[1.02]" />
              </div>
              
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">Jeder Befund wird von einem erfahrenen Hautarzt erstellt. Zusätzlich erfolgt eine Qualitätssicherung durch Frau Dr. med Reuther. Sie ist stellvertretende Leiterin des Hauttumorzentrums der Universitätsklinik Münster und hat eine Zusatzbezeichnung für Tumortherapien erworben. Zudem hält sie regelmäßig Fortbildungen zum Thema Hautkrebsvorsorge und Auflichtmikroskopie. Die Befundung wird von Frau Dr. Reuther supervidiert und signiert. Bei Auffälligkeiten erfolgt zusätzlich eine telefonische Befundbesprechung.</p>
            </div>
            <div className="relative group hidden lg:block">
              <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-br from-primary/20 to-accent/10 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <img src={doctorAnalysis} alt="Qualitätssicherung durch Hautarzt" className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-xl w-full transition-transform duration-300 group-hover:scale-[1.02]" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};