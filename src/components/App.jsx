import React, { useState, useEffect } from "react";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import About from "./pages/About";
import Rules from "./pages/Rules";
import Header from "./Header";
import Home from "./pages/home/Home";
import axios from "axios"
import {BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function App() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    reAuth();
  });
  function reAuth(){
    console.log("reauth")
    axios({
      method: 'get',
      url: '/api/user/auth',
      withCredentials: true,
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
      }
    }, {withCredentials: true}).then(res => {
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
