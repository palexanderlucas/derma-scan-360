import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
export const CorporateCTA = () => {
  return <section id="unternehmen" className="py-12 sm:py-16 md:py-20 bg-accent/30">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 md:text-5xl">
            Für Unternehmen
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4 sm:mb-6">
            Integrieren Sie Hautkrebsvorsorge in Ihr betriebliches Gesundheitsmanagement.  
Weniger Ausfälle - stärkere Mitarbeiterbindung - höhere Produktivität.
          </p>
          <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 md:text-xl">
            Wir bieten maßgeschneiderte Lösungen für Ihr Unternehmen – ob in unserer Filiale 
            oder direkt vor Ort in Ihrem Unternehmen – wir freuen uns über einen Austausch!
          </p>
          <Link to="/corporate">
            <Button size="lg" className="gap-2">
              Mehr erfahren
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>;
};