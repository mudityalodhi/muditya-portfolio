import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        
        {/* 🔹 Left: Copyright */}
        <div>
          <h2 className="text-lg font-semibold text-orange-400">Muditya Lodhi</h2>
          <p className="text-sm mt-1">© {new Date().getFullYear()} All rights reserved</p>
        </div>

        {/* 🔹 Middle: Quick Links */}
        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <a href="#home" className="hover:text-orange-400 transition">Home</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-orange-400 transition">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-orange-400 transition">Contact</a>
          </li>
        </ul>

        {/* 🔹 Right: Social Icons */}
        <div className="flex gap-4 text-2xl">
          <a
            href="https://github.com/mudityalodhi"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/muditya-lodhi"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white text-blue-500"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;