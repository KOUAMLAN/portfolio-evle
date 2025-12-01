import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-slate-400 text-sm font-sans">
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;