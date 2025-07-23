// src/components/Header.js
import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#fffce0] py-5 shadow">
      <div className="container mx-auto flex justify-between items-center px-20">
        <div className="logo">
          <img
            src="https://sag-ashy.vercel.app/assets/imgSag-SxQrTXN6.png"
            alt="SAG Logo"
            className="h-20"
          />
        </div>

        <ul
          data-orientation="horizontal"
          className="flex-1 list-none flex md:gap-14 gap-8 justify-center"
          dir="ltr"
        >
          <li className="relative">
            <a
              href="/about"
              className="[15.9px] font-['Inter'] font-normal tracking-[0] leading-6 whitespace-nowrap pb-1 hover:border-b-2 hover:border-black transition-all duration-75"
            >
              Katalog
            </a>
          </li>
          <li className="relative">
            <a
              href="/rooms"
              className="text-[15.9px] font-['Inter'] font-normal tracking-[0] leading-6 whitespace-nowrap pb-1 hover:border-b-2 hover:border-black transition-all duration-75"
            >
              Xonadonlar
            </a>
          </li>
          <li className="relative">
            <a
              href="/videos"
              className="text-[15.9px] font-['Inter'] font-normal tracking-[0] leading-6 whitespace-nowrap pb-1 hover:border-b-2 hover:border-black transition-all duration-75"
            >
              Video lavhalar
            </a>
          </li>
          <li className="relative">
            <a
              href="/sales"
              className="text-[15.4px] font-['Inter'] font-normal tracking-[0] leading-6 whitespace-nowrap pb-1 hover:border-b-2 hover:border-black transition-all duration-75"
            >
              Chegirmalar
            </a>
          </li>
          <li className="relative">
            <a
              href="/about"
              className="text-base font-['Inter'] font-normal tracking-[0] leading-6 whitespace-nowrap pb-1 hover:border-b-2 hover:border-black transition-all duration-75"
            >
              SAG haqida
            </a>
          </li>
          <li className="relative">
            <a
              href="/methods"
              className="text-[15.8px] font-['Inter'] font-normal tracking-[0] leading-6 whitespace-nowrap pb-1 hover:border-b-2 hover:border-black transition-all duration-75"
            >
              Yangiliklar
            </a>
          </li>
        </ul>


        <div className="lang-search flex text-[13px] items-center gap-5">
          <span className="text-gray font-medium">O'z</span>
          <FaSearch className="text-black font-thin w-4 h-4" />
        </div>
      </div>
    </header>
  );
};

export default Header;
