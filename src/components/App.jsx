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
  const [user, setUser] = useState(null);

  useEffect(() => {
    reAuth();
  }, [auth]);

  function reAuth(){
    axios.get("/api/user")
      .then(res => {
        console.log(res.data)
        if (res.data.status === "success"){
          setAuth(true);
          setUser(res.data.user);
        } else{
          setAuth(false);
          setUser(null);
        }
      });
  }

  function logout(){
    axios.get("/api/logout")
      .then(() => reAuth())
  }

  return (
    <Router>
    <Header auth={auth} reAuth={reAuth} logout={logout}/>
      <Route path="/" exact render={(props) => (<Home {...props} auth={auth} user={user}/>)}/>
      <Route path="/register" exact render={(props) => (<Register {...props} auth={auth} reAuth={reAuth}/>)}/>
      <Route path="/login" exact render={(props) => (<Login {...props} auth={auth} reAuth={reAuth}/>)}/>
      <Route path="/about" exact component={About} />
      <Route path="/rules" exact component={Rules} />
    </Router>
  );
}

export default App;
