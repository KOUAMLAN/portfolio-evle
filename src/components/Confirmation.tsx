import { useEffect } from "react";

export default function Confirmation() {
  useEffect(() => {
    ;(window as Window & { gtag?: (...args: any[]) => void }).gtag?.("event", "conversion", {
      send_to: "AW-18078712899/TON_LABEL_DE_CONVERSION",
      value: 1.0,
      currency: "EUR",
    });
  }, []);

  return <div>Paiement confirmé</div>;
}