import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Pricing = () => {
  const plans = [
    {
      name: "Ganzkörper-Screening",
      price: "149",
      delivery: "Befund innerhalb von 14 Tagen",
      features: [
        "Total-Body-Mapping",
        "Digitale Auflichtmikroskopie",
        "KI-Unterstützung",
        "Befundung durch erfahrenen Hautarzt",
        "Arztbrief"
      ],
      popular: false
    },
    {
      name: "Ganzkörper-Screening Express",
      price: "199",
      delivery: "Befund innerhalb von 5 Werktagen",
      features: [
        "Total-Body-Mapping",
        "Digitale Auflichtmikroskopie",
        "KI-Unterstützung",
        "Arztbrief",
        "Fotoreport mit Auszug der aufgenommenen Bilder",
        "Express-Befundung innerhalb von 5 Werktagen"
      ],
      popular: true
    },
    {
      name: "Single Lesion",
      price: "ab 25",
      delivery: "Erste Läsion 25€, jede weitere 10€",
      features: [
        "Auflichtmikroskopische Aufnahme",
        "KI-Unterstützung",
        "Fachärztlicher Befund",
        "Sofort ohne Termin"
      ],
      negativeFeatures: [
        "kein Total-Body-Mapping"
      ],
      popular: false
    }
  ];

  return (
    <section id="preise" className="py-16 md:py-24 lg:py-32 xl:py-40 bg-muted/40">
      <div className="container mx-auto px-4 lg:px-8 xl:px-12 max-w-[1600px]">
        <div className="text-center mb-16 md:mb-20 xl:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 xl:mb-8 tracking-tight">
            Preise
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Selbstzahlerleistung - von den privaten Krankenkassen regelhaft übernommen. (Teil)erstattung bei gesetzlichen Krankenkassen möglich. Eine Kostenübernahme kann von uns nicht garantiert werden.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 xl:gap-10 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative flex flex-col p-7 lg:p-9 xl:p-10 bg-card rounded-2xl lg:rounded-3xl border-2 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                plan.popular ? 'border-primary lg:scale-105 shadow-xl' : 'border-border/50 hover:border-primary/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 px-3 md:px-4 py-1 bg-primary text-primary-foreground text-xs md:text-sm font-semibold rounded-full whitespace-nowrap">
                  Beliebteste Option
                </div>
              )}
              
              <div className="mb-5 md:mb-6">
                <h3 className="text-lg md:text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl md:text-4xl font-bold">{plan.price}€</span>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground mt-2">{plan.delivery}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
                {plan.negativeFeatures?.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                variant={plan.popular ? 'default' : 'outline'}
              >
                {plan.name === "Single Lesion" ? "Jetzt vorbeikommen" : "Termin buchen"}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-20 max-w-5xl mx-auto p-8 md:p-10 bg-gradient-to-br from-accent/60 to-accent/40 rounded-2xl md:rounded-3xl shadow-lg border border-border/30">
          <h3 className="text-xl md:text-2xl font-bold mb-5 md:mb-6 text-center">Kostenerstattung durch Krankenkassen</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
            <div>
              <p className="font-medium text-foreground mb-2">Private Krankenkassen:</p>
              <p>Die Leistung wird regelhaft übernommen. Je nach Tarif erfolgt meist eine vollständige Erstattung.</p>
            </div>
            <div>
              <p className="font-medium text-foreground mb-2">Gesetzliche Krankenkassen:</p>
              <p>Einige GKVs bieten Erstattung oder Teilerstattung an. Wir empfehlen, die Rechnung einzureichen.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
