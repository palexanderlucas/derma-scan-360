import { MapPin, Phone, Mail, Clock } from "lucide-react";
import logo from "@/assets/logo.jpg";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <img src={logo} alt="DermaScan360" className="h-10 brightness-0 invert" />
            <p className="text-sm text-gray-400">
              Hautkrebs Screening auf höchstem Niveau mit modernster Technologie in Osnabrück.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Kontakt</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 shrink-0" />
                <span>Möserstraße 2-3<br />49074 Osnabrück</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+49 (0) 541 123456</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@dermascan360.de</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-semibold mb-4">Öffnungszeiten</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-1 shrink-0" />
                <div>
                  <p>Mo-Fr: 9:00 - 18:00 Uhr</p>
                  <p>Sa: 10:00 - 14:00 Uhr</p>
                  <p>So: Geschlossen</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Schnelllinks</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#technologie" className="hover:text-primary transition-colors">
                  Technologie
                </a>
              </li>
              <li>
                <a href="#ablauf" className="hover:text-primary transition-colors">
                  Ablauf
                </a>
              </li>
              <li>
                <a href="#preise" className="hover:text-primary transition-colors">
                  Preise
                </a>
              </li>
              <li>
                <a href="#standort" className="hover:text-primary transition-colors">
                  Standort
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <a href="#" className="hover:text-primary transition-colors">Impressum</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">Datenschutz</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">AGB</a>
          </div>
          <p>&copy; {new Date().getFullYear()} DermaScan360. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};
