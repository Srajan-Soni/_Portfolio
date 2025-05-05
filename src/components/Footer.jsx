import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { useTheme } from "../context/ThemeContext"; 

function Footer() {
  const { darkMode } = useTheme(); 

  return (
    <>
      <hr className={`border ${darkMode ? "border-gray-700" : "border-gray-300"}`} />
      <footer className={`${darkMode ? "bg-gray-900 text-gray-300" : "bg-gray-50 text-gray-700"} py-10`}>
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
        
            <div className="flex space-x-6 mb-6">
              <a
                href="#"
                className={`transition-colors ${darkMode ? "text-gray-400 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"}`}
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className={`transition-colors ${darkMode ? "text-gray-400 hover:text-blue-300" : "text-gray-600 hover:text-blue-400"}`}
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className={`transition-colors ${darkMode ? "text-gray-400 hover:text-pink-400" : "text-gray-600 hover:text-pink-500"}`}
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className={`transition-colors ${darkMode ? "text-gray-400 hover:text-blue-500" : "text-gray-600 hover:text-blue-700"}`}
              >
                <FaLinkedinIn size={24} />
              </a>
            </div>

      
            <div className={`text-center text-sm border-t pt-4 ${darkMode ? "border-gray-700 text-gray-400" : "border-gray-300 text-gray-500"}`}>
              &copy; {new Date().getFullYear()} Developed by Srajan. <br />
              All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
