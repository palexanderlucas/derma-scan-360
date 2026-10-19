import { useState, useEffect } from "react";
import { MapPin, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CONSENT_KEY = "dermascan360_maps_consent";

interface MapConsentProps {
  mapUrl: string;
  title: string;
  className?: string;
}

export const MapConsent = ({ mapUrl, title, className = "" }: MapConsentProps) => {
  const [hasConsent, setHasConsent] = useState<boolean | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    setHasConsent(stored === "true");
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "true");
    setHasConsent(true);
  };

  // Still loading consent state
  if (hasConsent === null) {
    return (
      <div className={`flex items-center justify-center bg-muted ${className}`}>
        <div className="animate-pulse text-muted-foreground">Lädt...</div>
      </div>
    );
  }

  // User has given consent - show the map
  if (hasConsent) {
    return (
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
        className={className}
      />
    );
  }

  // No consent yet - show placeholder with consent request
  return (
    <div className={`flex flex-col items-center justify-center bg-muted p-4 sm:p-6 text-center ${className}`}>
      <div className="max-w-sm space-y-2 sm:space-y-4">
        <div className="mx-auto w-10 h-10 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center">
          <MapPin className="h-5 w-5 sm:h-8 sm:w-8 text-primary" />
        </div>
        
        <div className="space-y-1 sm:space-y-2">
          <h3 className="font-semibold text-base sm:text-lg">Google Maps</h3>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Zum Anzeigen der Karte werden Daten an Google übertragen. 
            Mehr dazu in unserer{" "}
            <Link to="/datenschutz" className="text-primary hover:underline">
              Datenschutzerklärung
            </Link>
            .
          </p>
        </div>

        <Button onClick={handleAccept} size="sm" className="gap-2 h-9 sm:h-10 sm:text-sm">
          <Shield className="h-4 w-4" />
          Karte laden
        </Button>
      </div>
    </div>
  );
};

// Hook to check/revoke consent (useful for privacy settings)
export const useMapConsent = () => {
  const hasConsent = () => localStorage.getItem(CONSENT_KEY) === "true";
  const revokeConsent = () => localStorage.removeItem(CONSENT_KEY);
  
  return { hasConsent, revokeConsent };
};
