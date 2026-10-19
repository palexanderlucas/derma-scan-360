import { Scan, Microscope, Brain } from "lucide-react";
import bodyScannerAsset from "@/assets/dermascan360-total-body-mapping-ganzkoerper-scanner-intellistudio.webp";
const bodyScanner = bodyScannerAsset;
import dermatoscopeAsset from "@/assets/dermascan360-digitale-auflichtmikroskopie-dermatoskopie-muttermal.webp";
const dermatoscope = dermatoscopeAsset;
import doctorAnalysisAsset from "@/assets/dermascan360-dermatologische-befundung-hautarzt-ki-analyse.webp";
const doctorAnalysis = doctorAnalysisAsset;
import { TechCard } from "@/components/TechCard";

export const Technology = () => {
  return (
    <section id="technologie" className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-36 bg-muted/60">
      <div className="container mx-auto px-3 sm:px-4 lg:px-8 xl:px-12 max-w-[1600px]">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 tracking-tight">
            Hautkrebs-Screening 360°
          </h2>
          <p className="text-base text-muted-foreground max-w-4xl mx-auto leading-relaxed px-2">
            DermaScan360 kombiniert modernste Medizintechnik mit der Expertise erfahrener Hautärzte für eine präzise Früherkennung von Hautkrebs.
          </p>
        </div>

        <div className="flex lg:grid lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scroll-smooth pb-4 lg:pb-0 -mx-3 px-3 sm:-mx-4 sm:px-4 lg:mx-0 lg:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="snap-center shrink-0 w-[85%] sm:w-[70%] lg:w-auto">
            <TechCard
              icon={Scan}
              title="Total-Body-Mapping"
              image={bodyScanner}
              imageAlt="Total-Body-Mapping Scanner"
              intro="Unser Ganzkörper-Scanner erstellt eine detaillierte Landkarte Ihrer Hautoberfläche."
            >
              <p className="text-base text-muted-foreground leading-relaxed">
                Auffällige Hautveränderungen lassen sich dadurch gezielt erfassen und genau analysieren. Bei Verlaufskontrollen werden alle Läsionen softwaregestützt übereinandergelegt und über die Zeit hinweg verglichen. So können neue Muttermale sowie kleinste Veränderungen in Form oder Farbe frühzeitig erkannt werden. Die integrierte künstliche Intelligenz unterstützt diesen Prozess und erhöht die diagnostische Sicherheit des Screenings.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Wir arbeiten mit dem Ganzkörper-Scanner IntelliStudio® des Herstellers Canfield®. Auch die zugehörige Software und künstliche Intelligenz stammen von Canfield®. Canfield® ist in dieser Technologie weltweit führend und entspricht dem Prinzip von FotoFinder®.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Bei den eingesetzten Systemen handelt es sich um zugelassene, etablierte Medizinprodukte, deren Nutzen in zahlreichen wissenschaftlichen Studien belegt ist. Immer mehr spezialisierte Zentren und Universitätskliniken setzen auf diese Technologie.
              </p>
            </TechCard>
          </div>

          <div className="snap-center shrink-0 w-[85%] sm:w-[70%] lg:w-auto">
            <TechCard
              icon={Microscope}
              title="Digitale Auflichtmikroskopie"
              image={dermatoscope}
              imageAlt="Digitale Auflichtmikroskopie"
              intro="Mit der digitalen Auflichtmikroskopie lassen sich Muttermale stark vergrößert und äußerst präzise beurteilen."
            >
              <p className="text-base text-muted-foreground leading-relaxed">
                Durch den Einsatz von speziellem, polarisiertem Licht werden feine Muster und Strukturen sichtbar, die mit dem bloßen Auge nicht erkennbar sind und für die medizinische Beurteilung entscheidend sein können.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Die Auflichtmikroskopie gilt als wesentlicher Bestandteil einer hochwertigen Hautkrebsvorsorge und wird von dermatologischen Fachgesellschaften sowie medizinischen Leitlinien ausdrücklich empfohlen. Ihr diagnostischer Mehrwert ist wissenschaftlich gut belegt. Bei DermaScan360 verwenden wir mit dem Canfield® D2 Dermatoskop eines der modernsten und leistungsfähigsten Systeme auf dem Markt.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Alle auflichtmikroskopischen Aufnahmen werden direkt Ihrem persönlichen Haut-Avatar zugeordnet. Dadurch werden Total-Body-Mapping und Dermatoskopie sinnvoll miteinander kombiniert. Veränderungen einzelner Hautläsionen lassen sich so auch im zeitlichen Verlauf besonders präzise nachvollziehen.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Sämtliche Aufnahmen werden von einer künstlichen Intelligenz mitbeurteilt. Die abschließende medizinische Beurteilung und Befundung erfolgt jedoch immer durch einen erfahrenen Hautarzt.
              </p>
            </TechCard>
          </div>

          <div className="snap-center shrink-0 w-[85%] sm:w-[70%] lg:w-auto">
            <TechCard
              icon={Brain}
              title="Dermatologische Befundung"
              image={doctorAnalysis}
              imageAlt="Dermatologische Befundung durch Hautarzt"
              intro="Die Befundung durch unsere Hautärzt:innen erfolgt nach Ihrem Besuch bei DermaScan360 zeitversetzt anhand der digitalen Fotoaufnahmen."
            >
              <p className="text-base text-muted-foreground leading-relaxed">
                Bei Ihrem Termin vor Ort besteht kein direkter Arztkontakt.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Als Ergebnis erhalten Sie einen Arztbrief mit der medizinischen Einschätzung und konkreten Handlungsempfehlung. Bei Auffälligkeiten erfolgt zusätzlich eine persönliche telefonische Besprechung des Untersuchungsergebnis.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Ist eine weiterführende Behandlung medizinisch erforderlich, kann die Weiterbehandlung zeitnah in einer unserer Partnerpraxen erfolgen.
              </p>
            </TechCard>
          </div>
        </div>
      </div>
    </section>
  );
};
