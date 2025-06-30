import React from "react";
import profile from "../assets/muditprofile.jpg";

const About = () => {
  return (
    <section id="about" className="bg-gray-50 py-16 px-4 overflow-x-hidden">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">

        {/* 🔹 Left: Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            About Me
          </h2>

          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            I'm Muditya Lodhi, a passionate Frontend Developer with a strong
            interest in creating elegant, fast, and accessible web applications.
            My journey began with curiosity and grew into a deep passion for
            crafting modern UIs and user-friendly experiences.
          </p>

          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            I love working with technologies like{" "}
            <span className="font-semibold text-orange-500">React</span>,{" "}
            <span className="font-semibold text-orange-500">Tailwind CSS</span>,{" "}
            <span className="font-semibold text-orange-500">JavaScript</span>, and{" "}
            <span className="font-semibold text-orange-500">Git</span>. I'm always
            learning and exploring new tools and techniques to become a better developer.
          </p>

          <a
            href="#contact"
            className="inline-block bg-orange-500 text-white px-6 py-2 rounded-full shadow hover:bg-orange-600 transition"
          >
            Let’s Connect
          </a>
        </div>

        {/* 🔸 Right: Profile Image */}
        <div className="flex justify-center md:justify-end">
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

export default About;
