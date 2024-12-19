"use client";
import { navMenu } from "@/lib/data";
import React, { useState } from "react";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <button
        onClick={toggleMenu}
        className="flex flex-col justify-center items-center w-10 h-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        aria-label="Toggle Menu"
      >
        <div
          className={`h-1 w-8 bg-green-600 rounded transition-transform duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></div>
        <div
          className={`h-1 w-8 bg-green-600 rounded my-1 transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className={`h-1 w-8 bg-green-600 rounded transition-transform duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg py-2 w-48">
          <ul className="flex flex-col">
            {navMenu.map((menu) => (
              <li
                key={menu.id}
                className="border-b border-gray-200 last:border-0"
              >
                <a
                  href={menu.url}
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;
