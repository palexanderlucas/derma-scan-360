

## Plan: Doctolib-URLs aktualisieren

### Übersicht
Alle "Termin buchen" Buttons werden auf neue Doctolib-URLs mit `insuranceSector=private` umgestellt.

### Änderungen

#### 1. Header.tsx
**Datei:** `src/components/Header.tsx`

Alte URL:
```
https://www.doctolib.de/.../insuranceSector=public...bookingFunnelSource=profile
```

Neue URL:
```
https://www.doctolib.de/privatpraxis/osnabrueck/dermascan360/booking/motives?specialityId=1289&telehealth=false&placeId=practice-728521&insuranceSector=private&insuranceSectorEnabled=true&bookingFunnelSource=profile
```

Betrifft:
- Desktop-Button "Termin buchen"
- Mobile-Menü-Button "Termin buchen"

---

#### 2. Pricing.tsx
**Datei:** `src/components/Pricing.tsx`

| Karte | Alte URL | Neue URL |
|-------|----------|----------|
| Single Lesion | `...insuranceSector=public...bookingFunnelSource=deep_link` | `...insuranceSector=private...bookingFunnelSource=profile` |
| Ganzkörper-Screening | `...insuranceSector=public...bookingFunnelSource=deep_link` | `...insuranceSector=private...bookingFunnelSource=profile` |
| Ganzkörper-Screening Express | `...insuranceSector=public...bookingFunnelSource=deep_link` | `...insuranceSector=private...bookingFunnelSource=profile` |

---

### Technische Details

**Hauptunterschiede in den URLs:**
1. `insuranceSector=public` → `insuranceSector=private`
2. `bookingFunnelSource=deep_link` → `bookingFunnelSource=profile` (nur bei Pricing)

**Betroffene Konstanten in Pricing.tsx:**
- `DOCTOLIB_SINGLE_LESION_URL`
- `DOCTOLIB_FULLBODY_URL`

**Betroffene Konstante in Header.tsx:**
- `DOCTOLIB_URL`

