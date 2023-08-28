import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Styles/About.css'; // Your CSS file for styling the About component

const About = () => {
  return (
    <div id="about" className="about-container">
      <Container>
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to Know Me Better</p>

        <Row className="about-details">
          <Col lg={6} md={12} className="animated-item">
            <div className="about-text">
              <h3 className="about-heading">Passionate Developer</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                non risus nec augue posuere vehicula id ut velit.
              </p>
              <p>
                Fusce eu rutrum odio, in interdum libero. Nulla dapibus nulla
                et dui tincidunt, ac varius arcu bibendum.
              </p>
            </div>
          </Col>
          <Col lg={6} md={12} className="animated-item">
            <div className="about-image">
              {/* Your image */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
