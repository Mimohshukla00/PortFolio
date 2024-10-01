import { useState } from "react";
import Home from "./components/Home";
import AnimatedCursor from "react-animated-cursor";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
// import "./App.css";

function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={10} // Increased inner size for a larger inner ball
        outerSize={20} // Increased outer size for a larger outer ball
        color="193, 11, 111" // Your primary color
        outerAlpha={0.2} // Adjusted outer opacity
        innerScale={0.8} // Slightly larger inner ball scale
        outerScale={6} // Slightly larger outer ball scale
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
              innerSize: 14, // Increased inner size for custom target
              outerSize: 14, // Increased outer size for custom target
              color: "255, 255, 255", // Color for the custom target
              outerAlpha: 0.3, // Custom target outer opacity
              innerScale: 0.7, // Custom target inner scale
              outerScale: 6, // Custom target outer scale
            },
          },
        ]}
      />

      {/* <Route path="/" element={<Layout></Layout>}>
        <Route path="" element={<Home></Home>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="contact" element={<Contact></Contact>}></Route>
      </Route> */}



      

      <Home></Home>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
