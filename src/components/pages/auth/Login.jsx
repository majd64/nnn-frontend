import React, {useState} from "react";
import axios from "axios";
import Querystring from "query-string"

function Login(props) {
  if (props.auth){
    props.history.push('/')
  }

  const [errorMessage, setErrorMessage] = useState(null);
  const [success, setSuccess] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setUser((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function submit(event){
    event.preventDefault();
    axios.post("/api/login", Querystring.stringify(user))
      .then(res => {
        if (res.data.status === "success"){
          setSuccess(true);
          setTimeout(function(){
            props.reAuth();
          }, 500);
        }else{
          setErrorMessage(res.data.message);
        }
      })
    .catch(() => {
      setErrorMessage("invalid username or password");
    });
  }

  return (
    <div className="center">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1>
            Welcome back!
          </h1>
          <form autoComplete="new-password">
            <input
              autoFocus
              id="email"
              className="input"
              value={user.email}
              onChange={handleChange}
              name="email"
              placeholder="Email"
              type="email"
            />
            <input
              id="password"
              className="input"
              value={user.password}
              onChange={handleChange}
              name="password"
              placeholder="Password"
              type="password"
            />
            <button onClick={submit} className="form-button btn btn-danger join-button">Log in</button>
            {errorMessage && <div className="invalid-feedback d-block">{errorMessage}</div>}
            {success && <div className="valid-feedback d-block">Success!</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
