"use client";

import React, { useState } from "react";
import Link from "next/link";
import Title from "./Title";
import { Menu, X } from "lucide-react";

const NavBar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Search", href: "/dogs/search" },
    { name: "Favorites", href: "/dogs/favorites" },
    { name: "Account", href: "/account" },
  ];

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-md border border-ashGray/50 py-4 shadow-lg rounded-b-2xl">
      <div className="max-w-full px-6 md:px-12 flex items-center justify-between">

        <Link href="/">
          <Title variant="small" />
        </Link>

        {/* Nav options */}
        <ul className="hidden md:flex space-x-12 list-none">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href}>
                <span className="group text-black text-xl relative cursor-pointer transition-transform duration-300 hover:scale-110">
                  {item.name}
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-cerulean to-softBlue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile nav button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-black focus:outline-none">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile nav options */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 px-6 text-right">
          <ul className="flex flex-col space-y-4 list-none">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>
                  <span
                    onClick={() => setMobileMenuOpen(false)}
                    className="group block text-black text-xl relative cursor-pointer transition-transform duration-300 hover:scale-105"
                  >
                    {item.name}
                    <span className="absolute right-0 -bottom-1 w-1/6 h-0.5 bg-gradient-to-l from-cerulean to-softBlue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
