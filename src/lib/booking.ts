// Standortübergreifender Buchungslink für die Hauptseite (Ortauswahl in Doctolib)
export const MAIN_BOOKING_URL = "https://www.doctolib.de/gemeinschaftspraxis/osnabrueck/dermascan360/booking/places?specialityId=1289&telehealth=false&source=profile";

// Pseudo-URLs für Standorte ohne eigene Buchung: öffnet ein Info-Popup statt eines Links
export const BOOKING_DIALOG_BONN = "dialog:bonn";
export const BOOKING_DIALOG_KOELN = "dialog:koeln";

export type BookingDialogId = "bonn" | "koeln";

let activeDialog: BookingDialogId | null = null;
const dialogListeners = new Set<(id: BookingDialogId | null) => void>();

const notify = () => dialogListeners.forEach((listener) => listener(activeDialog));

export const openBookingDialog = (id: BookingDialogId) => {
  activeDialog = id;
  notify();
};

export const closeBookingDialog = () => {
  activeDialog = null;
  notify();
};

export const subscribeToBookingDialog = (listener: (id: BookingDialogId | null) => void) => {
  dialogListeners.add(listener);
  return () => {
    dialogListeners.delete(listener);
  };
};

export const getActiveBookingDialog = () => activeDialog;

export const openBookingUrl = (url: string) => {
  if (url === BOOKING_DIALOG_BONN) return openBookingDialog("bonn");
  if (url === BOOKING_DIALOG_KOELN) return openBookingDialog("koeln");
  if (url.startsWith("mailto:")) window.location.href = url;
  else window.open(url, "_blank", "noopener,noreferrer");
};
