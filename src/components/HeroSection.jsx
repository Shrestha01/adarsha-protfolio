import React from "react";
import { useState } from "react";

const HeroSection = (props) => {
  const [click, setClick] = useState(0);
  return (
    <div className="container">
      <h1 className="text-3xl font-bold text-center mt-10">
        Welcome {props.name}
      </h1>
      <h1>you have clicked {click} </h1>
      <button
        className="bg-gradient-to-t from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-300 flex items-center gap-2"
        onClick={() => setClick(click + 1)}
      >
        click
      </button>
    </div>
  );
};

export default HeroSection;
