import { useState } from "react";
import Home from "./components/Home";
import AnimatedCursor from "react-animated-cursor";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";
// import CustomCursor from "./Animated.cursor"
// import Lyout from "./Lyout";
// import "./App.css";

function App() {
  return (
    <>
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


      <Home></Home>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
