import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SocialIcon } from 'react-social-icons';
import Project from '../components/Project.js';
import Skills from './Skills.js';
import About from './About.js';
import Contact from './Contact.js';
import '../Styles/Navbar.css'
import Home from './Home';

function CustomNavbar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiarydata-bs-theme=dark sticky-top ">
      <div class="container-fluid">
        <a href="#">
          <img className="logo "
            src="https://img.icons8.com/?size=512&id=ZokoEU0yT8cv&format=png"
            alt="Logo"
          />
        </a>
        <button 
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="#home">Home</a>
            </li>
            <li class="nav-item">
              <a href="#projects">Projects</a>
            </li>
            <li class="nav-item">
              <a href="#skills">Skills</a>
            </li>
            <li class="nav-item">
              <a href="#contact">Contact</a>
            </li>
            <li class="nav-item">
              <a href="#about">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    
      <div id='home'>
        <Home/>
      </div>
      <div id='projects'>
        <Project />
      </div>
      <div id='skills'>
        <Skills />
      </div>
      <div id='about'>
        <About />
      </div>
      <div id='contact'>
        <Contact />
      </div>
      </>
  );
}

export default CustomNavbar;
