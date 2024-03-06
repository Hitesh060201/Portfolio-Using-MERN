import React from 'react';
import Typewriter from 'typewriter-effect';
import './Home.css';
import Resume from '../../assets/docs/HITESH KUMAR MISRA CV (11 Feb 2024)_20240211_125506_0000.pdf'
const Home = () => {
  return (
    <div className="container-fluid home-container">
      <div className="container home-content">
        <h2>Hi👋🏻 I'm a</h2>
        <h1>
        <Typewriter
          options={{
          strings: ['FullStack Developer!', 'Mern Stack Developer!' ,'React native Developer!','UI/UX Designer!'],
          autoStart: true,
          loop: true,
        }}
        />
        </h1>
        <div className="home-buttons">
          <button className="btn btn-hire b1">Hire Me</button>
          <a className="btn btn-cv b2" href={Resume} download="HITESH KUMAR MISRA CV.pdf">My Resume</a>
        </div>
      </div>
      
        </div>
  )
}

export default Home