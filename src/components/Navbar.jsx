import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { BiSolidPhoneCall } from "react-icons/bi";
import { SiAuchan } from "react-icons/si";
import { FaBars, FaTimes } from "react-icons/fa"; // Menu Icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const phoneNumber = "+61420541869";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="shadow-md sticky top-0 z-50 bg-gradient-to-r from-blue-800 to-purple-600 text-white">
      <div className="container py-3 sm:py-0">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <Link
              to="/home"
              className="flex gap-1 sm:text-3xl font-bold hover:text-primary"
            >
              <SiAuchan />
              <SiAuchan />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center gap-4">
            <ul className="flex gap-4">
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
                  About me
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="inline-block p-4 hover:text-primary"
                >
                  Contact me
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

          {/* Burger Menu Button */}
          <div className="sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-2xl focus:outline-none bg-transparent"
            >
              {menuOpen ? (
                <FaTimes />
              ) : (
                <FaBars className="hover:text-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="sm:hidden flex flex-col items-center bg-gray-900 text-white py-4 rounded-lg shadow-md bg-transparent">
            <Link
              to="/home"
              className="py-2 text-lg hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="py-2 text-lg hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="py-2 text-lg hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>

            {/* Call Button in Mobile Menu */}
            <button
              onClick={handleCall}
              className="mt-2 bg-gradient-to-t from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-300 flex items-center gap-2"
            >
              Call
              <BiSolidPhoneCall />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
