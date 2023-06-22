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
      <link rel="stylesheet" href="prototype_ss.css" />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n\t\t/* Modify the background color */\n\t\t\n\t\t.navbar-custom {\n\t\t\tbackground-color: rgb(163, 207, 187);\n\t\t}\n    /* Modify brand and text color */\n\n\t\t.navbar-custom .navbar-brand,\n    .navbar-custom .nav-link,\n    .navbar-custom .navbar-nav,\n\t\t.navbar-custom .navbar-text {\n\t\t\tcolor: green;\n\t\t}\n\t",
        }}
      />
      <h1 className="row h-100 justify-content-center align-items-center">
        {" "}
        Help &amp; FAQ
      </h1>
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
              Common Question #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
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
              Common Question #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
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
              Common Question #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      <div className="center" style={{ backgroundColor: "rgb(207, 190, 163)" }}>
        <h1 className="center">
          Got Another Question?
          <br />
        </h1>
        <h3>Submit Here!</h3>
        <form>
          <label htmlFor="name"> Name : </label>
          <input
            type="text"
            name="name"
            id="name"
            defaultValue="Your Name Here"
          />
          <br />
          <label htmlFor="email"> Email : </label>
          <input
            type="text"
            name="email"
            id="email"
            defaultValue="Your Email Here"
          />
          <br />
          <textarea
            name="message"
            rows={10}
            cols={30}
            defaultValue={" What would you like to say? "}
          />
          <br /> <br />
        </form>
        <form>
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default Help;
