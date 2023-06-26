import { useContext, useEffect, useState } from "react";
import axios from "axios";

import AuthContext from "../context/AuthContext";

import images from "../assets/assets.js";

const UserPage = () => {
  let { user } = useContext(AuthContext);

  const [profile, setProfile] = useState({
    username: "joe_smith",
    email: "joesmith@aol.com",
    firstName: "Joe",
    lastName: "Smith",
    age: 30,
    address: {
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      postalCode: "10001",
    },
  });

  const getProfile = () => {
    fetch("/json_backend/profiles/joe_smith_profile.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (profile_json) {
        console.log(profile_json);
        setProfile(profile_json);
      });
  };

  useEffect(() => {
    getProfile();
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
              class="card-img-rounded-0"
              alt="..."
              style={{ height: 380 }}
            />
            <div className="card-img-overlay">
              <h1 className="card-title">{profile.firstName}'s Profile</h1>
              <p className="card-text"></p>
            </div>

            <div className="card rounded-0">
              <div className="card-header w-100 mx-auto">
                <ul className="nav nav-tabs card-header-tabs">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="true"
                      data-bs-toggle="tab"
                      href="#Bio"
                    >
                      Bio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-bs-toggle="tab"
                      href="#Fav-Locations"
                    >
                      Favorite Locations
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-bs-toggle="tab"
                      href="#Friends"
                    >
                      Friends
                    </a>
                  </li>
                </ul>
              </div>
              <form class="card-body tab-content" style={{ height: 400 }}>
                <div class="tab-pane active" id="Bio">
                  <p class="card-text">
                    Location: {profile.address.city}, {profile.address.state}
                  </p>
                </div>
                <div class="tab-pane" id="Fav-Locations">
                  <p class=" card-text">
                    <iframe
                      title="Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429296.0065733395!2d-116.87039736647274!3d32.795572164421465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbec2a1af657a5%3A0x65f0819e736d55d8!2sCleveland%20National%20Forest!5e0!3m2!1sen!2sus!4v1685648283501!5m2!1sen!2sus"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      width={350}
                      height={350}
                    />
                  </p>
                </div>
                <div class="tab-pane" id="Friends">
                  <p class=" card-text">
                    Jane Doe
                  </p>
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

export default UserPage;
