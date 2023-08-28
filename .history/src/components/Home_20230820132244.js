import React from 'react';
import Navbar from './Navbar'; // Adjust the path to your Navbar component
import Typewriter from 'typewriter-effect'; // Import typewriter library
import '../Styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="content">
        <div  className="text-section">
          <h1 className='Hero'>Bhavik <span className='Hero'>Sanghar</span></h2>
          <h2 className='Hero'>I am</h1>
          <Typewriter
            options={{
              strings: [
                "Web Developer",
                "UI/UX Designer",
                "Passionate Learner"
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="image-section">
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
