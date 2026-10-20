import { BOOKING_DIALOG_BONN } from "@/lib/booking";
import osnabrueckImage from "@/assets/dermascan360-hautkrebsscreening-praxis-osnabrueck.webp";
import osnabrueckInteriorImage from "@/assets/dermascan360-hautkrebsscreening-praxis-innenansicht-empfang-osnabrueck.webp";
import koelnImage from "@/assets/dermascan360-hautkrebsscreening-praxis-empfang-koeln.webp";
import koelnInteriorImage from "@/assets/dermascan360-hautkrebsscreening-praxis-innenansicht-koeln.webp";
import bonnImage from "@/assets/dermascan360-hautkrebsscreening-praxis-bonn.webp";
import bonnInteriorImage from "@/assets/dermascan360-hautkrebsscreening-praxis-eingang-bonn.webp";

const osnabrueckBooking = "https://www.doctolib.de/gemeinschaftspraxis/osnabrueck/dermascan360/booking/patient-insurance-sector?specialityId=1289&telehealth=false&placeId=practice-728521&source=profile";
const koelnBooking = "https://www.doctolib.de/gemeinschaftspraxis/osnabrueck/dermascan360/booking/patient-insurance-sector?specialityId=1289&telehealth=false&placeId=practice-879223&source=profile&speciality_ids%5B%5D=1289";

export const locations = [
  {
    city: "Osnabrück",
    slug: "osnabrück",
    street: "Möserstraße 2-3",
    postal: "49074 Osnabrück",
    floor: "",
    image: osnabrueckImage,
    imageAlt: "DermaScan360 Praxis für Hautkrebsscreening in Osnabrück – Außenansicht an der Möserstraße",
    isPracticePhoto: true,
    interiorImage: osnabrueckInteriorImage,
    interiorImageAlt: "Empfangsbereich der DermaScan360 Praxis für Hautkrebsscreening in Osnabrück",
    bookingUrl: osnabrueckBooking,
    welcomeDialog: null,
    phone: "0541 93132180",
    mapQuery: "DermaScan360 - Hautkrebsscreening, Möserstraße 2-3, 49074 Osnabrück",
    parking: ["Haarmannsbrunnen: 1 min Fußweg", "Parkhaus Sparkasse: 2 min Fußweg", "Parkhaus Galeria Kaufhof: 3 min Fußweg"],
    station: ["Hauptbahnhof: 11 min Fußweg", "Berliner Platz: 3 min Fußweg"],
  },
  {
    city: "Köln",
    slug: "köln",
    street: "Alarichstraße 53",
    postal: "50679 Köln",
    floor: "",
    image: koelnImage,
    imageAlt: "Empfangsbereich der DermaScan360 Praxis für Hautkrebsscreening in Köln mit weißem Rezeptionstresen und Sichtbetonwand",
    isPracticePhoto: true,
    interiorImage: koelnInteriorImage,
    interiorImageAlt: "Innenansicht der DermaScan360 Praxis für Hautkrebsscreening in Köln – heller Eingangsbereich mit offener Holztür und Sichtbetonwand",
    bookingUrl: koelnBooking,
    welcomeDialog: "koeln",
    phone: "0541 93132180",
    mapQuery: "DermaScan360 - Hautkrebsscreening, Alarichstraße 53, 50679 Köln",
    parking: ["Öffentliche Parkmöglichkeiten befinden sich in unmittelbarer Umgebung der Praxis."],
    station: ["Haltestelle Suevenstraße: 5 min Fußweg", "Köln Messe/Deutz: 12 min Fußweg"],
  },
  {
    city: "Bonn",
    slug: "bonn",
    street: "Reuterstraße 122",
    postal: "53113 Bonn",
    floor: "4. Etage Ärztehaus Wellbeing",
    image: bonnImage,
    imageAlt: "DermaScan360 Praxis für Hautkrebsscreening in Bonn – Außenansicht in der Reuterstraße",
    isPracticePhoto: true,
    interiorImage: bonnInteriorImage,
    interiorImageAlt: "Eingang zum Wellbeing-Gebäude mit gelbem Portal und Praxistafel, in dem die DermaScan360 Praxis für Hautkrebsscreening in Bonn liegt",
    bookingUrl: BOOKING_DIALOG_BONN,
    welcomeDialog: "bonn",
    phone: "0541 93132180",
    mapQuery: "Reuterstraße 122, 53113 Bonn",
    parking: ["Für Praxisbesucher stehen Stellplätze in der Tiefgarage zur Verfügung."],
    station: ["Straßburger Weg: 1 min Fußweg", "Haus der Jugend: 3 min Fußweg", "Museum König: 9 min Fußweg"],
  },
] as const;

export type PracticeLocation = (typeof locations)[number];

export const CONTACT_EMAIL = "kontakt@dermascan360.de";

export const phoneHref = (location: PracticeLocation) =>
  `tel:+49${location.phone.replace(/\D/g, "").replace(/^0+/, "")}`;

export const locationPath = (location: PracticeLocation) => `/${location.slug}`;
export const mapsPlaceUrl = (location: PracticeLocation) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.mapQuery)}`;
export const mapsEmbedUrl = (location: PracticeLocation) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(location.mapQuery)}&z=16&output=embed`;
export const mapsParkingUrl = (location: PracticeLocation) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Parkhaus ${location.street}, ${location.postal}`)}`;
export const mapsDirectionsUrl = (location: PracticeLocation) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${location.street}, ${location.postal}`)}&travelmode=walking`;