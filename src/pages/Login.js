import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { NavLink } from "react-router-dom";

const Login = () => {
  let { loginUser } = useContext(AuthContext);

  return (
    <>
      <title>Touch Grass - Login</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossOrigin="anonymous"
      />
      <div className="container" style={{height:1000}}>
        <br /> <br />
        
        <div className="card" style={{width:700, margin:"auto"}}> 
          <h2 className="card-title" style={{textAlign:"center", paddingTop:40}}>Please Enter Your Login Information</h2>
          <form className="loginSection" onSubmit={loginUser}>
            <br /><br />
          <label htmlFor="userID"> Username or Email:</label>
          <br/><br/>
          <input type="text" name="userID" id="userID" placeholder="UserID" />
          <br /> <br />
          <label htmlFor="password"> Password:</label>
          <br/><br/>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            autoComplete="on"
          />
          <br /> <br /> <br/>
          <button type="submit" id="loginSubmitButton" className="btn btn-success">
            Log In
            </button>
            
          <br /> <br /> <br/>
          <NavLink to="/Register">
            <button className="btn btn-success">Register</button>
            </NavLink>
            <br/><br/><br/> 
        </form>
        </div>
        
      </div>
    </>
  );
};

export default Login;
