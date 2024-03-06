import React from 'react'
import"./Projects.css"
const Projects = () => {
  return (
    <>
    <div className="continer project text-uppercase">
    <h2 className="col-12 mt-3 mb-1 text-center text-uppercase"> Top recent Projects</h2>
            <hr/>
            <p className="pb-3 text-center ">👉 Here are My top3 recent projects with live links and source code</p>
            {/* card  desgin*/ }
            <div className='row' id='ads'>
                <div className='col-md-4'>
                    <div className='card rounded'>
                        <div className='card-image'>
                            <span className='card-notify-badge'>Full Stack</span>
                            <img src="" alt="project1" />
                        </div>
                        <div className='card-image-overly'>
                            <span className='card-detail-badge'>Node</span>
                            <span className='card-detail-badge'>Express</span>
                            <span className='card-detail-badge'>Reactjs</span>
                            <span className='card-detail-badge'>MongoDB</span>

                        </div>
                    </div>
                </div>
            </div>
    </div>
    </>
  )
}

export default Projects