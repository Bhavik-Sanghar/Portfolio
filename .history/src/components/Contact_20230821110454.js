import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../Styles/Contact.css';

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <h2 className="contact-heading">Contact Me</h2>
      <div className="contact-icons">
        <a href="mailto:youremail@example.com" className="contact-icon">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>Email</span>
        </a>
        <a href="tel:+1234567890" className="contact-icon">
          <FontAwesomeIcon icon={faPhoneAlt} />
          <span>Phone</span>
        </a>
        <a href="https://github.com/yourusername" className="contact-icon" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
          <span>GitHub</span>
        </a>
        <a href="https://twitter.com/yourusername" className="contact-icon" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
          <span>Twitter</span>
        </a>
        <a href="https://linkedin.com/in/yourusername" className="contact-icon" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
