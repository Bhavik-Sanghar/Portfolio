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
            Hello there! I'm Bhavik Sanghar, a dedicated web developer hailing from Ahemdabad, India. With an insatiable curiosity for technology, I've found my true passion in crafting immersive and user-centric web experiences. As I delve into the intricate world of coding, I'm not only drawn to the art of creating functional and visually appealing websites but also to the ever-evolving realm of cybersecurity. The thought of safeguarding digital landscapes from potential threats has always intrigued me. Beyond coding and security, I harbor aspirations to dive into the world of software development, crafting powerful applications that seamlessly blend form and function.
            </p>
            <p>
             
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
