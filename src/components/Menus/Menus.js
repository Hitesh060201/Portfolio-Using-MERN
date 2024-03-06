import React from 'react'
import './Menus.css';
import { FcHome } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcPortraitMode } from "react-icons/fc";
import { FcTimeline } from "react-icons/fc";
import { FcReadingEbook } from "react-icons/fc";
import { FcVideoProjector } from "react-icons/fc";
import { FcVoicePresentation } from "react-icons/fc";
import { FcContacts } from "react-icons/fc";
const Menus = ({isSidebarOpen}) => {
  return (
    <>
    {isSidebarOpen ?(
      <>
     <div className="navbar-profile-pic">
     <img src='Profile.jpg' alt='profile pic'></img>
  </div>
  <div className="nav-items">
    <div className="nav-item">
      <div className="nav-link">
      <FcHome />
      Home
      </div>
      <div className="nav-link">
      <FcAbout />
      About
      </div>
      <div className="nav-link">
      <FcPortraitMode />
      Work Experience
      </div>
      <div className="nav-link">
      <FcTimeline />
      Tech Stack
      </div>
      <div className="nav-link">
      <FcReadingEbook />
      Education
      </div>
      <div className="nav-link">
      <FcVideoProjector />
      Projects
      </div>
      <div className="nav-link">
      <FcVoicePresentation />
      Testimonials
      </div>
      <div className="nav-link">
      <FcContacts />
      Contact
      </div>
    </div>
  </div>
  
  </>
    ):
    (
      <>
      <div className="nav-items">
    <div className="nav-item">
      <div className="nav-link">
      <FcHome  title='Home'/>
      
      </div>
      <div className="nav-link">
      <FcAbout title='About'/>
     
      </div>
      <div className="nav-link">
      <FcPortraitMode title='Work Experience' />
      
      </div>
      <div className="nav-link">
      <FcTimeline  title='Tech Stack'/>
      
      </div>
      <div className="nav-link">
      <FcReadingEbook  title='Education'/>
      
      </div>
      <div className="nav-link">
      <FcVideoProjector  title='Projects'/>
      
      </div>
      <div className="nav-link">
      <FcVoicePresentation  title='Testimonials'/>
      
      </div>
      <div className="nav-link">
      <FcContacts title='Contact'/>
      
      </div>
    </div>
  </div>
      </>
    )}
     
    </>
  )
}

export default Menus