import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Merci: React.FC = () => {
  useEffect(() => {
    ;(window as Window & { gtag?: (...args: any[]) => void }).gtag?.("event", "conversion", {
      send_to: "AW-18078712899/AkoaCPHy7J0cEMOIzaxD",
      value: 1.0,
      currency: "EUR",
      transaction_id: "",
    });
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-4 text-white">
      <div className="max-w-xl text-center">
        <div className="w-24 h-24 mx-auto mb-8 bg-green-500/25 rounded-2xl flex items-center justify-center border border-green-400/30">
          <svg className="w-12 h-12 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
          Merci pour votre message !
        </h1>

        <p className="text-xl text-slate-200 mb-12 leading-relaxed max-w-lg mx-auto">
          Votre demande a bien été transmise. Je vous répondrai dans les plus brefs délais.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 text-white text-lg font-semibold hover:bg-blue-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
        >
          ← Retour à l'accueil
        </Link>
      </div>
    </main>
  );
};

export default Merci;