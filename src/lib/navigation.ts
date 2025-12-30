export interface NavItem {
  id: string;
  label: string;
}

export const mainNavItems: NavItem[] = [
  { id: "technologie", label: "Technologie & Befundung" },
  { id: "ablauf", label: "Ablauf" },
  { id: "preise", label: "Preise" },
  { id: "standort", label: "Standort" },
  { id: "unternehmen", label: "Für Unternehmen & Behörden" },
  { id: "kommunen", label: "Für Kommunen" },
  { id: "team", label: "Team" },
  { id: "faq", label: "FAQ" },
];

export const corporateNavItems: NavItem[] = [
  { id: "vorteile", label: "Vorteile" },
  { id: "hautkrebs", label: "Hautkrebs" },
  { id: "angebot", label: "Unser Angebot" },
  { id: "kontakt", label: "Kontakt" },
];
