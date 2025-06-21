import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../assets/muditprofile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen flex items-center py-16"
    >
      {/* Animated Blobs */}
      <div className="absolute -top-32 -left-20 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-blue-300 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
      
      <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-purple-300 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>

      {/* Main Grid Content */}
      <div className="z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Hi, I'm{" "}
            <span className="text-blue-600 dark:text-blue-400">
              MUDITYA LODHI
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 max-w-xl mx-auto md:mx-0">
            A passionate Frontend Developer creating responsive & beautiful web
            interfaces with React & Tailwind.
          </p>

          <div className="flex justify-center md:justify-start gap-6 mb-6">
            <a
              href="https://github.com/mudityalodhi"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-2xl transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/mudityalodhi"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-2xl transition"
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

        {/* Right: Profile Image */}
        <div className="flex justify-center md:justify-end">
          <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-blue-300 dark:border-blue-500 shadow-lg">
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
