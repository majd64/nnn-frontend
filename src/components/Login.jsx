import React, {useState} from "react";
import axios from "axios";
import Querystring from "query-string"

function Login(props) {
  if (props.auth){
    props.history.push('/')
  }

  const [result, setResult] = useState(null);

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
    axios({
      method: 'post',
      data: Querystring.stringify(user),
      withCredentials: true,
      url: props.serverURL + '/login',

    }, {withCredentials: true}).then(res => {
      console.log("resdata: " + res.data)
      if (res.data === "success"){
        props.reAuth();
      }else{
        setResult((prevValue) => {
          return (
            res.data.toString()
          )
        });
      }
    }).catch(function(err){
      setResult((prevValue) => {
        return (
          "Invalid email or password"
        )
      });
    })
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
              autoFocus
              id="password"
              className="input"
              value={user.password}
              onChange={handleChange}
              name="password"
              placeholder="Password"
              type="password"
            />

            <button onClick={submit} className="form-button btn btn-danger join-button">Log in</button>

            {result && <div className="invalid-feedback d-block">{result}</div>}

          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
