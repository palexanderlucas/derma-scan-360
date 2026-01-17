import { InfoDialog } from "@/components/ui/info-dialog";

interface WalkInDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const WalkInDialog = ({ open, onOpenChange }: WalkInDialogProps) => {
  return (
    <InfoDialog open={open} onOpenChange={onOpenChange} title="Angebot bald verfügbar">
      <p>
        Wir eröffnen voraussichtlich am <strong>01.04.2026</strong>. Das Angebot gilt ab Eröffnung zu unseren Öffnungszeiten. Informationen zu den Öffnungszeiten folgen in Kürze.
      </p>
      <p>
        Für Unternehmen und Kommunen ist eine Direktanfrage für mobile Screening-Angebote bereits jetzt möglich.
      </p>
      <p>
        Vielen Dank für Ihr Interesse!
      </p>
    </InfoDialog>
  );
};
