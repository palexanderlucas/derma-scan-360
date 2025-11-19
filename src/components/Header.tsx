import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // Header height offset
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
      <nav className="container mx-auto px-3 sm:px-4 lg:px-6 h-16 sm:h-20 flex items-center justify-between">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="flex items-center gap-2 cursor-pointer"
          aria-label="Zur Startseite"
        >
          <img src={logo} alt="DermaScan360 Logo" className="h-[70px] sm:h-[92px] lg:h-[104px]" />
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <button onClick={() => scrollToSection("technologie")} className="text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-200 relative group">
            Technologie
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
          </button>
          <button onClick={() => scrollToSection("ablauf")} className="text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-200 relative group">
            Ablauf
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
          </button>
          <button onClick={() => scrollToSection("preise")} className="text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-200 relative group">
            Preise
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
          </button>
          <button onClick={() => scrollToSection("team")} className="text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-200 relative group">
            Team
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
          </button>
          <button onClick={() => scrollToSection("standort")} className="text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-200 relative group">
            Standort
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
          </button>
          <button onClick={() => scrollToSection("unternehmen")} className="text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-200 relative group">
            Für Unternehmen
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
          </button>
          <button onClick={() => scrollToSection("kommunen")} className="text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-200 relative group">
            Für Kommunen
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
          </button>
          <button onClick={() => scrollToSection("faq")} className="text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-200 relative group">
            FAQ
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
          </button>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Button className="bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-200 hidden sm:inline-flex text-sm lg:text-base px-3 lg:px-4 h-9 lg:h-10">
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
            <button onClick={() => scrollToSection("technologie")} className="text-left py-2 font-medium hover:text-primary transition-colors">
              Technologie
            </button>
            <button onClick={() => scrollToSection("ablauf")} className="text-left py-2 font-medium hover:text-primary transition-colors">
              Ablauf
            </button>
            <button onClick={() => scrollToSection("preise")} className="text-left py-2 font-medium hover:text-primary transition-colors">
              Preise
            </button>
            <button onClick={() => scrollToSection("team")} className="text-left py-2 font-medium hover:text-primary transition-colors">
              Team
            </button>
            <button onClick={() => scrollToSection("standort")} className="text-left py-2 font-medium hover:text-primary transition-colors">
              Standort
            </button>
            <button onClick={() => scrollToSection("unternehmen")} className="text-left py-2 font-medium hover:text-primary transition-colors">
              Für Unternehmen
            </button>
            <button onClick={() => scrollToSection("kommunen")} className="text-left py-2 font-medium hover:text-primary transition-colors">
              Für Kommunen
            </button>
            <button onClick={() => scrollToSection("faq")} className="text-left py-2 font-medium hover:text-primary transition-colors">
              FAQ
            </button>
            <Button className="bg-primary hover:bg-primary/90 w-full mt-2 sm:hidden">
              Termin buchen
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
