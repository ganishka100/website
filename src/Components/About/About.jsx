import React from 'react';
import './About.css';
import about_img from '../../Images/about.png';
import play_icon from '../../Images/play-icon.png';

const About = ({setPlayState}) => {
  return (
    <div>
       <div className="container" style={{marginTop:"120px"}} id="about">
        <div className="row">
            <div className="col-12 col-md-6 order-2 order-md-0">
                <div className="video-img">
                    <img src={about_img} alt=".." width="370px"  className='rounded-3 mx-auto d-block img-fluid'/>
                    <img src={play_icon} alt=".." width="70px" className='play_icon' onClick={() =>{setPlayState(true)}}/>
                </div>
            </div>

            <div className="col-12 col-md-6 mt-md-0 order-1 order-md-0">
                <h5 className='about_sm text-center text-md-start mb-md-0'>ABOUT UNIVERSITY</h5>
                <h1 className='about_bg text-center text-md-start mb-3 mb-md-0'>Nurturing Tomorrow's Leaders Today</h1>
                <p className='text-light-emphasis text-center text-md-start fs-6 mb-5 mb-md-0'>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.<br></br>

                With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities. our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge.<br></br>
                </p>
            </div>
        </div>
       </div>
    </div>
  )
}

export default About;
