import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer" style={{marginTop:"100px"}}>
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6 ">
          <h6 className="d-none d-md-block"><button data-text="Awesome" className="button">
            <span className="actual-text hidden">&nbsp;Bhumika&nbsp;Nathwani&nbsp;</span>
            <span className="hover-text" aria-hidden="true">&nbsp;Bhumika&nbsp;Nathwani&nbsp;</span>
        </button></h6>
          <h6 className="d-block d-md-none"><button data-text="Awesome" className="button">
            <span className="actual-text hidden">&nbsp;Bhumika&nbsp;</span>
            <span className="hover-text" aria-hidden="true">&nbsp;Bhumika&nbsp;</span>
        </button></h6>
          <p className="text-justify hidden text-white">This is a compact website template that allows users to easily explore new ideas and unleash their creativity. It has been specifically designed as a template for business purposes, providing a solid foundation for creating a professional and visually appealing website. Users can customize and tailor the template to suit their unique business needs, giving them the flexibility to showcase their products, services, and brand in an engaging way.</p>
        </div>

        <div className="col-xs-6 col-md-3">
          <h6>Categories</h6>
          <ul className="footer-links hidden">
            <li><a href="https://ganishka100.github.io/My_Portfolio/" rel="noreferrer" target="_blank">Portfolio</a></li>
            <li><a href="https://brajyatraa.com/" target="_blank" rel="noreferrer">BrajYatra</a></li>
            <li><a href="https://majestic-chaja-73efbf.netlify.app/" target="_blank" rel="noreferrer">Organic Farm Food</a></li>
            <li><a href="https://ganishka100.github.io/Arc_Web/" target="_blank" rel="noreferrer">Arc Website</a></li>
            <li><a href="https://6540ffaab9c2080d9a03c87a--unique-begonia-c2b238.netlify.app/" target="_blank" rel="noreferrer">Netflix Clone</a></li>
           
          </ul>
        </div>

        <div className="col-xs-6 col-md-3 hidden">
          <h6>Quick Links</h6>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#program">Program</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#campus">Campus</a></li>
            <li><a href="#testimonials">Testimonials</a></li> 
            <li><a href="#contact">Contact</a></li>
             
          </ul>
        </div>
      </div>
      <hr/>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-6 col-xs-12">
          <p className="copyright-text">Copyright &copy; 2024 All Rights Reserved by 
       <a href="/" rel="noreferrer" className="sec-1-logo fs-5 ms-2" style={{textDecoration: "none", fontWeight: "bold"}}>Edusity</a>.
          </p>
        </div>

        <div className="col-md-4 col-sm-6 col-xs-12">
          <ul className="social-icons">
            <li><a className="facebook" href="/" rel="noreferrer" target="blank"><i className="fa-brands fa-facebook facebook"></i></a></li>
            <li><a className="dribbble" href="https://www.instagram.com/ganishka_nathwani/"><i className="fa-brands fa-instagram instagram" target="blank"></i></a></li>
            <li><a className="linkedin" href="https://www.linkedin.com/in/bhumika-nathwani-9b93b6232/"><i className="fa-brands fa-linkedin linkedin" target="blank"></i></a></li>
            <li><a className="twitter" href="https://github.com/ganishka100
" target="blank"><i className="fa-brands fa-github github"></i></a></li>  

            <li><a className="whatsapp" href="https://web.whatsapp.com/" target="blank"><i className="fa-brands fa-whatsapp whatsapp"></i></a></li>   

            <li><a className="linkedin" href="tel:+917983236162" target="blank"><i className="fa-solid fa-phone phone"></i></a></li>   
          </ul>
        </div>
      </div>
    </div>
</footer> 
    
  );
};

export default Footer;
