import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";

export const CorporateHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
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
      <nav className="container mx-auto px-3 sm:px-4 lg:px-6 h-16 sm:h-20 flex items-center justify-between">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 cursor-pointer"
          aria-label="Zum Seitenanfang"
        >
          <img src={logo} alt="DermaScan360 Logo" className="h-[70px] sm:h-[92px] lg:h-[104px]" />
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <Link 
            to="/" 
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-200 relative group"
          >
            DermaScan360
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
          </Link>
          <button onClick={() => scrollToSection("vorteile")} className="text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-200 relative group">
            Vorteile
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
          </button>
          <button onClick={() => scrollToSection("angebot")} className="text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-200 relative group">
            Unser Angebot
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
          </button>
          <button onClick={() => scrollToSection("kontakt")} className="text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-200 relative group">
            Kontakt
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
          </button>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Button 
            onClick={() => scrollToSection("kontakt")}
            className="bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-200 hidden sm:inline-flex text-sm lg:text-base px-3 lg:px-4 h-9 lg:h-10"
          >
            Kontakt aufnehmen
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
        <div className="lg:hidden absolute top-full left-0 w-full bg-background backdrop-blur-xl border-b shadow-lg">
          <div className="container mx-auto px-3 sm:px-4 py-4 flex flex-col gap-3">
            <Link 
              to="/"
              className="text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2 border-b border-border/50"
              onClick={() => setIsMenuOpen(false)}
            >
              DermaScan360
            </Link>
            <button 
              onClick={() => scrollToSection("vorteile")} 
              className="text-base font-medium text-foreground/80 hover:text-primary transition-colors text-left py-2 border-b border-border/50"
            >
              Vorteile
            </button>
            <button 
              onClick={() => scrollToSection("angebot")} 
              className="text-base font-medium text-foreground/80 hover:text-primary transition-colors text-left py-2 border-b border-border/50"
            >
              Unser Angebot
            </button>
            <button 
              onClick={() => scrollToSection("kontakt")} 
              className="text-base font-medium text-foreground/80 hover:text-primary transition-colors text-left py-2 border-b border-border/50"
            >
              Kontakt
            </button>
            <Button 
              onClick={() => scrollToSection("kontakt")}
              className="w-full mt-2"
            >
              Kontakt aufnehmen
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
