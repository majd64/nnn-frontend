import React from "react";
import './Friend.css';
import Fab from '@material-ui/core/Fab';
import ClearIcon from '@material-ui/icons/Clear';
import CheckIcon from '@material-ui/icons/Check';
import axios from 'axios'
import Querystring from "query-string";

function FriendRequest(props) {
  function mangeFriendRequest(accept){
    let url;
    if (accept){
      url = "/api/user/friendRequest/true"
    }else{
      url = "/api/user/friendRequest/false"
    }
    axios.post(url, Querystring.stringify({friendId: props.friend._id}))
      .then(res => {
        console.log(res.data)
        if (res.data.status === "success"){
          props.getFriends();
        }
      })
  }

  return (
    <>
      <div className="friend friend-request" style={{display: "flex", justifyContent: "space-between"}}>
        <div>
          <img className="img-circle" width="60" height="60" alt="profile" src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"/>
          <h6 className="friend-name"><strong>{props.friend.username}</strong></h6>
        </div>
        <div className="my-auto" style={{display: "inline-block"}}>
          <Fab onClick={() => mangeFriendRequest(true)} size="small" color="primary" aria-label="add"> <CheckIcon /> </Fab>
          <Fab onClick={() => mangeFriendRequest(false)} className="ml-2" size="small" color="secondary" aria-label="deny"> <ClearIcon /> </Fab>
        </div>
      </div>
    </>
  );
}

export default FriendRequest;
