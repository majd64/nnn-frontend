import React, {useState, useEffect} from "react";
import Friend from "./Friend"
import './Friend.css';
import axios from 'axios'
import SendIcon from '@material-ui/icons/Send';
import Fab from '@material-ui/core/Fab';
import Querystring from "query-string"

function FriendsList(props) {
  const [friends, setFriends] = useState([]);
  const [searchUserName, setSearchUserName] = useState("");
  const [friendRequest, setFreindRequest] = useState({sentRequest: false, didFindUser: false});

  useEffect(() => {
    axios.get("/api/user/friends")
      .then(res => {
        if (res.data.status === "success"){
          setFriends(res.data.friends);
        }
      });
  }, [friends.length]);

  function handleChange(event) {
    setSearchUserName(event.target.value);
  }

  function submit(event){
    event.preventDefault();
    axios.post("/api/user/addfriend", Querystring.stringify({"newfriendusername": searchUserName}))
      .then(res => {
        if (res.data.status === "success"){
          setFreindRequest({sentRequest: true, didFindUser: true});
        }else{
          setFreindRequest({sentRequest: true, didFindUser: false});
        }
      });
  }

  return (
    <div className="friends-list shadow-sm">
    <h4>Add Friend</h4>
    <input
      className="search-friend-input"
      name="username"
      placeholder="Enter a username"
      autoComplete="no"
      value={searchUserName}
      onChange={handleChange}
    />
      <Fab onClick={submit} size="small" color="secondary" aria-label="add">
          <SendIcon />
      </Fab>
      {friendRequest.sentRequest && !friendRequest.didFindUser && <div className="invalid-feedback d-block">Cannot find user</div>}
      {friendRequest.sentRequest && friendRequest.didFindUser && <div className="valid-feedback d-block">Sent friend request</div>}
      <hr />
      <h4>Friends</h4>
      {friends.map((friend, index) => {
        return (
          <Friend
            key={index}
            id={index}
            name={friend.username}
            didNut={friend.didNut}
          />
        );
      })}
    </div>
  );
}

export default FriendsList;
