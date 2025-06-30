import React from "react";

// 🖼️ Import your images
import htmlLogo from "../assets/tech_logo/html.png";
import cssLogo from "../assets/tech_logo/css.png";
import jsLogo from "../assets/tech_logo/javascript.png";
import tailwindLogo from "../assets/tech_logo/tailwindcss.png";
import reactLogo from "../assets/tech_logo/reactjs.png";
// import viteLogo from "../assets/tech_logo/vite.png";

import gitLogo from "../assets/tech_logo/git.png";
import githubLogo from "../assets/tech_logo/github.png";
import vscodeLogo from "../assets/tech_logo/vscode.png";
// import figmaLogo from "../assets/tech_logo/figma.png";

const Skills = () => {
  return (
    <section className="bg-gray-600 text-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">⚙️ Tech Stack / Skills</h2>

        {/* 🔹 Frontend Skills */}
        <div className="mb-12">
          <h3 className="text-xl text-orange-400 mb-6">Frontend</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "HTML", img: htmlLogo },
              { name: "CSS", img: cssLogo },
              { name: "JavaScript", img: jsLogo },
              { name: "Tailwind", img: tailwindLogo },
              { name: "React", img: reactLogo },
              // { name: "Vite", img: viteLogo },
            ].map((skill) => (
              <div key={skill.name} className="flex flex-col items-center w-20">
                <img src={skill.img} alt={skill.name} className="w-12 h-12 mb-2" />
                <span className="text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 🔹 Tools */}
        <div>
          <h3 className="text-xl text-orange-400 mb-6">Tools</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "Git", img: gitLogo },
              { name: "GitHub", img: githubLogo },
              { name: "VS Code", img: vscodeLogo },
              // { name: "Figma", img: figmaLogo },
            ].map((tool) => (
              <div key={tool.name} className="flex flex-col items-center w-20">
                <img src={tool.img} alt={tool.name} className="w-12 h-12 mb-2" />
                <span className="text-sm">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
