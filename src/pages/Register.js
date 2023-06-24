const Register = () => {
  return (
    <>
      <title>Touch Grass - Register</title>
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
            "\n\t\t/* Modify the background color */\n\t\t\n\t\t.navbar-custom {\n\t\t\tbackground-color: rgb(163, 207, 187);\n\t\t}\n    /* Modify brand and text color */\n\n\t\t.navbar-custom .navbar-brand,\n    .navbar-custom .nav-link,\n    .navbar-custom .navbar-nav,\n\t\t.navbar-custom .navbar-text {\n\t\t\tcolor: green;\n\t\t}\n\t",
        }}
      />
      <br /> <br />
      <h2 className="loginTextHeader">
        {" "}
        Please Provide Your Contact Information{" "}
      </h2>
      <br /> <br />
      <section className="loginSection">
        <label htmlFor="usernameText"> Username:</label>
        <br />
        <input type="text" id="usernameText" placeholder="Username" />
        <br /> <br />
        <label htmlFor="userEmail"> Email:</label>
        <br />
        <input type="text" id="userEmail" placeholder="Email" />
        <br /> <br />
        <label htmlFor="userPhoneNumber"> Phone Number:</label>
        <br />
        <input type="text" id="userPhoneNumber" placeholder="Phone Number" />
        <br /> <br />
        <label htmlFor="password"> Password:</label>
        <br />
        <input type="password" id="user_password" placeholder="Password" />
        <br /> <br />
        <button type="submit" id="registerSubmitButton">
          Register
        </button>
      </section>
    </>
  );
};

export default Register;
