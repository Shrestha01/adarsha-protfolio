import { GoogleMap } from "@react-google-maps/api";
import React, { useState } from "react";
import GoogleMaps from "./GoogleMaps";

const About = () => {
  const [num, setNum] = useState(0);

  return (
    <div className=" min-h-screen bg-gradient-to-r from-blue-600 to-purple-800 py-20">
      <div className="container text-white flex flex-col content-center">
        <div>{num}</div>
        <div>
          <button
            onClick={() => setNum(num + 1)}
            className="inline-block bg-white text-black px-4 py-2 rounded-lg"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
