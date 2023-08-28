import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../Styles/Contact.css'; // Your CSS file for styling the Contact component

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:bhaviksuiya22@gmail.com';
  };

  return (
    <div id="contact" className="contact-container">
      <Container>
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">Let's Connect and Collaborate</p>

        <Row className="contact-details">
          <Col lg={4} md={6}>
            <div className="contact-card">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
              <h4>Location</h4>
              <p>
                <a
                  href="https://www.google.com/maps?q=Ahmedabad"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ahmedabad, India
                </a>
              </p>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="contact-card">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              <h4>Email</h4>
              <p className="email-link" onClick={handleEmailClick}>
                bhaviksuiya22@gmail.com
              </p>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="contact-card">
              <FontAwesomeIcon icon={faPhone} className="contact-icon" />
              <h4>Phone</h4>
              <p>
                <a href="tel:+917490858772">+91 7490858772</a>
              </p>
            </div>
          </Col>
        </Row>

        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="social-icon" />
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
