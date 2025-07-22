// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-[#01091c] font-sans">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Kategoriyalar</h3>
            <a href="/catalog" className="block hover:text-[#cca57a] mb-1">Kategoriyalar</a>
            <a href="/catalog/kovrolin" className="block hover:text-[#cca57a] mb-1">Kovrolin</a>
            <a href="/catalog/gazon" className="block hover:text-[#cca57a] mb-1">Gazon</a>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Ma'lumotlar</h3>
            <a href="/about" className="block hover:text-[#cca57a] mb-1">SAG haqida</a>
            <a href="/methods" className="block hover:text-[#cca57a] mb-1">Yangiliklar</a>
            <a href="/videos" className="block hover:text-[#cca57a] mb-1">Video lavhalar</a>
            <a href="/sales" className="block hover:text-[#cca57a] mb-1">Chegirmalar</a>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Call-center</h3>
            <a href="tel:+998557010404" className="block hover:text-[#cca57a] mb-1">+998 (55) 701-04-04</a>
            <a href="tel:+998662304004" className="block hover:text-[#cca57a] mb-1">+998 (66) 230-40-04</a>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Biz ijtimoiy tarmoqlarda</h3>
            <div className="flex flex-col space-y-1">
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-[#cca57a]">LinkedIn</a>
              <a href="https://youtube.com/" target="_blank" rel="noreferrer" className="hover:text-[#cca57a]">YouTube</a>
              <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="hover:text-[#cca57a]">Instagram</a>
              <a href="https://t.me/" target="_blank" rel="noreferrer" className="hover:text-[#cca57a]">Telegram</a>
              <a href="https://facebook.com/" target="_blank" rel="noreferrer" className="hover:text-[#cca57a]">Facebook</a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#cca57a] text-white text-center py-4 text-sm">
        ©2021–2025 'SAM–ANTEP–GILAM' MChJ STIR 203212614. Barcha huquqlar himoyalangan
      </div>
    </footer>
  );
};

export default Footer;
