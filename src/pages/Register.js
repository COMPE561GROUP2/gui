import { useState, useEffect } from 'react';
import { isValidEmail, isValidPhone, isValidPassword, isValidUsername } from "../utils/Validation";
import { Navigate } from 'react-router-dom';

const Register = () => {

  const [input, setInput] = useState([]);

  const registerUser = async () => {

    let response = await fetch("http://127.0.0.1:8000/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: input.username,
        email: input.email,
        password: input.password,
      }),
    });

    let data = await response.json()

    if (response.status === 201) {
      alert("Congratulations you are now registered!");
    } else {
      alert(response.status + ": " + JSON.stringify(data, null, 4));
    }

  }

  useEffect(() => {
    if (input.username && input.password && input.email) {
      registerUser();
    }
    // else
    //   alert("Please fill out all the fields")
  }, [input]);

  return (
    <>
      <div className="container-fluid" style={{ height: 1000 }}>
        <title>Touch Grass - Register</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        />
        <br /> <br />
        <h2 className="loginTextHeader">Make an Account</h2>
        <br /> <br />
        <form
          className="loginSection"
          onSubmit={(e) => {
            e.preventDefault();
            setInput({
              username: e.target.username.value,
              email: e.target.email.value,
              // phone: e.target.phone.value,
              password: e.target.password.value,
              // password2: e.target.password2.value,
            });
          }}
        >
          <label htmlFor="usernameText"> Username:</label>
          <br />
          <input
            type="text"
            name="username"
            id="usernameText"
            placeholder="Username"
          />
          <br /> <br />
          <label htmlFor="userEmail"> Email:</label>
          <br />
          <input type="text" name="email" id="userEmail" placeholder="Email" />
          <br /> <br />
          {/* <label htmlFor="userPhoneNumber"> Phone Number:</label>
          <br />
          <input
            type="text"
            name="phone"
            id="userPhoneNumber"
            placeholder="Phone Number"
          />
          <br /> <br /> */}
          <label htmlFor="password"> Password:</label>
          <br />
          <input
            type="password"
            name="password"
            id="user_password"
            placeholder="Password"
            autoComplete='on'
          />
          {/* <br /> <br />
          <label htmlFor="password">Re-enter Password:</label>
          <br />
          <input
            type="password"
            name="password2"
            id="user_password2"
            placeholder="Re-enter Password"
          /> */}
          <br /> <br />
          <button type="submit" id="registerSubmitButton">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
