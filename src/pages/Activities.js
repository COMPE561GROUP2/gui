import images from "../assets/assets.js";
import { NavLink } from "react-router-dom";

const Activities = () => {



  return (
    <>
      <title>Touch Grass - Activities</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossOrigin="anonymous"
      />
      <link rel="stylesheet" href="prototype_ss.css" />

      <section>
        <div className="container">
          <h1 style={{ textAlign: "center", paddingTop: "5%" }}>
            Find your outdoors
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
        <h2 className="text-center my-3">Your Top Activities</h2>

        {/*Card 1*/}

        <div className="container">
          <div className="row">
            <div className="col-lg">
              <div className="card">
                <img src={images.surf1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Surfing</h5>
                  <p className="card-text">
                    Discover all the best surfing locations near you!
                  </p>
                  <button style={{ border: "none" }}>
                    <NavLink to="/Location" className="btn btn-success">
                      Surfing
                    </NavLink>
                  </button>
                  <br /> <br />
                  <iframe
                    title="Card 1 Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429296.0065733395!2d-116.87039736647274!3d32.795572164421465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbec2a1af657a5%3A0x65f0819e736d55d8!2sCleveland%20National%20Forest!5e0!3m2!1sen!2sus!4v1685648283501!5m2!1sen!2sus"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    width={350}
                    height={350}
                  />
                  <p style={{ marginTop: 20 }}>
                    Surfing is a captivating water sport that captures the
                    essence of freedom and the power of the ocean. Riding the
                    waves on a surfboard provides an exhilarating sensation of
                    being in harmony with nature's elements. Surfers paddle out
                    into the vast expanse of the ocean, patiently waiting for
                    the perfect wave to catch. The feeling of effortlessly
                    gliding across the water, the sound of crashing waves, and
                    the salty breeze create a unique connection to the sea.
                    Surfing is not just a sport; it's a way of life, embracing
                    the thrill of the ocean and the endless pursuit of the
                    perfect wave.
                  </p>
                </div>
              </div>
            </div>

            {/*Card 2*/}

            <div className="col-lg">
              <div className="card">
                <img src={images.hike1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Hiking</h5>
                  <p className="card-text">
                    Discover all the best hiking locations near you!
                  </p>
                  <button style={{ border: "none" }}>
                    <NavLink to="/Location" className="btn btn-success">
                      Hiking
                    </NavLink>
                  </button>
                  <br /> <br />
                  <iframe
                    title="Card 2 Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429296.0065733395!2d-116.87039736647274!3d32.795572164421465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbec2a1af657a5%3A0x65f0819e736d55d8!2sCleveland%20National%20Forest!5e0!3m2!1sen!2sus!4v1685648283501!5m2!1sen!2sus"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    width={350}
                    height={350}
                  />
                  <p style={{ marginTop: 20 }}>
                    Hiking is an invigorating outdoor activity that allows
                    individuals to connect with nature and explore the beauty of
                    the great outdoors. With every step along the winding
                    trails, hikers can experience a sense of freedom and
                    tranquility as they immerse themselves in breathtaking
                    landscapes, surrounded by towering trees, majestic
                    mountains, and cascading waterfalls. Hiking offers not only
                    physical benefits but also a chance to clear the mind, find
                    solace in solitude, and discover hidden wonders off the
                    beaten path.
                  </p>
                </div>
              </div>
            </div>

            {/*Card 3*/}

            <div className="col-lg">
              <div className="card">
                <img src={images.ski1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Skiing</h5>
                  <p className="card-text">
                    Discover all the best skiing locations near you!
                  </p>
                  <button style={{ border: "none" }}>
                    <NavLink to="/Location" className="btn btn-success">
                      Skiing
                    </NavLink>
                  </button>
                  <br /> <br />
                  <iframe
                    title="Card 3 Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429296.0065733395!2d-116.87039736647274!3d32.795572164421465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbec2a1af657a5%3A0x65f0819e736d55d8!2sCleveland%20National%20Forest!5e0!3m2!1sen!2sus!4v1685648283501!5m2!1sen!2sus"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    width={350}
                    height={350}
                  />
                  <p style={{ marginTop: 20 }}>
                    Skiing is a thrilling winter sport that brings joy to
                    countless individuals around the world. As skiers glide down
                    snow-covered slopes, they experience an exhilarating sense
                    of freedom and a rush of adrenaline. The crisp mountain air,
                    stunning snowy vistas, and the sound of skis carving through
                    the powder create an unforgettable experience. Whether it's
                    gracefully carving turns on groomed trails or seeking the
                    thrill of off-piste adventures, skiing offers an escape from
                    everyday life and a chance to embrace the beauty of winter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Activities;
