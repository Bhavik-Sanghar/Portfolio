import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/Navbar.js';
import Project from './components/Project.js';
import Skills from './components/Skills.js';
import About from './components/About.js';
import Contact from './Contact.js';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css'
const App = () => {
  return (<>
  <CustomNavbar/>
  <div id='home'>
        <Home/>
      </div>
      <div id='project'>
        <Project/>
      </div>
      <div id='skill'>
        <Skills/>
      </div>
      <div id='about'>
        <About/>
      </div>
  </>
  );
};

export default App;
