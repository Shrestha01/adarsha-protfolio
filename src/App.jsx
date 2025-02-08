import React from "react";
import Navbar from "./components/Navbar";

import Todolist from "./components/Todolist";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Project from "./components/Project";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/todoList" element={<Todolist />} />
        <Route path="/" element={<Home />} />
        <Route path="/adarsha-protfolio" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route
          path="*"
          element={
            <h1 className="container text-center mt-10 text-4xl">
              404 - Page Not Found
            </h1>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
