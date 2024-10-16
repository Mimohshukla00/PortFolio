import React, { useState } from "react";
import { AnimatedCursor } from "react-animated-cursor";

const CustomCursor = () => {
  const [isClickable, setIsClickable] = useState(false);

  const handleMouseEnter = () => {
    setIsClickable(true);
  };

  const handleMouseLeave = () => {
    setIsClickable(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <AnimatedCursor
        innerSize={12} // Increased inner size for a larger inner ball
        outerSize={30} // Increased outer size for a larger outer ball
        color="0, 150, 255" // Changed to a bright blue color
        outerAlpha={0.3} // Adjusted outer opacity for a more visible outer ball
        innerScale={1} // Slightly larger inner ball scale
        outerScale={8} // Increased outer ball scale for more impact
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          {
            target: ".custom",
            options: {
              innerSize: 16, // Increased inner size for custom target
              outerSize: 16, // Increased outer size for custom target
              color: "255, 255, 255", // White color for the custom target
              outerAlpha: 0.4, // Custom target outer opacity
              innerScale: 0.9, // Increased inner scale for custom target
              outerScale: 8, // Increased outer scale for custom target
            },
          },
        ]}
      />
      {/* Tail Effect */}
      <div
        className={`tail ${isClickable ? "hidden" : "block"}`}
        style={{
          position: "absolute",
          height: "20px", // Adjust height of the tail
          width: "20px", // Adjust width of the tail
          backgroundColor: "rgba(0, 150, 255, 0.5)", // Tail color
          borderRadius: "50%",
          filter: "blur(5px)",
          transition: "transform 0.1s ease", // Smooth transition
          transform: "translate(0, 10px)", // Tail position offset
        }}
      />
    </div>
  );
};

export default CustomCursor;
