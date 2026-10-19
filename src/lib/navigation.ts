export interface NavItem {
  id: string;
  label: string;
}

export const mainNavItems: NavItem[] = [
  { id: "technologie", label: "Technologie & Befundung" },
  { id: "ablauf", label: "Ablauf" },
  { id: "preise", label: "Preise" },
  { id: "standort", label: "Standorte" },
  { id: "unternehmen", label: "Für Unternehmen" },
  { id: "team", label: "Wer wir sind" },
  { id: "partner-praxen", label: "Partner-Praxen" },
  { id: "faq", label: "FAQ" },
];

export const corporateNavItems: NavItem[] = [
  { id: "vorteile", label: "Vorteile" },
  { id: "hautkrebs", label: "Hautkrebs" },
  { id: "angebot", label: "Unser Angebot" },
  { id: "kontakt", label: "Kontakt" },
];

export const cityNavItems: NavItem[] = [
  { id: "standort", label: "Standorte" },
  { id: "anfahrt", label: "Anfahrt" },
  { id: "konzept", label: "Konzept" },
  { id: "preise", label: "Preise" },
  { id: "partner-praxen", label: "Partner-Praxen" },
  { id: "faq", label: "FAQ" },
];
