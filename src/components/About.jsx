import React from "react";
import aboutME from "../assets/aboutUS.png";
import design1 from "../assets/design2.png";
import resting from "../assets/restPhoto.png";

function About() {
  return (
    <div className="py-16 bg-customDark text-white border-none p-4">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6 flex justify-evenly flex-col md:flex-row items-center">
        <div className="space-y-6 flex flex-col w-full md:w-5/12">
          {/* Image Section */}
          <div className="w-full">
            <img
              src={aboutME}
              alt="About us team illustration"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          {/* Content Section */}
          <div className="text-center">
            <section>
              <p className="mt-6 text-white">
                My name is Mimoh Shukla, and I am currently pursuing a Bachelor
                of Technology (B.Tech) in Computer Science while learning web
                development technologies, including HTML and CSS for structuring
                and styling web pages. I leverage JavaScript to create dynamic
                and interactive user experiences. With React, I build responsive
                and efficient user interfaces, utilizing its component-based
                architecture to streamline development. I have also learned C++
                and Operating Systems, which have enhanced my understanding of
                programming and software development.
              </p>
              <p className="mt-4 text-white">
                I use MongoDB and Express.js for backend development to create
                robust and scalable applications. Tailwind CSS allows for rapid
                UI design, while Postman is essential for API testing. My
                workflow is enhanced by using VS Code as my primary code editor
                and Git for version control, ensuring efficient collaboration
                and code management on platforms like GitHub.
              </p>
            </section>
          </div>
        </div>
        <div className="relative w-full md:w-5/12 flex justify-center mt-8 md:mt-12">
          {/* Design Image */}
          <img
            src={design1}
            width={635.8}
            height={499}
            alt="Design concept illustration"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
          {/* Resting Image */}
          <img
            src={resting}
            width={412.68}
            height={353.14}
            alt="Resting illustration"
            className="absolute top-0 left-1/3 transform -translate-x-1/2 -translate-y-1/4 z-10 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
