import React from 'react';
import logo from './logo.png'
import { NavLink } from 'react-router-dom';




const Navbar = () => {

  return (
    <nav>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-md-4 col-sm-5">
            <NavLink to='/' className='d-flex brand abrand justify-content-center justify-md-content-start align-items-center text-decoration-none '>
              <img src={logo} alt="" className='logoimg navbar-brand ' />
              <h1 className='text-light touraza mt-4 ms-2 text-dark'>Touraza</h1>
            </NavLink>
          </div>
          <div className="col-md-5 col-sm-7   pt-1 ">
            <div className="d-flex  navlinks align-items-center ">
              <NavLink to='/' className="nav-link  ">Home</NavLink>
              <NavLink to='/about' className="nav-link ms-3 ">About</NavLink>
              <NavLink to='/destinations' className="nav-link ms-3  ">Destinations</NavLink>
              <NavLink to='/booking' className="nav-link ms-3 ">Booking</NavLink>
            </div>
          </div>
          <div className="col-md-3 d-none navbtns d-lg-block">
            <button className="btn btn-sm btn-lg-md  navbtn me-3  mt-4">View Status</button>
            <button className="btn btn-sm btn-lg-md navbtn  mt-4">Book Now</button>
          </div>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;

