import Private from '../utils/Private.js'

const Help = () => {
  return (
    <>
      <title>Touch Grass - Help</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossOrigin="anonymous"
      />


      <h1 
        className="row h-100 justify-content-center align-items-center"
        style={{'margin': 30}}
      >
        Help &amp; FAQ
      </h1>

      <div className='container' style={{height:1250}}>

      <div style={{marginBottom: 110}}>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{ backgroundColor: "rgb(163, 207, 187)" }}
              >
                What is grass?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Grass is a common type of plant found in various habitats around
                the world. It has narrow leaves, hollow stems, and fibrous
                roots. Grasses play important ecological roles by preventing
                soil erosion, providing habitat and food for animals, and
                contributing to the carbon cycle. Humans utilize grass for
                purposes such as lawns, sports fields, livestock forage, and
                food crops like wheat, rice, and corn. With its widespread
                presence and diverse uses, grass is a vital component of both
                natural ecosystems and human societies.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={{ backgroundColor: "rgb(163, 207, 187)" }}
              >
                Why should I touch grass?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                The phrase "touch grass" is often used metaphorically to
                encourage someone to step away from their virtual or indoor
                spaces and experience the outdoors, nature, and real-life
                interactions. In a literal sense, touching grass can provide a
                sensory experience that connects you with nature. Engaging with
                nature has been shown to have numerous benefits for physical and
                mental well-being. It can help reduce stress, improve mood,
                boost creativity, and increase overall feelings of happiness and
                relaxation.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={{ backgroundColor: "rgb(163, 207, 187)" }}
              >
                How can I touch grass?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                To physically touch grass, you can follow these simple steps:
                <ol>
                  <li>
                    Find a suitable outdoor location: Look for a nearby park,
                    garden, meadow, or any area with grassy patches where you
                    can access and interact with the grass.
                  </li>
                  <li>
                    Take off your shoes and socks: If you want to fully
                    experience the sensation of grass, consider removing your
                    shoes and socks. This allows direct contact between your
                    bare feet and the grass.
                  </li>
                  <li>
                    Walk or sit on the grass: Once you're in the grassy area,
                    walk around or find a comfortable spot to sit or lie down.
                    Feel the grass beneath your feet, hands, or body.
                  </li>
                  <li>
                    Observe and engage with nature: Take a moment to appreciate
                    the surroundings. Observe the colors, textures, and scents
                    of the grass and the environment. Listen to the sounds of
                    nature, such as birds chirping or the rustling of leaves.
                  </li>
                  <li>
                    Engage your senses: As you touch the grass, notice the
                    softness, coolness, or warmth of the blades against your
                    skin. Run your fingers through the grass or rub it gently
                    between your hands. You can also lie down and let the grass
                    tickle your skin.
                  </li>
                </ol>
                Remember to be mindful of any allergies or potential hazards in
                the grassy area, such as insects or sharp objects. It's always a
                good idea to choose a safe and clean location for your
                grass-touching experience.
              </div>
            </div>
          </div>
        </div>
      </div>
      

        <Private>
          <div
            className="center"
            style={{ backgroundColor: "white", width:625, height:625, margin:"auto"}}
          >
            <h1 className="center">
              Got Another Question?
              <br />
            </h1>
            <h3>Submit Here!</h3>
            <form>
              <label htmlFor="name"> Name: </label> <br/> <br/>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name Here"
              />
              <br /><br/>
              <label htmlFor="email"> Email: </label> <br/> <br/>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Your Email Here"
              />
              <br /> <br/>
              <textarea
                name="message"
                rows={10}
                cols={30}
                placeholder={" What would you like to say? "}
              />
              <br /> <br />
            </form>
            <form>
              <input type="submit" />
            </form>
          </div>
        </Private>


      </div>
    </>
  );
};

export default Help;
