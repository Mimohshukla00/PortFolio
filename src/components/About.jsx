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
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <section>
              <p className="mt-6 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                omnis voluptatem accusantium nemo perspiciatis delectus atque
                autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
                consequatur! Officiis id consequatur atque doloremque!
              </p>
              <p className="mt-4 text-gray-600">
                Nobis minus voluptatibus pariatur dignissimos libero quaerat
                iure expedita at? Asperiores nemo possimus nesciunt dicta veniam
                aspernatur quam mollitia.
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
