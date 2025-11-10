import { Scan, Microscope, Brain } from "lucide-react";
import bodyScanner from "@/assets/body-scanner.jpg";
import dermatoscope from "@/assets/dermatoscope.jpg";
import doctorAnalysis from "@/assets/doctor-analysis.png";
export const Technology = () => {
  return <section id="technologie" className="py-16 md:py-24 lg:py-32 xl:py-40 bg-muted/40">
      <div className="container mx-auto px-4 lg:px-8 xl:px-12 max-w-[1600px]">
        <div className="text-center mb-16 md:mb-20 lg:mb-28 xl:mb-32">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 xl:mb-8 tracking-tight">
            Modernste Technologie für Ihre Sicherheit
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Wir setzen auf weltweit führende Medizintechnik von Canfield® für präzise Früherkennung
          </p>
        </div>

        <div className="space-y-20 md:space-y-28 lg:space-y-36 xl:space-y-44">
          {/* Total-Body-Mapping */}
          <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 xl:gap-24 items-center">
            <div className="space-y-5 md:space-y-6 lg:space-y-7 xl:space-y-8 max-w-2xl">
              <div className="flex items-center gap-4 xl:gap-5">
                <div className="p-3 md:p-4 xl:p-5 bg-gradient-to-br from-primary/15 to-primary/5 rounded-2xl shadow-sm">
                  <Scan className="h-6 w-6 lg:h-7 lg:w-7 xl:h-8 xl:w-8 text-primary" />
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight">Total-Body-Mapping</h3>
              </div>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed xl:text-xl">
                Unser Ganzkörper-Scanner erstellt eine Landkarte der gesamten Hautoberfläche. 
                Auf diese Weise können auffällige Veränderungen genau analysiert werden. Bei Verlaufskontrollen 
                werden alle Läsionen von einer Software übereinandergelegt und über die Zeit hinweg verglichen. 
                Neue Muttermale oder Veränderungen in Form und Farbe können so präzise detektiert werden. 
                Dank künstlicher Intelligenz werden auch sehr kleine Veränderungen frühzeitig erkannt. 
                Die Sicherheit des Screenings wird so maximiert.
              </p>
              <p className="text-muted-foreground leading-relaxed text-xl">Wir arbeiten mit dem Ganzkörper-Scanner "IntelliStudio®" der Marke Canfield®. Auch die Software und künstliche Intelligenz werden von Canfield® zur Verfügung gestellt. Canfield® ist in dieser Technologie weltweit führend und entspricht dem Prinzip von FotoFinder®.</p>
              <p className="text-muted-foreground leading-relaxed text-xl">
                Es handelt sich um zugelassene und etablierte Medizinprodukte. Der Mehrwert konnte bereits 
                in zahlreichen Studien nachgewiesen werden. Immer mehr spezialisierte Zentren und 
                Universitätskliniken setzen auf diese Technologie.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-accent/10 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <img src={bodyScanner} alt="Total-Body-Mapping Scanner" className="relative rounded-2xl lg:rounded-3xl shadow-xl w-full transition-transform duration-300 group-hover:scale-[1.02]" />
            </div>
          </div>

          {/* Auflichtmikroskopie */}
          <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 xl:gap-24 items-center">
            <div className="relative order-2 lg:order-1 group">
              <div className="absolute -inset-2 xl:-inset-4 bg-gradient-to-br from-primary/20 to-accent/10 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <img src={dermatoscope} alt="Digitale Auflichtmikroskopie" className="relative rounded-2xl lg:rounded-3xl shadow-xl w-full transition-transform duration-300 group-hover:scale-[1.02]" />
            </div>
            <div className="space-y-5 md:space-y-6 lg:space-y-7 xl:space-y-8 order-1 lg:order-2 max-w-2xl">
              <div className="flex items-center gap-4 xl:gap-5">
                <div className="p-3 md:p-4 xl:p-5 bg-gradient-to-br from-primary/15 to-primary/5 rounded-2xl shadow-sm">
                  <Microscope className="h-6 w-6 lg:h-7 lg:w-7 xl:h-8 xl:w-8 text-primary" />
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight">Digitale Auflichtmikroskopie</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Mit einem Auflichtmikroskop können Muttermale stark vergrößert und sehr detailliert 
                beurteilt werden. Dank speziellem und polarisiertem Licht können Muster und Strukturen 
                dargestellt werden, die mit dem bloßen Auge nicht erkennbar sind. Auflichtmikroskopische 
                Nahaufnahmen erhöhen anerkannterweise die Genauigkeit eines Hautkrebsscreenings und werden 
                von sämtlichen Fachgesellschaften und Leitlinien empfohlen. Der Nutzen wurde in zahlreichen 
                Studien belegt. Wir verwenden eines der modernsten Dermatoskope auf dem Markt (Canfield® D2 Dermatoskop).
              </p>
              <p className="text-muted-foreground leading-relaxed">Die auflichtmikroskopischen Nahaufnahmen werden auf der Landkarte Ihrer Haut (Ihrem persönlichen Avatar) abgespeichert. Total-Body-Mapping und Dermatoskopie werden hierdurch verbunden. So können auch auflichtmikroskopische Veränderungen im zeitlichen Verlauf präzise erkannt werden.</p>
              <p className="text-muted-foreground leading-relaxed">Sämtliche Nahaufnahmen werden von einer künstlichen Intelligenz mitbeurteilt. Die abschließende Befundung erfolgt immer von einem erfahrenen Hautarzt.</p>
            </div>
          </div>

          {/* KI-Unterstützung */}
          <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 xl:gap-24 items-center">
            <div className="space-y-5 md:space-y-6 lg:space-y-7 xl:space-y-8 max-w-2xl">
              <div className="flex items-center gap-4 xl:gap-5">
                <div className="p-3 md:p-4 xl:p-5 bg-gradient-to-br from-primary/15 to-primary/5 rounded-2xl shadow-sm">
                  <Brain className="h-6 w-6 lg:h-7 lg:w-7 xl:h-8 xl:w-8 text-primary" />
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight">Qualitätssicherung</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">Jeder Befund wird von einem erfahrenen Hautarzt erstellt. Zusätzlich erfolgt eine Qualitätssicherung durch Frau Dr. med. Judith Reuther. Sie ist Fachärztin für Dermatologie und spezialisiert auf Hautkrebsscreening. Sie ist stellvertretende Leiterin des Hauttumorzentrums der Universitätsklinik Münster und hat eine Zusatzbezeichnung für Tumortherapien erworben. Zudem hält sie regelmäßig Fortbildungen zum Thema Hautkrebsvorsorge und Auflichtmikroskopie. Die Befundung wird von Frau Dr. Reuther supervidiert und signiert. Bei Auffälligkeiten erfolgt zusätz eine telefonische Befundbesprechung.</p>
            </div>
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-accent/10 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <img src={doctorAnalysis} alt="Qualitätssicherung durch Hautarzt" className="relative rounded-2xl lg:rounded-3xl shadow-xl w-full transition-transform duration-300 group-hover:scale-[1.02]" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};