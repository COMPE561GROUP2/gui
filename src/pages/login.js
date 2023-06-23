import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Login = () => {
  let { loginUser } = useContext(AuthContext);

  return (
    <>
      <link rel="stylesheet" href="prototype_ss.css" />
      <title>Touch Grass - Login</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossOrigin="anonymous"
      />
      <link rel="stylesheet" href="prototype_ss.css" />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n            /* Modify the background color */\n            \n            .navbar-custom {\n                background-color: rgb(163, 207, 187);\n            }\n        /* Modify brand and text color */\n\n            .navbar-custom .navbar-brand,\n        .navbar-custom .nav-link,\n        .navbar-custom .navbar-nav,\n            .navbar-custom .navbar-text {\n                color: green;\n            }\n        ",
        }}
      />
      <br /> <br />
      <h2 className="loginTextHeader"> Please Enter Your Login Information </h2>
      <br /> <br />
      <form className="loginSection" onSubmit={Login}>
        <label htmlFor="user_id"> Username or Email:</label>
        <br />
        <input
          type="text"
          name="username"
          id="user_id"
          placeholder="Username or Email"
        />
        <br /> <br />
        <label htmlFor="password"> Password:</label>
        <br />
        <input
          type="password"
          name="password"
          id="user_password"
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
    </>
  );
};

export default Login;
