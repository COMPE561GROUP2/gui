import { useContext, useEffect, useState} from "react";
import { useParams, Navigate } from "react-router-dom";
import axios from "axios";

import AuthContext from "../context/AuthContext";

import images from "../assets/assets.js";

const UserProfile = () => {
  let { profile_owner } = useParams();

  const [profile, setProfile] = useState([]);

  const getProfile = () => {

    axios.post("http://127.0.0.1:8000/api/profile/get", { 'user': profile_owner })
    .then(response => {
      console.log(response)
      setProfile(response.data)
    })
    .catch(error => {
      console.error('Error', error.message)
    })

  };

  useEffect(() => {
    getProfile();
  }, [profile]);

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
              {profile.username ? (
                <h1 className="card-title">{profile.username}'s Profile</h1>
              ) : (
                <h1 className="card-title">Profile</h1>
              )}

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

              <form className="card-body tab-content" style={{ height: 400 }}>
                <div className="tab-pane active" id="Bio">
                  {profile.bio ? (
                    <p className="card-text">{profile.bio}</p>
                  ) : (
                    <p className="card-text">This user has not written a bio</p>
                  )}
                </div>

                <div className="tab-pane" id="Fav-Locations">
                  <p className=" card-text">
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
                <div className="tab-pane" id="Friends">
                  <p className=" card-text">Jane Doe</p>
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

export default UserProfile;
