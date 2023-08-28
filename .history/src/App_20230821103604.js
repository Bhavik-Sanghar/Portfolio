import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, Element, animateScroll as scroll } from 'react-scroll'; // Import react-scroll
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
    <>
      <Router>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>

      {/* Add the navigation links with smooth scrolling */}
      <Link to="home" smooth={true} duration={500} className="scroll-link">
        Home
      </Link>
      <Link to="project" smooth={true} duration={500} className="scroll-link">
        Project
      </Link>
      <Link to="skills" smooth={true} duration={500} className="scroll-link">
        Skills
      </Link>
      <Link to="about" smooth={true} duration={500} className="scroll-link">
        About
      </Link>
      <Link to="contact" smooth={true} duration={500} className="scroll-link">
        Contact
      </Link>
    </>
  );
};

export default App;
