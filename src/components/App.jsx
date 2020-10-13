import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    reAuth();
  });
  function reAuth(){
    console.log("reauth")
    axios({
      method: 'get',
      url: '/user/auth',
      withCredentials: true,
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
      }
    }, {withCredentials: true}).then(res => {
      console.log(res.data)
      if (res.data === true){
        setAuth(true);
      } else if (res.data === false){
        setAuth(false);
      }
    });
  }

  return (
    <Router>
    <Header auth={auth} reAuth={reAuth}/>
      <Route path="/" exact render={(props) => (<Home {...props} auth={auth}/>)}/>
      <Route path="/register" exact render={(props) => (<Register {...props} auth={auth} reAuth={reAuth}/>)}/>
      <Route path="/login" exact render={(props) => (<Login {...props} auth={auth} reAuth={reAuth}/>)}/>
      <Route path="/about" exact component={About} />
      <Route path="/rules" exact component={Rules} />
    </Router>
  );
}

export default App;
