const MaintenanceOverlay = () => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-background">
      <div className="text-center px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
          Technische Wartungsarbeiten
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground">
          503 – Service Temporarily Unavailable
        </p>
      </div>
    </div>
  );
};

export { MaintenanceOverlay };
