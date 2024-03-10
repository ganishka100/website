import React from 'react';
import './Programs.css';
import program_1 from '../../Images/program-1.png';
import program_2 from '../../Images/program-2.png';
import program_3 from '../../Images/program-3.png';
import program_icon_1 from '../../Images/program-icon-1.png';
import program_icon_2 from '../../Images/program-icon-2.png';
import program_icon_3 from '../../Images/program-icon-3.png';

const Programs = () => {
  return (
    <div className='container' style={{marginTop:"80px"}} id="program">
         <h6 className='text-center programs-sm'>OUR PROGRAM</h6>
         <h2 className='text-center programs-bg'>What We Offer</h2>
       <div className="row justify-content-center">
         <div className="col-12 col-md-3 mt-5">

         <div className="box">
        <img src= {program_1} alt=".." className='img-fluid rounded-3'/>
        <div className="box-content">
           <img src={program_icon_1} alt="" className='mx-auto d-block'/>
           <p>Graduation Degree</p>
        </div>
    </div>
         </div>
         <div className="col-12 col-md-3 mt-5">
         <div className="box">
        <img src= {program_2} alt=".." className='img-fluid rounded-3'/>
        <div className="box-content text-center">
           <img src={program_icon_2} alt="" className='mx-auto d-block'/>
           <p>Masters Degree</p>
        </div>
    </div>
         </div>
         <div className="col-12 col-md-3 mt-5">
         <div className="box">
        <img src= {program_3} alt=".." className='img-fluid rounded-3'/>
        <div className="box-content">
           <img src={program_icon_3} alt="" className='mx-auto d-block'/>
           <p>Post Graduation</p>
        </div>
    </div>
         </div>

       </div>
    </div>
  )
}

export default Programs
