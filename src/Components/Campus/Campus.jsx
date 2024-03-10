import React from 'react';
import './Campus.css';
import arrow from '../../Components/Campus/arrow.gif'

const Campus = () => {
  return (
   
      <div className="container" style={{marginTop:"90px"}} id="campus">
        <h5 className='campus_sm text-center mt-0 mt-md-3'>GALLERY</h5>
        <h2 className='campus_bg text-center'>Campus Photos</h2>
        <div className="row mt-5 mt-0 mt-md-5">
          <div className="col-md-5 mt-0 mt-md-5">
             <h1 className='text-center img_bg'>Hover them to see expanded photos </h1>
             <p className='text-light-emphasis fs-6 text-center mt-3'> Every image captured should reflect the diversity and inclusivity inherent within the campus community. From showcasing various ethnicities, cultures, and backgrounds to representing individuals of all genders, sexual orientations, abilities, and socioeconomic statuses, equality in campus photos ensures that every member feels valued and seen. </p>
             <div className='text-center'>
             <button className='btn campus_btn rounded-5 fs-5 ps-4 mt-md-3 mb-5 mb-md-0'>See More<img src={arrow} alt=".." width="50px" className='img-fluid'></img></button>
             </div>
            
          </div>
          <div className="col-md-7">
        <div className="gallery">
            <div className="img-box img-fluid">
              <h3>Colleagues</h3></div>
            <div className="img-box img-fluid"><h3>Community</h3></div>
            <div className="img-box img-fluid"><h3>Laws</h3></div>
            <div className="img-box img-fluid"><h3>Sintiyani</h3></div>
        </div>
        </div>
        </div>
    </div>
    
  )
}

export default Campus
