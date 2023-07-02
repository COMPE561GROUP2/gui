import { useContext, useEffect, useState } from "react";
import axios from "axios";

import AuthContext from "../context/AuthContext";

import images from "../assets/assets.js";

const Location = () => {
  let { activities } = useContext(AuthContext);

  const [location, setLocation] = useState([]);

  const getLocation = () => {
    fetch("/json_backend/activities/La_Jolla_Beach.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (location_json) {
        console.log(location_json);
        setLocation(location_json);
      });
  };

  useEffect(() => {
    getLocation();
  }, []);

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

      <section>
        <div className="container-fluid rounded pt-5">
          <div className="card bg-dark text-white w-50 mx-auto">
            <img
              src={images.surf1}
              className="card-img-rounded-0"
              alt="..."
              style={{ height: 380 }}
            />
            <div className="card-img-overlay">
              <h1 className="card-title">{location.name}'s location</h1>
              
            </div>

            <div className="card rounded-0">
              <div className="card-header w-100 mx-auto">
                <ul className="nav nav-tabs card-header-tabs">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="true"
                      data-bs-toggle="tab"
                      href="#Description"
                    >
                      Description
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-bs-toggle="tab"
                      href="#Waypoint"
                    >
                      Waypoints
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-bs-toggle="tab"
                      href="#Conditions"
                    >
                      Conditions
                    </a>
                  </li>
                </ul>
              </div>
              <form className="card-body tab-content" style={{ height: 400 }}>
                <div className="tab-pane active" id="Description">
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
                </div>
                <div className="tab-pane" id="Waypoint">
                  <p className=" card-text">
                    To get from San Diego State University (SDSU) to La Jolla
                    Beach, you can follow these directions: Head west on
                    Montezuma Rd toward College Ave. Continue on Montezuma Rd as
                    it turns into Campanile Dr. Take a slight right onto College
                    Ave. Merge onto I-8 West via the ramp on the left. Continue
                    on I-8 West for approximately 5 miles. Take the exit for I-5
                    North toward Los Angeles. Merge onto I-5 North and continue
                    for about 10 miles. Take exit 28B for La Jolla Village Dr.
                    Keep left at the fork and follow signs for La Jolla Village
                    Dr West. Merge onto La Jolla Village Dr. Continue on La
                    Jolla Village Dr for approximately 2 miles. Turn right onto
                    Torrey Pines Rd. Follow Torrey Pines Rd for about 2.5 miles
                    until you reach La Jolla Shores Dr. Turn left onto La Jolla
                    Shores Dr. Continue on La Jolla Shores Dr for approximately
                    0.7 miles, and you will reach La Jolla Beach. These
                    directions should take you from SDSU to La Jolla Beach, but
                    keep in mind that traffic conditions and road closures can
                    affect the journey, so it's always a good idea to check for
                    updates before you start your trip.
                  </p>
                </div>
                <div className="tab-pane" id="Conditions">
                  <p className=" card-text">
                    Today in La Jolla Beach, the weather is partly cloudy with a
                    gentle breeze blowing in from the west. The temperature is a
                    comfortable 70 degrees Fahrenheit (21 degrees Celsius). As
                    you walk along the sandy shore, you'll feel the warmth of
                    the sun on your skin, with occasional breaks of shade as
                    fluffy white clouds pass by. The sea is calm, inviting you
                    for a refreshing swim or a leisurely walk along the water's
                    edge. It's a great day to soak up the coastal ambiance and
                    enjoy the beauty of La Jolla Beach.
                  </p>
                </div>
              </form>
              {/* <form className="card-body tab-content" style={{height:400}}>
                  <h5 className="card-title">Brief summary here about the location</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </form> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
