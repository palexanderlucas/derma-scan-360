import { InfoDialog } from "@/components/ui/info-dialog";

interface WelcomeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const WelcomeDialog = ({ open, onOpenChange }: WelcomeDialogProps) => {
  return (
    <InfoDialog 
      open={open} 
      onOpenChange={onOpenChange} 
      title="Willkommen bei DermaScan360 in Osnabrück"
      buttonText="Weiter zur Website"
    >
      <p>
        Wir eröffnen voraussichtlich am <strong>01.03.2026</strong>. Termine können wenige Wochen vor Eröffnung online auf dieser Seite oder Doctorlib gebucht werden.
      </p>
      <p>
        Für Unternehmen und Kommunen bieten wir unser mobiles Screening bereits jetzt an.
      </p>
    </InfoDialog>
  );
};
