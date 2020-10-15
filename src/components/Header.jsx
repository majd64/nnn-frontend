import React from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Navbar, Nav } from 'react-bootstrap';
import TimerTillNovember from "./pages/home/TimerTillNovember";
import {Mobile, Tablet, Desktop} from "./ScreenSizes"

function Header(props) {
  function getNavLinks(){
    if (props.auth){
      return (
        <>
        <Mobile>
          <Link className="nav-link" to="/friends">Friends</Link>
          <Link className="mr-2 nav-link" to="/about">About</Link>
          <Link className="mr-3 nav-link" to="/rules">Rules</Link>
          <a onClick={props.logout} className="nav-link">Log out</a>
        </Mobile>
        <Tablet>
          <Link className="mr-2 nav-link" to="/about">About</Link>
          <Link className="mr-3 nav-link" to="/rules">Rules</Link>
          <a onClick={props.logout} className="nav-link">Log out</a>
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
            <Link className="btn btn-outline-light mb-2" to="/login">Log in</Link>
          </Mobile>
          <Tablet>
            <Link className="btn btn-outline-light mb-2" to="/login">Log in</Link>
          </Tablet>
          <Desktop>
            <Link className="btn btn-outline-light mr-3" to="/login">Log in</Link>
          </Desktop>
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
        {getNavLinks()}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
  );
}

export default Header;
