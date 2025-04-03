import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props){
    return(
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.aboutNav}</Link>
              </li>
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li> */}
              
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}

            {/* <div className='multiple_colors d-flex'>
              <div className='bg-light rounded me-2'  onClick={()=>{props.changeMode('light')}} style={{height:'20px', width:'20px', marginRight:'10px'}}></div>

              <div className='bg-dark rounded me-2'  onClick={()=>{props.changeMode('dark')}} style={{height:'20px', width:'20px', marginRight:'10px'}}></div>

                <div className='bg-primary rounded me-2'  onClick={()=>{props.changeMode('primary')}} style={{height:'20px', width:'20px', marginRight:'10px'}}></div>

                <div className='bg-success rounded me-2'  onClick={()=>{props.changeMode('success')}} style={{height:'20px', width:'20px', marginRight:'10px'}}></div>

                <div className='bg-danger rounded me-2'  onClick={()=>{props.changeMode('danger')}} style={{height:'20px', width:'20px', marginRight:'10px'}}></div>

                <div className='bg-warning rounded me-2'  onClick={()=>{props.changeMode('warning')}} style={{height:'20px', width:'20px', marginRight:'10px'}}></div>
            </div> */}

            <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
              <input className="form-check-input" onClick={()=>{props.changeMode('null')}} type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable Mode</label>
            </div>
          </div>
        </div>
      </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,  // Must be a string, and must exist
    aboutNav: PropTypes.string,              // Must be a number
  };

// Navbar.defultProps = {
//     title: 'New Site',
//     aboutNav: 'about site'
// };