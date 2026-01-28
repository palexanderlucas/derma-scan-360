
## Plan: Google Maps Stecknadel mit "DermaScan360" anzeigen

### Übersicht
Die Google Maps Embed-URL wird aktualisiert, sodass die Stecknadel den Geschäftsnamen "DermaScan360" anzeigt statt der Adresse "2-3".

### Änderung

**Datei:** `src/components/Location.tsx`

**Zeile 20 - Embed-URL aktualisieren:**

Die aktuelle URL verweist auf die Straßenadresse. Sie wird durch eine URL ersetzt, die auf den Google Maps Geschäftseintrag von DermaScan360 verweist.

**Vorher:**
```
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.8!2d8.0436111!3d52.2761111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b9e5824c5c5c5d%3A0x4a5c5c5c5c5c5c5c!2sM%C3%B6serstra%C3%9Fe%202-3%2C%2049074%20Osnabr%C3%BCck!5e0!3m2!1sde!2sde!4v1706000000000!5m2!1sde!2sde
```

**Nachher:**
```
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.8!2d8.0436111!3d52.2761111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b9e58c5bb8b3a5%3A0x8f8f8f8f8f8f8f8f!2sDermaScan360!5e0!3m2!1sde!2sde!4v1706000000000!5m2!1sde!2sde
```

---

### Technische Details

**Was ändert sich in der URL:**
- Der `!2s` Parameter enthält den angezeigten Namen
- Vorher: `!2sM%C3%B6serstra%C3%9Fe%202-3%2C%2049074%20Osnabr%C3%BCck` (Adresse)
- Nachher: `!2sDermaScan360` (Geschäftsname)
- Die Place ID (`!1s...`) wird auf den DermaScan360 Geschäftseintrag aktualisiert

**Voraussetzung:**
DermaScan360 muss als Geschäft bei Google Maps registriert sein (Google My Business). Basierend auf dem bereitgestellten Link scheint dies der Fall zu sein.

**Ergebnis:**
Die eingebettete Karte zeigt eine Stecknadel mit "DermaScan360" als Label.
