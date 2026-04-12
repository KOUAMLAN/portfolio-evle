import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const AIChat: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-white shadow-lg hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          aria-label="Ouvrir le chat IA"
        >
          <MessageCircle size={18} />
          Chat IA
        </button>
      )}

      {open && (
        <div className="fixed bottom-5 right-5 z-50 w-[340px] max-w-[calc(100vw-2rem)] rounded-2xl bg-white shadow-2xl border border-gray-200 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-blue-600 text-white">
            <span className="font-semibold">Assistant IA</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded p-1 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Fermer le chat IA"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-4">
            <p className="text-sm text-gray-700">
              Le chat s’ouvre seulement au clic.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;