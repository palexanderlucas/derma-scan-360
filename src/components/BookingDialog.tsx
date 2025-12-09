import { InfoDialog } from "@/components/ui/info-dialog";

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const BookingDialog = ({ open, onOpenChange }: BookingDialogProps) => {
  return (
    <InfoDialog open={open} onOpenChange={onOpenChange} title="Terminbuchung bald verfügbar">
      <p>
        Wir eröffnen voraussichtlich am <strong>01.02.2026</strong>. Termine werden wenige Wochen vor Eröffnung freigegeben.
      </p>
      <p>
        Für Unternehmen und Kommunen ist eine Direktanfrage für mobile Screening-Angebote bereits jetzt möglich.
      </p>
      <p>
        Vielen Dank für Ihr Interesse
      </p>
    </InfoDialog>
  );
};
