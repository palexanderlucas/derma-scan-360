

## Team-Abschnitt "Wer wir sind" vorübergehend ausblenden

Der Team-Abschnitt wird aus der Hauptseite entfernt, aber die Komponente (`src/components/Team.tsx`) bleibt vollständig erhalten, sodass er jederzeit mit einem kurzen Prompt wiederhergestellt werden kann.

### Änderungen

**1. `src/pages/Index.tsx`**
- Import von `Team` entfernen
- `<Team />` aus dem JSX entfernen

**2. `src/lib/navigation.ts`**
- Den Navigationseintrag `{ id: "team", label: "Team" }` aus `mainNavItems` entfernen, damit kein toter Link in Header/Footer erscheint

**3. `src/components/Team.tsx`**
- Datei bleibt unverändert bestehen und kann sofort wieder eingebunden werden

### Wiederherstellung

Um den Abschnitt wiederherzustellen, genügt der Prompt: *"Füge den Team-Abschnitt 'Wer wir sind' wieder ein"* -- dann wird `<Team />` wieder in `Index.tsx` (zwischen `MunicipalityCTA` und `FAQ`) eingefügt und der Navigations-Eintrag wiederhergestellt.

