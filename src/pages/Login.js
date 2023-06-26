import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";

const Login = () => {
  let { loginUser } = useContext(AuthContext);

  const [auth, setAuth] = useState([])

  const getRegisteredUsers = () => {
    fetch("/json_backend/users/registered_users.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
  }

  const [input, setInput] = useState([])

  const authUser = () => {

    let userID = document.getElementByID(user_id);
    let userPassword = document.getElementByID(user_password);
    let userName, userEmail;
    
    let i;
    let userIDnum;
    let userEmailValid, userNameValid, userPasswordValid;

    (e) =>
      setInput({
        userID: e.target.username.value,
        userPassword: e.target.password.value,
      });


    for (i = 0; i < userID.length(); i++) {
      if (userID[i] != "@") userName = userID;
      else userEmail = userID;
    }

    const users = getRegisteredUsers();




    for (i = 0; i < users.length; i++){
      if (userEmail == users[i].email){
          userEmailValid = true;
          userName = users[i].username;
          userNameValid = true;
          userIDnum = i;
      }
      else if (userName == users[i].username){
          userNameValid = true;
          userEmail = users[i].email;
          userEmailValid = true;
          userIDnum = i;
      }
      else {
          userEmailValid = false;
          userNameValid = false;
      }
    }

    if (userEmailValid && userNameValid) {
        if (userPassword == user[userIDnum].password)
            userPasswordValid = true;
        else
            userPasswordValid = false;
        }
    else {
        userPasswordValid = false;
    }
    
  return userPasswordValid;
  }



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
      <div className="body">
        <br /> <br />
        <h2 className="loginTextHeader">
          {" "}
          Please Enter Your Login Information{" "}
        </h2>
        <br /> <br />
        <form className="loginSection" onSubmit={authUser()}>
          <label htmlFor="user_id"> Username or Email:</label>
          <br />
          <input
            type="text"
            name="userID"
            id="userID"
            placeholder="UserID"
          />
          <br /> <br />
          <label htmlFor="password"> Password:</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <br /> <br />
          <button type="submit" id="loginSubmitButton">
            Log In
          </button>
          <br /> <br />
          <button type="submit" id="registerRedirectButton">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
