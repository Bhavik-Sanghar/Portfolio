import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import '../Styles/Navbar.css'

function CustomNavbar() {
  return (
    <Navbar className='Nav' bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#">Your Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
        <Nav className='social'>
               <Nav.Link><FaGithub /> </Nav.Link> 
               <Nav.Link> <FaLinkedin /> </Nav.Link>
               <Nav.Link> <FaTwitter /> </Nav.Link>
              </Nav>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
