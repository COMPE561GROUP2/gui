

const login = () => {
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
          "\n            /* Modify the background color */\n            \n            .navbar-custom {\n                background-color: rgb(163, 207, 187);\n            }\n        /* Modify brand and text color */\n\n            .navbar-custom .navbar-brand,\n        .navbar-custom .nav-link,\n        .navbar-custom .navbar-nav,\n            .navbar-custom .navbar-text {\n                color: green;\n            }\n        "
      }}
    />
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container-fluid">
        <img
          src="/src/assets/OutdoorLogo.png"
          alt="Bootstrap"
          width={45}
          height={40}
        />
        <a className="navbar-brand" href="#">
          TouchGrass
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Activities
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Help
              </a>
            </li>
          </ul>
        </div>
        <ul>
          <button type="button" className="btn btn-success">
            Log In
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </ul>
      </div>
    </nav>
    <br /> <br />
    <h2 className="loginTextHeader"> Please Enter Your Login Information </h2>
    <br /> <br />
    <section className="loginSection">
      <label htmlFor="user_id"> Username or Email:</label>
      <br />
      <input type="text" id="user_id" placeholder="Username or Email" />
      <br /> <br />
      <label htmlFor="password"> Password:</label>
      <br />
      <input type="password" id="user_password" placeholder="Password" />
      <br /> <br />
      <button type="submit" id="loginSubmitButton">
        Log In
      </button>
      <br /> <br />
      <button type="submit" id="registerRedirectButton">
        Register
      </button>
    </section>
  </>
  
  )
}

export default login