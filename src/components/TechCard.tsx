import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface TechCardProps {
  icon: LucideIcon;
  title: string;
  image: string;
  imageAlt: string;
  children: ReactNode;
  reverse?: boolean;
}

export const TechCard = ({ 
  icon: Icon, 
  title, 
  image, 
  imageAlt, 
  children, 
  reverse = false 
}: TechCardProps) => {
  const imageBlock = (
    <div className="relative hidden lg:block">
      <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-br from-primary/20 to-accent/10 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl opacity-50" />
      <img src={image} alt={imageAlt} className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-xl w-full" />
    </div>
  );

  const mobileImage = (
    <div className="relative lg:hidden">
      <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-br from-primary/20 to-accent/10 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl opacity-50" />
      <img src={image} alt={imageAlt} className="relative rounded-xl sm:rounded-2xl shadow-xl w-full" />
    </div>
  );

  return (
    <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-14 xl:gap-20 items-center">
      {reverse && imageBlock}
      <div className={`space-y-4 sm:space-y-5 lg:space-y-6 max-w-2xl ${reverse ? 'order-1 lg:order-2' : ''}`}>
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="p-2.5 sm:p-3 lg:p-4 bg-gradient-to-br from-primary/15 to-primary/5 rounded-xl sm:rounded-2xl shadow-sm">
            <Icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-primary" />
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">{title}</h3>
        </div>
        {mobileImage}
        {children}
      </div>
      {!reverse && imageBlock}
    </div>
  );
};