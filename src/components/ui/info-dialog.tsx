import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface InfoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children: ReactNode;
  buttonText?: string;
}

export const InfoDialog = ({ 
  open, 
  onOpenChange, 
  title, 
  children, 
  buttonText = "Schließen" 
}: InfoDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">{title}</DialogTitle>
          <DialogDescription className="text-base space-y-4 pt-4" asChild>
            <div>{children}</div>
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center pt-4">
          <Button onClick={() => onOpenChange(false)} size="lg">
            {buttonText}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
