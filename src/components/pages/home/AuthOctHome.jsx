import React, {useState} from "react";
import TimerTillNovember from "./TimerTillNovember";
import { Link } from 'react-router-dom';
import { Button, Container, Col, Row} from 'react-bootstrap';
import FriendsList from "../../friends-list/FriendsList";


function AuthOctHome(props) {
  const [friends, setFriends] = useState([]);

  return (
    <div>
      <Container fluid>
        <Row xs={12}>
          <Col xs={{ span: 3 }} className="p-0">
          <FriendsList />
          </Col>
        </Row>
    </Container>
    </div>
  );
}

export default AuthOctHome;
