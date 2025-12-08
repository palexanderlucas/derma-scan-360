import { Calendar, Scan, CheckCircle, FileText, Clock, Stethoscope, CalendarCheck } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import monitoring from "@/assets/monitoring.webp";
export const Process = () => {
  const fullBodySteps = [{
    icon: Calendar,
    title: "Terminvereinbarung",
    description: "Wir garantieren einen Termin innerhalb von drei Werktagen. Notfalls geben wir weitere Termine frei."
  }, {
    icon: Scan,
    title: "Ganzkörper-Screening",
    description: "Zuerst wird das Total-Body-Mapping erstellt. Danach werden auffällige Veränderungen mit einem Dermatoskop aufgenommen. In unserer Praxis begleitet Sie unser speziell geschultes Team."
  }, {
    icon: CheckCircle,
    title: "Qualitätsprüfung",
    description: "Ein Hautarzt überprüft die Aufnahmen hinsichtlich Qualität und Vollständigkeit."
  }, {
    icon: CalendarCheck,
    title: "Zweittermin",
    description: "Selten ist ein zweiter Termin notwendig, zB. bei unscharfen Aufnahmen oder um weitere spezielle auflichtmikroskopische Aufnahmen zu ergänzen. Dieser Termin wird Ihnen selbstverständlich nicht in Rechnung gestellt."
  }, {
    icon: Stethoscope,
    title: "Analyse",
    description: "Ein erfahrener Hautarzt befundet die Fotoaufnahmen - unterstützt von einer spezialisierten künstlichen Intelligenz. Wenn Sie uns schon einmal besucht haben, erfolgt auch ein ausgiebiger Vergleich mit Ihren Voraufnahmen."
  }, {
    icon: FileText,
    title: "Arztbrief & Empfehlung",
    description: "Sie erhalten innerhalb weniger Tage einen fachärztlichen Befundbericht mit konkreter Empfehlung. Bei Auffälligkeiten erfolgt eine ärztliche Befundbesprechung telefonisch."
  }];
  const singleLesionSteps = [{
    icon: Clock,
    title: "Sofort ohne Termin",
    description: "Kommen Sie jetzt vorbei - ohne Termin. Besuchen Sie uns spontan zu unseren Öffnungszeiten. Die Wartezeit beträgt erfahrungsgemäß etwa 5-20 Minuten."
  }, {
    icon: Scan,
    title: "Auflichtmikroskopie",
    description: "Wir erstellen spezielle Nahaufnahmen aller gewünschten Hautveränderungen."
  }, {
    icon: FileText,
    title: "Arztbrief & Empfehlung",
    description: "Fachärztlicher Befundbericht mit konkreter Empfehlung. Bei Auffälligkeiten telefonische Befundbesprechung."
  }];
  return <section id="ablauf" className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-36 bg-background">
      <div className="container mx-auto px-3 sm:px-4 lg:px-8 xl:px-12 max-w-[1600px]">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 tracking-tight text-3xl">
            Einfacher Ablauf – Hohe Qualität
          </h2>
          <p className="sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2 text-base">
            Wählen Sie zwischen unserem Ganzkörper-Screening oder der Untersuchung einzelner Hautveränderungen
          </p>
        </div>

        <Tabs defaultValue="fullbody" className="max-w-7xl mx-auto">
          <TabsList className="grid w-full max-w-md sm:max-w-lg mx-auto grid-cols-2 mb-6 sm:mb-8 md:mb-10 h-auto">
            <TabsTrigger value="fullbody" className="text-xs sm:text-sm lg:text-base py-2.5 sm:py-3">Ganzkörper-Screening</TabsTrigger>
            <TabsTrigger value="single" className="text-xs sm:text-sm lg:text-base py-2.5 sm:py-3">Einzelne Läsion</TabsTrigger>
          </TabsList>

          <TabsContent value="fullbody" className="space-y-6 sm:space-y-8 md:space-y-10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {fullBodySteps.map((step, index) => <div key={index} className="relative group">
                  <div className="flex flex-col h-full p-4 sm:p-5 md:p-6 lg:p-7 bg-card sm:rounded-2xl border border-border/50 shadow-md hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 rounded-xl">
                    <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                      <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm lg:text-base font-bold shadow-sm shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-colors duration-300 shrink-0">
                        <step.icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-primary" />
                      </div>
                      <h3 className="font-bold text-base sm:hidden flex-1">{step.title}</h3>
                    </div>
                    <h3 className="font-bold text-lg lg:text-xl mb-2 sm:mb-3 hidden sm:block">{step.title}</h3>
                    <p className="text-muted-foreground lg:text-base leading-relaxed text-base sm:text-base">{step.description}</p>
                  </div>
                </div>)}
            </div>

            <div className="grid md:grid-cols-2 gap-5 sm:gap-6 md:gap-10 items-center mt-8 sm:mt-10 md:mt-12 p-4 sm:p-5 md:p-6 lg:p-8 bg-blue-50 rounded-lg sm:rounded-xl md:rounded-2xl">
              <div className="hidden md:block">
                <img src={monitoring} alt="Verlaufskontrollen" className="rounded-lg sm:rounded-xl shadow-lg w-full" />
              </div>
              <div className="space-y-3 sm:space-y-4">
                <h3 className="font-bold sm:text-3xl md:text-4xl lg:text-5xl text-2xl">Verlaufskontrollen</h3>
                
                {/* Image for mobile only - between title and text */}
                <div className="md:hidden">
                  <img src={monitoring} alt="Verlaufskontrollen" className="rounded-lg sm:rounded-xl shadow-lg w-full" />
                </div>
                
                <p className="text-muted-foreground leading-relaxed sm:text-base lg:text-lg text-base">Dank des Total-Body-Mappings können neue Läsionen und Veränderungen im zeitlichen Verlauf schnell und präzise erkannt werden. Die Wahrscheinlichkeit, an Hautkrebs zu erkranken, steigt mit dem Lebensalter. Daher sollten Kontrollen in regelmäßigen Abständen erfolgen.</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="single" className="space-y-6 sm:space-y-8 md:space-y-10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {singleLesionSteps.map((step, index) => <div key={index} className="relative group">
                  <div className="flex flex-col h-full p-4 sm:p-5 md:p-6 lg:p-7 bg-card sm:rounded-2xl border border-border/50 shadow-md hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 rounded-xl">
                    <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                      <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm lg:text-base font-bold shadow-sm shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-colors duration-300 shrink-0">
                        <step.icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-primary" />
                      </div>
                      <h3 className="font-bold text-base sm:hidden flex-1">{step.title}</h3>
                    </div>
                    <h3 className="font-bold text-lg lg:text-xl mb-2 sm:mb-3 hidden sm:block">{step.title}</h3>
                    <p className="text-muted-foreground lg:text-base leading-relaxed text-base sm:text-base">{step.description}</p>
                  </div>
                </div>)}
            </div>

            <div className="p-4 sm:p-5 md:p-6 lg:p-8 bg-accent/50 rounded-lg sm:rounded-xl md:rounded-2xl text-center max-w-2xl mx-auto">
              <h3 className="font-bold sm:text-3xl md:text-4xl mb-3 sm:mb-4 text-lg lg:text-4xl">Schnelle Untersuchung ohne Wartezeit</h3>
              <p className="text-muted-foreground leading-relaxed sm:text-base lg:text-lg text-base">
                Ideal für die schnelle Abklärung einzelner verdächtiger Hautveränderungen. 
                Sie entscheiden, welche Muttermale oder Läsionen wir anschauen sollen.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>;
};