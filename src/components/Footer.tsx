import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { openingHours } from "@/lib/openingHours";
import { useActiveSection } from "@/hooks/useActiveSection";
export const Footer = () => {
  const activeSection = useActiveSection();
  const location = useLocation();
  const isCorporatePage = location.pathname === '/corporate';
  const isMainPage = location.pathname === '/';
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Mobile: 64px, Tablet/Desktop: 80px
      const headerOffset = window.innerWidth < 768 ? 64 : 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  return <footer className="bg-gray-900 text-gray-100 py-8 sm:py-10 md:py-12">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8 mb-6 sm:mb-7 md:mb-8">
          {/* Logo & Description */}
          <div className="space-y-3 sm:space-y-4">
            <p className="text-xs text-gray-400 font-semibold sm:text-base">
              DermaScan360 - Hautkrebs-Screening Osnabrück.
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
                  {openingHours.map(item => <p key={item.day}>{item.day}: {item.hours}</p>)}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Schnelllinks</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
              {isCorporatePage ? <>
                  <li>
                    <Link to="/" className="hover:text-primary transition-colors">
                      ​Home
                    </Link>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection("vorteile")} className={`hover:text-primary transition-colors ${activeSection === "vorteile" ? "text-primary font-medium" : ""}`}>
                      Vorteile
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection("hautkrebs")} className={`hover:text-primary transition-colors ${activeSection === "hautkrebs" ? "text-primary font-medium" : ""}`}>
                      Hautkrebs
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection("angebot")} className={`hover:text-primary transition-colors ${activeSection === "angebot" ? "text-primary font-medium" : ""}`}>
                      Unser Angebot
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection("kontakt")} className={`hover:text-primary transition-colors ${activeSection === "kontakt" ? "text-primary font-medium" : ""}`}>
                      Kontakt
                    </button>
                  </li>
                </> : <>
                  <li>
                    {isMainPage ? (
                      <button onClick={() => scrollToSection("technologie")} className={`hover:text-primary transition-colors ${activeSection === "technologie" ? "text-primary font-medium" : ""}`}>
                        Technologie
                      </button>
                    ) : (
                      <Link to="/#technologie" className="hover:text-primary transition-colors">
                        Technologie
                      </Link>
                    )}
                  </li>
                  <li>
                    {isMainPage ? (
                      <button onClick={() => scrollToSection("ablauf")} className={`hover:text-primary transition-colors ${activeSection === "ablauf" ? "text-primary font-medium" : ""}`}>
                        Ablauf
                      </button>
                    ) : (
                      <Link to="/#ablauf" className="hover:text-primary transition-colors">
                        Ablauf
                      </Link>
                    )}
                  </li>
                  <li>
                    {isMainPage ? (
                      <button onClick={() => scrollToSection("preise")} className={`hover:text-primary transition-colors ${activeSection === "preise" ? "text-primary font-medium" : ""}`}>
                        Preise
                      </button>
                    ) : (
                      <Link to="/#preise" className="hover:text-primary transition-colors">
                        Preise
                      </Link>
                    )}
                  </li>
                  <li>
                    {isMainPage ? (
                      <button onClick={() => scrollToSection("standort")} className={`hover:text-primary transition-colors ${activeSection === "standort" ? "text-primary font-medium" : ""}`}>
                        Standort
                      </button>
                    ) : (
                      <Link to="/#standort" className="hover:text-primary transition-colors">
                        Standort
                      </Link>
                    )}
                  </li>
                  <li>
                    {isMainPage ? (
                      <button onClick={() => scrollToSection("unternehmen")} className={`hover:text-primary transition-colors ${activeSection === "unternehmen" ? "text-primary font-medium" : ""}`}>
                        Für Unternehmen
                      </button>
                    ) : (
                      <Link to="/#unternehmen" className="hover:text-primary transition-colors">
                        Für Unternehmen
                      </Link>
                    )}
                  </li>
                  <li>
                    {isMainPage ? (
                      <button onClick={() => scrollToSection("kommunen")} className={`hover:text-primary transition-colors ${activeSection === "kommunen" ? "text-primary font-medium" : ""}`}>
                        Für Kommunen
                      </button>
                    ) : (
                      <Link to="/#kommunen" className="hover:text-primary transition-colors">
                        Für Kommunen
                      </Link>
                    )}
                  </li>
                  <li>
                    {isMainPage ? (
                      <button onClick={() => scrollToSection("team")} className={`hover:text-primary transition-colors ${activeSection === "team" ? "text-primary font-medium" : ""}`}>
                        Team
                      </button>
                    ) : (
                      <Link to="/#team" className="hover:text-primary transition-colors">
                        Team
                      </Link>
                    )}
                  </li>
                  <li>
                    {isMainPage ? (
                      <button onClick={() => scrollToSection("faq")} className={`hover:text-primary transition-colors ${activeSection === "faq" ? "text-primary font-medium" : ""}`}>
                        FAQ
                      </button>
                    ) : (
                      <Link to="/#faq" className="hover:text-primary transition-colors">
                        FAQ
                      </Link>
                    )}
                  </li>
                </>}
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-7 md:pt-8 border-t border-gray-800 text-center text-xs sm:text-sm text-gray-400">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <a href="#" className="hover:text-primary transition-colors">Impressum</a>
            <span>•</span>
            <Link to="/datenschutz" className="hover:text-primary transition-colors">Datenschutz</Link>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">AGB</a>
          </div>
          <p>&copy; {new Date().getFullYear()} DermaScan360. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>;
};