import React from 'react'
import "./Contact.css"
import { BsLinkedin,BsGithub,BsFacebook,BsInstagram } from "react-icons/bs";
import  Zoom  from 'react-reveal/Zoom';
import Roll from 'react-reveal/Roll';

import Wobble from "react-reveal/Wobble"
const Contact = () => {
  return (
    <>
    
    <div className="contact" id= "contact">
        <div className="card card0 border-0">
            
            <div className="row">
                <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                    <div className="card1">
                        <div className="row border-line">
                            <Zoom>
                            <img src="ContactUs.jpg" alt="contact" className="image" />
                            </Zoom>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="row">
                        <div className="card2 d-flex  border-0 px-4 py-5 ">
                            <Roll>
                            <h4>Contact With 
                            <BsLinkedin color="darkblue" size={30} className="ms-2"/>
                            <BsGithub color="black" size={30} className="ms-2"/>
                            <BsFacebook color="blue" size={30} className="ms-2"/>
                            <BsInstagram color="#f70776" size={30} className="ms-2"/>

                            </h4>
                            </Roll>
                        </div>
                        <div className="row px-3 mb-4">
                            <div className="line" />
                                <small className="or text-center">OR</small>
                            <div className="line" />

                        </div>
                        <Zoom>
                        <div className="row px-3">
                       
                            <input type="text" name="name" placeholder="Enter Your Name" className="mb-3" />
                        </div>
                        <div className="row px-3">
                            <input type="email" name="email" placeholder="Enter Your Email Address" className="mb-3" />
                        </div>
                        <div className="row px-3">
                            <textarea type="text" name="msg" placeholder="Write Your Message" className="mb-3" />
                            
                        </div>
                        </Zoom>
                        <div className="row px-3">
                            <Wobble>
                            <button className="button" type="submit"  >
                                SEND MESSAGE
                                </button>
                                </Wobble>
                               
                        </div>
                        
                    </div>
                    </div>  
            </div>
            
        </div>
        
    </div>
    
    </>
  )
}

export default Contact