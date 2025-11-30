import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const BookingDialog = ({ open, onOpenChange }: BookingDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Terminbuchung bald verfügbar</DialogTitle>
          <DialogDescription className="text-base space-y-4 pt-4">
            <p>
              Wir eröffnen voraussichtlich am <strong>01.02.2026</strong>. Termine werden wenige Wochen vor Eröffnung freigegeben.
            </p>
            <p>
              Für Unternehmen und Kommunen ist eine Direktanfrage für mobile Screening-Angebote bereits jetzt möglich.
            </p>
            <p>
              Vielen Dank für Ihr Interesse
            </p>
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center pt-4">
          <Button onClick={() => onOpenChange(false)} size="lg">
            Schließen
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
