import React, {useState} from "react";
import axios from "axios";
import Querystring from "query-string"

function Register(props) {
  if (props.auth){
    props.history.push('/')
  }

  const [errorMessage, setErrorMessage] = useState(null);
  const [success, setSuccess] = useState(false);

  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    password2: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setNewUser((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function getGreetingText(){
    if (newUser.username){
      if (newUser.username.length > 12){
        return "Hello " + newUser.username.substring(0, 12) + "..."
      }
      return "Hello " + newUser.username
    }
    return "Hello";
  }

  function submit(event){
    event.preventDefault();
    axios.post("/api/register", Querystring.stringify(newUser))
      .then(res => {
        if (res.data.status === "success"){
          setErrorMessage(null);
          setSuccess(true);
          setTimeout(function(){
            props.reAuth();
          }, 2000);
        }else{
          setErrorMessage(res.data.message);
        }
      })
    .catch(() =>{
      setErrorMessage("an unknown error occured");
    });
  }

  return (
    <div className="center">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1>
            {getGreetingText()}
          </h1>
          <form>
            <input
              className="input"
              value={newUser.email}
              onChange={handleChange}
              name="email"
              placeholder="Email"
              type="Username"
              autoComplete="no"
            />
            <input
              className="input"
              value={newUser.username}
              onChange={handleChange}
              placeholder="Username"
              name="username"
              autoComplete="no"
            />
            <input
              className="input"
              value={newUser.password}
              onChange={handleChange}
              name="password"
              placeholder="Password"
              type="password"
              autoComplete="no"
            />
            <input
              className="input"
              value={newUser.password2}
              onChange={handleChange}
              name="password2"
              placeholder="Confirm Password"
              type="password"
              autoComplete="no"
            />
            <button type="submit" onClick={submit} className="form-button btn btn-danger join-button">Sign Up</button>
            {errorMessage && <div className="invalid-feedback d-block">{errorMessage}</div>}
            {success && <div className="valid-feedback d-block">Success! Please verify your email address</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
