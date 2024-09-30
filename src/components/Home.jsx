import React from "react";
import { Link, NavLink } from "react-router-dom";
import mylogo from "../assets/myLogo-Photoroom.png";
import myPhoto from "../assets/image copy.png";
import Typewriter from "./Typewriter"; // Import the Typewriter component
import { Button, ButtonGroup } from "@nextui-org/button";
// import { Link as NextUILink } from "@nextui-org/link";
// import { AnchorIcon } from "./AnchorIcon";

function Home() {
  return (
    <div className="bg-customDark text-white p-4 min-h-screen">
      <header className="bg-customDark shadow-lg sticky z-50 top-0">
        <nav className="bg-customDark border-gray-200 px-4 lg:px-8 py-3">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={mylogo}
                className="h-12 w-12" // Ensures logo and text are proportionate
                alt="Logo"
              />
            </Link>

            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block py-2 px-4 transition duration-200 rounded ${
                        isActive ? "text-orange-500" : "text-gray-300"
                      } hover:text-customBlue`
                    }>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `block py-2 px-4 transition duration-200 rounded ${
                        isActive ? "text-orange-500" : "text-gray-300"
                      } hover:text-customBlue`
                    }>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `block py-2 px-4 transition duration-200 rounded ${
                        isActive ? "text-orange-500" : "text-gray-300"
                      } hover:text-customBlue`
                    }>
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div className="mt-12 flex flex-col lg:flex-row items-center justify-between mx-auto max-w-screen-xl">
        {/* Left info section */}
        <div className="text-center lg:text-left lg:w-1/2 lg:pr-8 flex flex-col items-start space-y-4">
          {" "}
          {/* Added flex-col and space-y-4 for better spacing */}
          <div className="text-7xl font-bold">Hi! I'm Mimoh Shukla</div>
          <div className="text-5xl text-teal-500 font-semibold">
            I am a{" "}
            <span className="inline-block  text-teal">
              <Typewriter />
            </span>
          </div>
          <div>
            {/* <button className="bg-gradient-to-r from-customBlue to-indigo-600 hover:from-indigo-600 hover:to-customBlue text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300">
              Hire Me
            </button> */}
            <Button
              radius="full"
              className="bg-gradient-to-tr from-teal to-green-500 text-white shadow-lg">
              Hire Me
            </Button>
            <Button radius="full" className="bg-dark text-white shadow-lg ml-4">
              {" "}
              {/* Added margin-left */}
              Download Resume
            </Button>
          </div>
          <div>
            <Button
              as="a"
              href="https://www.linkedin.com/in/mimohshukla00/" // Replace with your LinkedIn URL
              target="_blank" // Opens in a new tab
              color="primary"
              variant="bordered">
              Linkdin
            </Button>
            <Button
              as="a"
              href="https://github.com/Mimohshukla00" // Replace with your LinkedIn URL
              target="_blank" // Opens in a new tab
              color="primary"
              variant="bordered"
              style={{ color: "red" }} >
              Github
            </Button>
            <Button
              as="a"
              href="https://www.instagram.com/whomimohshukla/" // Replace with your LinkedIn URL
              target="_blank" // Opens in a new tab
              color="primary"
              style={{ color: "pink" }} 
              variant="bordered">
              Instagram
            </Button>
            <Button
              as="a"
              href="https://leetcode.com/u/whomimohshukla/"
              target="_blank"
              color="primary"
              style={{ color: "#F7D74D" }} // Set text color to yellow
              variant="bordered">
              LeetCode
            </Button>
          </div>
        </div>

        {/* Right image section */}
        <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
          {" "}
          {/* Added mt-8 for spacing on smaller screens */}
          <img
            src={myPhoto}
            style={{ width: "369px", height: "369px", userSelect: "none" }} // Square shape
            alt="Mimoh"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
