import React, { useState } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import About from "./About";
import Rules from "./Rules";
import Header from "./Header";
import Home from "./Home";
import axios from "axios"

function App() {
  const [auth, setAuth] = useState(false);

  const staging = false;
  let api;
  if (staging){
    api = "http://localhost:5000";
  }else{
    api = "https://nnn-server.herokuapp.com";
  }

  const [serverURL] = useState(api);

  reAuth()
  function reAuth(){

    axios.get(serverURL + "/user/auth", {withCredentials: true}).then(res => {
      console.log(res.data)
      setAuth(res.data)
    })


  }

  return (
    <Router>
    <Header serverURL={serverURL} auth={auth} reAuth={reAuth}/>
      <Route path="/" exact render={(props) => (<Home {...props} auth={auth}/>)}/>
      <Route path="/register" exact render={(props) => (<Register {...props} serverURL={serverURL} auth={auth} reAuth={reAuth}/>)}/>
      <Route path="/login" exact render={(props) => (<Login {...props} serverURL={serverURL} auth={auth} reAuth={reAuth}/>)}/>
      <Route path="/about" exact component={About} />
      <Route path="/rules" exact component={Rules} />
    </Router>
  );
}

export default App;
