import React from "react";

function Message(props) {
  function message(isSender){
    if (isSender){
      return (
        <div style={{marginLeft: "20px", marginTop: "5px", color: "white", backgroundColor: "#48466d", borderRadius: "5px", padding: "5px"}}>
          <p className="my-auto">{props.message}</p>
        </div>
      );
    }else{
      return (
        <div style={{marginRight: "20px", marginTop: "5px", color: "white", backgroundColor: "#d9534f", borderRadius: "5px", padding: "5px"}}>
          <p className="my-auto">{props.message}</p>
        </div>
      );
    }
  }

  return (
    message(props.isSender)
  );
}

export default Message;
