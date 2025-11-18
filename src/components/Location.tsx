import { MapPin, Car, Train, Bus, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openingHours } from "@/lib/openingHours";
export const Location = () => {
  return <section id="standort" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 md:text-5xl">
            Unser Standort in Osnabrück
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Zentral gelegen in der Innenstadt – gut erreichbar aus der gesamten Region
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-6xl mx-auto">
          {/* Map placeholder */}
          <div className="relative h-[280px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-muted rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
            <div className="absolute inset-0 flex items-center justify-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.1871234567890!2d8.043611!3d52.278611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDE2JzQzLjAiTiA4wrAwMiczdTciRQ!5e0!3m2!1sde!2sde!4v1234567890" width="100%" height="100%" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="DermaScan360 Standort Osnabrück"></iframe>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
            {/* Address */}
            <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 bg-card rounded-lg sm:rounded-xl border">
              <div className="p-2 sm:p-2.5 md:p-3 bg-primary/10 rounded-lg shrink-0">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold sm:text-lg mb-1.5 sm:mb-2 text-base">Osnabrück Zentrum</h3>
                <p className="text-muted-foreground sm:text-sm md:text-base text-sm">
                  Möserstraße 2-3<br />
                  49074 Osnabrück
                </p>
                <Button variant="link" className="px-0 mt-1.5 sm:mt-2 text-xs sm:text-sm">
                  In Google Maps öffnen
                </Button>
              </div>
            </div>

            {/* Parking */}
            <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 bg-card rounded-lg sm:rounded-xl border">
              <div className="p-2 sm:p-2.5 md:p-3 bg-primary/10 rounded-lg shrink-0">
                <Car className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2">Parkmöglichkeiten</h3>
                <ul className="text-muted-foreground space-y-1 text-xs sm:text-sm">
                  <li className="text-sm">• Haarmannsbrunnen: 1 min Fußweg</li>
                  <li className="text-sm">• Parkhaus Sparkasse: 2 min Fußweg</li>
                  <li className="text-sm">• Parkhaus Galeria Kaufhof: 3 min Fußweg</li>
                </ul>
              </div>
            </div>

            {/* Public Transport */}
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="flex items-start gap-3 sm:gap-3 p-4 sm:p-4 bg-card rounded-lg sm:rounded-xl border">
                <div className="p-2 sm:p-2 bg-primary/10 rounded-lg shrink-0">
                  <Train className="h-5 w-5 sm:h-5 sm:w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1.5 sm:mb-1 text-base sm:text-base">Hauptbahnhof</h4>
                  <p className="text-sm sm:text-sm text-muted-foreground">11 min Fußweg</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-3 p-4 sm:p-4 bg-card rounded-lg sm:rounded-xl border">
                <div className="p-2 sm:p-2 bg-primary/10 rounded-lg shrink-0">
                  <Bus className="h-5 w-5 sm:h-5 sm:w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1.5 sm:mb-1 text-base sm:text-base">Berliner Platz</h4>
                  <p className="text-sm sm:text-sm text-muted-foreground">3 min Fußweg</p>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 bg-card rounded-lg sm:rounded-xl border">
              <div className="p-2 sm:p-2.5 md:p-3 bg-primary/10 rounded-lg shrink-0">
                <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div className="w-full">
                <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3">Öffnungszeiten</h3>
                <div className="space-y-1.5">
                  {openingHours.map(item => <div key={item.day} className="flex justify-between text-xs sm:text-sm">
                      <span className="text-muted-foreground">{item.day}</span>
                      <span className="font-medium">{item.hours}</span>
                    </div>)}
                </div>
              </div>
            </div>

            {/* Coming Soon */}
            <div className="p-4 sm:p-5 md:p-6 bg-accent/50 rounded-lg sm:rounded-xl">
              <h3 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2">Bald auch in Köln</h3>
              <p className="text-muted-foreground sm:text-sm md:text-base text-sm">
                Unser zweiter Standort in Köln Innenstadt ist in Planung. 
                Bleiben Sie informiert über die Eröffnung!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};