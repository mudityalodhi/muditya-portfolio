import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-16 py-3">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-orange-500">
          ML
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 font-medium text-gray-800">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="relative hover:text-orange-500 transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-orange-500 after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="text-orange-500 text-xl"
          >
            {navOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          navOpen ? "max-h-60 py-3" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-3 bg-white px-6 pt-4 pb-6 shadow-md rounded-b-lg font-medium text-gray-800">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setNavOpen(false)}
                className="block hover:text-orange-500 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
