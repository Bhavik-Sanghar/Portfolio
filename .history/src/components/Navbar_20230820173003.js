import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "../Styles/Navbar.css";
import '/Users/Bhavik/OneDrive/Desktop/React Js/portfolio/node_modules/magic.css/dist/magic.min.css'; // Import magic.css styles


function CustomNavbar() {
  return (
    <>
    <div className="magictime twisterInUp">
      <Navbar className="Nav" expand="lg" fixed="top">
        <Navbar.Brand id="logo" href="#">
          Your Logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav id="menu" className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#project">Projects</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link> 
          </Nav>
          <Nav className="social">
            <Nav.Link>
              <FaGithub />{" "}
            </Nav.Link>
            <Nav.Link>
              <FaLinkedin />{" "}
            </Nav.Link>
            <Nav.Link>
              {" "}
              <FaTwitter />{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    </>
  );
}

export default CustomNavbar;
