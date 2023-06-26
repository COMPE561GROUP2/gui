import { NavLink } from "react-router-dom";

const Blog = () => {
  return (
    <>
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
                Posted by
                <NavLink to="/BlogServer">
                <h2 className="post-title">
                  Man must explore, and this is exploration at its greatest
                </h2>
                <h3 className="post-subtitle">
                  Problems look mighty small from 150 miles up
                </h3></NavLink>
              </p>
              <p className="post-meta">
                Posted by
                <NavLink to="/UserPage"> Joe Smith </NavLink>
                on September 24, 2023
              </p>
            </div>

            {/* Divider*/}
            <hr className="my-4" />

            {/* Post preview*/}
            <div className="post-preview">
              <a href="post.html">
                <h2 className="post-title">
                  I believe every human has a finite number of heartbeats. I
                  don't intend to waste any of mine.
                </h2>
              </a>

              <p className="post-meta">
                Posted by
                <NavLink to="/UserPage">Mary Littlelamb</NavLink>
                on September 18, 2023
              </p>
            </div>

            {/* Divider*/}
            <hr className="my-4" />

            {/* Post preview*/}
            <div className="post-preview">
              <a href="post.html">
                <h2 className="post-title">
                  Science has not yet mastered prophecy
                </h2>
                <h3 className="post-subtitle">
                  We predict too much for the next year and yet far too little
                  for the next ten.
                </h3>
              </a>

              <p className="post-meta">
                Posted by
                <NavLink to="/UserPage">Bill Chill</NavLink>
                on August 24, 2023
              </p>
            </div>

            {/* Divider*/}
            <hr className="my-4" />

            {/* Post preview*/}
            <div className="post-preview">
              <a href="post.html">
                <h2 className="post-title">Failure is not an option</h2>
                <h3 className="post-subtitle">
                  Many say exploration is part of our destiny, but it's actually
                  our duty to future generations.
                </h3>
              </a>
              <p className="post-meta">
                Posted by
                <NavLink to="/UserPage">Ugur Dogan</NavLink>
                on July 8, 2023
              </p>
            </div>

            {/* Divider*/}
            <hr className="my-4" />

            {/* Pager*/}
            <div className="d-flex justify-content-end mb-4">
              <a className="btn btn-primary text-uppercase" href="#!">
                Older Posts →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer*/}
      <footer className="border-top">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <ul className="list-inline text-center">
                <li className="list-inline-item">
                  <a href="#!">
                    <span className="fa-stack fa-lg">
                      <i className="fas fa-circle fa-stack-2x" />
                      <i className="fab fa-twitter fa-stack-1x fa-inverse" />
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!">
                    <span className="fa-stack fa-lg">
                      <i className="fas fa-circle fa-stack-2x" />
                      <i className="fab fa-facebook-f fa-stack-1x fa-inverse" />
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!">
                    <span className="fa-stack fa-lg">
                      <i className="fas fa-circle fa-stack-2x" />
                      <i className="fab fa-github fa-stack-1x fa-inverse" />
                    </span>
                  </a>
                </li>
              </ul>
              <div className="small text-center text-muted fst-italic">
                Copyright © Touch Grass 2023
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Bootstrap core JS*/}
      {/* Core theme JS*/}
    </>
  );
};

export default Blog;