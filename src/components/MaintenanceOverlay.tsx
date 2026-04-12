export const MaintenanceOverlay = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
      <div className="text-center px-6">
        <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
          Technische Wartungsarbeiten
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          503 – Service Temporarily Unavailable
        </p>
      </div>
    </div>
  );
};
