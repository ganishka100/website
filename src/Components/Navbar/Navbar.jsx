import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../Images/logo.png';

const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${sticky ? 'dark-nav' : ''}`} >
  <div className="container-fluid">
    <a className="navbar-brand mx-5 mt-2" href="/"><img src={logo} width="150px" alt=".." /></a>
    <button className="navbar-toggler" type="button" onClick={toggleNav} aria-label="Toggle navigation">
      <i className="fas fa-stream text-white"></i>

    </button>
    <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
      <ul className="navbar-nav mx-auto mt-2">
        <li className="nav-item">
          <a className="nav-link mx-3 fs-6" aria-current="page" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-3 fs-6" href="#program">Program</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-3 fs-6" href="#about">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-3 fs-6" href="#campus">Campus</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-3 fs-6" href="#testimonials">Testimonials</a>
        </li>
        <a href="#contact" className='btn bg-white rounded-pill mx-5 contact'>Contact Us</a> 
       
      </ul>
      
    </div>
  </div>
</nav>
  )
}

export default Navbar
