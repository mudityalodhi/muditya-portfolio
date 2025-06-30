import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../assets/muditprofile.jpg"
const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-white px-4 overflow-x-hidden"
    >
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12">
        
        {/* 🔹 Left Text Content */}
        <div className="text-center md:text-left flex-1">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-2">
            Muditya Lodhi
          </h1>
          <h2 className="text-orange-500 text-xl sm:text-2xl font-semibold mb-4">
            Aspiring Frontend Developer | React & Tailwind Enthusiast
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            I build clean, responsive, and modern websites.
          </p>

          {/* 🔸 Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 text-2xl mb-6">
            <a
              href="https://github.com/mudityalodhi"
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 hover:text-black transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/muditya-lodhi"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800 transition"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* 🔸 CTA Button */}
          <a
            href="#contact"
            className="inline-block bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition shadow"
          >
            Contact me
          </a>
        </div>

        {/* 🔹 Right: Optional Placeholder Image (if you want) */}
        <div className="flex-1 hidden md:flex justify-center">
          <div className="w-52 h-52 sm:w-60 sm:h-60 rounded-full overflow-hidden border-4 border-orange-300 shadow-lg">
            <img
              src={profile}
              alt="Muditya Lodhi"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
