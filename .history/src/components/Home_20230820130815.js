import React from 'react';
import Navbar from './Navbar'; // Adjust the path to your Navbar component
import Typewriter from 'typewriter-effect'; // Import typewriter library
import '../Styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      {/* <Navbar /> Include the Navbar component here */}
      <div className="content">
        <div className="text-section">
          <h1>I am</h1>
          <h2>Bhavik <span>Sanghar</span></h2>
          <Typewriter
            options={{
              strings: [
                "Web Developer",
                "UI/UX Designer",
                "Passionate Learner"
                // Add more strings as needed
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
