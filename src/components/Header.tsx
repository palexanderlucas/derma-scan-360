import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";

export const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="DermaScan360 Logo" className="h-20" />
        </div>
        
        <div className="hidden md:flex items-center gap-6">
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

        <Button className="bg-primary hover:bg-primary/90">
          Termin buchen
        </Button>
      </nav>
    </header>
  );
};
