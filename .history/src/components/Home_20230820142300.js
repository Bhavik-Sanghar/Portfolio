import React from 'react';
import Typewriter from 'typewriter-effect'; // Import typewriter library
import '../Styles/Home.css';

function Home() {
    const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <div className="home-container">
      <div className="content">
        <div  className="text-section">
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
        <div className="image-section">
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
