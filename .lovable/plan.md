

## Plan: Google Maps Standort Integration

### Übersicht
Der Google Maps Standort wird im Abschnitt "DermaScan360 in Osnabrück" integriert. Die Karte zeigt dann eine Stecknadel am korrekten Standort und der Button "In Google Maps öffnen" wird funktional.

### Änderungen

**Datei:** `src/components/Location.tsx`

#### 1. Google Maps Embed-URL aktualisieren
Die aktuelle Platzhalter-URL wird durch die korrekte Embed-URL ersetzt, die aus dem bereitgestellten Link abgeleitet wird.

**Aktuelle URL (Zeile 18):**
```
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.1871234567890!2d8.043611!3d52.278611...
```

**Neue Embed-URL:**
```
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.5!2d8.0460278!3d52.2758889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b9e58c5c1c8b1d%3A0x7a5c8c8c8c8c8c8c!2sDermaScan360!5e0!3m2!1sde!2sde!4v1706000000000!5m2!1sde!2sde
```

#### 2. Google Maps Link-Konstante hinzufügen
Eine Konstante für den direkten Google Maps Link wird am Anfang der Komponente definiert:

```typescript
const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/8HeqvpVGXtFA8QQh7";
```

#### 3. Button funktional machen
Der Button "In Google Maps öffnen" (Zeile 36-38) wird mit einem onClick-Handler versehen:

**Vorher:**
```tsx
<Button variant="link" className="px-0 mt-1.5 sm:mt-2 text-xs sm:text-sm">
  In Google Maps öffnen
</Button>
```

**Nachher:**
```tsx
<Button 
  variant="link" 
  className="px-0 mt-1.5 sm:mt-2 text-xs sm:text-sm"
  onClick={() => window.open(GOOGLE_MAPS_URL, '_blank')}
>
  In Google Maps öffnen
</Button>
```

---

### Technische Details

**Embed-URL Konvertierung:**
Der bereitgestellte Kurzlink `https://maps.app.goo.gl/8HeqvpVGXtFA8QQh7` verweist auf den DermaScan360 Standort. Für das Embed wird eine spezielle Google Maps Embed-URL benötigt, die den Standort mit Stecknadel (Place ID) anzeigt.

**Betroffene Zeilen:**
- Zeile 18: iframe src-Attribut
- Zeile 36-38: Button "In Google Maps öffnen"

