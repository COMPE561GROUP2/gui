import React from 'react';
import { NavLink } from "react-router-dom";
import images from "../assets/assets.js";

const Post1 = () => {
  return (
  <>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <meta name="description" content="" />
  <meta name="author" content="" />
  <title>Clean Blog - Start Bootstrap Theme</title>
  <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
  {/* Font Awesome icons (free version)*/}
  {/* Google fonts*/}
  <link
    href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic"
    rel="stylesheet"
    type="text/css"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800"
    rel="stylesheet"
    type="text/css"
  />
  {/* Core theme CSS (includes Bootstrap)*/}
  {/* Page Header*/}
  <header
    className="masthead"
    style={{ backgroundImage: 'url("assets/img/post-bg.jpg")' }}
      >
        <br/><br/>
        <div className="card" style={{width:1000, margin:"auto"}}> 
          <h2 className="card-title" style={{ textAlign: "center", paddingTop: 40 }}>Embracing Life: </h2>
          <h2 className="subheading" style={{ textAlign: "center", paddingTop: 20, fontSize: 24 }}>Maximizing the Value of Each Heartbeat</h2>
          <h2 className="subheading" style={{ textAlign: "center", paddingTop: 10, fontSize: 16 }}>
            <span className="meta">
              Posted by <NavLink to="/user-profile/joe_smith">Joe Smith</NavLink> on September 18, 2023
            </span>
          </h2>
          <img src={images.JapaneseFriendshipGarden} alt="..." style={{
            height: 500, width: 800, margin: "auto", paddingTop: 20
          }} />
      <div style={{marginLeft:100, marginRight:100, paddingBottom: 40, paddingTop: 20}}>
      <h2 className="section-heading">Introduction:</h2>
      <p>
        In the grand tapestry of existence, our time on Earth is limited. Every breath we take and every beat of our heart brings us one step closer to the culmination of our journey. Understanding the finite nature of our existence compels us to embrace life fully, cherishing every moment and utilizing our precious heartbeats in the pursuit of fulfillment and purpose. This article delves into the philosophy of making the most of our limited time, focusing on the value of each heartbeat.
      </p>

      <h2 className="section-heading">The Fragility of Life:</h2>
      <p>
        Life, with all its beauty and wonder, is inherently delicate. The realization that our heartbeats are numbered serves as a poignant reminder of our mortality. Rather than being burdened by this truth, we can embrace it as a catalyst for action and a motivation to live purposefully. By recognizing the fragility of life, we develop a heightened appreciation for every heartbeat, propelling us towards a life of significance.
      </p>

      <h2 className="section-heading">Embracing the Present Moment:</h2>
      <p>
        Too often, we find ourselves preoccupied with the past or consumed by worries about the future. However, a conscious shift towards living in the present moment allows us to experience the richness and depth of existence. Each heartbeat becomes a reminder to be fully present, savoring the sights, sounds, and emotions that surround us. By immersing ourselves in the present, we unlock a gateway to joy, gratitude, and profound connections with the world around us.
      </p>

      <h2 className="section-heading">Seizing Opportunities:</h2>
      <p>
        Life presents us with a myriad of opportunities, both big and small, waiting to be seized. Recognizing the finite nature of our heartbeats propels us to pursue our passions, take risks, and embrace new experiences. It urges us to step outside our comfort zones, for it is in those moments of uncertainty that we often find the greatest rewards. Whether it's pursuing a dream career, embarking on an adventure, or nurturing relationships, each heartbeat urges us forward, encouraging us to make the most of the opportunities that come our way.
      </p>

      <h2 className="section-heading">Living Authentically:</h2>
      <p>
        In a world that often imposes expectations and societal norms, honoring our individuality and living authentically becomes a profound way to honor the finite number of heartbeats we possess. Each beat echoes the importance of embracing our true selves, unapologetically expressing our beliefs, passions, and values. By living authentically, we inspire others to do the same, creating a ripple effect that spreads positivity and encourages personal growth.
      </p>

      <h2 className="section-heading">Leaving a Lasting Legacy:</h2>
      <p>
        The understanding that our heartbeats are numbered provides a powerful impetus to leave a lasting impact on the world. We are not mere spectators in the grand theater of life; we are the playwrights, actors, and directors of our own narratives. Each heartbeat becomes an opportunity to contribute to something greater than ourselves, whether it's through acts of kindness, creative endeavors, or making a positive difference in the lives of others. By embracing the legacy we wish to leave behind, we infuse purpose and meaning into every beat of our hearts.
      </p>
          </div>
        </div>
    
  </header>
  
  
</>

);
};

/*
export default Post1;

const Post1 = () => {
  return (
    
    <div>
      <h1>Embracing Life: Maximizing the Value of Each Heartbeat</h1>

      <p>
        Introduction: <br />
        In the grand tapestry of existence, our time on Earth is limited. Every breath we take and every beat of our heart brings us one step closer to the culmination of our journey. Understanding the finite nature of our existence compels us to embrace life fully, cherishing every moment and utilizing our precious heartbeats in the pursuit of fulfillment and purpose. This article delves into the philosophy of making the most of our limited time, focusing on the value of each heartbeat.
      </p>

      <p>
        The Fragility of Life: <br />
        Life, with all its beauty and wonder, is inherently delicate. The realization that our heartbeats are numbered serves as a poignant reminder of our mortality. Rather than being burdened by this truth, we can embrace it as a catalyst for action and a motivation to live purposefully. By recognizing the fragility of life, we develop a heightened appreciation for every heartbeat, propelling us towards a life of significance.
      </p>

      <p>
        Embracing the Present Moment: <br />
        Too often, we find ourselves preoccupied with the past or consumed by worries about the future. However, a conscious shift towards living in the present moment allows us to experience the richness and depth of existence. Each heartbeat becomes a reminder to be fully present, savoring the sights, sounds, and emotions that surround us. By immersing ourselves in the present, we unlock a gateway to joy, gratitude, and profound connections with the world around us.
      </p>

      <p>
        Seizing Opportunities: <br />
        Life presents us with a myriad of opportunities, both big and small, waiting to be seized. Recognizing the finite nature of our heartbeats propels us to pursue our passions, take risks, and embrace new experiences. It urges us to step outside our comfort zones, for it is in those moments of uncertainty that we often find the greatest rewards. Whether it's pursuing a dream career, embarking on an adventure, or nurturing relationships, each heartbeat urges us forward, encouraging us to make the most of the opportunities that come our way.
      </p>

      <p>
        Living Authentically: <br />
        In a world that often imposes expectations and societal norms, honoring our individuality and living authentically becomes a profound way to honor the finite number of heartbeats we possess. Each beat echoes the importance of embracing our true selves, unapologetically expressing our beliefs, passions, and values. By living authentically, we inspire others to do the same, creating a ripple effect that spreads positivity and encourages personal growth.
      </p>

      <p>
        Leaving a Lasting Legacy: <br />
        The understanding that our heartbeats are numbered provides a powerful impetus to leave a lasting impact on the world. We are not mere spectators in the grand theater of life; we are the playwrights, actors, and directors of our own narratives. Each heartbeat becomes an opportunity to contribute to something greater than ourselves, whether it's through acts of kindness, creative endeavors, or making a positive difference in the lives of others. By embracing the legacy we wish to leave behind, we infuse purpose and meaning into every beat of our hearts.
      </p>
    </div>
  );
};
*/
export default Post1;
