import React from 'react';
import Typewriter from 'typewriter-effect'; // Import typewriter library
import '../Styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="content">
        <h1>I am</h1>
        <h2>Your Name</h2>
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
    </div>
  );
}

export default Home;
