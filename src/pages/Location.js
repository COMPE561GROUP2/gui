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
              <img src={images.surf1} className="card-img-rounded-0" alt="..." style={{height:380}}/>
              <div className="card-img-overlay">
                  <h1 className="card-title">{location.name}'s location</h1>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>

              <div className="card rounded-0">
              <div className="card-header w-100 mx-auto">
                <ul className="nav nav-tabs card-header-tabs">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="true" data-bs-toggle="tab" href="#Description">Description</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#Waypoint">Waypoints</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#Conditions">Conditions</a>
                  </li>
                </ul>
                </div>
                <form className="card-body tab-content" style={{height:400}}>
                <div className="tab-pane active" id="Description">
                    <p className="card-text">Brief summary here about the location</p>
                </div>
                <div className="tab-pane" id="Waypoint">
                    <p className=" card-text">Brief summary here about the location's waypoint or map informations</p>
                </div>
                <div className="tab-pane" id="Conditions">
                    <p className=" card-text">Brief summary here about the location's weather</p>
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
