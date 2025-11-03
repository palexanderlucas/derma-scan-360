import { Calendar, Scan, CheckCircle, FileText, Clock, Stethoscope } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import doctorAnalysis from "@/assets/doctor-analysis.png";

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
      description: "Total-Body-Mapping und auflichtmikroskopische Aufnahmen auffälliger Veränderungen in unserem Zentrum."
    },
    {
      icon: CheckCircle,
      title: "Qualitätsprüfung",
      description: "Ein Hautarzt überprüft die Aufnahmen. Bei Bedarf wird ein kostenfreier Zweittermin vereinbart."
    },
    {
      icon: Stethoscope,
      title: "Analyse",
      description: "Erfahrener Hautarzt befundet die Bilder – unterstützt von spezialisierter KI und Vergleich mit Voraufnahmen."
    },
    {
      icon: FileText,
      title: "Arztbrief & Empfehlung",
      description: "Sie erhalten einen fachärztlichen Befundbericht. Bei Auffälligkeiten erfolgt eine telefonische Befundbesprechung."
    },
    {
      icon: Clock,
      title: "Verlaufskontrollen",
      description: "Dank Total-Body-Mapping können Veränderungen im zeitlichen Verlauf schnell und präzise erkannt werden."
    }
  ];

  const singleLesionSteps = [
    {
      icon: Clock,
      title: "Sofort ohne Termin",
      description: "Kommen Sie spontan zu unseren Öffnungszeiten. Wartezeit: ca. 10-30 Minuten."
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
    <section id="ablauf" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Einfacher Ablauf – Höchste Qualität
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wählen Sie zwischen unserem Ganzkörper-Screening oder der Untersuchung einzelner Hautveränderungen
          </p>
        </div>

        <Tabs defaultValue="fullbody" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="fullbody" className="text-base">Ganzkörper-Screening</TabsTrigger>
            <TabsTrigger value="single" className="text-base">Einzelne Läsion</TabsTrigger>
          </TabsList>

          <TabsContent value="fullbody" className="space-y-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fullBodySteps.map((step, index) => (
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

            <div className="grid md:grid-cols-2 gap-12 items-center mt-16 p-8 bg-muted/30 rounded-2xl">
              <div>
                <img 
                  src={doctorAnalysis} 
                  alt="Hautarzt analysiert Befunde" 
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Professionelle Befundung</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Jeder Befund wird von Frau Dr. Reuther supervidiert und signiert. 
                  Die Kombination aus modernster KI-Technologie und hautärztlicher Expertise 
                  gewährleistet höchste Diagnosegenauigkeit.
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
