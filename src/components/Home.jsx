import React from "react";
import pic from '../assets/Srajan__.jpg';
import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import { useTheme } from "../context/ThemeContext"; // Import the theme context

function Home() {
  const { darkMode } = useTheme(); // Get the dark mode state from context

  return (
    <>
      <div
        name="Home"
        className={`mt-10  mx-auto px-4 md:px-12 py-16 flex flex-col-reverse md:flex-row items-center md:items-start gap-12 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
      >
        {/* LEFT SIDE */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <span className={`text-lg md:text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} block`}>
            Welcome to My Feed
          </span>

          <div className="flex justify-center md:justify-start items-center flex-wrap text-2xl md:text-4xl font-semibold">
            <h1>Hello, I'm a</h1>
            <ReactTyped
              className={`text-blue-700 font-bold ml-2 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}
              strings={["Developer", "Programmer", "Coder"]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
            />
          </div>

          <p className={`text-sm md:text-base text-justify leading-relaxed max-w-lg mx-auto md:mx-0 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            I am an enthusiastic web developer with a strong foundation in HTML, CSS, JavaScript, and frameworks like ReactJS. I am dedicated to creating intuitive and dynamic user interfaces, with a passion for optimizing user experiences and embracing innovation.
          </p>

          {/* SOCIAL + CURRENTLY WORKING */}
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-8 md:gap-12">
            {/* SOCIAL ICONS */}
            <div className="space-y-2">
              <h1 className={`font-bold text-center md:text-left ${darkMode ? 'text-gray-200' : 'text-black'}`}>Available on</h1>
              <ul className="flex justify-center md:justify-start gap-4">
                <li>
                  <a href="https://www.instagram.com/_srajan_soni_/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-2xl text-pink-600 hover:text-pink-700 cursor-pointer transition-transform hover:scale-110" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/srajan-soni-4b49601a4/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-2xl text-blue-700 hover:text-blue-800 cursor-pointer transition-transform hover:scale-110" />
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/7828244431" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="text-2xl text-green-500 hover:text-green-600 cursor-pointer transition-transform hover:scale-110" />
                  </a>
                </li>
              </ul>
            </div>

            {/* CURRENTLY WORKING */}
            <div className="space-y-2">
              <h1 className={`font-bold text-center md:text-left ${darkMode ? 'text-gray-200' : 'text-black'}`}>Currently working on</h1>
              <div className="flex justify-center md:justify-start gap-4">
                <SiMongodb className={`text-2xl md:text-3xl ${darkMode ? 'text-green-400' : 'text-green-600'} hover:scale-110 duration-200 cursor-pointer`} />
                <SiExpress className={`text-2xl md:text-3xl ${darkMode ? 'text-gray-400' : 'text-gray-800'} hover:scale-110 duration-200 cursor-pointer`} />
                <FaReact className={`text-2xl md:text-3xl ${darkMode ? 'text-cyan-400' : 'text-cyan-500'} hover:scale-110 duration-200 cursor-pointer`} />
                <FaNodeJs className={`text-2xl md:text-3xl ${darkMode ? 'text-green-500' : 'text-green-700'} hover:scale-110 duration-200 cursor-pointer`} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={pic}
            alt="Profile"
            className={`rounded-md w-48 h-48 md:w-96 md:h-96 object-cover shadow-lg border-4 border-gray-300 hover:border-blue-500 transition-all duration-300 ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}
          />
        </div>
      </div>

      {/* <hr className={`border-gray-300  ${darkMode ? 'border-gray-700' : 'border-gray-300'}`} /> */}
    </>
  );
}

export default Home;
