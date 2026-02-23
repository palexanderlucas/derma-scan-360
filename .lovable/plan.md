

## Wartungsmodus aktivieren (503 - Service Temporarily Unavailable)

Beide Seiten (Hauptseite und Corporate-Seite) werden mit einem vollflachigen Wartungs-Overlay blockiert. Die gesamte bestehende Codebasis bleibt unangetastet -- nur eine neue Komponente und minimale Einbindungen werden hinzugefuegt.

### Aenderungen

**1. Neue Komponente `src/components/MaintenanceOverlay.tsx` erstellen**
- Vollbild-Overlay (fixed, z-60, ueber allem) mit zentriertem Inhalt
- Zeigt an: "Technische Wartungsarbeiten" als Ueberschrift
- Darunter: "503 - Service Temporarily Unavailable"
- Schlichtes, professionelles Design passend zum bestehenden Styling
- Kein Schliessen-Button -- die Seite ist komplett blockiert

**2. `src/pages/Index.tsx` anpassen**
- Import von `MaintenanceOverlay` hinzufuegen
- `<MaintenanceOverlay />` als erstes Element im Container rendern

**3. `src/pages/Corporate.tsx` anpassen**
- Import von `MaintenanceOverlay` hinzufuegen
- `<MaintenanceOverlay />` als erstes Element im Container rendern

### Wiederherstellung

Um den Wartungsmodus zu deaktivieren, genuegt der Prompt: *"Entferne den Wartungsmodus und stelle die Website wieder her"* -- dann werden die drei Zeilen (Import + Komponente) aus `Index.tsx` und `Corporate.tsx` entfernt und die `MaintenanceOverlay`-Komponente geloescht. Der gesamte Seiteninhalt bleibt darunter vollstaendig erhalten und wird sofort wieder sichtbar.

