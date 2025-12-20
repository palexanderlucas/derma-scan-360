import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.svg";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useMobileMenu } from "@/hooks/useMobileMenu";
import { BookingDialog } from "@/components/BookingDialog";
import { NavLink } from "@/components/NavLink";
import { mainNavItems } from "@/lib/navigation";
import { scrollToSection, scrollToTop } from "@/lib/scrollUtils";

export const Header = () => {
  const { isOpen: isMenuOpen, toggle: toggleMenu, close: closeMenu } = useMobileMenu();
  const [showBooking, setShowBooking] = useState(false);
  const activeSection = useActiveSection();
  const location = useLocation();
  const isMainPage = location.pathname === '/';
  
  const handleScrollToSection = (id: string) => {
    scrollToSection(id, closeMenu);
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 z-50 border-b shadow-sm">
      <BookingDialog open={showBooking} onOpenChange={setShowBooking} />
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
          {mainNavItems.map((item) => (
            <NavLink
              key={item.id}
              id={item.id}
              label={item.label}
              isMainPage={isMainPage}
              isActive={activeSection === item.id}
              onScroll={handleScrollToSection}
              variant="desktop"
            />
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Button 
            className="bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-200 hidden sm:inline-flex text-sm lg:text-base px-3 lg:px-4 h-9 lg:h-10"
            onClick={() => setShowBooking(true)}
          >
            Termin buchen
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
            {mainNavItems.map((item) => (
              <NavLink
                key={item.id}
                id={item.id}
                label={item.label}
                isMainPage={isMainPage}
                isActive={activeSection === item.id}
                onScroll={handleScrollToSection}
                variant="mobile"
              />
            ))}
            <Button 
              className="bg-primary hover:bg-primary/90 w-full mt-2 sm:hidden"
              onClick={() => {
                setShowBooking(true);
                closeMenu();
              }}
            >
              Termin buchen
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
