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
    <section id="preise" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Preise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Selbstzahlerleistung - von den privaten Krankenkassen regelhaft übernommen. (Teil)erstattung bei gesetzlichen Krankenkassen möglich. Eine Kostenübernahme kann von uns nicht garantiert werden.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative flex flex-col p-8 bg-card rounded-2xl border-2 shadow-lg transition-all hover:shadow-xl ${
                plan.popular ? 'border-primary scale-105' : 'border-transparent'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                  Beliebteste Option
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}€</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{plan.delivery}</p>
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

        <div className="mt-12 max-w-4xl mx-auto p-6 bg-accent/50 rounded-xl">
          <h3 className="font-semibold mb-3 text-center">Kostenerstattung durch Krankenkassen</h3>
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
