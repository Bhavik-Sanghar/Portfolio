import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import CustomNavbar from './components/Navbar.js';
import Project from './components/Project.js';
import Skills from './components/Skills.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css';

const App = () => {
  const [isLightMode, setIsLightMode] = useState(true);

  const toggleMode = () => {
    setIsLightMode(!isLightMode);
  };

  const backgroundStyle = {
    background: isLightMode ? 'url("./Asset/light-bg.jpg")' : 'url("./Asset/dark-bg.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingTop: '4rem',
    animation: 'SlindInRight 3s ease 0s 1',
  };

  return (
    <div id="main" style={backgroundStyle}>
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
    </div>
  );
};

export default App;
