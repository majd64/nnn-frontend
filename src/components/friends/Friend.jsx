import React from "react";
import './Friend.css';

function Friend(props) {
  return (
    <>
      <div className="friend">
      <img className="img-circle" width="60" height="60" alt="profile" src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"/>
        <div className="friend-text">
        <div style={{position: "relative", top: "15%"}}>
          <h6 className="friend-name"><strong>{props.name}</strong></h6>
          <br />
          <p className="friend-subtitle">Did nut: {props.didNut.toString()}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Friend;
