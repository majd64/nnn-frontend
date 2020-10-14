import React, {useState} from "react";
import Friend from "./Friend"
import './Friend.css';


function FriendsList(props) {
  const [friends, setFriends] = useState([{name: "name1", didNut: false}, {name: "name2", didNut: true}, {name: "name3", didNut: false}])

  return (
    <div className="friends-list shadow-sm">

      <h4> Friends </h4>
      {friends.map((friend, index) => {
        return (
          <Friend
            key={index}
            id={index}
            name={friend.name}
            didNut={friend.didNut}
          />
        );
      })}


    </div>
  );
}

export default FriendsList;
