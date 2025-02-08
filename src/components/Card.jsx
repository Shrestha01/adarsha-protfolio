import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/food-logo.jpg";

const Card = (props) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-inherit dark:bg-gray-800 text-white">
      {/* Project Image */}
      <div className="aspect-video bg-gray-100 dark:bg-gray-700 relative">
        <img
          src={props.projectImg}
          alt="Project Screenshot"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Live Preview Badge */}
        <span className="absolute top-2 right-2 bg-white dark:bg-gray-900 text-xs px-3 py-1 rounded-full shadow-sm">
          🔗 Live
        </span>
      </div>

      {/* Card Body */}
      <div className="p-6">
        {/* Project Title */}
        <h3 className="text-xl font-bold mb-2">{props.name}</h3>

        {/* Project Description */}
        <p className=" text-sm mb-4">{props.description}</p>

        {/* Technologies */}

        <div className="flex flex-wrap gap-2 mb-4">
          {props.tools.map((tool) => (
            <span className="bg-gradient-to-t from-primary to-secondary px-2 py-1 bg-inherit rounded-md text-xs">
              {tool}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-between items-center">
          <Link to="/home">
            <button className="flex items-center gap-2 font-semibold bg-gradient-to-t from-primary to-secondary px-6 py-3 rounded-md text-white hover:scale-105 duration-300">
              Demo
            </button>
          </Link>
          <a
            href="#"
            className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-gray-200"
            aria-label="GitHub Repository"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
