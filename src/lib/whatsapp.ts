// WhatsApp helper. Number is configurable via NEXT_PUBLIC_WHATSAPP_NUMBER.
// Falls back to the number that appears on the Magma event posters.
const FALLBACK_NUMBER = "393791551455"; // +39 379 155 1455 (from event posters)

export function whatsappNumber(): string {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || FALLBACK_NUMBER;
  return raw.replace(/[^0-9]/g, "");
}

export type WhatsAppContext = "reservation" | "event" | "menu" | "generic";

const MESSAGES: Record<WhatsAppContext, string> = {
  reservation: "Hi Magma, I'd like to make a reservation.",
  event:
    "Hi Magma, I'd like to plan an event. Date: __ Guests: __ Type of event: __",
  menu: "Hi Magma, I have a question about the menu.",
  generic: "Hi Magma!",
};

export function whatsappLink(
  context: WhatsAppContext = "reservation",
  customMessage?: string,
): string {
  const text = encodeURIComponent(customMessage ?? MESSAGES[context]);
  return `https://wa.me/${whatsappNumber()}?text=${text}`;
}
