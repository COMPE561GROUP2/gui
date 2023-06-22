const User_page = () => {
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
      <link rel="stylesheet" href="prototype_ss.css" />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n            /* Modify the background color */\n            \n            .navbar-custom {\n                background-color: rgb(163, 207, 187);\n            }\n        /* Modify brand and text color */\n\n            .navbar-custom .navbar-brand,\n        .navbar-custom .nav-link,\n        .navbar-custom .navbar-nav,\n            .navbar-custom .navbar-text {\n                color: green;\n            }\n        ",
        }}
      />
      <title>User Page</title>
      <h1 className="head_user">User Page</h1>
      <p id="demo" />
      <div className="icons_user">
        <img
          className="icons_user"
          src="../assets/hike_logo.jpg"
          alt="Flowers in Chania"
          width={250}
          height={250}
        />
        <img
          className="icons_user"
          src="../assets/surf_logo.jpg"
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

export default User_page;
