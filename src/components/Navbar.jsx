import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaHome, FaUserAlt, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", icon: <FaHome /> },
    { name: "About", href: "#about", icon: <FaUserAlt /> },
    { name: "Projects", href: "#projects", icon: <FaProjectDiagram /> },
    { name: "Contact", href: "#contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      <div
        className={`w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between rounded-full bg-white/50 backdrop-blur-md border border-blue-100 shadow-md transition-all duration-300 ${
          scrolled ? "shadow-xl" : ""
        }`}
      >
        {/* Logo */}
        <div className="text-xl font-semibold tracking-wider text-blue-600">
          ML
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-700 tracking-wide">
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
            className="text-blue-700 transition duration-300"
          >
            {navOpen ? (
              <FaTimes className="animate-pulse" size={22} />
            ) : (
              <FaBars className="animate-pulse" size={22} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {navOpen && (
        <div className="absolute top-[72px] w-full max-w-5xl mx-auto left-0 right-0 px-4 bg-white/95 backdrop-blur-md rounded-xl shadow-xl py-4 space-y-3 animate-slide-down md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setNavOpen(false)}
              className="flex items-center gap-3 text-gray-800 hover:text-blue-600 font-medium tracking-wide text-base px-4 py-2 transition duration-300"
            >
              {link.icon}
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
