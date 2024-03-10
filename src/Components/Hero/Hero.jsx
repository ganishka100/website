import React from 'react';
import './Hero.css';
import document from '../../Images/document.gif'

const Hero = () => {
  return (
    <div className='hero' id="home">
       <div className="container">
        <div className="row">
            <div className="col-12">
                <h1 className='text-center' style={{marginTop:"180px",fontSize:"40px"}}>We Ensure better education <br/>for a better world <img src={document} width="60px" alt=".." /></h1>
                <p className='text-center fw-light'>Our cutting-edge curriculum is designed to empower students  with<br/> the  knowledge, and skills  needed to excel in the dynamic field of education
                </p>
                <div className='text-center'>
                <button className='btn btn-light rounded-pill px-4 py-2 but-hero'>Explore more &nbsp;<i className="fa-solid fa-arrow-right"></i></button>
                </div>
                
            </div>
        </div>
       </div>
    </div>
  )
}

export default Hero
