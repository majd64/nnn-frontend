import React from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Navbar, Nav } from 'react-bootstrap';
import TimerTillNovember from "./pages/home/TimerTillNovember";

function Header(props) {
  function getNavLinks(){
    if (props.auth){
      return (
        <Button onClick={props.logout} variant="outline-light">Log out</Button>
      );
    }else{
      return (
        <>
          <Link className="btn btn-outline-light mr-3" to="/login">Log in</Link>
          <Link className="btn btn-danger" to="/register">Join the boys!</Link>
        </>
      );
    }
  }

  return (
    <>
    <Navbar className="fixed-top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link className="navbar-brand" to="/">NNN</Link>
      <TimerTillNovember style={{color: "white"}} className="my-auto ml-3" size={5}/>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto"></Nav>
      <Nav>
        <Link className="mr-2 nav-link" to="/about">About</Link>
        <Link className="mr-3 nav-link" to="/rules">Rules</Link>
        {getNavLinks()}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
  );
}

export default Header;
