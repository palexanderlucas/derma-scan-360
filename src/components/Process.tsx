import { Calendar, Scan, CheckCircle, FileText, Clock, Stethoscope, CalendarCheck } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import monitoring from "@/assets/monitoring.png";

export const Process = () => {
  const fullBodySteps = [
    {
      icon: Calendar,
      title: "Terminvereinbarung",
      description: "Wir garantieren einen Termin innerhalb von drei Werktagen. Notfalls geben wir weitere Termine frei."
    },
    {
      icon: Scan,
      title: "Ganzkörper-Screening",
      description: "Zuerst wird ein Total-Body-Mapping erstellt. Im zweiten Schritt werden auffällige Veränderungen mit einem Auflichtmikroskop aufgenommen."
    },
    {
      icon: CheckCircle,
      title: "Qualitätsprüfung",
      description: "ein Hautarzt überprüft die Aufnahmen hinsichtlich Qualität und Vollständigkeit."
    },
    {
      icon: CalendarCheck,
      title: "Zweittermin",
      description: "Selten ist ein zweiter Termin notwendig, zB. bei unscharfen Aufnahmen oder um weitere spezielle auflichtmikroskopische Aufnahmen zu ergänzen. Dieser Termin wird Ihnen selbstverständlich nicht in Rechnung gestellt."
    },
    {
      icon: Stethoscope,
      title: "Analyse",
      description: "Ein erfahrener Hautarzt befundet die Fotoaufnahmen - unterstützt von einer spezialisierten künstlichen Intelligenz. Wenn Sie uns schoneinmal besucht haben, erfolgt auch ein ausgiebiger Vergleich mit Ihren Voraufnahmen."
    },
    {
      icon: FileText,
      title: "Arztbrief & Empfehlung",
      description: "Sie erhalten einen fachärztlichen Befundbericht mit konkreter Empfehlung. Bei Auffälligkeiten erfolgt eine ärztliche Befundbesprechung telefonisch."
    }
  ];

  const singleLesionSteps = [
    {
      icon: Clock,
      title: "Sofort ohne Termin",
      description: "Kommen Sie jetzt vorbei - ohne Termin. Besuchen Sie uns spontan zu unseren Öffnungszeiten. Die Wartezeit beträgt erfahrungsgemäß zwischen 10-30 Minuten."
    },
    {
      icon: Scan,
      title: "Auflichtmikroskopie",
      description: "Wir erstellen spezielle Nahaufnahmen aller gewünschten Hautveränderungen."
    },
    {
      icon: FileText,
      title: "Arztbrief & Empfehlung",
      description: "Fachärztlicher Befundbericht mit konkreter Empfehlung. Bei Auffälligkeiten telefonische Befundbesprechung."
    }
  ];

  return (
    <section id="ablauf" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
            Einfacher Ablauf – Höchste Qualität
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Wählen Sie zwischen unserem Ganzkörper-Screening oder der Untersuchung einzelner Hautveränderungen
          </p>
        </div>

        <Tabs defaultValue="fullbody" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 md:mb-12 h-auto">
            <TabsTrigger value="fullbody" className="text-sm sm:text-base py-2.5">Ganzkörper-Screening</TabsTrigger>
            <TabsTrigger value="single" className="text-sm sm:text-base py-2.5">Einzelne Läsion</TabsTrigger>
          </TabsList>

          <TabsContent value="fullbody" className="space-y-8 md:space-y-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {fullBodySteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col h-full p-5 md:p-6 bg-card rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-3 md:mb-4">
                      <div className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-lg bg-primary/10">
                        <step.icon className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                      </div>
                      <div className="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary text-primary-foreground text-xs md:text-sm font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="font-semibold text-base md:text-lg mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center mt-12 md:mt-16 p-6 md:p-8 bg-muted/30 rounded-xl md:rounded-2xl">
              <div>
                <img 
                  src={monitoring} 
                  alt="Verlaufskontrollen" 
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Verlaufskontrollen</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Dank des Total-Body-Mappings können neue Läsionen und Veränderungen im zeitlichen Verlauf schnell und präzise erkannt werden. Die Wahrscheinlichkeit, an Hautkrebs zu erkranken, steigt mit dem Lebensalter. Daher sollten Kontrollen in regelmäßigen Abständen erfolgen.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="single" className="space-y-12">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {singleLesionSteps.map((step, index) => (
                <div key={index} className="relative">
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
                </div>
              ))}
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
    </section>
  );
};
