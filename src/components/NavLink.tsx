import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  id: string;
  label: string;
  isMainPage: boolean;
  isActive?: boolean;
  onScroll: (id: string) => void;
  variant?: "desktop" | "mobile";
}

export const NavLink = ({ 
  id, 
  label, 
  isMainPage, 
  isActive = false, 
  onScroll,
  variant = "desktop"
}: NavLinkProps) => {
  if (variant === "mobile") {
    if (isMainPage) {
      return (
        <button 
          onClick={() => onScroll(id)} 
          className={cn(
            "text-left py-2 font-medium transition-colors",
            isActive ? "text-primary" : "hover:text-primary"
          )}
        >
          {label}
        </button>
      );
    }
    return (
      <Link 
        to={`/#${id}`} 
        className="text-left py-2 font-medium hover:text-primary transition-colors"
      >
        {label}
      </Link>
    );
  }

  // Desktop variant
  if (isMainPage) {
    return (
      <button 
        onClick={() => onScroll(id)} 
        className={cn(
          "text-sm font-medium transition-all duration-200 relative group",
          isActive ? "text-primary" : "text-foreground/80 hover:text-primary"
        )}
      >
        {label}
        <span className={cn(
          "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-200",
          isActive ? "w-full" : "w-0 group-hover:w-full"
        )} />
      </button>
    );
  }

  return (
    <Link 
      to={`/#${id}`} 
      className="text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-200 relative group"
    >
      {label}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
    </Link>
  );
};
