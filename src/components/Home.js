import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import "../Styles/Home.css";

function Home() {
  const downloadResume = () => {
    const resumePath = process.env.PUBLIC_URL + "/BhavikSanghar_Resume.pdf";
    fetch(resumePath)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const a = document.createElement("a");
        a.href = url;
        a.download = "BhavikSanghar_Resume.pdf"; // Change the filename as needed
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => console.error("Error downloading the resume:", error));
  };

  let date = new Date().toLocaleTimeString();
  const [time, setTime] = useState(date);
  let updatetime = () => {
    date = new Date().toLocaleTimeString();
    setTime(date);
 }
  setInterval(updatetime , 1000);

  return (
    <div className="home-container">
      <div className="content">
        <div className="text-section">
          <h1 className="Hero">Bhavik Sanghar</h1>
          <h2 className="Hero">
            I am{" "}
            <Typewriter
              options={{
                strings: [
                  "Web Developer ",
                  "Cyber Security Enthusiast",
                  "Passionate Learner",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <button className="download-button" onClick={downloadResume}>
            Download Resume
          </button>
        </div>
        <div className="image-section">
          <div className="circle"></div>
          <div id="Time">{time}</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
