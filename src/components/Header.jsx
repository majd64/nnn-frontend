import React from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'

function Header(props) {
  function logout(){
    axios({
      method: 'get',
      withCredentials: true,
      url: '/api/logout',
    }).then(() => {props.reAuth()})
  }

  function getNavLinks(){
    if (props.auth){
      return (
        <li className="nav-item mr-4">
          <Link type="button" onClick={logout} className="btn btn-outline-light ">Log out</Link>
        </li>
      )
    }else{
      return (
        <>
        <li className="nav-item mr-4">
          <Link type="button" to="/login" className="btn btn-outline-light ">Log in</Link>
        </li>
        <li className="nav-item">
          <Link type="button" to="/register" className="btn btn-danger ">Join the boys!</Link>
        </li>
        </>
      )
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">NNN</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mr-3">
              <Link to="/about" className="nav-link">What is this?</Link>
            </li>
            <li className="nav-item mr-4">
              <Link to="/about" className="nav-link">NNN Rules</Link>
            </li>
            {getNavLinks()}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
