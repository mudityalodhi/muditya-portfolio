import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (
          section &&
          window.scrollY >= section.offsetTop - 100 &&
          window.scrollY < section.offsetTop + section.offsetHeight - 100
        ) {
          setActiveLink(link.name);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      {/* Container */}
      <div
        className={`flex items-center justify-between px-6 py-3 rounded-full shadow-xl
          backdrop-blur-md bg-white/80 dark:bg-black/40
          transition-all duration-300
          w-[90vw] max-w-[700px]
          ${scrolled ? "border border-gray-200" : ""}
        `}
      >
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold text-orange-500 hover:scale-105 transition-transform"
        >
          ML
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-6 font-medium text-gray-800 dark:text-white">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`relative transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                  after:bg-orange-500 after:transition-all after:duration-300
                  ${
                    activeLink === link.name
                      ? "text-orange-500 after:w-full"
                      : "after:w-0 hover:after:w-full"
                  }
                `}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="text-orange-500 text-2xl"
          >
            {navOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out rounded-xl mt-2 w-[90vw] max-w-[700px] mx-auto bg-white dark:bg-black/70 overflow-hidden
          ${navOpen ? "max-h-60 py-4" : "max-h-0 py-0"}
        `}
      >
        <ul className="flex flex-col items-center space-y-4 text-gray-800 dark:text-white">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setNavOpen(false)}
                className="hover:text-orange-500 transition text-base"
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
