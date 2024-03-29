import images from "../assets/assets.js";
import { NavLink } from "react-router-dom";

const Blog = () => {
  return (
    <>
    
      <div className="container-fluid" style={{height:883}}>
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

                  <h1 style={{textAlign: "center", margin: 40}}>
                    Adventure Log
                  </h1>

                </div>
              </div>
            </div>
          </div>
        </header>
        <br></br>

        {/* Main Content*/}
        
        <div className="container">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={images.JWSTimage} className="img-fluid rounded-start" alt="..." style={{height:250, width:500}} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">
                      Man must explore, and this is exploration at its greatest</h5>
                  <p className="card-text">Problems look mighty small from 150 miles up.</p>
                  <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>

                  
                  <p className="post-meta">
                    Posted by <NavLink to="/user-profile/joe_smith">Joe Smith</NavLink> on
                    September 21, 2023
                  </p>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "0",
                      width: "100%",
                      padding: "10px",
                      textAlign: "left",
                      paddingLeft: 440
                    }}
                  >
                    <button style={{backgroundColor:"transparent", border: "none" }}>
                    
                    <NavLink to="/Post" className="btn btn-success">
                      Go
                    </NavLink>
                  </button>
                  </div>
                  
                  {/* <!-- Modal --> */}
                </div>
              </div>
            </div>
          </div>
        </div>


        
        <div className="container">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">

              <img src={images.JapaneseFriendshipGarden} className="img-fluid rounded-start" alt="..." style={{height:250, width:500}}/>

              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">
                  I believe every human has a finite number of heartbeats.</h5>
                  <p className="card-text"> I
                    don't intend to waste any of mine.</p>
                  <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  

                  <p className="post-meta">
                    Posted by <NavLink to="/user-profile/joe_smith">Joe Smith</NavLink> on
                    September 18, 2023
                  </p>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "0",
                      width: "100%",
                      padding: "10px",
                      textAlign: "left",
                      paddingLeft: 440
                    }}
                  >
                    <button style={{backgroundColor:"transparent", border: "none" }}>
                    <NavLink to="/Post1" className="btn btn-success">
                      Go
                    </NavLink>
                  </button>
                  </div>
                  
                  
                  {/* <!-- Modal --> */}
                </div>
              </div>
            </div>
          </div>
        </div>



        
        
      </div>
    </>
  );
};

export default Blog;