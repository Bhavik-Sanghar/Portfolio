import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
