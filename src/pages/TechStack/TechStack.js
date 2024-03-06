import React from 'react'
import "./TechStack.css";
import { TechstackList } from '../utils/TechstackList';
const TechStack = () => {
  return (
    <>
        <div className="container techstack">
            <h2 className="col-12 mt-3 mb-1 text-center text-uppercase"> Technologies Stack</h2>
            <hr/>
            <p className="pb-3 text-center ">👉 Including  Programming Languages(JAVA,C,PYTHON,KOTLIN),Frameworks,Databases,Front-End and Back-End Tools,And APIs</p>
            <div className='row'>
                {TechstackList.map((tech)=>(
                    <div key={tech._id} className="col-md-3">
                        <div className="card m-2">
                            <div className="card-content">
                                <div className="card-body">
                                    <div className="media d-flex justify-content-center">
                                        <div className='alig-self-center'>
                                            <tech.icon className="tech-icon"/>
                                        </div>
                                        <div className="media-body">
                                            <h5>{tech.name}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
  )
}

export default TechStack