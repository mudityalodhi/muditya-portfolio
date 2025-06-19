import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-4 inset-x-0 z-50 px-4">
      <div
        className={`mx-auto w-full max-w-5xl flex items-center justify-between h-14 px-4 sm:px-6 lg:px-8 rounded-full bg-white/50 backdrop-blur-md border border-blue-100 shadow-md transition-all duration-300 ${scrolled ? "shadow-xl" : ""
          }`}
      >
        {/* Logo */}
        <div className="text-lg sm:text-xl font-bold tracking-wider text-blue-600">
          ML
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6 text-sm sm:text-base font-medium text-gray-700 tracking-wide">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="relative hover:text-blue-600 transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-blue-500 after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="text-blue-700 focus:outline-none"
          >
            {navOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {navOpen && (
        <div className="md:hidden mt-2 px-4">
          <div className="w-full max-w-5xl mx-auto bg-white/95 backdrop-blur-md rounded-xl shadow-xl py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setNavOpen(false)}
                className="block text-gray-800 hover:text-blue-600 text-base font-medium px-4 py-2 rounded transition duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
