import React from "react";
import Logo from "../assets/food-logo.jpg";
import { BiSolidPhoneCall } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SiAuchan } from "react-icons/si";

const Navbar = () => {
  const location = useLocation();
  const phoneNumber = "+61420541869";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="shadow-md  sticky top-0 z-50 bg-gradient-to-r from-blue-800 to-purple-600 text-white">
      <div className="container py-3 sm:py-0">
        <div className="flex justify-between items-center">
          {/* Logo from Navbar */}
          <div>
            <Link
              to="/home"
              className="flex gap-1 sm:text-3xl font-bold hover:text-primary"
            >
              {/* <img src={Logo} alt="Foodie Zone" className="w-10" /> */}
              <SiAuchan />
              <SiAuchan />
            </Link>
          </div>
          {/* Menu section Navbar */}
          <div className="flex items-center gap-4">
            <ul className="hidden sm:flex gap-4">
              <li>
                <Link
                  to="/home"
                  className="inline-block p-4 hover:text-primary"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="inline-block p-4 hover:text-primary"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="inline-block p-4 hover:text-primary"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  to="/todoList"
                  className="inline-block p-4 hover:text-primary"
                >
                  TodoList
                </Link>
              </li>
            </ul>
            {/* Call Button */}

            <button
              onClick={handleCall}
              className="bg-gradient-to-t from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-300 flex items-center gap-2"
            >
              Call
              <BiSolidPhoneCall />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
