import { Calendar, Scan, CheckCircle, FileText, Clock, Stethoscope, CalendarCheck } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import monitoring from "@/assets/monitoring.png";
export const Process = () => {
  const fullBodySteps = [{
    icon: Calendar,
    title: "Terminvereinbarung",
    description: "Wir garantieren einen Termin innerhalb von drei Werktagen. Notfalls geben wir weitere Termine frei."
  }, {
    icon: Scan,
    title: "Ganzkörper-Screening",
    description: "Zuerst wird ein Total-Body-Mapping erstellt. Im zweiten Schritt werden auffällige Veränderungen mit einem Auflichtmikroskop aufgenommen."
  }, {
    icon: CheckCircle,
    title: "Qualitätsprüfung",
    description: "ein Hautarzt überprüft die Aufnahmen hinsichtlich Qualität und Vollständigkeit."
  }, {
    icon: CalendarCheck,
    title: "Zweittermin",
    description: "Selten ist ein zweiter Termin notwendig, zB. bei unscharfen Aufnahmen oder um weitere spezielle auflichtmikroskopische Aufnahmen zu ergänzen. Dieser Termin wird Ihnen selbstverständlich nicht in Rechnung gestellt."
  }, {
    icon: Stethoscope,
    title: "Analyse",
    description: "Ein erfahrener Hautarzt befundet die Fotoaufnahmen - unterstützt von einer spezialisierten künstlichen Intelligenz. Wenn Sie uns schoneinmal besucht haben, erfolgt auch ein ausgiebiger Vergleich mit Ihren Voraufnahmen."
  }, {
    icon: FileText,
    title: "Arztbrief & Empfehlung",
    description: "Sie erhalten einen fachärztlichen Befundbericht mit konkreter Empfehlung. Bei Auffälligkeiten erfolgt eine ärztliche Befundbesprechung telefonisch."
  }];
  const singleLesionSteps = [{
    icon: Clock,
    title: "Sofort ohne Termin",
    description: "Kommen Sie jetzt vorbei - ohne Termin. Besuchen Sie uns spontan zu unseren Öffnungszeiten. Die Wartezeit beträgt erfahrungsgemäß zwischen 10-30 Minuten."
  }, {
    icon: Scan,
    title: "Auflichtmikroskopie",
    description: "Wir erstellen spezielle Nahaufnahmen aller gewünschten Hautveränderungen."
  }, {
    icon: FileText,
    title: "Arztbrief & Empfehlung",
    description: "Fachärztlicher Befundbericht mit konkreter Empfehlung. Bei Auffälligkeiten telefonische Befundbesprechung."
  }];
  return <section id="ablauf" className="py-16 md:py-24 lg:py-32 xl:py-40">
      <div className="container mx-auto px-4 lg:px-8 xl:px-12 max-w-[1600px]">
        <div className="text-center mb-16 md:mb-20 xl:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 xl:mb-8 tracking-tight">
            Einfacher Ablauf – Höchste Qualität
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Wählen Sie zwischen unserem Ganzkörper-Screening oder der Untersuchung einzelner Hautveränderungen
          </p>
        </div>

        <Tabs defaultValue="fullbody" className="max-w-7xl mx-auto">
          <TabsList className="grid w-full max-w-lg mx-auto grid-cols-2 mb-8 md:mb-12 xl:mb-16 h-auto">
            <TabsTrigger value="fullbody" className="text-sm lg:text-base xl:text-lg py-3 xl:py-4">Ganzkörper-Screening</TabsTrigger>
            <TabsTrigger value="single" className="text-sm lg:text-base xl:text-lg py-3 xl:py-4">Einzelne Läsion</TabsTrigger>
          </TabsList>

          <TabsContent value="fullbody" className="space-y-8 md:space-y-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
              {fullBodySteps.map((step, index) => <div key={index} className="relative group">
                  <div className="flex flex-col h-full p-6 lg:p-7 xl:p-8 bg-card rounded-2xl lg:rounded-3xl border border-border/50 shadow-md hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-3 xl:gap-4 mb-4 xl:mb-5">
                      <div className="flex items-center justify-center w-11 h-11 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-colors duration-300">
                        <step.icon className="h-5 w-5 lg:h-6 lg:w-6 xl:h-7 xl:w-7 text-primary" />
                      </div>
                      <div className="flex items-center justify-center w-8 h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 rounded-full bg-primary text-primary-foreground text-sm lg:text-base xl:text-lg font-bold shadow-sm">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="font-bold text-base lg:text-lg xl:text-xl mb-2.5 xl:mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm lg:text-base xl:text-lg leading-relaxed">{step.description}</p>
                  </div>
                </div>)}
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center mt-12 md:mt-16 p-6 md:p-8 bg-muted/30 rounded-xl md:rounded-2xl">
              <div>
                <img src={monitoring} alt="Verlaufskontrollen" className="rounded-xl shadow-lg w-full" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Verlaufskontrollen</h3>
                <p className="text-muted-foreground leading-relaxed">Dank des Total-Body-Mappings können neue Läsionen und Veränderungen im zeitlichen Verlauf schnell und präzise erkannt werden. Die Wahrscheinlichkeit, an Hautkrebs zu erkranken, steigt mit dem Lebensalter. Daher sollten Kontrollen in regelmäßigen Abständen erfolgen.</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="single" className="space-y-12">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {singleLesionSteps.map((step, index) => <div key={index} className="relative">
                  <div className="flex flex-col h-full p-6 bg-card rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                        <step.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>)}
            </div>

            <div className="max-w-2xl mx-auto p-8 bg-accent/50 rounded-2xl text-center">
              <h3 className="text-xl font-bold mb-3">Schnelle Untersuchung ohne Wartezeit</h3>
              <p className="text-muted-foreground">
                Ideal für die schnelle Abklärung einzelner verdächtiger Hautveränderungen. 
                Sie entscheiden, welche Muttermale oder Läsionen wir anschauen sollen.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>;
};