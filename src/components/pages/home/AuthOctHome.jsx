import React from "react";
import FriendsList from "../../friends/FriendsList";
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import { Button } from 'react-bootstrap';
import {Default, Mobile} from "../../ScreenSizes"
import nutImg from "../../../images/nut.png"

function AuthOctHome(props) {
  return (
    <>
      <Default>
        <FriendsList className="shadow-sm friends-list"/>
      </Default>
      <div style={{ overflow: "hidden" }}>
      <Default>
        <div className="shadow-sm justify-content-center d-flex align-items-center" style={{paddingTop: "8px", color: "#586069", backgroundColor: "#f6f8fa", height: "55px", marginRight: "20px", marginLeft: "20px", marginTop: "20px", borderRadius: "10px", border: "1px solid #e5e8eb"}}>
          <h4> 36,850/36,850 commrads remain </h4>
        </div>
      </ Default>
      <Mobile>
        <div className="shadow-sm justify-content-center d-flex align-items-center" style={{paddingTop: "8px", color: "#586069", backgroundColor: "#f6f8fa", height: "55px", marginRight: "20px", marginLeft: "20px", marginTop: "20px", borderRadius: "10px", border: "1px solid #e5e8eb"}}>
          <h5> 36,850/36,850 commrads remain </h5>
        </div>
      </Mobile>
        <Default>
          <div className="justify-content-around d-flex" style={{position: "absolute", width: "calc( 100vw - 350px)", bottom: "30px"}}>
            <Button style={{width: "400px", height: "60px"}} disabled variant="danger" size="lg">I Nutted :(</Button>{' '}
          </div>
        </Default>
        <Mobile>
          <div className="justify-content-around d-flex" style={{position: "absolute", width: "100vw", bottom: "30px"}}>
            <Button style={{width: "300px", height: "60px"}} disabled variant="danger" size="lg">I Nutted</Button>{' '}
          </div>
        </Mobile>
      </div>
    </>
  ); 
}

export default AuthOctHome;



// <h1>Hello {props.user && props.user.username}</h1>
// <div className="justify-content-around d-flex" style={{position: "absolute", width: "calc( 100vw - 350px)", top: "150px"}}>
//
//   <div className="align-items-center d-flex justify-content-center"style={{
//     width: "300px",
//     height: "100px",
//     backgroundColor: "#dc3545",
//     borderRadius: "10px",
//     color: "white",
//     border: "2px solid #48466e",
//     boxSizing: "border-box"
//   }}>
//     <h5> 32,860 commrads remain</h5>
//   </div>
//   <div className="align-items-center d-flex justify-content-center"style={{
//     width: "300px",
//     height: "100px",
//     backgroundColor: "#dc3545",
//     borderRadius: "10px",
//     color: "white",
//     border: "2px solid #48466e",
//     boxSizing: "border-box"
//   }}>
//     <h5> 32,860 have nutted</h5>
//   </div>
//   </div>
