import { Scan, Microscope, Brain } from "lucide-react";
import bodyScanner from "@/assets/body-scanner.jpg";
import dermatoscope from "@/assets/dermatoscope.jpg";
import monitoring from "@/assets/monitoring.png";

export const Technology = () => {
  return (
    <section id="technologie" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Modernste Technologie für Ihre Sicherheit
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wir setzen auf weltweit führende Medizintechnik von Canfield für präzise Früherkennung
          </p>
        </div>

        <div className="space-y-24">
          {/* Total-Body-Mapping */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Scan className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">Total-Body-Mapping</h3>
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <img 
                src={dermatoscope} 
                alt="Digitale Auflichtmikroskopie" 
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Microscope className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">Digitale Auflichtmikroskopie</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Mit einem Auflichtmikroskop können Muttermale stark vergrößert und sehr detailliert 
                beurteilt werden. Dank speziellem und polarisiertem Licht werden Muster und Strukturen 
                dargestellt, die mit dem bloßen Auge nicht erkennbar sind.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Die auflichtmikroskopischen Nahaufnahmen werden auf der Landkarte Ihrer Haut abgespeichert. 
                Total-Body-Mapping und Dermatoskopie werden verbunden – für präzise Verlaufskontrollen.
              </p>
              <div className="bg-accent/50 p-4 rounded-lg">
                <p className="text-sm font-medium">
                  Canfield D2 Dermatoskop – eines der modernsten Dermatoskope auf dem Markt. 
                  Empfohlen von sämtlichen Fachgesellschaften und Leitlinien.
                </p>
              </div>
            </div>
          </div>

          {/* KI-Unterstützung */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">KI-gestützte Analyse</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Künstliche Intelligenz unterstützt unsere erfahrenen Fachärzte bei der Befundung. 
                Sämtliche Nahaufnahmen werden von spezialisierter KI mitbeurteilt, um auch kleinste 
                Veränderungen zu erkennen.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Die abschließende Befundung erfolgt immer durch Dr. med. Judith Reuther – 
                Fachärztin für Dermatologie und spezialisiert auf Hautkrebsscreening.
              </p>
              <div className="bg-primary/10 p-6 rounded-lg space-y-2">
                <h4 className="font-semibold">Dr. med. Judith Reuther</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Fachärztin für Dermatologie</li>
                  <li>• Stellv. Leiterin Hauttumorzentrums Uni Münster</li>
                  <li>• Zusatzbezeichnung Tumortherapie</li>
                  <li>• Regelmäßige Fortbildungen Auflichtmikroskopie</li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <img 
                src={monitoring} 
                alt="KI-gestützte Verlaufskontrolle" 
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
