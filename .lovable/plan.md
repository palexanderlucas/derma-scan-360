

## Plan: Korrekte Google Maps Embed-URL mit Stecknadel

### Problem
Die aktuell manuell erstellte Embed-URL zeigt keine Stecknadel an, weil die Parameter nicht korrekt sind.

### Lösung
Es gibt zwei Möglichkeiten:

#### Option A: Offizielle Embed-URL von Google Maps holen (empfohlen)

1. Gehe zu [Google Maps](https://www.google.com/maps) und suche nach "DermaScan360 Osnabrück"
2. Klicke auf "Teilen" → "Karte einbetten"
3. Kopiere die generierte iframe-URL
4. Ersetze die URL in `src/components/Location.tsx` Zeile 20

#### Option B: Alternative Embed-Methode mit Place-Suche

Die URL wird auf das einfachere `place`-Format umgestellt, das zuverlässiger funktioniert:

**Datei:** `src/components/Location.tsx`, Zeile 20

**Aktuelle URL (funktioniert nicht):**
```
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.8!2d8.043476!3d52.276164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b9e58317b6ed4d%3A0xf6e32df8bba73f77!2sDermaScan360!5e0!3m2!1sde!2sde!4v1706000000000!5m2!1sde!2sde
```

**Neue URL (Place API Format):**
```
https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=DermaScan360,Osnabrück,Germany&zoom=17
```

*Hinweis: Diese URL verwendet einen öffentlichen Demo-API-Key von Google. Für Produktion sollte ein eigener API-Key verwendet werden.*

#### Option C: Iframe-basierte Suche (ohne API-Key)

Eine weitere Alternative ohne API-Key:

```
https://www.google.com/maps?q=DermaScan360+Osnabrück&output=embed
```

---

### Technische Details

**Änderung in `src/components/Location.tsx`:**

Zeile 20 wird aktualisiert mit einer der oben genannten URLs. Option C ist die einfachste, da kein API-Key benötigt wird.

**Empfehlung:** 
Ich werde Option C implementieren, da diese ohne zusätzliche Konfiguration funktioniert und die Stecknadel mit "DermaScan360" anzeigt.

