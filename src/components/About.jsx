import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-orange-50 py-16 px-4 overflow-x-hidden">
      <div className="max-w-4xl mx-auto text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
          About Me
        </h2>

        <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
          Hey! I’m <span className="font-semibold text-orange-500">Muditya Lodhi</span>, a frontend developer with a curious mind, a creative heart, and a strong desire to grow — every single day.
        </p>

        <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
          My coding journey started with a spark of curiosity, but it soon became a deep passion. I now build responsive, user-friendly websites using{" "}
          <span className="font-semibold text-orange-500">React</span>,{" "}
          <span className="font-semibold text-orange-500">Tailwind CSS</span>, and{" "}
          <span className="font-semibold text-orange-500">MERN</span>. I love clean design, smooth UX, and turning ideas into real, working products.
        </p>

        <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
          But I’m not just a developer — I’m also on a mission to improve myself. From boosting my{" "}
          <span className="font-semibold text-orange-500">communication skills</span> and{" "}
          <span className="font-semibold text-orange-500">confidence</span> to creating content on{" "}
          <span className="font-semibold text-orange-500">YouTube</span>, I believe in constant learning and pushing my limits.
        </p>

        <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
          Every project I take on is not just about code — it’s about becoming better, step by step.
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
