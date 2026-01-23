import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const DOCTOLIB_SINGLE_LESION_URL = "https://www.doctolib.de/privatpraxis/osnabrueck/dermascan360/booking/availabilities?specialityId=1289&telehealth=false&placeId=practice-728521&insuranceSectorEnabled=true&insuranceSector=private&motiveIds%5B%5D=15245959&bookingFunnelSource=profile";
const DOCTOLIB_FULLBODY_URL = "https://www.doctolib.de/privatpraxis/osnabrueck/dermascan360/booking/availabilities?specialityId=1289&telehealth=false&placeId=practice-728521&insuranceSectorEnabled=true&insuranceSector=private&motiveIds%5B%5D=15245898&bookingFunnelSource=profile";

export const Pricing = () => {
  const plans = [{
    name: "Single Lesion",
    price: "ab 29",
    delivery: "Erste Läsion 29€, jede weitere 10€",
    features: ["Auflichtmikroskopie aller gewünschten Hautveränderungen", "KI-Unterstützung", "Befundung durch erfahrenen Hautarzt"],
    negativeFeatures: ["kein Total-Body-Mapping"],
    popular: false
  }, {
    name: "Ganzkörper-Screening",
    price: "149",
    delivery: "Befund innerhalb von 14 Tagen",
    features: ["Total-Body-Mapping", "Auflichtmikroskopie", "KI-Unterstützung", "Befundung durch erfahrenen Hautarzt", "Arztbrief"],
    popular: true
  }, {
    name: "Ganzkörper-Screening Express",
    price: "199",
    delivery: "Befund innerhalb von 5 Werktagen",
    features: ["Total-Body-Mapping", "Auflichtmikroskopie", "KI-Unterstützung", "Befundung durch erfahrenen Hautarzt", "Arztbrief", "Fotoreport mit Auszug der aufgenommenen Bilder", "Express-Befundung innerhalb von 5 Werktagen"],
    popular: false
  }];
  return <section id="preise" className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-36 bg-muted/60">
      <div className="container mx-auto px-3 sm:px-4 lg:px-8 xl:px-12 max-w-[1600px]">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 tracking-tight text-4xl">
            Preise
          </h2>
          <p className="sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2 sm:px-4 text-sm">
            Selbstzahlerleistung - von privaten Krankenkassen regelhaft übernommen. (Teil-)erstattung bei gesetzlichen Krankenkassen möglich. Eine Kostenübernahme kann von uns nicht garantiert werden.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {plans.map(plan => <div key={plan.name} className={`relative flex flex-col p-4 sm:p-5 md:p-6 lg:p-8 bg-card rounded-xl sm:rounded-2xl border-2 shadow-lg ${plan.popular ? 'border-primary lg:scale-105 shadow-xl' : 'border-border/50'}`}>
              {plan.popular && <div className="absolute -top-2.5 sm:-top-3 left-1/2 -translate-x-1/2 px-2.5 sm:px-3 md:px-4 py-1 bg-primary text-primary-foreground text-[10px] sm:text-xs md:text-sm font-semibold rounded-full whitespace-nowrap">
                  Beliebteste Option
                </div>}
              
              <div className="mb-4 sm:mb-5">
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1.5 sm:mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold">{plan.price}€</span>
                </div>
                <p className="sm:text-xs md:text-sm text-muted-foreground mt-1.5 sm:mt-2 text-sm">{plan.delivery}</p>
              </div>

              <ul className="space-y-2 sm:space-y-2.5 md:space-y-3 mb-6 sm:mb-7 md:mb-8 flex-grow">
                {plan.features.map(feature => <li key={feature} className="flex items-start gap-1.5 sm:gap-2">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0 mt-0.5" />
                    <span className="sm:text-sm text-sm">{feature}</span>
                  </li>)}
                {plan.negativeFeatures?.map(feature => <li key={feature} className="flex items-start gap-1.5 sm:gap-2">
                    <X className="h-4 w-4 sm:h-5 sm:w-5 text-destructive shrink-0 mt-0.5" />
                    <span className="sm:text-sm text-muted-foreground text-sm">{feature}</span>
                  </li>)}
              </ul>

              <Button 
                className={`w-full text-xs sm:text-sm ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`} 
                variant={plan.popular ? 'default' : 'outline'}
                onClick={() => window.open(plan.name === "Single Lesion" ? DOCTOLIB_SINGLE_LESION_URL : DOCTOLIB_FULLBODY_URL, '_blank')}
              >
                Termin buchen
              </Button>
            </div>)}
        </div>

        <div className="mt-10 sm:mt-12 md:mt-16 lg:mt-20 max-w-5xl mx-auto p-5 sm:p-6 md:p-8 lg:p-10 bg-gradient-to-br from-accent/60 to-accent/40 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg border border-border/30">
          <h3 className="sm:text-lg md:text-xl lg:text-2xl font-bold mb-4 sm:mb-5 md:mb-6 text-center text-base">Kostenerstattung durch Krankenkassen</h3>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 text-xs sm:text-sm text-muted-foreground">
            <div>
              <p className="font-medium text-foreground mb-2 text-sm">Private Krankenkassen:</p>
              <p className="text-sm">Die Leistung wird regelhaft übernommen. Meist erfolgt eine vollständige Erstattung.</p>
            </div>
            <div>
              <p className="font-medium text-foreground mb-2 text-sm">Gesetzliche Krankenkassen:</p>
              <p className="text-sm">Einige GKVs bieten eine (Teil-)erstattung an. Wir empfehlen, die Rechnung einzureichen.</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};