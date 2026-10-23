import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { locations, locationPath } from "@/lib/locations";
import { openBookingUrl } from "@/lib/booking";

export const Location = () => (
  <section id="standort" className="py-16 sm:py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-3 sm:px-4 lg:px-8 max-w-[1600px]">
      <div className="mb-10 sm:mb-14 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Unsere Standorte</h2>
        <p className="text-muted-foreground text-base sm:text-lg">Unsere DermaScan360 Standorte in Osnabrück, Köln und Bonn</p>
      </div>
      <div aria-label="Standorte" className="flex lg:grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 overflow-x-auto lg:overflow-visible snap-x snap-mandatory pb-5 -mx-3 px-3 sm:-mx-4 sm:px-4 lg:mx-0 lg:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {locations.map((location) => (
          <article key={location.slug} className="snap-center shrink-0 w-[84%] sm:w-[62%] lg:w-auto bg-card border border-border rounded-lg overflow-hidden flex flex-col shadow-sm">
            <div className="relative aspect-[3/2] bg-muted overflow-hidden">
              <img src={location.image} alt={location.imageAlt} width={1200} height={800} className="absolute inset-0 w-full h-full object-cover object-top" />
              {!location.isPracticePhoto && <span className="absolute bottom-2 right-2 bg-background/90 text-foreground text-xs px-2 py-1 rounded-sm">Stadtansicht · Praxisfoto folgt</span>}
            </div>
            <div className="p-5 sm:p-6 flex flex-col flex-1">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">{location.city}</h3>
              <p className="flex items-start gap-2 text-muted-foreground mb-6"><MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" /><span>{location.floor && <>{location.floor}<br /></>}{location.street}<br />{location.postal}</span></p>
              <Button className="w-full mt-auto" onClick={() => openBookingUrl(location.bookingUrl)}><CalendarDays className="h-4 w-4" />Termin buchen</Button>
              <Button asChild variant="link" className="mt-2 self-start px-0"><Link to={locationPath(location)}>Mehr erfahren <ArrowUpRight className="h-4 w-4" /></Link></Button>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-6 sm:mt-8 rounded-lg border border-primary/25 bg-accent px-5 py-5 sm:px-8 sm:py-6 flex items-start gap-4">
        <MapPin className="h-6 w-6 text-primary shrink-0 mt-0.5" />
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-accent-foreground mb-1">Coming soon: Köln Zentrum, Gütersloh</h3>
          <p className="text-sm sm:text-base text-accent-foreground/90 leading-relaxed">Unsere neuen Standorte in Köln Zentrum und Gütersloh sind in Planung. Bleiben Sie informiert über die Eröffnung!</p>
        </div>
      </div>
    </div>
  </section>
);