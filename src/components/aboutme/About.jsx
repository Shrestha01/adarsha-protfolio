import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";

const techCategories = {
  Frontend: [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-primary" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  ],
  "Version Control": [
    { name: "Git", icon: <FaGit className="text-red-500" /> },
  ],
};

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-purple-800 py-20 text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Hello! I'm a passionate **React developer** with experience in
            building modern and responsive web applications. I enjoy working
            with **Tailwind CSS** for styling and creating clean UI components.
          </p>
          <p className="mt-4 text-gray-400">
            My expertise includes frontend technologies, state management, and
            optimizing performance. I love learning new tools and contributing
            to open-source projects.
          </p>

          {/* Tech Stack with Sections */}
          <div className="mt-8">
            <h3 className="text-4xl font-bold text-primary mb-4">Tech Stack</h3>

            {Object.entries(techCategories).map(([category, techs], idx) => (
              <div key={idx} className="mb-6 lg:flex">
                <div className="flex flex-col justify-center">
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {category}
                  </h4>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                  {techs.map((tech, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center space-y-2 p-2 transition-transform transform hover:scale-110 hover:text-teal-300"
                    >
                      <div className="text-5xl transition-transform transform hover:rotate-6">
                        {tech.icon}
                      </div>
                      <span className="text-sm font-semibold">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
