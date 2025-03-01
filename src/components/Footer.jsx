import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SiAuchan } from "react-icons/si";
function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-purple-600 text-white py-8">
      <div className="container">
        <div className="flex flex-col items-center text-center space-y-6 py-6 sm:py-0 sm:space-y-0 sm:flex-row sm:justify-between ">
          {/* Column 1: About */}
          <div className="flex flex-col items-center hover:text-primary ">
            <div>
              <Link to="/home" className="flex gap-1 sm:text-3xl font-bold">
                {/* <img src={Logo} alt="Foodie Zone" className="w-10" /> */}
                <SiAuchan />
                <SiAuchan />
              </Link>
            </div>

            <div className="">
              <span>E-Protfolio Application</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="/home" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="hover:text-primary">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/services" className="hover:text-primary">
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Shrestha pty ltd. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
