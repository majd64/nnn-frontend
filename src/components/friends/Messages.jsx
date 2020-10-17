import React, {useState, useEffect, useRef} from "react";
import './Friend.css';
import axios from 'axios'
import SendIcon from '@material-ui/icons/Send';
import Fab from '@material-ui/core/Fab';
import Querystring from "query-string"
import Message from "./Message"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function Messages(props) {
  const [message, setMessage] = useState("");
  const [friend, setFriend] = useState([]);
  const [messages, setMessages] = useState([])

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }


  useEffect(() => {
    setFriend(props.friend)
    setTimeout(() => {
      getMessages();
    }, 1000);
  });

  useEffect(scrollToBottom, [messages]);

  function getMessages(){
    axios.get(`/api/user/friends/messages/${friend._id}`)
      .then(res => {
        if (res.data.status === "success"){
          if (res.data.messages.length != messages.length){
            setMessages(res.data.messages);
          }
        }
      });
  }

  function handleChange(event) {
    setMessage(event.target.value);
  }

  function submit(event){
    event.preventDefault();
    axios.post("/api/user/friends/sendMessage", Querystring.stringify({"friendID": props.friend._id, "message": message}))
    setMessage("");
    getMessages();
  }





  return (
    <div className={props.isFullScreen? "messages-page": "shadow-sm messages-list"}>

    <Fab onClick={props.closeMessages} size="small" color="secondary" aria-label="add">
        <ArrowBackIcon />
    </Fab>
    <div className="scrollable-messages">
    {messages.map((message, index) => {
      return (
        <Message
          key={index}
          id={index}
          message={message.message}
          isSender={message.sender}
        />
      );
    })}
    <div ref={messagesEndRef} />
    </div>

    <div className="message-box">
      <input
        className="search-friend-input"
        placeholder={"Message " + friend.username}
        autoComplete="no"
        value={message}
        onChange={handleChange}
      />
        <Fab onClick={submit} size="small" color="secondary" aria-label="add">
            <SendIcon />
        </Fab>
      </div>
    </div>
  );
}

export default Messages;
