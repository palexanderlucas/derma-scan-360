import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/dermascan360-logo.svg";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useMobileMenu } from "@/hooks/useMobileMenu";
import { NavLink } from "@/components/NavLink";
import { mainNavItems, cityNavItems } from "@/lib/navigation";
import { scrollToSection, scrollToTop } from "@/lib/scrollUtils";
import { locations } from "@/lib/locations";
import { locationPath } from "@/lib/locations";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import { MAIN_BOOKING_URL, openBookingUrl } from "@/lib/booking";

export const Header = () => {
  const { isOpen: isMenuOpen, toggle: toggleMenu, close: closeMenu } = useMobileMenu();
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const activeSection = useActiveSection();
  const location = useLocation();
  const isMainPage = location.pathname === '/';
  const city = locations.find((entry) => decodeURIComponent(location.pathname) === `/${entry.slug}`);
  const bookingUrl = city?.bookingUrl ?? MAIN_BOOKING_URL;
  const bookingLabel = "Termin buchen";
  const navItems = city ? cityNavItems : mainNavItems;
  const isScrollPage = isMainPage || !!city;
  
  const handleScrollToSection = (id: string) => {
    scrollToSection(id, closeMenu);
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 z-50 border-b shadow-sm">
      <nav className="container mx-auto px-3 sm:px-4 lg:px-6 h-16 sm:h-20 flex items-center justify-between">
        {isMainPage ? (
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 cursor-pointer"
            aria-label="Zum Seitenanfang"
          >
            <img src={logo} alt="DermaScan360 Logo" className="h-[70px] sm:h-[92px] lg:h-[104px]" />
          </button>
        ) : (
          <Link 
            to="/" 
            className="flex items-center gap-2 cursor-pointer"
            aria-label="Zur Startseite"
          >
            <img src={logo} alt="DermaScan360 Logo" className="h-[70px] sm:h-[92px] lg:h-[104px]" />
          </Link>
        )}
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => item.id === "standort" ? (
            <DropdownMenu key={item.id}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-auto px-0 py-0 text-sm font-medium text-foreground/80 hover:bg-transparent hover:text-primary data-[state=open]:text-primary">
                  {item.label}<ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="min-w-44">
                {locations.map((entry) => (
                  <DropdownMenuItem key={entry.slug} asChild>
                    <Link to={locationPath(entry)}>{entry.city}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <NavLink
              key={item.id}
              id={item.id}
              label={item.label}
              isMainPage={isScrollPage}
              isActive={activeSection === item.id}
              onScroll={handleScrollToSection}
              variant="desktop"
            />
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Button 
            className="bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-200 hidden sm:inline-flex text-sm lg:text-base px-3 lg:px-4 h-9 lg:h-10"
            onClick={() => openBookingUrl(bookingUrl)}
          >
            {bookingLabel}
          </Button>
          
          <button 
            onClick={toggleMenu}
            className="lg:hidden p-2 hover:bg-accent rounded-md transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => item.id === "standort" ? (
              <div key={item.id}>
                <Button variant="ghost" className="w-full justify-between px-0 py-2 text-base font-medium hover:bg-transparent hover:text-primary" aria-expanded={isLocationsOpen} aria-controls="mobile-locations" onClick={() => setIsLocationsOpen((open) => !open)}>
                  {item.label}<ChevronDown className={`h-4 w-4 transition-transform ${isLocationsOpen ? "rotate-180" : ""}`} />
                </Button>
                {isLocationsOpen && (
                  <div id="mobile-locations" className="flex flex-col border-l border-border ml-2 pl-4 pb-2">
                    {locations.map((entry) => (
                      <Button key={entry.slug} asChild variant="ghost" className="justify-start px-0 text-base font-normal hover:bg-transparent hover:text-primary">
                        <Link to={locationPath(entry)} onClick={() => { setIsLocationsOpen(false); closeMenu(); }}>{entry.city}</Link>
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.id}
                id={item.id}
                label={item.label}
                isMainPage={isScrollPage}
                isActive={activeSection === item.id}
                onScroll={handleScrollToSection}
                variant="mobile"
              />
            ))}
            <Button 
              className="bg-primary hover:bg-primary/90 w-full mt-2 sm:hidden"
              onClick={() => {
                 openBookingUrl(bookingUrl);
                closeMenu();
              }}
            >
               {bookingLabel}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
