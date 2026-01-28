import { MapPin, Mail, Clock } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { openingHours } from "@/lib/openingHours";
import { useActiveSection } from "@/hooks/useActiveSection";
import { mainNavItems, corporateNavItems } from "@/lib/navigation";
import { scrollToSection, scrollToTop } from "@/lib/scrollUtils";
import { cn } from "@/lib/utils";

const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/8HeqvpVGXtFA8QQh7";

export const Footer = () => {
  const activeSection = useActiveSection();
  const location = useLocation();
  const isCorporatePage = location.pathname === '/corporate';
  const isMainPage = location.pathname === '/';

  const navItems = isCorporatePage ? corporateNavItems : mainNavItems;

  const renderNavLink = (id: string, label: string) => {
    const isActive = activeSection === id;
    
    if (isCorporatePage || isMainPage) {
      return (
        <button 
          onClick={() => scrollToSection(id)} 
          className={cn(
            "hover:text-primary transition-colors",
            isActive && "text-primary font-medium"
          )}
        >
          {label}
        </button>
      );
    }
    
    return (
      <Link to={`/#${id}`} className="hover:text-primary transition-colors">
        {label}
      </Link>
    );
  };

  return (
    <footer className="bg-gray-900 text-gray-100 py-8 sm:py-10 md:py-12">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8 mb-6 sm:mb-7 md:mb-8">
          {/* Logo & Description */}
          <div className="space-y-3 sm:space-y-4">
            {isMainPage ? (
              <button 
                onClick={scrollToTop}
                className="text-xs font-semibold sm:text-base transition-colors cursor-pointer block text-left text-inherit"
              >
                DermaScan360 - Hautkrebs-Screening Osnabrück.
              </button>
            ) : (
              <Link 
                to="/" 
                className="text-xs font-semibold sm:text-base transition-colors cursor-pointer block text-inherit"
              >
                DermaScan360 - Hautkrebs-Screening Osnabrück.
              </Link>
            )}
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Kontakt</h3>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-400">
              <button 
                onClick={() => window.open(GOOGLE_MAPS_URL, '_blank')}
                className="flex items-start gap-1.5 sm:gap-2 hover:text-primary transition-colors text-left"
              >
                <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 mt-0.5 sm:mt-1 shrink-0" />
                <span>Möserstraße 2-3<br />49074 Osnabrück</span>
              </button>
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
                  {openingHours.map(item => (
                    <p key={item.day}>{item.day}: {item.hours}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Schnelllinks</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
              {isCorporatePage && (
                <li>
                  <Link to="/" className="hover:text-primary transition-colors">
                    ​Home
                  </Link>
                </li>
              )}
              {navItems.map((item) => (
                <li key={item.id}>
                  {renderNavLink(item.id, item.label)}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-7 md:pt-8 border-t border-gray-800 text-center text-xs sm:text-sm text-gray-400">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <Link to="/impressum" className="hover:text-primary transition-colors">Impressum</Link>
            <span>•</span>
            <Link to="/datenschutz" className="hover:text-primary transition-colors">Datenschutz</Link>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">AGB</a>
          </div>
          <p>&copy; {new Date().getFullYear()} DermaScan360. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};
