import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.svg";
import { useActiveSection } from "@/hooks/useActiveSection";
import { BookingDialog } from "@/components/BookingDialog";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const activeSection = useActiveSection();
  const location = useLocation();
  const isMainPage = location.pathname === '/';

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isMenuOpen]);
  
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
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 z-50 border-b shadow-sm">
      <BookingDialog open={showBooking} onOpenChange={setShowBooking} />
      <nav className="container mx-auto px-3 sm:px-4 lg:px-6 h-16 sm:h-20 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 cursor-pointer"
          aria-label="Zur Startseite"
        >
          <img src={logo} alt="DermaScan360 Logo" className="h-[70px] sm:h-[92px] lg:h-[104px]" />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {isMainPage ? (
            <button 
              onClick={() => scrollToSection("technologie")} 
              className={`text-sm font-medium transition-all duration-200 relative group ${
                activeSection === "technologie" ? "text-primary" : "text-foreground/80 hover:text-primary"
              }`}
            >
              Technologie
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-200 ${
                activeSection === "technologie" ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </button>
          ) : (
            <Link 
              to="/#technologie" 
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-200 relative group"
            >
              Technologie
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
            </Link>
          )}
          {isMainPage ? (
            <button 
              onClick={() => scrollToSection("ablauf")} 
              className={`text-sm font-medium transition-all duration-200 relative group ${
                activeSection === "ablauf" ? "text-primary" : "text-foreground/80 hover:text-primary"
              }`}
            >
              Ablauf
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-200 ${
                activeSection === "ablauf" ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </button>
          ) : (
            <Link 
              to="/#ablauf" 
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-200 relative group"
            >
              Ablauf
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
            </Link>
          )}
          {isMainPage ? (
            <button 
              onClick={() => scrollToSection("preise")} 
              className={`text-sm font-medium transition-all duration-200 relative group ${
                activeSection === "preise" ? "text-primary" : "text-foreground/80 hover:text-primary"
              }`}
            >
              Preise
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-200 ${
                activeSection === "preise" ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </button>
          ) : (
            <Link 
              to="/#preise" 
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-200 relative group"
            >
              Preise
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
            </Link>
          )}
          {isMainPage ? (
            <button 
              onClick={() => scrollToSection("standort")} 
              className={`text-sm font-medium transition-all duration-200 relative group ${
                activeSection === "standort" ? "text-primary" : "text-foreground/80 hover:text-primary"
              }`}
            >
              Standort
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-200 ${
                activeSection === "standort" ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </button>
          ) : (
            <Link 
              to="/#standort" 
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-200 relative group"
            >
              Standort
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
            </Link>
          )}
          {isMainPage ? (
            <button 
              onClick={() => scrollToSection("unternehmen")} 
              className={`text-sm font-medium transition-all duration-200 relative group ${
                activeSection === "unternehmen" ? "text-primary" : "text-foreground/80 hover:text-primary"
              }`}
            >
              Für Unternehmen
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-200 ${
                activeSection === "unternehmen" ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </button>
          ) : (
            <Link 
              to="/#unternehmen" 
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-200 relative group"
            >
              Für Unternehmen
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
            </Link>
          )}
          {isMainPage ? (
            <button 
              onClick={() => scrollToSection("kommunen")} 
              className={`text-sm font-medium transition-all duration-200 relative group ${
                activeSection === "kommunen" ? "text-primary" : "text-foreground/80 hover:text-primary"
              }`}
            >
              Für Kommunen
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-200 ${
                activeSection === "kommunen" ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </button>
          ) : (
            <Link 
              to="/#kommunen" 
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-200 relative group"
            >
              Für Kommunen
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
            </Link>
          )}
          {isMainPage ? (
            <button 
              onClick={() => scrollToSection("team")} 
              className={`text-sm font-medium transition-all duration-200 relative group ${
                activeSection === "team" ? "text-primary" : "text-foreground/80 hover:text-primary"
              }`}
            >
              Team
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-200 ${
                activeSection === "team" ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </button>
          ) : (
            <Link 
              to="/#team" 
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-200 relative group"
            >
              Team
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
            </Link>
          )}
          {isMainPage ? (
            <button 
              onClick={() => scrollToSection("faq")} 
              className={`text-sm font-medium transition-all duration-200 relative group ${
                activeSection === "faq" ? "text-primary" : "text-foreground/80 hover:text-primary"
              }`}
            >
              FAQ
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-200 ${
                activeSection === "faq" ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </button>
          ) : (
            <Link 
              to="/#faq" 
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-200 relative group"
            >
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
            </Link>
          )}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Button 
            className="bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-200 hidden sm:inline-flex text-sm lg:text-base px-3 lg:px-4 h-9 lg:h-10"
            onClick={() => setShowBooking(true)}
          >
            Termin buchen
          </Button>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
            {isMainPage ? (
              <button 
                onClick={() => scrollToSection("technologie")} 
                className={`text-left py-2 font-medium transition-colors ${
                  activeSection === "technologie" ? "text-primary" : "hover:text-primary"
                }`}
              >
                Technologie
              </button>
            ) : (
              <Link to="/#technologie" className="text-left py-2 font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Technologie
              </Link>
            )}
            {isMainPage ? (
              <button 
                onClick={() => scrollToSection("ablauf")} 
                className={`text-left py-2 font-medium transition-colors ${
                  activeSection === "ablauf" ? "text-primary" : "hover:text-primary"
                }`}
              >
                Ablauf
              </button>
            ) : (
              <Link to="/#ablauf" className="text-left py-2 font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Ablauf
              </Link>
            )}
            {isMainPage ? (
              <button 
                onClick={() => scrollToSection("preise")} 
                className={`text-left py-2 font-medium transition-colors ${
                  activeSection === "preise" ? "text-primary" : "hover:text-primary"
                }`}
              >
                Preise
              </button>
            ) : (
              <Link to="/#preise" className="text-left py-2 font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Preise
              </Link>
            )}
            {isMainPage ? (
              <button 
                onClick={() => scrollToSection("standort")} 
                className={`text-left py-2 font-medium transition-colors ${
                  activeSection === "standort" ? "text-primary" : "hover:text-primary"
                }`}
              >
                Standort
              </button>
            ) : (
              <Link to="/#standort" className="text-left py-2 font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Standort
              </Link>
            )}
            {isMainPage ? (
              <button 
                onClick={() => scrollToSection("unternehmen")} 
                className={`text-left py-2 font-medium transition-colors ${
                  activeSection === "unternehmen" ? "text-primary" : "hover:text-primary"
                }`}
              >
                Für Unternehmen
              </button>
            ) : (
              <Link to="/#unternehmen" className="text-left py-2 font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Für Unternehmen
              </Link>
            )}
            {isMainPage ? (
              <button 
                onClick={() => scrollToSection("kommunen")} 
                className={`text-left py-2 font-medium transition-colors ${
                  activeSection === "kommunen" ? "text-primary" : "hover:text-primary"
                }`}
              >
                Für Kommunen
              </button>
            ) : (
              <Link to="/#kommunen" className="text-left py-2 font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Für Kommunen
              </Link>
            )}
            {isMainPage ? (
              <button 
                onClick={() => scrollToSection("team")} 
                className={`text-left py-2 font-medium transition-colors ${
                  activeSection === "team" ? "text-primary" : "hover:text-primary"
                }`}
              >
                Team
              </button>
            ) : (
              <Link to="/#team" className="text-left py-2 font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Team
              </Link>
            )}
            {isMainPage ? (
              <button 
                onClick={() => scrollToSection("faq")} 
                className={`text-left py-2 font-medium transition-colors ${
                  activeSection === "faq" ? "text-primary" : "hover:text-primary"
                }`}
              >
                FAQ
              </button>
            ) : (
              <Link to="/#faq" className="text-left py-2 font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                FAQ
              </Link>
            )}
            <Button 
              className="bg-primary hover:bg-primary/90 w-full mt-2 sm:hidden"
              onClick={() => {
                setShowBooking(true);
                setIsMenuOpen(false);
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
