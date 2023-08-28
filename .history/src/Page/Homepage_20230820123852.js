import React from 'react';
import NavBar from '../components/Navbar.js';
import Home from '../components/Home.js';
// import Projects from '../components/Projects.js';
// import Skills from './Skills.js';
// import About from './About.js';
// import Contact from './Contact.js';

const HomePage = () => {
  return (
    <div>
      <NavBar />
       <Home /> 
      {/* // <Projects />
      // <Skills />
      // <About />
      // <Contact />  */}
    </div>
  );
};

export default HomePage;
