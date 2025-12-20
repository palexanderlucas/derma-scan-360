import { LucideIcon } from "lucide-react";

interface FeatureItemProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  size?: "sm" | "lg";
}

export const FeatureItem = ({ icon: Icon, title, subtitle, size = "lg" }: FeatureItemProps) => {
  const isSmall = size === "sm";
  
  return (
    <div className="flex items-center gap-2.5 sm:gap-3 group">
      <div className={`${isSmall ? 'p-2 sm:p-2.5 lg:p-3' : 'p-3'} bg-primary/10 rounded-lg sm:rounded-xl group-hover:bg-primary/15 transition-colors duration-200 flex-shrink-0`}>
        <Icon className={`${isSmall ? 'h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 xl:h-9 xl:w-9' : 'h-9 w-9 sm:h-8 sm:w-8'} text-primary`} />
      </div>
      <div className="min-w-0">
        <div className={`font-semibold ${isSmall ? 'text-xs sm:text-sm lg:text-base' : 'text-base'} whitespace-nowrap`}>
          {title}
        </div>
        <div className={`${isSmall ? 'text-[10px] sm:text-xs lg:text-sm' : 'text-sm'} text-muted-foreground whitespace-nowrap`}>
          {subtitle}
        </div>
      </div>
    </div>
  );
};