import { useContext, useEffect, useState } from "react";
import axios from "axios";

import AuthContext from "../context/AuthContext";

import images from "../assets/assets.js";

const LocatePage = () => {
  let { activities } = useContext(AuthContext);

  const [activity, setActivity] = useState([]);

  const getActivity = () => {
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
      .then(function (activity_json) {
        console.log(activity_json);
        setActivity(activity_json);
      });
  };

  useEffect(() => {
    getActivity();
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
              <img src={images.surf1} class="card-img-rounded-0" alt="..." style={{height:380}}/>
              <div className="card-img-overlay">
                  <h1 className="card-title">{activity.name}'s activity</h1>
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
                <form class="card-body tab-content" style={{height:400}}>
                <div class="tab-pane active" id="Description">
                    <p class="card-text">Brief summary here about the activity</p>
                </div>
                <div class="tab-pane" id="Waypoint">
                    <p class=" card-text">Brief summary here about the activity's waypoint or map informations</p>
                </div>
                <div class="tab-pane" id="Conditions">
                    <p class=" card-text">Brief summary here about the activity's weather</p>
                </div>
            </form>
                {/* <form className="card-body tab-content" style={{height:400}}>
                  <h5 className="card-title">Brief summary here about the activity</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </form> */}
              </div>
              </div>
            </div>
        </section>
    </>
  );
};

export default LocatePage;
