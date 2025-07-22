// src/components/Header.js
import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="logo">
          <img
            src="https://sag-ashy.vercel.app/assets/imgSag-SxQrTXN6.png"
            alt="SAG Logo"
            className="h-10"
          />
        </div>
        <nav className="flex gap-4 text-gray-700 font-medium">
          <a href="/about">Katalog</a>
          <a href="/about">Xonadonlar</a>
          <a href="/about">Video lavhalar</a>
          <a href="/about">Chegirmalar</a>
          <a href="/about">SAG haqida</a>
          <a href="/about">Yangiliklar</a>
        </nav>
        <div className="lang-search flex items-center gap-2">
          <span>O'z</span>
          <FaSearch className="text-gray-500 w-4 h-4" />
        </div>
      </div>
    </header>
  );
};

export default Header;
