import React, { useState, useEffect } from "react";
import CustomNavbar from "./components/Navbar.js";
import Project from "./components/Project.js";
import Skills from "./components/Skills.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";
import { Audio } from "react-loader-spinner";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for demonstration purposes
    const delay = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay time as needed

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(delay);
  }, []);

  return (
    <div id="main">
      {loading ? (
        // Loader or loading spinner component
        <div className="loader-container">
          <div className="loader"></div>
          {/* <Audio /> */}
         
        </div>
      ) : (
        <>
          <CustomNavbar />
          <div id="home">
            <Home />
          </div>
          <div id="project">
            <Project />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
