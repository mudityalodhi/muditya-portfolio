import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-orange-50 py-16 px-4 overflow-x-hidden">
      <div className="max-w-4xl mx-auto text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
          About Me
        </h2>

        <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
          Hey! I’m <span className="font-semibold text-orange-500">Muditya Lodhi</span>, a frontend developer with a love for clean design, pixel-perfect UIs, and smooth user experiences.
        </p>

        <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
          I started this journey with curiosity—and soon found myself addicted to building beautiful, fast, and responsive websites. Every project I take on is an opportunity to create something useful, elegant, and enjoyable for people to use.
        </p>

        <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
          My go-to tools include{" "}
          <span className="font-semibold text-orange-500">React</span>,{" "}
          <span className="font-semibold text-orange-500">Tailwind CSS</span>,{" "}
          <span className="font-semibold text-orange-500">JavaScript</span>, and{" "}
          <span className="font-semibold text-orange-500">Git</span>. Whether it's building a sleek landing page or a scalable dashboard, I’m always pushing to grow and improve.
        </p>

        <a
          href="#contact"
          className="inline-block bg-orange-500 text-white px-6 py-2 rounded-full shadow hover:bg-orange-600 transition"
        >
          Let’s Connect
        </a>
      </div>
    </section>
  );
};

export default About;
