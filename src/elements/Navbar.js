import { NavLink, Link, useLocation } from "react-router-dom";
import { useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import logo from "../assets/OutdoorLogo.png";
import Private from "../utils/Private";

const Navbar = () => {
  const location = useLocation();

  const clickNav = () => {
    window.scrollTo(0, 0);
  };

  let { user, logoutUser } = useContext(AuthContext);

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
      <style
        dangerouslySetInnerHTML={{
          __html:
            ".navbar-custom {background-color: rgb(20, 137, 73);} .navbar-custom .navbar-brand, .navbar-custom .nav-link,.navbar-custom .navbar-nav, .navbar-custom .navbar-text {color: dark-green;}",
        }}
      />
      
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container-fluid">
          <Link to="/home">
            <img src={logo} alt="Bootstrap" width={45} height={40} />
          </Link>

          <NavLink className="navbar-brand" to="/home">
            TouchGrass
          </NavLink>

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

              <Private>
                <li className="nav-item">
                  <NavLink
                    id="about-btn"
                    to={"/user-profile/"+user?.username}
                    onClick={clickNav}
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    Profile
                  </NavLink>
                </li>
              </Private>

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

          <section>
            {/*Display Login button if user is not logged in
               Display Logout button if user is logged in*/}

            <button type="button" className="btn btn-success" style={{background: "rgb(23, 85, 44)"}}>
              {user ? (
                <NavLink
                  to="/home"
                  onClick={logoutUser}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Log Out
                </NavLink>
              ) : (
                <NavLink
                  to="/login"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Log In
                </NavLink>
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
          </section>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
