import type { ReactNode } from "react";
import { whatsappUrl } from "@/lib/services";

/** Every WhatsApp button of the page: same number, message pre-filled "depuis votre site". */
export default function WhatsAppLink({
  className,
  offre,
  children,
}: {
  className?: string;
  offre?: string;
  children: ReactNode;
}) {
  return (
    <a className={className} href={whatsappUrl({ offre })} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
