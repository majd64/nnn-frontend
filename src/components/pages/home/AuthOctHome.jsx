import React, {useState} from "react";
import TimerTillNovember from "./TimerTillNovember";
import { Link } from 'react-router-dom';
import { Button, Container, Col, Row} from 'react-bootstrap';
import FriendsList from "../../friends/FriendsList";


function AuthOctHome(props) {
  const [friends, setFriends] = useState([]);

  return (
    <div>
      <FriendsList />
    </div>
  );
}

export default AuthOctHome;
