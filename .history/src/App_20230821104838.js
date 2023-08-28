import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Element } from 'react-scroll';
import CustomNavbar from './components/Navbar.js';
import Project from './components/Project.js';
import Skills from './components/Skills.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Home from './components/Home';
import Loading from './components/Loading'; // Import the Loading component
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (remove this in production)
    setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Adjust the delay time as needed
  }, []);

  return (
    <Router>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <CustomNavbar />

          <Element name="home">
            <Home />
          </Element>

          {/* Rest of the sections */}
        </div>
      )}
    </Router>
  );
};

export default App;
