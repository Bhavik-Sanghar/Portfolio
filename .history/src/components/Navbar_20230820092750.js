import "../Styles/Navbar.css"; // Make sure to adjust the path based on your actual file structure
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // Import social media icons
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Nav = () => {
  return (
    // <nav className="navbar">
    //   <div className="logo">Your Logo</div>
    //   <ul className="nav-list">
    //     <li className="nav-item">
    //       <a href="#home">Home</a>
    //     </li>
    //     <li className="nav-item">
    //       <a href="#projects">Projects</a>
    //     </li>
    //     <li className="nav-item">
    //       <a href="#skills">Skills</a>
    //     </li>
    //     <li className="nav-item">
    //       <a href="#about">About</a>
    //     </li>
    //     <li className="nav-item">
    //       <a href="#contact">Contact</a>
    //     </li>
    //     </ul>
    //     <ul className="nav-list">
    //     <li className="nav-item">
    //       <a href="#" className="icon-link">
    //         <FaGithub />
    //       </a>
    //     </li>
    //     <li className="nav-item">
    //       <a href="#" className="icon-link">
    //         <FaLinkedin />
    //       </a>
    //     </li>
    //     <li className="nav-item">
    //       <a href="#" className="icon-link">
    //         <FaTwitter />
    //       </a>
    //     </li>
    //   </ul>
    // </nav>


<Navbar bg="dark" data-bs-theme="dark">
  <Navbar.Brand href="#home">Navbar</Navbar.Brand>
  <Nav className="me-auto">
    <Nav.Link href="#home">Home</Nav.Link>
    <Nav.Link href="#features">Features</Nav.Link>
    <Nav.Link href="#pricing">Pricing</Nav.Link>
  </Nav>
</Navbar>
  );
};

export default Nav;
