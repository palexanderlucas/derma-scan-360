import { useEffect } from "react";
import { Car, MapPin, Train, ArrowUpRight, Calendar, Award, Microscope, Clock, Image as ImageIcon, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { MapConsent } from "@/components/MapConsent";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CityServices } from "@/components/CityServices";
import { Partners } from "@/components/Partners";
import { FAQ } from "@/components/FAQ";
import { FeatureItem } from "@/components/FeatureItem";
import { PracticeLocation, mapsPlaceUrl, mapsEmbedUrl, mapsDirectionsUrl, mapsParkingUrl, CONTACT_EMAIL, phoneHref } from "@/lib/locations";
import { openBookingUrl, openBookingDialog } from "@/lib/booking";

const SITE = "https://dermascan360.de";
const GEO: Record<string, [string, string]> = {
  "Osnabrück": ["52.2799", "8.0472"],
  "Köln": ["50.9337", "6.9814"],
  "Bonn": ["50.7200", "7.1108"],
};
const OPENING_HOURS_SPEC = [
  { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "20:00" },
  { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "16:00" },
];
const cityJsonLd = (location: PracticeLocation) => {
  const url = `${SITE}/${encodeURIComponent(location.slug)}`;
  const [postalCode, ...rest] = location.postal.split(" ");
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalClinic", "LocalBusiness"],
        "@id": `${url}#praxis`,
        name: `DermaScan360 ${location.city}`,
        url,
        image: location.image,
        description: `Hautkrebsvorsorge in ${location.city} mit Ganzkörper-Scanner und digitaler Auflichtmikroskopie. Erfahrene Hautärzte, KI-Unterstützung und zeitnahe Termine.`,
        medicalSpecialty: "Dermatology",
        email: CONTACT_EMAIL,
        telephone: location.phone,
        priceRange: "€€",
        parentOrganization: { "@id": `${SITE}/#organization` },
        address: {
          "@type": "PostalAddress",
          streetAddress: location.street,
          postalCode,
          addressLocality: rest.join(" "),
          addressCountry: "DE",
        },
        ...(GEO[location.city] && { geo: { "@type": "GeoCoordinates", latitude: GEO[location.city][0], longitude: GEO[location.city][1] } }),
        openingHoursSpecification: OPENING_HOURS_SPEC,
        hasMap: mapsPlaceUrl(location),
        areaServed: { "@type": "City", name: location.city },
        sameAs: [
          "https://www.doctolib.de/gemeinschaftspraxis/osnabrueck/dermascan360",
          "https://www.instagram.com/dermascan360",
        ],
        knowsAbout: ["Hautkrebsscreening und Früherkennung", "Total-Body-Mapping", "Digitale Auflichtmikroskopie", "Erfahrene Hautärzte"],
        makesOffer: [
          { "@type": "Offer", name: "Gezielte Untersuchung einzelner Läsionen", price: "49.00", priceCurrency: "EUR" },
          { "@type": "Offer", name: "Ganzkörper-Screening (Total-Body-Mapping)", price: "149.00", priceCurrency: "EUR" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Startseite", item: SITE },
          { "@type": "ListItem", position: 2, name: location.city, item: url },
        ],
      },
    ],
  };
};

export const City = ({ location }: { location: PracticeLocation }) => {
  const address = `${location.street}, ${location.postal}`;
  const mapUrl = mapsEmbedUrl(location);

  useEffect(() => {
    if (location.welcomeDialog) openBookingDialog(location.welcomeDialog);
  }, [location.welcomeDialog]);



  return <div className="min-h-screen overflow-x-hidden">
    <Helmet>
      <title>{`Praxis für Hautkrebsvorsorge in ${location.city} | DermaScan360`}</title>
      <meta name="description" content={`Hautkrebsvorsorge in ${location.city} mit Ganzkörper-Scanner und digitaler Auflichtmikroskopie. Erfahrene Hautärzte, KI-Unterstützung und zeitnahe Termine.`} />
      <meta property="og:title" content={`Praxis für Hautkrebsvorsorge in ${location.city} | DermaScan360`} />
      <meta property="og:description" content={`Hautkrebsvorsorge in ${location.city} mit Ganzkörper-Scanner und digitaler Auflichtmikroskopie. Erfahrene Hautärzte, KI-Unterstützung und zeitnahe Termine.`} />
      <meta name="twitter:description" content={`Hautkrebsvorsorge in ${location.city} mit Ganzkörper-Scanner und digitaler Auflichtmikroskopie. Erfahrene Hautärzte, KI-Unterstützung und zeitnahe Termine.`} />
      <script type="application/ld+json">{JSON.stringify(cityJsonLd(location))}</script>
    </Helmet>
    <Header />
    <main>
      <section className="pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-32 md:pb-20 lg:pt-44 lg:pb-28 xl:pt-52 xl:pb-36 bg-gradient-to-b from-accent/40 via-accent/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08),transparent_50%)]"></div>
        <div className="container mx-auto px-3 sm:px-4 lg:px-8 xl:px-12 relative max-w-[1600px]">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-14 xl:gap-20 lg:items-center">
            <div className="min-w-0 space-y-5 sm:space-y-6 lg:space-y-8 xl:space-y-10 max-w-2xl order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-[1.1] tracking-tight">
                Praxis für <span className="whitespace-nowrap">Hautkrebsscreening</span> {location.city}
              </h1>
              <p className="sm:text-lg lg:text-xl xl:text-2xl text-muted-foreground leading-relaxed text-base">
                Hautkrebsvorsorge in {location.city} mit Ganzkörper-Scanner und digitaler Auflichtmikroskopie – befundet von erfahrenen Hautärzten, unterstützt durch KI, mit kurzen Wartezeiten.
              </p>

              <div className="pt-2 sm:pt-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-200 text-sm sm:text-base lg:text-lg h-11 sm:h-12 lg:h-14 xl:h-16 font-semibold px-6 sm:px-8"
                  onClick={() => openBookingUrl(location.bookingUrl)}
                >
                  <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Jetzt Termin buchen
                </Button>
              </div>

              <div className="hidden lg:flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-5 lg:gap-8 pt-6 sm:pt-8 lg:pt-10 border-t border-border/50">
                <FeatureItem icon={Award} title="Erfahrene Hautärzte" subtitle="Fachärztliche Expertise" size="sm" />
                <FeatureItem icon={Microscope} title="Modernste Diagnostik" subtitle="KI-gestützt & präzise" size="sm" />
                <FeatureItem icon={Clock} title="Zeitnahe Termine" subtitle="Auch abends & samstags" size="sm" />
              </div>
            </div>

            <div className="relative min-w-0 group mt-3 lg:mt-0 order-2 aspect-[3/2]">
              <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 rounded-2xl sm:rounded-3xl blur-2xl lg:blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img src={location.image} alt={location.imageAlt} width={1200} height={800} className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-2xl w-full h-full object-cover object-top" />
              {!location.isPracticePhoto && <span className="absolute bottom-2 right-2 bg-background/90 text-foreground text-xs px-2 py-1 rounded-sm">Stadtansicht · Praxisfoto folgt</span>}
            </div>

            {/* Icons for mobile - shown only below lg */}
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-5 pt-6 sm:pt-8 border-t border-border/50 lg:hidden order-3">
              <FeatureItem icon={Award} title="Erfahrene Hautärzte" subtitle="Fachärztliche Expertise" size="lg" />
              <FeatureItem icon={Microscope} title="Modernste Diagnostik" subtitle="KI-gestützt & präzise" size="lg" />
              <FeatureItem icon={Clock} title="Zeitnahe Termine" subtitle="Auch abends & samstags" size="lg" />
            </div>
          </div>
        </div>
      </section>

      <section id="anfahrt" className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <h2 className="text-3xl sm:text-5xl font-bold mb-8">DermaScan360 in {location.city}</h2>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {"interiorImage" in location && location.interiorImage ? (
              <div className="aspect-[16/9] md:aspect-auto md:h-[380px] rounded-lg overflow-hidden">
                <img src={location.interiorImage} alt={location.interiorImageAlt} className="h-full w-full object-cover" />
              </div>
            ) : (
              <div className="aspect-[16/9] md:aspect-auto md:h-[380px] rounded-lg overflow-hidden border-2 border-dashed border-primary/30 bg-gradient-to-br from-accent/60 to-muted flex flex-col items-center justify-center text-center p-6">
                <ImageIcon className="h-12 w-12 text-primary/60 mb-3" />
                <p className="font-semibold">Foto der Praxis</p>
                <p className="text-sm text-muted-foreground">Innenansicht {location.city} folgt</p>
              </div>
            )}
            <div className="space-y-3 md:space-y-7">
              <div className="rounded-xl border border-border/60 bg-card p-4 shadow-sm md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none">
                <div className="flex gap-4"><MapPin className="h-6 w-6 text-primary shrink-0" /><div><h3 className="text-base md:text-xl font-bold mb-1 md:mb-2">{location.city === "Köln" ? "Köln Deutz" : location.city === "Bonn" ? "Bonn" : `${location.city} Zentrum`}</h3><p className="text-sm md:text-base text-muted-foreground">{location.floor && <>{location.floor}<br /></>}{location.street}<br />{location.postal}</p><a className="inline-flex items-center gap-1 text-primary hover:underline mt-1.5 md:mt-2" href={mapsPlaceUrl(location)} target="_blank" rel="noopener noreferrer">In Google Maps öffnen <ArrowUpRight className="h-4 w-4" /></a></div></div>
              </div>
              <div className="rounded-xl border border-border/60 bg-card p-4 shadow-sm md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none">
                <div className="flex gap-4"><Car className="h-6 w-6 text-primary shrink-0" /><div><h3 className="text-base md:text-xl font-bold mb-1 md:mb-2">Parkmöglichkeiten</h3>{location.parking.length ? <ul className="text-sm md:text-base text-muted-foreground space-y-1">{location.parking.map((parking) => <li key={parking}>{parking}</li>)}</ul> : <a className="inline-flex items-center gap-1 text-primary hover:underline" href={mapsParkingUrl(location)} target="_blank" rel="noopener noreferrer">Parkhäuser in der Nähe ansehen <ArrowUpRight className="h-4 w-4" /></a>}</div></div>
              </div>
              <div className="rounded-xl border border-border/60 bg-card p-4 shadow-sm md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none">
                <div className="flex gap-4"><Train className="h-6 w-6 text-primary shrink-0" /><div><h3 className="text-base md:text-xl font-bold mb-1 md:mb-2">Öffentliche Verkehrsmittel</h3>{location.station.length > 0 && <ul className="text-sm md:text-base text-muted-foreground space-y-1">{location.station.map((line) => <li key={line}>{line}</li>)}</ul>}</div></div>
              </div>
              <div className="rounded-xl border border-border/60 bg-card p-4 shadow-sm md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none">
                <div className="flex gap-4"><Phone className="h-6 w-6 text-primary shrink-0" /><div><h3 className="text-base md:text-xl font-bold mb-1 md:mb-2">Kontakt</h3><ul className="text-sm md:text-base text-muted-foreground space-y-1"><li><a className="hover:text-primary hover:underline" href={phoneHref(location)}>{location.phone}</a></li><li><a className="hover:text-primary hover:underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li></ul></div></div>
              </div>
            </div>
          </div>
          <div className="mt-6 sm:mt-10">
            <div className="h-[220px] sm:h-[360px] bg-muted rounded-lg overflow-hidden relative">
              <MapConsent mapUrl={mapUrl} title={`Karte: DermaScan360 ${location.city}`} className="absolute inset-0" />
            </div>
            <div className="mt-4 flex justify-center md:justify-start">
              <Button asChild variant="outline" className="bg-background border-border hover:bg-accent hover:text-accent-foreground shadow-sm">
                <a href={mapsDirectionsUrl(location)} target="_blank" rel="noopener noreferrer">
                  Route in Google Maps starten <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <CityServices city={location.city} bookingUrl={location.bookingUrl} />
      <Partners />
      <FAQ />
    </main>
    <Footer />
  </div>;
};