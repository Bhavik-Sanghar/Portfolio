import React from 'react';
import { Link } from 'react-scroll';

const CustomNavbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li>
          <Link to="project" smooth={true} duration={500}>Project</Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>Skills</Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>About</Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default CustomNavbar;
