import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.svg";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="DermaScan360 Logo" className="h-[72px]" />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <button onClick={() => scrollToSection("technologie")} className="text-sm font-medium hover:text-primary transition-colors">
            Technologie
          </button>
          <button onClick={() => scrollToSection("ablauf")} className="text-sm font-medium hover:text-primary transition-colors">
            Ablauf
          </button>
          <button onClick={() => scrollToSection("preise")} className="text-sm font-medium hover:text-primary transition-colors">
            Preise
          </button>
          <button onClick={() => scrollToSection("standort")} className="text-sm font-medium hover:text-primary transition-colors">
            Standort
          </button>
          <button onClick={() => scrollToSection("faq")} className="text-sm font-medium hover:text-primary transition-colors">
            FAQ
          </button>
        </div>

        <div className="flex items-center gap-3">
          <Button className="bg-primary hover:bg-primary/90 hidden sm:inline-flex">
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
            <button onClick={() => scrollToSection("standort")} className="text-left py-2 font-medium hover:text-primary transition-colors">
              Standort
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
