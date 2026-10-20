import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { openBookingUrl } from "@/lib/booking";
import bodyScannerAsset from "@/assets/dermascan360-total-body-mapping-ganzkoerper-scanner-intellistudio.webp";
const bodyScanner = bodyScannerAsset;
import dermatoscopeAsset from "@/assets/dermascan360-digitale-auflichtmikroskopie-dermatoskopie-muttermal.webp";
const dermatoscope = dermatoscopeAsset;
import doctorAnalysisAsset from "@/assets/dermascan360-dermatologische-befundung-hautarzt-ki-analyse.webp";
const doctorAnalysis = doctorAnalysisAsset;
import monitoringAsset from "@/assets/dermascan360-verlaufskontrolle-muttermale-vergleich-ki.webp";
const monitoring = monitoringAsset;

type Props = { city: string; bookingUrl: string };


export const CityServices = ({ city, bookingUrl }: Props) => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollerRef.current;
    const target = el?.querySelector<HTMLElement>("[data-popular]");
    if (!el || !target || window.innerWidth >= 1024) return;
    const track = el.getBoundingClientRect();
    const card = target.getBoundingClientRect();
    el.scrollLeft += card.left - track.left - (track.width - card.width) / 2;
  }, []);

  const photos = [
    { src: bodyScanner, alt: "Total-Body-Mapping Scanner", label: "Total-Body-Mapping" },
    { src: dermatoscope, alt: "Digitale Auflichtmikroskopie", label: "Digitale Auflichtmikroskopie" },
    { src: doctorAnalysis, alt: "Dermatologische Befundung", label: "Dermatologische Befundung" },
    { src: monitoring, alt: "Verlaufskontrolle mit Fotovergleich", label: "Verlaufskontrollen" },
  ];

  const topics = [
    {
      title: "Fachärztliche Expertise trifft moderne Diagnostik",
      text: "Ganzkörper-Scanner, Total-Body-Mapping und digitale Auflichtmikroskopie ermöglichen eine umfassende Untersuchung und präzise Dokumentation der Haut. KI-gestützte Verfahren unterstützen unsere Dermatologen dabei, Hautveränderungen frühzeitig zu erkennen und ärztlich zu beurteilen.",
    },
    {
      title: "Fotodokumentation & Verlaufskontrollen",
      text: "Die strukturierte Fotodokumentation bildet die Grundlage für zuverlässige Verlaufskontrollen: Veränderungen können im Zeitverlauf präzise verglichen und frühzeitig erkannt werden. Bei auffälligen Befunden ermöglichen wir eine nahtlose Weiterbehandlung in unseren Partnerpraxen.",
    },
    {
      title: "Zeitnahe Termine & persönliche Betreuung",
      text: `Für Ihre Hautkrebsvorsorge in ${city} bieten wir zeitnahe Termine – auch abends und samstags – sowie kurze Wartezeiten. Wir nehmen uns Zeit für Ihre Fragen und legen Wert auf persönliche Betreuung, Diskretion und eine angenehme Atmosphäre.`,
    },
  ];

  const plans = [
    {
      name: "Kontrolle einzelner Läsionen / gezielte Hautkrebs-Untersuchung",
      price: "ab 49 €",
      priceNote: "Erste Läsion ca. 49 €, jede weitere ca. 10 € (max. 6 Läsionen)",
      popular: false,
      items: [
        ["Gezielte Dermatoskopie", "Hochauflösende Auflichtmikroskopie von bis zu 6 ausgewählten Hautveränderungen."],
        ["Dermatologische Befundung", "unterstützt durch KI."],
        ["Arztbrief", "Befundbericht der untersuchten Stellen mit konkreter Empfehlung."],
      ],
      negative: ["Kein Ganzkörper-Scan"],
    },
    {
      name: "Hautkrebsscreening Komplettpaket",
      price: "ca. 149 €",
      priceNote: "Befund innerhalb von 14 Tagen",
      popular: true,
      items: [
        ["Ganzkörper-Scan & digitale Dermatoskopie", "Total-Body-Mapping mit Detailaufnahmen auffälliger Hautveränderungen."],
        ["Dermatologische Befundung", "unterstützt durch KI."],
        ["Arztbrief", "mit Empfehlungen zum weiteren Vorgehen."],
        ["Verlaufsdokumentation", "Für zukünftige Vergleichsuntersuchungen."],
      ],
      negative: [] as string[],
    },
    {
      name: "Hautkrebsscreening Express",
      price: "ca. 199 €",
      priceNote: "Befund innerhalb von 5 Werktagen",
      popular: false,
      items: [
        ["Ganzkörper-Scan & digitale Dermatoskopie", "Total-Body-Mapping mit Detailaufnahmen auffälliger Hautveränderungen."],
        ["Dermatologische Befundung", "unterstützt durch KI."],
        ["Arztbrief", "mit Empfehlungen zum weiteren Vorgehen."],
        ["Verlaufsdokumentation", "Für zukünftige Vergleichsuntersuchungen."],
        ["Fotoreport", "Auszug der aufgenommenen Bilder für Ihre Unterlagen."],
      ],
      negative: [] as string[],
    },
  ];

  return <>
    <section id="konzept" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-accent/40">
      <div className="container mx-auto px-3 sm:px-4 lg:px-8 max-w-6xl">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 tracking-tight">Hautkrebsvorsorge 360° in {city}</h2>
          <p className="text-base text-muted-foreground max-w-4xl mx-auto leading-relaxed px-2">
            DermaScan360 verbindet die Expertise erfahrener Hautärzte mit modernster Diagnostik.
          </p>
        </div>
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 lg:gap-10 items-start">
          <div className="space-y-6 lg:space-y-8">
            {topics.map((topic) => (
              <div key={topic.title}>
                <h3 className="text-base sm:text-lg font-bold mb-2 tracking-tight">{topic.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{topic.text}</p>
              </div>
            ))}
          </div>
          <div className="min-w-0">
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 -mx-3 px-3 sm:-mx-4 sm:px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-2 lg:gap-4 lg:overflow-visible lg:mx-0 lg:px-0">
              {photos.map((photo) => (
                <figure key={photo.label} className="snap-center shrink-0 w-[72%] sm:w-[55%] lg:w-auto">
                  <img src={photo.src} alt={photo.alt} loading="lazy" className="w-full aspect-[4/3] object-cover rounded-xl" />
                  <figcaption className="px-1 pt-2 pb-1 text-xs sm:text-sm font-semibold">{photo.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-10">
          <Button asChild variant="outline" className="bg-background border-border hover:bg-accent hover:text-accent-foreground shadow-sm">
            <Link to="/#technologie">
              Mehr Informationen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>

    <section id="preise" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-3 sm:px-4 lg:px-8 max-w-6xl">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Leistungen & Preise</h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            Wählen Sie zwischen Total-Body-Mapping und gezielter Untersuchung einzelner Muttermale.
          </p>
        </div>

        <div ref={scrollerRef} className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory pt-5 pb-7 -mx-3 px-5 sm:-mx-4 sm:px-7 scroll-px-5 sm:scroll-px-7 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:mx-0 lg:px-0">
          {plans.map((plan) => <div key={plan.name} data-popular={plan.popular ? "" : undefined} className={`relative flex flex-col shrink-0 w-[82%] sm:w-[62%] lg:w-auto snap-center p-5 sm:p-6 lg:p-8 bg-card rounded-xl sm:rounded-2xl border-2 shadow-lg ${plan.popular ? "border-primary lg:scale-105 shadow-xl" : "border-border/50"}`}>
            {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs sm:text-sm font-semibold rounded-full whitespace-nowrap">Beliebteste Option</div>}
            <h3 className="text-xl lg:text-2xl font-bold mb-1">{plan.name}</h3>
            <div className="text-3xl lg:text-4xl font-bold mt-4">{plan.price}</div>
            <p className="text-sm text-muted-foreground mt-1 mb-6">{plan.priceNote}</p>

            <ul className="space-y-4 mb-7 flex-grow">
              {plan.items.map(([t, d]) => <li key={t} className="flex gap-2">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold leading-snug">{t}</p>
                  <p className="text-sm text-muted-foreground">{d}</p>
                </div>
              </li>)}
              {plan.negative.map((f) => <li key={f} className="flex gap-2 text-sm text-muted-foreground"><X className="h-5 w-5 text-destructive shrink-0" />{f}</li>)}
            </ul>

            <Button className="w-full" variant={plan.popular ? "default" : "outline"} onClick={() => openBookingUrl(bookingUrl)}>Termin buchen</Button>
          </div>)}
        </div>

        <div className="mt-8 sm:mt-12 max-w-3xl mx-auto p-5 sm:p-8 bg-gradient-to-br from-accent/60 to-accent/40 rounded-xl sm:rounded-2xl border border-border/30">
          <h3 className="text-lg lg:text-xl font-bold mb-4 text-center">Kostenerstattung durch Krankenkassen</h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p><span className="font-semibold text-foreground">Privat versichert:</span> In der Regel vollständige Erstattung.</p>
            <p><span className="font-semibold text-foreground">Gesetzlich versichert:</span> Selbstzahlerleistung – eine (Teil-)Erstattung kann je nach Krankenkasse möglich sein. Wir empfehlen, die Rechnung einzureichen.</p>
          </div>
          <p className="text-xs text-muted-foreground/80 mt-4 leading-relaxed">Eine Erstattung kann nicht garantiert werden.<br />Bei einem behandlungsbedürftigen Befund erfolgt die weitere medizinisch notwendige Behandlung über Ihre reguläre Krankenversicherung.</p>
        </div>
      </div>
    </section>
  </>;
};
