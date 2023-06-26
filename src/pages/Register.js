import { useState, useEffect } from 'react';
import { isValidEmail, isValidPhone, isValidPassword, isValidUsername } from "../utils/Validation";

const Register = () => {

  const [input, setInput] = useState([]);

  const registerUser = async () => {

    // validate user inputs
  
    if ( input.password1 !== input.password2 ) {
      alert("Please enter the same password in both fields")
      return
    }
    if ( !isValidEmail(input.email) ) {
      alert("Please enter a valid email");
      return;
    }
    if (!isValidPhone(input.phone)) {
      alert("Please enter a valid phone number");
      return;
    }
    if (!isValidUsername(input.phone)) {
      alert("Username must contain only alphanumeric symbols and be between 3-20 characters");
      return;
    }
    if (
      !isValidPassword(input.password1) ||
      !isValidPassword(input.password2)
    ) {
      alert("Passwords must have:\nAt least one uppercase letter\nAt least one lowercase letter\nAt least one digit\nAt least one special character from the set [@ $ ! % * ? &]\nMinimum length of 8 characters");
      return;
    }

    alert("Account Created!")
  }

  useEffect(() => {
    if (input.username && input.password1 && input.password2 && input.email && input.phone) {
      registerUser();
    }
    // else
    //   alert("Please fill out all the fields")
  }, [input]);

  return (
    <>
      <div className="container-fluid" style={{height: 1000}}>
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
          setInput(
            {
              username: e.target.username.value,
              email: e.target.email.value,
              phone: e.target.email.value,
              password1: e.target.password1.value,
              password2: e.target.password2.value,
            },
            () => registerUser()
          );
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
        <label htmlFor="userPhoneNumber"> Phone Number:</label>
        <br />
        <input
          type="text"
          name="phone"
          id="userPhoneNumber"
          placeholder="Phone Number"
        />
        <br /> <br />
        <label htmlFor="password"> Password:</label>
        <br />
        <input
          type="password"
          name="password1"
          id="user_password1"
          placeholder="Password"
        />
        <br /> <br />
        <label htmlFor="password">Re-enter Password:</label>
        <br />
        <input
          type="password"
          name="password2"
          id="user_password2"
          placeholder="Re-enter Password"
        />
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
