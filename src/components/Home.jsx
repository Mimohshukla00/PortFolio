import React from "react";
import { Link, NavLink } from "react-router-dom";
import mylogo from "../assets/image-removebg-preview(1).png";
import myPhoto from "../assets/image-removebg-preview(1).png";
import Typewriter from "./Typewriter"; // Import the Typewriter component
import { Button, ButtonGroup } from "@nextui-org/button";
// import "../gradient.css";
// import { Link as NextUILink } from "@nextui-org/link";
// import { AnchorIcon } from "./AnchorIcon";

function Home() {
  return (
    <div className="bg-customDark text-white pacifico-regular  p-4 min-h-screen">
      <header className="bg-customDark shadow-lg sticky z-50 top-0">
        <nav className="bg-customDark2 border-gray-200 px-4 lg:px-8 py-3 rounded-full">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link
              to="/"
              className="flex items-center space-x-2 box relative rounded-none"
            >
              <img
                src={mylogo}
                className="h-12 w-12 rounded-full" // Ensures logo and text are proportionate
                alt="Logo"
              />
            </Link>

            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block py-2 px-4 transition duration-200 rounded ${
                        isActive ? "text-custom-red" : "text-gray-300"
                      } hover:text-customBlue`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `block py-2 px-4 transition duration-200 rounded ${
                        isActive ? "text-custom-red" : "text-gray-300"
                      } hover:text-customBlue`
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `block py-2 px-4 transition duration-200 rounded ${
                        isActive ? "text-custom-red" : "text-gray-300"
                      } hover:text-customBlue`
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div className="mt-12 flex flex-col lg:flex-row items-center justify-between mx-auto my-20 max-w-screen-xl pacifico-regular">
        {/* Left info section */}
        <div className="text-center lg:text-left lg:w-1/2 lg:pr-8 flex flex-col items-start space-y-6">
          {" "}
          {/* Increased space-y for better spacing */}
          <div className="text-6xl font-bold">Hi! I'm Mimoh Shukla</div>
          <div className="text-5xl text-teal-500 font-semibold">
            I am a{" "}
            <span className="inline-block text-teal">
              <Typewriter />
            </span>
          </div>
          <div className="flex gap-4 mt-4">
            {" "}
            {/* Added margin-top for spacing */}
            <Button
              radius="full"
              className="bg-custom-red text-black shadow-lg py-2 px-4 transition duration-300 hover:bg-red-600"
            >
              Contact me
            </Button>
            <Button
              radius="full"
              className="bg-customDark border-2 border-white text-white shadow-lg py-2 px-4 transition duration-300 hover:bg-green-500"
            >
              Download Resume
            </Button>
          </div>
          <div className="flex gap-4 mt-4">
            {" "}
            {/* Added margin-top for spacing */}
            <Button
              as="a"
              href="https://www.linkedin.com/in/mimohshukla00/" // Replace with your LinkedIn URL
              target="_blank" // Opens in a new tab
              color="primary"
              variant="bordered"
              className="py-2 px-4 transition duration-300 "
            >
              LinkedIn
            </Button>
            <Button
              as="a"
              href="https://github.com/Mimohshukla00" // Replace with your GitHub URL
              target="_blank" // Opens in a new tab
              color="primary"
              variant="bordered"
              style={{ color: "red" }}
              className="py-2 px-4 transition duration-300"
            >
              GitHub
            </Button>
            <Button
              as="a"
              href="https://www.instagram.com/whomimohshukla/" // Replace with your Instagram URL
              target="_blank" // Opens in a new tab
              color="primary"
              variant="bordered"
              style={{ color: "pink" }}
              className="py-2 px-4 transition duration-300 "
            >
              Instagram
            </Button>
            <Button
              as="a"
              href="https://leetcode.com/u/whomimohshukla/"
              target="_blank"
              color="primary"
              variant="bordered"
              style={{ color: "#F7D74D" }} // Set text color to yellow
              className="py-2 px-4 transition duration-300 "
            >
              LeetCode
            </Button>
          </div>
        </div>

        {/* Right image section */}
        <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0 ">
          {" "}
          {/* Added mt-8 for spacing on smaller screens */}
          <img
            className="box  relative rounded-none "
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
