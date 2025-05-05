import React, { useState, useEffect } from "react";
import pic from "../assets/photo.avif";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import { useTheme } from "../context/ThemeContext";  // Import the context

function Navbar() {
  const [menu, setMenu] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();  // Using context

  // Effect hook to apply dark mode class to the document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact" },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900">
      <div className="flex justify-between items-center h-16">
        {/* Logo and Name */}
        <div className="flex space-x-2">
          <img src={pic} className="h-12 w-12 rounded-full" alt="profile" />
          <h1 className="font-semibold text-xl cursor-pointer text-black dark:text-white">
            Srajan
            <p className="text-sm">
              <span className="text-blue-500 dark:text-yellow-400">FullStack</span> Developer
            </p>
          </h1>
        </div>

        {/* Navbar Items and Dark Mode Toggle */}
        <div className="flex items-center space-x-4">
          <ul className="hidden md:flex space-x-8 text-black dark:text-white">
            {navItems.map(({ id, text }) => (
              <li
                className="hover:scale-105 duration-200 cursor-pointer"
                key={id}
              >
                <Link
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}  // Toggles the dark mode
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          >
            {darkMode ? (
            <img src=" https://png.pngtree.com/png-vector/20210823/ourmid/pngtree-dark-mode-icon-light-png-clipart-png-image_3811921.jpg" alt="sun icon" className="w-5 h-5" />
            ) : (
             <img src="https://cdn-icons-png.flaticon.com/512/6714/6714978.png" alt="sun icon" className="w-5 h-5" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <div onClick={() => setMenu(!menu)} className="md:hidden">
            {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      {menu && (
        <div className="bg-white dark:bg-gray-900">
          <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl text-black dark:text-white">
            {navItems.map(({ id, text }) => (
              <li
                className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                key={id}
              >
                <Link
                  onClick={() => setMenu(!menu)}
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
