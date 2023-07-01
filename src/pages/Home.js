import { NavLink } from "react-router-dom";
import images from "../assets/assets.js";

const Home = () => {
  return (
    <>
      <title>Touch Grass - Home</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossOrigin="anonymous"
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
        <h2 className="text-center my-3">Top 3 Local Favorites</h2>
        <div className="container">
          <div className="row">
            <div className="col-lg">
              <div className="card">
                <img src={images.hike1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Zion National Park</h5>
                  <p className="card-text">
                    Zion National Park, located in southwestern Utah, is a
                    breathtaking sanctuary of towering sandstone cliffs, deep
                    canyons, and vibrant desert landscapes. Renowned for its
                    dramatic red rock formations and diverse ecosystems, Zion
                    captivates visitors with its awe-inspiring beauty. The park
                    boasts a myriad of outdoor adventures, from thrilling hikes
                    along narrow slot canyons like The Narrows to the
                    adrenaline-pumping ascent of Angels Landing, offering
                    panoramic views that leave you breathless.
                  </p>
                  <button style={{ border: "none" }}>
                    <NavLink to="/Location" className="btn btn-success">
                      Go Somewhere
                    </NavLink>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg">
              <div className="card">
                <img src={images.surf1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">La Jolla Beach</h5>
                  <p className="card-text">
                    Nestled along the picturesque coastline of San Diego,
                    California, La Jolla Beach is a coastal gem that epitomizes
                    Southern California's charm. With its pristine sandy shores,
                    crystal-clear turquoise waters, and rugged cliffs, La Jolla
                    Beach captivates visitors with its natural beauty. This
                    idyllic stretch of coastline offers a range of activities
                    for beachgoers, from sunbathing and picnicking to swimming
                    and surfing in the Pacific Ocean's refreshing waves.
                  </p>
                  <button style={{ border: "none" }}>
                    <NavLink to="/Location" className="btn btn-success">
                      Go Somewhere
                    </NavLink>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg">
              <div className="card">
                <img src={images.hike2} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Mt. Everest</h5>
                  <p className="card-text">
                    Mt Everest, the majestic crown of the Himalayas, stands as
                    the world's tallest mountain and a symbol of human endurance
                    and exploration. Located in the Everest region of Nepal,
                    this towering peak has captivated the imagination of
                    adventurers and mountaineers for decades. Scaling its
                    formidable heights is a remarkable feat that pushes the
                    limits of human strength and determination.
                  </p>
                  <button style={{ border: "none" }}>
                    <NavLink to="/Location" className="btn btn-success">
                      Go Somewhere
                    </NavLink>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
