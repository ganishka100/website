import React from 'react';
import './Testimonials.css';
import user_1 from '../../Images/user-1.png';
import user_2 from '../../Images/user-2.png';
import user_3 from '../../Images/user-3.png';
import user_4 from '../../Images/user-4.png';

const Testimonials = () => {
  return (
    <div className='container-fluid' style={{marginTop:"90px"}} id="testimonials">
       <h5 className='testimonials_sm text-center mt-0 mt-md-3'>TESTIMONIALS</h5>
        <h2 className='testimonials_bg text-center'>What Student Says</h2>
        <div className="row mt-5">
    <div className="col-md-12 col-lg-12 mx-auto mt-5">


  
      <section>


        <div className="card testimonial-card">

         
            <div className="card-up card-image mb-0">
              <div className="h-150 p-5 text-white">
                <p className="fw-normal mb-0 fs-4">Bhumika Nathwani</p>
                <p className="mb-0 fs-6">Front-end Developer</p>
              </div>
            </div>

       
            <div className="avatar mx-auto white">
              <img src={user_1} className="rounded-circle img-fluid border border-5 border-primary" width="140px" alt="woman avatar"/>
            </div>

    
            <div className="card-body px-3 py-4">
              <div className="row">
                <div className="col-sm-4 text-center">
                 
                  <img src={user_2} alt=".." className='img-fluid rounded-circle mx-3 border border-5 border-primary  mt-3 mt-md-0' width="50px"/><span className="fw-bold mb-0 mb-3 fs-5">Emily Williams</span>
                  <p className="small fs-6 mb-0 border-height -dark-subtle border-end mb-md-0 mb-4">Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community.</p>
                </div>
                
                <div className="col-sm-4 text-center border-right">
                <img src={user_3} alt=".." className='img-fluid rounded-circle mx-3 border border-5 border-primary  mt-3 mt-md-0' width="50px"/><span className="fw-bold mb-2 fs-5">William Johnson</span>
                  <p className="small fs-6 mb-0 border-height border-secondary-subtle border-end text-center mb-md-0 mb-4">Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community.</p>
                </div>
                
                <div className="col-sm-4 text-center">
                <img src={user_4} alt=".." className='img-fluid rounded-circle mx-3 border border-5 border-primary  mt-3 mt-md-0' width="50px"/><span className="fw-bold mb-2 fs-5 ">Nelson Mandela</span>
                  <p className="small fs-6 text-center">Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community.</p>
                </div>
              </div>
            </div>

          </div>
         

      </section>
     


    </div>
  </div>
        
        </div>
  )
}

export default Testimonials
