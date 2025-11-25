import { CorporateHeader } from "@/components/CorporateHeader";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Users, TrendingUp, Heart, Shield, Mail, X } from "lucide-react";
import heroImage from "@/assets/start-unternehmen.png";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
const formSchema = z.object({
  email: z.string().email({
    message: "Bitte geben Sie eine gültige E-Mail-Adresse ein"
  }),
  phone: z.string().min(1, {
    message: "Bitte geben Sie eine Telefonnummer ein"
  }),
  company: z.string().min(1, {
    message: "Bitte geben Sie Ihr Unternehmen ein"
  }),
  employeeCount: z.string().min(1, {
    message: "Bitte geben Sie die Mitarbeiteranzahl ein"
  }),
  firstName: z.string().min(1, {
    message: "Bitte geben Sie Ihren Vornamen ein"
  }),
  lastName: z.string().min(1, {
    message: "Bitte geben Sie Ihren Nachnamen ein"
  }),
  message: z.string().min(10, {
    message: "Bitte geben Sie eine Nachricht mit mindestens 10 Zeichen ein"
  })
});
type FormData = z.infer<typeof formSchema>;
const Corporate = () => {
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors
    }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });
  const scrollToContact = () => {
    const contactSection = document.getElementById("kontakt");
    contactSection?.scrollIntoView({
      behavior: "smooth"
    });
  };
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/send-corporate-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        throw new Error("Fehler beim Senden der Nachricht");
      }
      toast({
        title: "Nachricht gesendet",
        description: "Wir werden uns so schnell wie möglich bei Ihnen melden."
      });
      reset();
    } catch (error) {
      toast({
        title: "Fehler",
        description: "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <div className="min-h-screen">
      <CorporateHeader />
      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-accent/40 via-accent/20 to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08),transparent_50%)]"></div>
          <div className="container mx-auto px-3 sm:px-4 relative">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              <div className="text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                  Hautkrebs-Screening für Unternehmen
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8">
                  Machen Sie Hautkrebsvorsorge auch für Ihre Mitarbeiter einfach und zugänglich. Wir bieten maßgeschneiderte Lösungen, ob in unserer Filiale oder direkt vor Ort in Ihrem Unternehmen – wir freuen uns über einen Austausch!
                </p>
                <Button size="lg" onClick={scrollToContact} className="gap-3 justify-start w-fit">
                  <Mail className="h-5 w-5" />
                  Kontakt
                </Button>
              </div>
              <div className="relative">
                <img src={heroImage} alt="Hautkrebs-Screening für Unternehmen" className="w-full h-auto rounded-2xl shadow-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Ihre Vorteile */}
        <section id="vorteile" className="py-8 sm:py-16 md:py-20 bg-muted/40">
          <div className="container mx-auto px-3 sm:px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-12">
              Ihre Vorteile
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-6xl mx-auto">
              <div className="group bg-card p-4 sm:p-6 rounded-xl border text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <TrendingUp className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold sm:text-base mb-2 text-base">
                  Produktivität steigern<br />Kosten senken
                </h3>
              </div>
              <div className="group bg-card p-4 sm:p-6 rounded-xl border text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold sm:text-base mb-2 text-base">Krankheitsausfälle und<br />Frühberentung vermeiden</h3>
              </div>
              <div className="group bg-card p-4 sm:p-6 rounded-xl border text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <Users className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold sm:text-base mb-2 text-base">Mitarbeiterbindung und<br />-zufriedenheit stärken</h3>
              </div>
              <div className="group bg-card p-4 sm:p-6 rounded-xl border text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <Heart className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold sm:text-base mb-2 text-base">Gesundes Arbeitsumfeld<br />hohe Attraktivität</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Wir bieten */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-3 sm:px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-12">
              Wir bieten
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex items-start gap-4 p-6 bg-card rounded-xl border">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Individuelle Lösungen</h3>
                  <p className="text-muted-foreground">
                    in unserer Filiale oder vor Ort direkt in Ihrem Unternehmen
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-card rounded-xl border">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Einfache und schnelle Abläufe</h3>
                  <p className="text-muted-foreground">integriert in Ihren Alltag</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-card rounded-xl border">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Modernste Technik</h3>
                <p className="text-muted-foreground">
                  digitale Auflichtmikroskopie, Total-Body-Mapping und KI-Unterstützung
                </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-card rounded-xl border">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Erfahrene Hautärzte</h3>
                  <p className="text-muted-foreground">
                    fachärztliche Diagnostik unter Leitung von Dr. Reuther - stv. Leiterin des Hauttumorzentrums der Universität Münster
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hautkrebs Fakten */}
        <section className="py-12 sm:py-16 md:py-20 bg-muted/40">
          <div className="container mx-auto px-3 sm:px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
              Hautkrebs: Risiken und Chancen   
            </h2>
            <p className="text-center text-muted-foreground mb-10 sm:mb-12 max-w-4xl mx-auto text-base">
              Hautkrebs ist der häufigste Tumor des Menschen und früh erkannt fast immer heilbar. Viele Mitarbeiter nehmen aus Zeitgründen keine Vorsorge wahr.
            </p>
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-card p-6 sm:p-8 rounded-xl border">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Schwarzer Hautkrebs</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-[0.3em] leading-none">•</span>
                    <span>
                      ca. 2% Lebenszeitprävalenz → jeder 50. Mitarbeiter
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-[0.3em] leading-none">•</span>
                    <span>
                      Schwerbehinderung ab 1. Stadium (GdB 50-80%)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-[0.3em] leading-none">•</span>
                    <span>
                      Lange Krankheitsausfälle, medikamentöse Nebenwirkungen, psychische Folgeprobleme
                    </span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-card p-6 sm:p-8 rounded-xl border">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Weißer Hautkrebs</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-[0.3em] leading-none">•</span>
                    <span>Häufigste Tumorerkrankung des Menschen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-[0.3em] leading-none">•</span>
                    <span>Hohe Ausfallzeiten und Produktivitätsverluste</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-[0.3em] leading-none">•</span>
                    <span>Outdoor-Berufe besonders gefährdet</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 sm:p-8 rounded-xl border">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Real-Life</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                    <span>Hauttumoren oftmals zu spät erkannt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                    <span>50-80% der Bevölkerung ungescreent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                    <span>
                      Lange Wartezeiten und unfreundliche Praxis-Öffnungszeiten für Arbeitnehmer
                    </span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-card p-6 sm:p-8 rounded-xl border">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Hautkrebs-Screening  </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Vorstufen meist leicht behandelbar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Hauttumore zum Großteil vermeidbar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Früherkennung reduziert Ausfälle und Kosten</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Unser Angebot */}
        <section id="angebot" className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-3 sm:px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
              Unser Angebot für Ihr Unternehmen
            </h2>
            <p className="text-center text-muted-foreground mb-10 sm:mb-12 max-w-3xl mx-auto text-base">​Wir entwickeln für Sie eine passgenaue BGM-Lösung - individuell auf Ihre Bedürfnisse angepasst.                                                       </p>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-primary/10 p-6 sm:p-8 rounded-xl border border-primary/20">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Individuelle Lösungen</h4>
                      <p className="text-muted-foreground text-sm">
                        in unserer Filiale oder vor Ort direkt in Ihrem Unternehmen
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Einfache und schnelle Abläufe</h4>
                      <p className="text-muted-foreground text-sm">integriert in Ihren Alltag</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Modernste Technik</h4>
                      <p className="text-muted-foreground text-sm">
                        digitale Auflichtmikroskopie, Total-Body-Mapping und KI-Unterstützung
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Erfahrene Hautärzte</h4>
                      <p className="text-muted-foreground text-sm">
                        fachärztliche Diagnostik unter Leitung von Dr. Reuther - stv. Leiterin des Hauttumorzentrums der Universität Münster
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 sm:p-8 rounded-xl border">
                <h3 className="text-lg sm:text-xl font-bold mb-2">Unternehmen jeder Größe      </h3>
                <p className="text-muted-foreground">
                  Sonderkonditionen für Ihre Mitarbeiter in unserer Filiale
                </p>
              </div>
              <div className="bg-card p-6 sm:p-8 rounded-xl border">
                <h3 className="text-lg sm:text-xl font-bold mb-2">&gt; 10 Mitarbeiter</h3>
                <p className="text-muted-foreground">
                  fachärztliches Ganzkörper-Screening mit Auflichtmikroskop vor Ort in Ihrem Unternehmen
                </p>
              </div>
              <div className="bg-card p-6 sm:p-8 rounded-xl border">
                <h3 className="text-lg sm:text-xl font-bold mb-2">&gt; 100 Mitarbeiter</h3>
                <p className="text-muted-foreground">
                  fachärztliches Ganzkörper-Screening mit Auflichtmikroskop und optional Total-Body-Mapping vor Ort in Ihrem Unternehmen
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="py-12 sm:py-16 md:py-20 bg-muted/50">
          <div className="container mx-auto px-3 sm:px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
                Kontakt
              </h2>
              <p className="text-center text-muted-foreground mb-8 sm:mb-10 text-base">
                Wir freuen uns darauf, im Austausch mit Ihnen die beste Lösung für Sie zu finden!            
              </p>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-card p-6 sm:p-8 rounded-xl border">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Vorname *</Label>
                    <Input id="firstName" {...register("firstName")} className={errors.firstName ? "border-destructive" : ""} />
                    {errors.firstName && <p className="text-sm text-destructive">{errors.firstName.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nachname *</Label>
                    <Input id="lastName" {...register("lastName")} className={errors.lastName ? "border-destructive" : ""} />
                    {errors.lastName && <p className="text-sm text-destructive">{errors.lastName.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-Mail-Adresse *</Label>
                  <Input id="email" type="email" {...register("email")} className={errors.email ? "border-destructive" : ""} />
                  {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefonnummer *</Label>
                  <Input id="phone" type="tel" {...register("phone")} className={errors.phone ? "border-destructive" : ""} />
                  {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Unternehmen *</Label>
                    <Input id="company" {...register("company")} className={errors.company ? "border-destructive" : ""} />
                    {errors.company && <p className="text-sm text-destructive">{errors.company.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="employeeCount">Mitarbeiteranzahl *</Label>
                    <Input id="employeeCount" {...register("employeeCount")} className={errors.employeeCount ? "border-destructive" : ""} />
                    {errors.employeeCount && <p className="text-sm text-destructive">{errors.employeeCount.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Ihre Nachricht an uns *</Label>
                  <Textarea id="message" rows={5} {...register("message")} className={errors.message ? "border-destructive" : ""} />
                  {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
                </Button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-2">Kontaktieren Sie uns jetzt:</p>
                <p className="font-semibold">
                  Tel.: <a href="tel:01725436394" className="text-primary hover:underline">0172 5436394</a> oder{" "}
                  <a href="mailto:info@dermascan360.de" className="text-primary hover:underline">info@dermascan360.de</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default Corporate;