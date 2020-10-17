import React, {useState} from "react";
import FriendsList from "../friends/FriendsList";
import Messages from "../friends/Messages";


function Friends(props) {

  const [isMessagesOpen, setMessagesOpen] = useState(false);
  const [friend, setFriend] = useState(null);

  function openMessages(friend){
    setFriend(friend)
    setMessagesOpen(true);
  }

  function closeMessages(){
    setMessagesOpen(false);
  }

  return (
      <>
        {isMessagesOpen? <Messages closeMessages={closeMessages} friend={friend} isFullScreen={true}/>: <FriendsList openMessages={openMessages} className="friends-page"/>}
      </>
  );
}

export default Friends;
