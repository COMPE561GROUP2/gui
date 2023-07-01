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
            Find Your Outdoors
          </h1>
          <div className="row g-0 justify-content-evenly">
            <div className="col-lg-9">
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
            </div>
          </div>
          <br />
        </div>
      </section>

      <section id="Activities">
        <h2 className="text-center my-3">Activities</h2>
        <div className="row g-5 justify-content-evenly">
          <div className="col-lg-8">

          {/*Card 1*/}  

            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={images.surf1} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Surfing</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    <button style={{backgroundColor:"transparent", border: "none" }}>
                      <NavLink to="/Location" className="btn btn-success">
                        Surfing
                      </NavLink>
                    </button>
                    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#Map1">
                    <i class="fa-solid fa-map"></i> Map
                    </button>
                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="Map1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog">
                        <div className="modal-content" style={{width:800, position:"absolute", top:0, left:-150}}>
                          <div className="modal-body mb-0 p-0">
                            <div className="z-depth-1-half map-container-9" style={{height:460}}>
                              <iframe
                              title="Card 1 Map"
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429296.0065733395!2d-116.87039736647274!3d32.795572164421465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbec2a1af657a5%3A0x65f0819e736d55d8!2sCleveland%20National%20Forest!5e0!3m2!1sen!2sus!4v1685648283501!5m2!1sen!2sus"
                              style={{ border: 0 }}
                              allowFullScreen=""
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                              width={798}
                              height={460}
                            />
                            </div>
                          </div>
                          <div className="modal-footer justify-content-center">
                            <button type="button" className="btn btn-success">Save location<i className="bi bi-map"></i></button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Card 2*/}  

            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={images.hike1} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Hiking</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    <button style={{backgroundColor:"transparent", border: "none" }}>
                      <NavLink to="/Location" className="btn btn-success">
                        Surfing
                      </NavLink>
                    </button>
                    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#Map1">
                    <i class="fa-solid fa-map"></i> Map
                    </button>
                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="Map1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog">
                        <div className="modal-content" style={{width:800, position:"absolute", top:0, left:-150}}>
                          <div className="modal-body mb-0 p-0">
                            <div className="z-depth-1-half map-container-9" style={{height:460}}>
                              <iframe
                              title="Card 1 Map"
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429296.0065733395!2d-116.87039736647274!3d32.795572164421465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbec2a1af657a5%3A0x65f0819e736d55d8!2sCleveland%20National%20Forest!5e0!3m2!1sen!2sus!4v1685648283501!5m2!1sen!2sus"
                              style={{ border: 0 }}
                              allowFullScreen=""
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                              width={798}
                              height={460}
                            />
                            </div>
                          </div>
                          <div className="modal-footer justify-content-center">
                            <button type="button" className="btn btn-success">Save location</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Card 3*/}  

            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={images.ski1} className="img-fluid rounded-start" alt="..."/> 
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Skiing</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    <button style={{backgroundColor:"transparent", border: "none" }}>
                      <NavLink to="/Location" className="btn btn-success">
                        Surfing
                      </NavLink>
                    </button>
                    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#Map1">
                    <i class="fa-solid fa-map"></i> Map
                    </button>
                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="Map1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content" style={{width:800, position:"absolute", top:0, left:-150}}>
                          <div className="modal-body mb-0 p-0">
                            <div className="z-depth-1-half map-container-9" style={{height:460}}>
                              <iframe
                              title="Card 1 Map"
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429296.0065733395!2d-116.87039736647274!3d32.795572164421465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbec2a1af657a5%3A0x65f0819e736d55d8!2sCleveland%20National%20Forest!5e0!3m2!1sen!2sus!4v1685648283501!5m2!1sen!2sus"
                              style={{ border: 0 }}
                              allowFullScreen=""
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                              width={798}
                              height={460}
                            />
                            </div>
                          </div>
                          <div className="modal-footer justify-content-center">
                            <button type="button" className="btn btn-success">Save location</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
