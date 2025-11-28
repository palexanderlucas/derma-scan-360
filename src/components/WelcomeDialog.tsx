import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface WelcomeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const WelcomeDialog = ({ open, onOpenChange }: WelcomeDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Willkommen bei Hautkrebsscreening Frankfurt</DialogTitle>
          <DialogDescription className="text-base space-y-4 pt-4">
            <p>
              Wir eröffnen voraussichtlich am <strong>01.02.2026</strong>. Termine können wenige Wochen vor Eröffnung online auf dieser Seite oder Doctorlib gebucht werden.
            </p>
            <p>
              Für Unternehmen und Kommunen bieten wir unser mobiles Screening bereits jetzt an.
            </p>
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center pt-4">
          <Button onClick={() => onOpenChange(false)} size="lg">
            Weiter zur Website
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
