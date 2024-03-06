import React from 'react'
import './About.css'

const About = () => {
  return (
    <>
    <div className="about">
        <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img" >
              <img  className="aboutImage " src='Profile.jpg'alt='Profile_Pic'/>
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1 className="text-uppercase">About Me</h1>
              <p>
              Passionate about coding, I am a dedicated front-end and full-stack developer with a love for crafting innovative digital solutions. My commitment to excellence is mirrored in my work, showcasing a combination of technical proficiency, creativity, and precision. I pride myself on being disciplined in my approach, ensuring that each project is delivered with meticulous attention to detail. 

With a keen eye for design, I extend my skills beyond coding to fulfill my passion for video editing. Leveraging my expertise, I contribute to my mom's YouTube channel, infusing each video with a unique flair. My communication skills serve as a bridge between complex technical concepts and user-friendly solutions. 

Outside the realm of coding, you'll find me on the cricket field, channeling the same enthusiasm and teamwork that drive my development projects. My portfolio is a testament to my journey as a tech enthusiast, showcasing a fusion of proficiency, creativity, and a genuine love for what I do. Let's build the future, one line of code at a time.
              </p>
            </div>
        </div>
        </div>
        </>
  )
}

export default About