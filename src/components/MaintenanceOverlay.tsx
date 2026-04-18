import { Wrench } from "lucide-react";

export const MaintenanceOverlay = () => {
  return (
    <div className="fixed inset-0 z-[60] bg-background flex items-center justify-center px-4">
      <div className="max-w-md text-center space-y-6">
        <div className="flex justify-center">
          <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Wrench className="h-8 w-8 text-primary" />
          </div>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold text-foreground">
          Technische Wartungsarbeiten
        </h1>
        <p className="text-muted-foreground">
          Unsere Website ist derzeit aufgrund von Wartungsarbeiten nicht erreichbar. Bitte versuchen Sie es in Kürze erneut.
        </p>
        <p className="text-sm text-muted-foreground/80 font-mono">
          503 - Service Temporarily Unavailable
        </p>
      </div>
    </div>
  );
};
