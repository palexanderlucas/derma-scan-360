import { LucideIcon, ChevronDown } from "lucide-react";
import { ReactNode, useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface TechCardProps {
  icon: LucideIcon;
  title: string;
  image: string;
  imageAlt: string;
  intro: string;
  children: ReactNode;
}

export const TechCard = ({
  icon: Icon,
  title,
  image,
  imageAlt,
  intro,
  children,
}: TechCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col bg-card rounded-2xl sm:rounded-3xl shadow-lg border border-border/50 overflow-hidden h-full">
      <div className="relative">
        <img src={image} alt={imageAlt} className="w-full aspect-[4/3] object-cover" />
      </div>
      <div className="flex flex-col flex-1 p-5 sm:p-6 lg:p-7 space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-gradient-to-br from-primary/15 to-primary/5 rounded-xl shadow-sm shrink-0">
            <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
          </div>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight">{title}</h3>
        </div>
        <p className="text-base text-muted-foreground leading-relaxed">{intro}</p>
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger className="flex items-center gap-2 text-sm font-medium text-primary hover:underline">
            {isOpen ? "Weniger anzeigen" : "Mehr anzeigen"}
            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-4 mt-4">
            {children}
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
};
