import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Styles/About.css'; // Your CSS file for styling the About component

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const aboutSection = document.getElementById('about');
    const rect = aboutSection.getBoundingClientRect();

    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="about" className={`about-container ${isVisible ? 'fade-in' : ''}`}>
      <Container>
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to Know Me Better</p>

        <Row className="about-details">
          <Col lg={6} md={12} className={`about-text animated-item ${isVisible ? 'fade-in' : ''}`}>
            <h3 className="about-heading">Passionate Developer</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              non risus nec augue posuere vehicula id ut velit.
            </p>
            <p>
              Fusce eu rutrum odio, in interdum libero. Nulla dapibus nulla
              et dui tincidunt, ac varius arcu bibendum.
            </p>
          </Col>
          <Col lg={6} md={12} className={`animated-item ${isVisible ? 'fade-in' : ''}`}>
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
