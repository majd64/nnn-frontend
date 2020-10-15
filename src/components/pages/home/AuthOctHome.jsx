import React from "react";
import FriendsList from "../../friends/FriendsList";
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import { Button } from 'react-bootstrap';

function AuthOctHome(props) {
  return (
    <>
      <FriendsList user={props.user}/>
      <div style={{ overflow: "hidden" }}>
        <h1>Hello {props.user && props.user.username}</h1>
          <div className="container d-flex align-items-center" >
            <div className="mx-auto nut-buttons">
              <Button disabled variant="danger" size="lg">Large Button</Button>{' '}
              <Button disabled variant="danger" size="lg">Large Button</Button>{' '}
            </div>
          </div>
      </div>
    </>
  ); 
}

export default AuthOctHome;
