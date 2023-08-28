import "../Styles/Navbar.css"; // Make sure to adjust the path based on your actual file structure
import React from "react";
import { FaGithubSquare, FaLinkedin, FaTwitter } from "react-icons/fa"; // Import social media icons

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Your Logo</div>
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a href="#projects">Projects</a>
        </li>
        <li className="nav-item">
          <a href="#skills">Skills</a>
        </li>
        <li className="nav-item">
          <a href="#about">About</a>
        </li>
        <li className="nav-item">
          <a href="#contact">Contact</a>
        </li>
        </ul>
        <ul className="nav-list">
        <li className="nav-item">
          <a href="#" className="icon-link">
            <FaGithubSquare />
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="icon-link">
            <FaLinkedin />
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="icon-link">
            <FaTwitter />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
