import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SocialIcon } from 'react-social-icons';
import '../Styles/Navbar.css'

function CustomNavbar() {
  return (
    <>
    <Navbar className='Nav' expand="lg">
        <Navbar.Brand id='logo' href="#">Your Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav id='menu' className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Nav className='social'>
          <SocialIcon url="" />
            <Nav.Link><FaGithub /> </Nav.Link>
            <Nav.Link> <FaLinkedin /> </Nav.Link>
            <Nav.Link> <FaTwitter /> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar></>
  );
}

export default CustomNavbar;
