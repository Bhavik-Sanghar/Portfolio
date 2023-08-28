import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import '../Styles/Home.css';

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const homeSection = document.getElementById('home');
    const rect = homeSection.getBoundingClientRect();

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
    <div id="home" className={`home-container ${isVisible ? 'fade-in' : ''}`}>
      <div className="content">
        <div className={`text-section animated-item ${isVisible ? 'fade-in' : ''}`}>
          <h1 className='Hero'>Bhavik <span className='Hero'>Sanghar</span></h1>
          <h2 className='Hero'>I am   <Typewriter
            options={{
              strings: [
                "Web Developer",
                "UI/UX Designer",
                "Passionate Learner",
                "Java"
              ],
              autoStart: true,
              loop: true,
            }}
          /></h2>
        </div>
        <div className={`image-section animated-item ${isVisible ? 'fade-in' : ''}`}>
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
