import React from 'react';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import About from '../components/About';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
};

export default HomePage;
