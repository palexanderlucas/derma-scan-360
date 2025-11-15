import { MapPin, Phone, Mail, Clock } from "lucide-react";
import logo from "@/assets/logo.jpg";
export const Footer = () => {
  return <footer className="bg-gray-900 text-gray-100 py-8 sm:py-10 md:py-12">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8 mb-6 sm:mb-7 md:mb-8">
          {/* Logo & Description */}
          <div className="space-y-3 sm:space-y-4">
            <img src={logo} alt="DermaScan360" className="h-12 sm:h-14 md:h-16 brightness-0 invert" style={{ mixBlendMode: 'screen' }} />
            <p className="text-xs sm:text-sm text-gray-400">
              Hautkrebs-Screening Osnabrück.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Kontakt</h3>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-400">
              <div className="flex items-start gap-1.5 sm:gap-2">
                <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 mt-0.5 sm:mt-1 shrink-0" />
                <span>Möserstraße 2-3<br />49074 Osnabrück</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                <span>+49 (0) 541 123456</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                <span>info@dermascan360.de</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Öffnungszeiten</h3>
            <div className="space-y-2 text-xs sm:text-sm text-gray-400">
              <div className="flex items-start gap-1.5 sm:gap-2">
                <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4 mt-0.5 sm:mt-1 shrink-0" />
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
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Schnelllinks</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
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

        <div className="pt-6 sm:pt-7 md:pt-8 border-t border-gray-800 text-center text-xs sm:text-sm text-gray-400">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <a href="#" className="hover:text-primary transition-colors">Impressum</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">Datenschutz</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">AGB</a>
          </div>
          <p>&copy; {new Date().getFullYear()} DermaScan360. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>;
};