import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Styles/About.css'; // Your CSS file for styling the About component
import bhavik from '../Asset/bhavik.jpg'

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      if (scrollPosition > document.getElementById('about').offsetTop) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="about" className="about-container">
      <Container>
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to Know Me Better</p>
        <Row>
          <Col lg={6} md={12} className={`animated-item ${isVisible ? 'fade-in' : ''}`}>
            <div className="about-image">
              <img id='aboutphoto' src={bhavik} alt="About Me" className="rounded-image" />
            </div>
          </Col>
          <Col lg={6} md={12} className={`animated-item ${isVisible ? 'fade-in' : ''}`}>
            <div className="about-content">
              <h3 className="about-title">404 Dreamer </h3>
              <h3 className="about-title">Mastering the Art of Disappearing Elements</h3>
              <p className="about-paragraph">
                Hey there! I'm a web developer who's as passionate about coding as Batman is about fighting crime.
                With a knack for problem-solving and a flair for creativity, I love turning complex ideas into
                user-friendly websites. When I'm not coding, you can find me immersed in the world of cybersecurity
                and dreaming about becoming a software superhero. In my spare time, I enjoy battling virtual foes in
                video games and exploring the captivating universe of anime.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
