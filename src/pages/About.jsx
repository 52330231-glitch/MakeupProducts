import "./About.css";

function About() {
  return (
    <div className="about-page">

      <section className="about-header text-center">
        <div className="container">
          <p className="about-subtitle">GET TO KNOW US</p>
          <h1>About Us</h1>
          <p>
            Beauty is more than makeup. It is confidence,
            elegance, and expressing yourself.
          </p>
        </div>
      </section>

      <section className="about-story container py-5">
        <div className="row align-items-center g-5">

          <div className="col-12 col-lg-6">
            <img
              src="/images/makeup.jpeg"
              alt="Makeup Collection"
              className="about-image"
            />
          </div>

          <div className="col-12 col-lg-6">
            <div className="about-content">
              <p className="about-subtitle">OUR STORY</p>

              <h2>Beauty Begins With You</h2>

              <p>
                Welcome to Makeup Products, your destination
                for beauty and elegance.
              </p>

              <p>
                We believe that every person has a unique beauty.
                Our goal is to help you express your style and
                feel confident through a carefully selected
                makeup collection.
              </p>

              <p>
                From everyday essentials to special occasion
                favorites, discover products that make you feel
                beautiful and confident.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="about-values py-5">
        <div className="container">

          <div className="text-center mb-5">
            <p className="about-subtitle">WHAT WE BELIEVE IN</p>
            <h2>Our Values</h2>
          </div>

          <div className="row g-4">

            <div className="col-12 col-md-4">
              <div className="value-card text-center h-100">
                <div className="value-icon">♡</div>
                <h4>Beauty</h4>
                <p>
                  Celebrating natural beauty and individual style.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="value-card text-center h-100">
                <div className="value-icon">✧</div>
                <h4>Quality</h4>
                <p>
                  Choosing products with care and attention.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="value-card text-center h-100">
                <div className="value-icon">♡</div>
                <h4>Confidence</h4>
                <p>
                  Helping everyone feel confident in their own beauty.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default About;
