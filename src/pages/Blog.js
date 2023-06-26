import { NavLink } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <div className="container-fluid" style={{ height: 1000 }}>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Clean Blog - Start Bootstrap Theme</title>
        <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
        {/* Font Awesome icons (free version)*/}
        {/* Google fonts*/}
        <link
          href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800"
          rel="stylesheet"
          type="text/css"
        />
        {/* Core theme CSS (includes Bootstrap)*/}
        <title>Touch Grass</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        />

        {/* Page Header*/}
        <header
          className="masthead"
          style={{ backgroundImage: 'url("assets/img/sb_bg.jpg")' }}
        >
          <div className="container position-relative px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
              <div className="col-md-10 col-lg-8 col-xl-7">
                <div className="site-heading">
                  <h1>Your Adventure Log</h1>
                  <span className="subheading">Share Your Journey</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content*/}
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              {/* Post preview*/}
              <div className="post-preview">
                <p className="post-meta">
                  <NavLink to="/Post">
                    <h2 className="post-title">
                      Man must explore, and this is exploration at its greatest
                    </h2>
                    <h3 className="post-subtitle">
                      Problems look mighty small from 150 miles up
                    </h3>
                  </NavLink>
                </p>
                <p className="post-meta">
                  Posted by
                  <NavLink to="/UserPage">Joe Smith</NavLink>
                  on September 24, 2023
                </p>
              </div>

              {/* Divider*/}
              <hr className="my-4" />

              {/* Post preview*/}
              <div className="post-preview">
                <NavLink to="/Post1">
                  <h2 className="post-title">
                    I believe every human has a finite number of heartbeats. I
                    don't intend to waste any of mine.
                  </h2>
                </NavLink>

                <p className="post-meta">
                  Posted by <NavLink to="/UserPage">Joe Smith</NavLink> on September 18, 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;