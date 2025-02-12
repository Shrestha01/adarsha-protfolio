import React from "react";
import { useParams } from "react-router-dom";
import Calcualtorapp from "./Calculatorapp";
import Hamrobazar from "./Hamrobazar";

const ProjectList = () => {
  const { id } = useParams();

  switch (id) {
    case "Calculatorapp":
      return <Calcualtorapp />;
    case "Hamrobazar":
      return <Hamrobazar />;

    default:
      return <div>Project not found.</div>;
  }
};

export default ProjectList;
