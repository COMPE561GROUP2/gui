import { NavLink, Link, useLocation } from "react-router-dom";
import { useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
  const location = useLocation();

  const clickNav = () => {
    window.scrollTo(0, 0);
  };

  let { user } = useContext(AuthContext);

  return (
    <>
      <title>Touch Grass</title>
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
                <NavLink
                  id="about-btn"
                  to="/home"
                  onClick={clickNav}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  id="about-btn"
                  to="/activities"
                  onClick={clickNav}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Activities
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  id="about-btn"
                  to="/blog"
                  onClick={clickNav}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  id="about-btn"
                  to="/help"
                  onClick={clickNav}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Help
                </NavLink>
              </li>
            </ul>
          </div>
          <ul>
            <button type="button" className="btn btn-success">
              {user ? (
                <NavLink to="/home">Log Out</NavLink>
              ) : (
                <NavLink to="/login">Log In</NavLink>
              )}
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
    </>
  );
};

export default Navbar;
