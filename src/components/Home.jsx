import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../assets/muditprofile.jpg";
const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-white via-blue-50 to-blue-100 min-h-screen flex items-center justify-center px-4"
    >
      {/* Blobs in background */}
      <div className="absolute -top-32 -left-20 w-[400px] h-[400px] bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>

      {/* Content Grid */}
      <div className="z-10 max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Left: Text */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Hi, I'm <span className="text-blue-600">MUDITYA LODHI</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-xl mb-6">
            A passionate Frontend Developer creating responsive & beautiful web
            interfaces with React & Tailwind.
          </p>
          <div className="flex justify-center md:justify-start space-x-6 mb-6">
            <a
              href="https://github.com/mudityalodhi"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-black text-2xl transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/mudityalodhi"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:text-blue-700 text-2xl transition"
            >
              <FaLinkedin />
            </a>
          </div>
          <a
            href="#contact"
            className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-600 transition"
          >
            Contact Me
          </a>
        </div>

        {/* Right: Image Placeholder */}
        <div className="flex justify-center md:justify-end">
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-300 shadow-lg">
            {/* Replace src below with your image later */}
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
