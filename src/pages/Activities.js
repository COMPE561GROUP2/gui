import photos from "../assets/index.js";

const Activities = () => {
  return (
    <>
      <link rel="stylesheet" href="prototype_ss.css" />
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
            {" "}
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
        <h2 className="text-center my-3">Activities</h2>

        {/*Card 1*/}

        <div className="container">
          <div className="row">
            <div className="col-lg">
              <div className="card">
                <img
                  src={photos.home_pic2}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Surfing</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button href="#" className="btn btn-primary">
                    Go somewhere
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
                  <textarea
                    name="tempPost"
                    rows={15}
                    cols={38}
                    defaultValue={" Relevant Posts "}
                  />
                </div>
              </div>
            </div>

            {/*Card 2*/}

            <div className="col-lg">
              <div className="card">
                <img
                  src={photos.home_pic1}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Hiking</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button href="#" className="btn btn-primary">
                    Go somewhere
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
                  <textarea
                    name="tempPost"
                    rows={15}
                    cols={38}
                    defaultValue={" Relevant Posts "}
                  />
                </div>
              </div>
            </div>

            {/*Card 3*/}

            <div className="col-lg">
              <div className="card">
                <img
                  src="/src/assets/surf2.jpg"
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
                  <textarea
                    name="tempPost"
                    rows={15}
                    cols={38}
                    defaultValue={" Relevant Posts "}
                  />
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
