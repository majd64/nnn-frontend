import React from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Navbar, Nav } from 'react-bootstrap';
import TimerTillNovember from "./pages/home/TimerTillNovember";
import {Mobile, Tablet, Desktop} from "./ScreenSizes"

function Header(props) {
  function closeNav() {
    document.getElementById("responsive-navbar-nav").classList.remove('show');
  }

  function getNavLinks(){
    if (props.auth){
      return (
        <>
        <Mobile>
          <Link onClick={closeNav} className="nav-link" to="/friends">Friends</Link>
          <Link onClick={closeNav} className="mr-2 nav-link" to="/about">About</Link>
          <Link onClick={closeNav} className="mr-3 nav-link" to="/rules">Rules</Link>
          <a onClick={props.logout} className="nav-link">Log out</a>
        </Mobile>
        <Tablet>
          <Link onClick={closeNav} className="mr-2 nav-link" to="/about">About</Link>
          <Link onClick={closeNav} className="mr-3 nav-link" to="/rules">Rules</Link>
          <a onClick={props.logout, closeNav} className="nav-link">Log out</a>
        </Tablet>
        <Desktop>
          <Link className="mr-2 nav-link" to="/about">About</Link>
          <Link className="mr-3 nav-link" to="/rules">Rules</Link>
          <Button onClick={props.logout} variant="outline-light">Log out</Button>
        </Desktop>
        </>
      );
    }else{
      return (
        <>
        <Mobile>
          <Link onClick={closeNav} className="mr-3 nav-link" to="/register">Join</Link>
          <Link onClick={closeNav} className="mr-2 nav-link" to="/login">Log In</Link>
          <Link onClick={closeNav} className="mr-2 nav-link" to="/about">About</Link>
          <Link onClick={closeNav} className="mr-3 nav-link" to="/rules">Rules</Link>
        </Mobile>
        <Tablet>
          <Link onClick={closeNav} className="mr-3 nav-link" to="/register">Join</Link>
          <Link onClick={closeNav} className="mr-2 nav-link" to="/login">Log In</Link>
          <Link onClick={closeNav} className="mr-2 nav-link" to="/about">About</Link>
          <Link onClick={closeNav} className="mr-3 nav-link" to="/rules">Rules</Link>
        </Tablet>
        <Desktop>
          <Link className="mr-2 nav-link" to="/about">About</Link>
          <Link className="mr-3 nav-link" to="/rules">Rules</Link>
          <Link className="mr-3 btn btn-outline-light" to="/login">Log In</Link>
          <Link className="mr-2 btn btn-danger" to="/register">Join</Link>
        </Desktop>
        </>
      );
    }
  }

  return (
    <>
    <Navbar className="fixed-top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link className="navbar-brand" to="/">NNN</Link>
      <TimerTillNovember style={{color: "white"}} className="my-auto" size={5}/>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav onSelect={closeNav} className="mr-auto"></Nav>
      <Nav>
        {getNavLinks()}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
  );
}

export default Header;
