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
            "text-left py-2 font-medium",
            isActive ? "text-primary" : ""
          )}
        >
          {label}
        </button>
      );
    }
    return (
      <Link 
        to={`/#${id}`} 
        className="text-left py-2 font-medium"
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
          "text-sm font-medium relative",
          isActive ? "text-primary" : "text-foreground/80"
        )}
      >
        {label}
        {isActive && (
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary" />
        )}
      </button>
    );
  }

  return (
    <Link 
      to={`/#${id}`} 
      className="text-sm font-medium text-foreground/80 relative"
    >
      {label}
    </Link>
  );
};
