import img from "../assets/food-logo.jpg";
import kolunHire from "../assets/kolunHire.png";
import calculator from "../assets/calculator.jpg";
import weather from "../assets/weather.jpg";
import empassion from "../assets/empassion.jpg";

const projectDes = [
  {
    projectId: 2,
    projectCode: "Kolunhire",
    projectName: "Equipment Booking App",
    projectDescription:
      "Developed a full-stack application that allows users to book equipment for their projects. Integrated a payment gateway...",
    projectImg: kolunHire,
    toolUsed: [
      "HTML",
      "CSS",
      "Javascript",
      "Wordpress",
      "MySQL",
      "Woocommerce",
    ],
  },
  {
    projectId: 3,
    projectCode: "Empassion",
    projectName: "Empassion",
    projectDescription: "Emprace the life of your dreams",
    projectImg: empassion,
    toolUsed: [
      "HTML",
      "CSS",
      "Javascript",
      "Wordpress",
      "MySQL",
      "Woocommerce",
    ],
  },

  {
    projectId: 5,
    projectCode: "Calculatorapp",
    projectName: "Calculator App",
    projectDescription:
      "Developed a calculator app with React that performs basic arithmetic operations...",
    projectImg: calculator,
    toolUsed: ["HTML", "Javascript", "React", "MongoDB"],
  },
  {
    projectId: 6,
    projectCode: "Weatherapp",
    projectName: "Weather App",
    projectDescription:
      "Developed a Weather app with React that shows the weather of the searched city...",
    projectImg: weather,
    toolUsed: ["HTML", "Javascript", "React"],
  },
];
export default projectDes;
