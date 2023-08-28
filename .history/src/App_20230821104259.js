import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Element } from 'react-scroll';
import CustomNavbar from './components/Navbar.js';
import Project from './components/Project.js';
import Skills from './components/Skills.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css';

const App = () => {
  return (
    <Router>
      <div>
        <CustomNavbar />

        <Element name="home">
          <Home />
        </Element>

        <Element name="project">
          <Project />
        </Element>

        <Element name="skills">
          <Skills />
        </Element>

        <Element name="about">
          <About />
        </Element>

        <Element name="contact">
          <Contact />
        </Element>
      </div>
    </Router>
  );
};

export default App;
