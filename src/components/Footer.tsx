import { Link, useLocation } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { mainNavItems, corporateNavItems, cityNavItems } from "@/lib/navigation";
import { locations, locationPath, CONTACT_EMAIL } from "@/lib/locations";
import { scrollToSection, scrollToTop } from "@/lib/scrollUtils";
import { cn } from "@/lib/utils";

export const Footer = () => {
  const activeSection = useActiveSection();
  const location = useLocation();
  const isCorporatePage = location.pathname === '/corporate';
  const isMainPage = location.pathname === '/';
  const isCityPage = locations.some((entry) => decodeURIComponent(location.pathname) === `/${entry.slug}`);

  const navItems = isCorporatePage ? corporateNavItems : isCityPage ? cityNavItems.filter((item) => item.id !== "standort") : mainNavItems;

  const renderNavLink = (id: string, label: string) => {
    const isActive = activeSection === id;
    
    if (isCorporatePage || isMainPage || isCityPage) {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 mb-6 sm:mb-7 md:mb-8">
          <div className="space-y-3 sm:space-y-4">
            {isMainPage ? (
              <button 
                onClick={scrollToTop}
                className="text-xs font-semibold sm:text-base transition-colors cursor-pointer block text-left text-inherit"
              >
                DermaScan360 - Hautkrebsscreening
              </button>
            ) : (
              <Link 
                to="/" 
                className="text-xs font-semibold sm:text-base transition-colors cursor-pointer block text-inherit"
              >
                DermaScan360 - Hautkrebsscreening
              </Link>
            )}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-400 hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4 shrink-0" />
              {CONTACT_EMAIL}
            </a>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Standorte</h3>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-gray-400">
              {locations.map((entry) => (
                <li key={entry.slug}>
                  <Link
                    to={locationPath(entry)}
                    className="font-semibold text-gray-100 hover:text-primary transition-colors"
                  >
                    {entry.city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>



          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Schnelllinks</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
              {(isCorporatePage || isCityPage) && (
                <li>
                  <Link to="/" className="hover:text-primary transition-colors">
                    {isCityPage ? "Zur Startseite" : "Home"}
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
            <span aria-hidden="true">•</span>
            <a href="https://www.instagram.com/dermascan360" target="_blank" rel="noopener noreferrer" aria-label="DermaScan360 auf Instagram" className="inline-flex items-center gap-1.5 hover:text-primary transition-colors">
              <Instagram className="h-4 w-4" /> Instagram
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} DermaScan360. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};
