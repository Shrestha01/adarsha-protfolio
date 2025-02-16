import React from "react";
import { useParams } from "react-router-dom";
import Calcualtorapp from "./Calculatorapp";
import Hamrobazar from "./Hamrobazar";
import Weatherapp from "./Weatherapp";
import Project from "../Project";

const ProjectList = () => {
  const { id } = useParams();

  switch (id) {
    case "Calculatorapp":
      return <Calcualtorapp />;
    case "Hamrobazar":
      return <Hamrobazar />;
    case "Weatherapp":
      return <Weatherapp />;
    case "Kolunhire":
      window.open("https://www.kolunhire.com.au", "_blank");
      return <Project />;
    case "Empassion":
      window.open("https://www.empassion.com.au", "_blank");
      return <Project />;

    default:
      return <div>Project not found.</div>;
  }
};

export default ProjectList;
