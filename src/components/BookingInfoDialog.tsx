import { ReactNode, useEffect, useState } from "react";
import { InfoDialog } from "@/components/ui/info-dialog";
import {
  BookingDialogId,
  closeBookingDialog,
  getActiveBookingDialog,
  subscribeToBookingDialog,
} from "@/lib/booking";

const DIALOG_CONTENT: Record<BookingDialogId, { title: string; body: ReactNode }> = {
  bonn: {
    title: "Bald auch in Bonn!",
    body: (
      <>
        <p>
          Wir freuen uns, Sie voraussichtlich ab dem <strong>04.01.2027</strong> bei DermaScan360 in Bonn begrüßen zu dürfen.
        </p>
        <p>Die Terminbuchung ist in Kürze möglich.</p>
      </>
    ),
  },
  koeln: {
    title: "Ab 01.12.2026 auch in Köln!",
    body: (
      <>
        <p>
          Wir freuen uns, Sie ab dem <strong>01.12.2026</strong> auch in Köln begrüßen zu dürfen.
        </p>
        <p>Termine können bereits online über unsere Website bzw. Doctolib gebucht werden.</p>
      </>
    ),
  },
};

export const BookingInfoDialog = () => {
  const [active, setActive] = useState<BookingDialogId | null>(getActiveBookingDialog);

  useEffect(() => subscribeToBookingDialog(setActive), []);

  const content = active ? DIALOG_CONTENT[active] : null;

  return (
    <InfoDialog
      open={content !== null}
      onOpenChange={(open) => {
        if (!open) closeBookingDialog();
      }}
      title={content?.title ?? ""}
    >
      {content?.body ?? null}
    </InfoDialog>
  );
};
