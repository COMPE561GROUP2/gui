import { useContext, useEffect, useState } from "react";
import axios from "axios";

import AuthContext from "../context/AuthContext";

import images from "../assets/assets.js";

const UserPage = () => {
  let { user } = useContext(AuthContext);

  const [profile, setProfile] = useState([]);

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
      <title>Touch Grass - Profile</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossOrigin="anonymous"
      />

      <title>User Page</title>

      <h1 className="head_user">{profile.firstName}'s Profile</h1>

      <p id="demo" />
      <div className="icons_user">
        <img
          className="icons_user"
          src={images.hike_logo}
          alt="Flowers in Chania"
          width={250}
          height={250}
        />
        <img
          className="icons_user"
          src={images.surf_logo}
          alt="Flowers in Chania"
          width={250}
          height={250}
        />
      </div>
      <p />
      <div className="inline_user">
        <form>
          <label htmlFor="post_head"> Post Header: </label>
          <input type="text" name="head" id="head" />
          <br />
          <textarea
            name="message"
            rows={20}
            cols={60}
            defaultValue={" What would you like to say? "}
          />
          <br /> <br />
        </form>
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
      </div>
    </>
  );
};

export default UserPage;
