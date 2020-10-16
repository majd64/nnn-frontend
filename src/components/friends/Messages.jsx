import React from "react";
import axios from "axios";
function Messages(props) {

  getMessages();

  function getMessages(){
    axios.get(`/api/user/friends/messages/${props.match.params.friendid}`)
      .then(res => {
        if (res.data.status === "success"){
          console.log(res.data.messages)
        }
      });
  }

  return (
    <>
      <h1>helo</h1>
    </>
  );
}

export default Messages;
