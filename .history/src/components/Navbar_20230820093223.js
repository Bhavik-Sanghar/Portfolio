import "../Styles/Navbar.css"; // Make sure to adjust the path based on your actual file structure
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // Import social media icons
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    import React from 'react';
    import Navbar from 'react-bootstrap/Navbar';
    import Nav from 'react-bootstrap/Nav';
    import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Import your icon components
    
    const CustomNavbar = () => {
      return (
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#">Your Logo</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#" className="icon-link">
              <FaGithub />
            </Nav.Link>
            <Nav.Link href="#" className="icon-link">
              <FaLinkedin />
            </Nav.Link>
            <Nav.Link href="#" className="icon-link">
              <FaTwitter />
            </Nav.Link>
          </Nav>
        </Navbar>
      );
    };
    
    export default CustomNavbar;
    
  );
};

export default NavBar;
