import React, { useState } from "react";
import profilePic from "../assets/profile-pic.jpeg";
import { Link } from "react-router-dom";
import { GrProjects } from "react-icons/gr";
import { IoIosContact } from "react-icons/io";
import { FaArrowCircleDown } from "react-icons/fa";
import About from "./aboutme/About";

const Home = () => {
  const [moreInfo, setmoreInfo] = useState(false);
  const handleClick = () => {
    setmoreInfo(true);
    console.log("button clicked");
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-purple-800 py-20">
      <div className="container mx-auto px-6 text-center">
        {/* Profile Image */}
        <div className="flex justify-center mb-8">
          <img
            src={profilePic} // Replace with your profile image
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-purple-800 shadow-lg"
          />
        </div>

        {/* Name and Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Adarsha Shrestha
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8">
          Full Stack Developer | Mern Stack | Backend Developer
        </p>

        {/* Short Bio */}
        <p className="max-w-2xl mx-auto text-lg text-gray-100 mb-12">
          I specialize in building modern, responsive, and user-friendly web
          applications. With a passion for clean code and innovative solutions,
          I bring ideas to life.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="space-x-4 flex justify-center">
          <Link
            to="/project" // Link to your projects section
          >
            <button className="flex items-center gap-2 font-semibold bg-gradient-to-t from-primary to-secondary px-6 py-3 rounded-full text-white hover:scale-105 duration-300">
              View My Work
              <GrProjects />
            </button>
          </Link>
          <Link
            to="/contact" // Link to your contact section
          >
            <button className="flex items-center gap-2 font-semibold bg-gradient-to-t from-primary to-secondary px-6 py-3 rounded-full text-white hover:scale-105 duration-300">
              Contact Me
              <IoIosContact />
            </button>
          </Link>
        </div>

        {!moreInfo && (
          <div className="flex justify-center border-2 mt-4 ">
            <button
              className="flex items-center gap-2 font-semibold bg-gradient-to-t from-primary to-secondary px-6 py-3 rounded-full text-white hover:scale-105 duration-300"
              onClick={handleClick}
            >
              More
              <FaArrowCircleDown />
            </button>
          </div>
        )}
      </div>
      {moreInfo && <About />}
    </div>
  );
};

export default Home;
