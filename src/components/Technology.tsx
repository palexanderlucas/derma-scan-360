import { Scan, Microscope, Brain } from "lucide-react";
import bodyScanner from "@/assets/body-scanner.jpg";
import dermatoscope from "@/assets/dermatoscope.jpg";
import doctorAnalysis from "@/assets/doctor-analysis.png";

export const Technology = () => {
  return (
    <section id="technologie" className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
            Modernste Technologie für Ihre Sicherheit
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Wir setzen auf weltweit führende Medizintechnik von Canfield für präzise Früherkennung
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {/* Total-Body-Mapping */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 md:p-3 bg-primary/10 rounded-lg">
                  <Scan className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">Total-Body-Mapping</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Unser Ganzkörper-Scanner erstellt eine Landkarte der gesamten Hautoberfläche. 
                Auf diese Weise können auffällige Veränderungen genau analysiert werden. Bei Verlaufskontrollen 
                werden alle Läsionen von einer Software übereinandergelegt und über die Zeit hinweg verglichen. 
                Neue Muttermale oder Veränderungen in Form und Farbe können so präzise detektiert werden. 
                Dank künstlicher Intelligenz werden auch sehr kleine Veränderungen frühzeitig erkannt. 
                Die Sicherheit des Screenings wird so maximiert.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Wir arbeiten mit dem Ganzkörper-Scanner "IntelliStudio" der Marke Canfield. Auch die Software 
                und künstliche Intelligenz wird von Canfield zur Verfügung gestellt. Canfield ist in dieser 
                Technologie weltweit führend und entspricht dem Prinzip von FotoFinder.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Es handelt sich um zugelassene und etablierte Medizinprodukte. Der Mehrwert konnte bereits 
                in zahlreichen Studien nachgewiesen werden. Immer mehr spezialisierte Zentren und 
                Universitätskliniken setzen auf diese Technologie.
              </p>
            </div>
            <div className="relative">
              <img 
                src={bodyScanner} 
                alt="Total-Body-Mapping Scanner" 
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>

          {/* Auflichtmikroskopie */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <img 
                src={dermatoscope} 
                alt="Digitale Auflichtmikroskopie" 
                className="rounded-xl md:rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="space-y-4 md:space-y-6 order-1 md:order-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 md:p-3 bg-primary/10 rounded-lg">
                  <Microscope className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">Digitale Auflichtmikroskopie</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Mit einem Auflichtmikroskop können Muttermale stark vergrößert und sehr detailliert 
                beurteilt werden. Dank speziellem und polarisiertem Licht können Muster und Strukturen 
                dargestellt werden, die mit dem bloßen Auge nicht erkennbar sind. Auflichtmikroskopische 
                Nahaufnahmen erhöhen anerkannterweise die Genauigkeit eines Hautkrebsscreenings und werden 
                von sämtlichen Fachgesellschaften und Leitlinien empfohlen. Der Nutzen wurde in zahlreichen 
                Studien belegt. Wir verwenden eines der modernsten Dermatoskope auf dem Markt (Canfield D2 Dermatoskop).
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Die auflichtmikroskopischen Nahaufnahmen werden auf der Landkarte Ihrer Haut (Ihrem persönlichen 
                Avatar) abgespeichert. Total-Body-Mapping und Dermatoskopie werden also verbunden. So können auch 
                auflichtmikroskopische Veränderungen über die Zeit präzise erkannt werden.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Sämtliche Nahaufnahmen werden von einer künstlichen Intelligenz mitbeurteilt. Die abschließende 
                Befundung erfolgt von einem erfahrenen Hautarzt.
              </p>
            </div>
          </div>

          {/* KI-Unterstützung */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 md:p-3 bg-primary/10 rounded-lg">
                  <Brain className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">Qualitätssicherung</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Jeder Befund wird von einem erfahrenen Hautarzt erstellt. Zusätzlich erfolgt eine 
                Qualitätssicherung durch Frau Dr. med. Judith Reuther. Sie ist Fachärztin für Dermatologie 
                und spezialisiert auf Hautkrebsscreening. Sie ist stellvertretende Leiterin des 
                Hauttumorzentrums der Universitätsklinik Münster und hat eine Zusatzbezeichnung für 
                Tumortherapien erworben. Zudem hält sie regelmäßig Fortbildungen zum Thema Hautkrebsvorsorge 
                und Auflichtmikroskopie. Die Befundung wird von Frau Dr. Reuther supervidiert und signiert. 
                Bei Auffälligkeiten erfolgt zstz. eine telefonische Befundbesprechung.
              </p>
            </div>
            <div className="relative">
              <img 
                src={doctorAnalysis} 
                alt="Qualitätssicherung durch Hautarzt" 
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
