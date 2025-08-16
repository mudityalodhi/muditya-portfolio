import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/muditprofile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-white px-4"
    >
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-center gap-10 py-10">
        {/* 🔹 Left Text Content */}
        <div className="text-center md:text-left flex-1">
          <h1 className="text-xl sm:text-2xl text-gray-600 mb-1">Hi, I'm</h1>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Muditya Lodhi
          </h2>

          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "MERN Stack Developer",
              2000,
              "React & Node Enthusiast",
              2000,
            ]}
            wrapper="h3"
            cursor={true}
            repeat={Infinity}
            className="text-orange-500 text-xl sm:text-2xl font-semibold mb-4"
          />

          <p className="text-gray-700 text-lg mb-6 max-w-md mx-auto md:mx-0">
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

          <a
            href="#contact"
            className="inline-block bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition shadow"
          >
            Contact me
          </a>
        </div>

        {/* 🔹 Right Image */}
        <div className="flex-1 flex justify-center">
          <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-orange-300 shadow-lg hover:scale-105 transition duration-300">
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