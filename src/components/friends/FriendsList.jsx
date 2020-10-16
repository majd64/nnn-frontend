import React, {useState, useEffect} from "react";
import Friend from "./Friend";
import FriendRequest from "./FriendRequest";
import './Friend.css';
import axios from 'axios'
import SendIcon from '@material-ui/icons/Send';
import Fab from '@material-ui/core/Fab';
import Querystring from "query-string"

function FriendsList(props) {
  const [friends, setFriends] = useState([]);
  const [friendRequests, setFriendRequests] = useState([]);

  const [searchUserName, setSearchUserName] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [sentRequest, setSentRequest] = useState(false);

  useEffect(() => {
    getFriends();
  }, [friends.length]);

  function getFriends(){
    axios.get("/api/user/friends")
      .then(res => {
        if (res.data.status === "success"){
          setFriends(res.data.friends);
          setFriendRequests(res.data.friendRequests);
        }
      });
  }

  function handleChange(event) {
    setSearchUserName(event.target.value);
  }

  function submit(event){
    event.preventDefault();
    axios.post("/api/user/friends/sendFriendRequest", Querystring.stringify({"newfriendusername": searchUserName}))
      .then(res => {
        if (res.data.status === "success"){
          setErrorMessage(null);
          setSentRequest(true)
        }else if (res.data.status === "error"){
          setErrorMessage(res.data.message);
          setSentRequest(false)
        }
      });
  }

  return (
    <div className={props.className}>
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
      {errorMessage && <div className="invalid-feedback d-block">{errorMessage}</div>}
      {sentRequest && <div className="valid-feedback d-block">Friend Request Sent!</div>}
      <hr />
      <h4>Friends</h4>
      {friends.map((friend, index) => {
        return (
          <Friend
            key={index}
            id={index}
            friend={friend}
          />
        );
      })}

      <hr />
      <h4>Friend Requests</h4>
      {friendRequests.map((friend, index) => {
        return (
          <FriendRequest
            key={index}
            id={index}
            friend={friend}
            getFriends={getFriends}
           />
        );
      })}
    </div>
  );
}

export default FriendsList;
