import { useEffect } from "react";

export default function Confirmation() {
  useEffect(() => {
    ;(window as Window & { gtag?: (...args: any[]) => void }).gtag?.("event", "conversion", {
      send_to: "AW-18078712899/AkoaCPHy7J0cEMOIzaxD",
      value: 1.0,
      currency: "EUR",
      transaction_id: "",
    });
  }, []);

  return <div>Paiement confirmé</div>;
}