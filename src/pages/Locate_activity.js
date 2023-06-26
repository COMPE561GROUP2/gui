import images from "../assets/assets.js";

const Set_Activities = () => {
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
            <div class="container-fluid">
            <div class="card bg-dark text-white w-50 mx-auto">
            <img src={images.surf1} class="card-img" alt="..." style={{height:400}} />
            <div class="card-img-overlay d-flex align-items-end">
                <h2 class="card-title">Card title</h2>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            </div>

            <div class="card">
            <div class="card-body w-50 mx-auto">
                <h5 class="card-title">Card title</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button class="card-link" href="#" className="btn btn-success">Card link</button>
                <button class="card-link" href="#" className="btn btn-success">Another link</button>
            </div>
            </div>
            </div>
        </section>
    </>
  );
};

export default Set_Activities;
