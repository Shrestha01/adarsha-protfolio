import React, { useState } from "react";

const Todolist = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addtoList = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const deleteFunction = (index) => {
    return () => {
      const newTodos = todos.filter((todo, i) => i !== index);
      setTodos(newTodos);
    };
  };

  console.log(todos);
  return (
    <div className="container min-h-screen my-8 border-2 ">
      <div className="flex justify-center space-x-4 border-2">
        <div className="border-2">
          <input
            className="border-2 border-gray-300 p-2 rounded-lg shadow-lg "
            value={input}
            type="text"
            placeholder="Add a todo"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div>
          <button
            className="bg-gradient-to-t from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-300 gap-2"
            onClick={addtoList}
          >
            Add to List
          </button>
        </div>
      </div>
      <div>
        {console.log("lenght" + todos.length)}
        {todos.length > 0 ? (
          <h1 className="text-center text-3xl">Todo List are</h1>
        ) : (
          ""
        )}
        <ul>
          {todos.map((todo, index) => (
            <li
              key={index}
              className="border-2 border-gray-300 p-2 rounded-lg shadow-lg flex flex-row justify-between px-8"
            >
              <div>{index + 1 + ". " + todo}</div>
              <div>
                <button
                  onClick={deleteFunction(index)}
                  className="bg-gradient-to-t from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-300 gap-2"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todolist;
