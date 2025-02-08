import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import { IoMdArrowRoundBack } from "react-icons/io";

import ProjectDes from "../Data/ProjectData";

const Project = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-800 text-white py-20">
      <div className="container min-h-screen space-y-4 flex flex-col items-center">
        <div className="inline-grid lg:grid-cols-3 sm:grid-cols-1 gap-4 ">
          {ProjectDes.map((project) => (
            <Card
              key={project.projectId}
              name={project.projectName}
              description={project.projectDescription}
              projectImg={project.projectImg}
              tools={project.toolUsed}
            />
          ))}
        </div>
        <div className="">
          <Link to="/home">
            <button className="flex items-center gap-2 font-semibold bg-gradient-to-t from-primary to-secondary px-6 py-3 rounded-full text-white hover:scale-105 duration-300">
              Back
              <IoMdArrowRoundBack />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
