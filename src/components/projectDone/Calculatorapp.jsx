import React from "react";
import { useState } from "react";

const Calculatorapp = () => {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    setInput((input) => input + value);
  };
  const handleClear = () => {
    setInput("");
  };

  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString());
    } catch (e) {
      setInput("Error");
    }
  };

  return (
    <div className="h-screen bg-gradient-to-r from-blue-600 to-purple-800 ">
      <div className="container  flex flex-col items-center text-white ">
        <div className="p-8 rounded-lg shadow-lg max-w-fit mt-10">
          <div className="text-right text-2xl mb-4">
            <input
              type="text"
              className="p-2 text-3xl font-mono text-gray-700 bg-gray-200 border-2 border-gray-300 rounded-lg"
              readOnly
              value={input}
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            <button
              onClick={() => handleButtonClick("7")}
              className="border-2 rounded-lg"
            >
              7
            </button>
            <button
              onClick={() => handleButtonClick("8")}
              className="border-2 rounded-lg"
            >
              8
            </button>
            <button
              onClick={() => handleButtonClick("9")}
              className="border-2 rounded-lg"
            >
              9
            </button>
            <button
              onClick={() => handleButtonClick("/")}
              className="border-2 rounded-lg"
            >
              /
            </button>
            <button
              onClick={() => handleButtonClick("4")}
              className="border-2 rounded-lg"
            >
              4
            </button>
            <button
              onClick={() => handleButtonClick("5")}
              className="border-2 rounded-lg"
            >
              5
            </button>
            <button
              onClick={() => handleButtonClick("6")}
              className="border-2 rounded-lg"
            >
              6
            </button>
            <button
              onClick={() => handleButtonClick("*")}
              className="border-2 rounded-lg"
            >
              *
            </button>

            <button
              onClick={() => handleButtonClick("1")}
              className="border-2 rounded-lg"
            >
              1
            </button>
            <button
              onClick={() => handleButtonClick("2")}
              className="border-2 rounded-lg"
            >
              2
            </button>
            <button
              onClick={() => handleButtonClick("3")}
              className="border-2 rounded-lg"
            >
              3
            </button>
            <button
              onClick={() => handleButtonClick("-")}
              className="border-2 rounded-lg"
            >
              -
            </button>

            <button
              onClick={() => handleButtonClick("0")}
              className="border-2 rounded-lg col-span-2"
            >
              0
            </button>
            <button
              onClick={() => handleButtonClick(".")}
              className="border-2 rounded-lg"
            >
              .
            </button>
            <button
              onClick={() => handleButtonClick("+")}
              className="border-2 rounded-lg"
            >
              +
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <button onClick={handleClear} className="border-2 rounded-lg">
              Clear
            </button>
            <button onClick={handleEvaluate} className="border-2 rounded-lg">
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculatorapp;
