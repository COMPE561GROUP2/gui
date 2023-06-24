import photos from '../assets/index.js';

const Home = () => {
  return (
    <>
      <link rel="stylesheet" href="prototype_ss.css" />
      <title>Touch Grass - Home</title>
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
            "\n            /* Modify the background color */\n            \n            .navbar-custom {\n                background-color: rgb(163, 207, 187);\n            }\n        /* Modify brand and text color */\n\n            .navbar-custom .navbar-brand,\n        .navbar-custom .nav-link,\n        .navbar-custom .navbar-nav,\n            .navbar-custom .navbar-text {\n                color: green;\n            }\n            \n        ",
        }}
      />

      <section>
        <div className="container">
          <h1 style={{ textAlign: "center", paddingTop: "5%" }}>
            {" "}
            Find Your Outdoors
          </h1>
          <div className="input-group rounded pt-3">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <button type="submit" id="searchButton">
              {" "}
              Search{" "}
            </button>
          </div>
          <br />
        </div>
      </section>
      <section id="Activities">
        <h2 className="text-center my-3">Activities</h2>
        <div className="container">
          <div className="row">
            <div className="col-lg">
              <div className="card">
                <img
                  src={photos.home_pic1}
                  //src = {require('../assets/hike1.jpg').default}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button href="#" className="btn btn-primary">
                    Go somewhere
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg">
              <div className="card">
                <img
                  src={photos.home_pic2}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button href="#" className="btn btn-primary">
                    Go somewhere
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg">
              <div className="card">
                <img
                  src={photos.home_pic3}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button href="#" className="btn btn-primary">
                    Go somewhere
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="small text-center text-muted fst-italic">
        Copyright © Touch Grass 2023
        </div>
      </section>
    </>
  );
};

export default Home;
