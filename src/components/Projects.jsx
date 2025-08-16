import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import shelfy from "../assets/project_img/shelfy.png";
import sen from "../assets/project_img/sen.png";
import pixabay from "../assets/project_img/pixabay.png";
import todo from "../assets/project_img/todo.png";
import portfolio from "../assets/project_img/portfolio.png";

// Dummy project list (replace with your real projects)
const projectList = [
  {
    title: "Shelfy",
    desc: "An E-commerce website built using Reactjs, Nodejs, Express and MongoDB.",
    img: shelfy,
    tech: ["React", "Tailwind", "Vite", "Node", "MongoDB", "Express"],
    live: "https://shelfy-ten.vercel.app/",
    github: "https://github.com/mudityalodhi/shelfy",
  },
  {
    title: "SEN (Idea in Development)",
    desc: "A barter based Skill exchane system built using Reactjs, Nodejs, Express and MongoDB.",
    img: sen,
    tech: ["React", "Node", "Express", "mongoDB", "TailwindCSS"],
    live: "https://sen-gamma.vercel.app/",
    github: "https://github.com/mudityalodhi/sen",
  },
  {
    title: "MERN Todo App",
    desc: "A fullstack MERN todo app.",
    img: todo,
    tech: ["React", "TailwindCSS", "Express", "Node", "MongoDB", "React icons"],
    live: "https://todo-muditya.vercel.app/",
    github: "https://github.com/mudityalodhi/pixabay-mini-clone",
  },
  {
    title: "Portfolio",
    desc: "A Portfolio.",
    img: portfolio,
    tech: ["React", "TailwindCSS", "React icons"],
    live: "https://muditya-portfolio.vercel.app/",
    github: "https://github.com/mudityalodhi/muditya-portfolio",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12 text-center">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectList.map((proj, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={proj.img}
                alt={proj.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {proj.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">{proj.desc}</p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {proj.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action links */}
                <div className="flex items-center gap-4 mt-4 text-sm">
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline flex items-center gap-1"
                  >
                    Live <FaExternalLinkAlt size={14} />
                  </a>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-800 hover:underline flex items-center gap-1"
                  >
                    Code <FaGithub size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
