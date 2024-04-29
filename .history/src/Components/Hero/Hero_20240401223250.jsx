const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Building Digital Experience That Inspire</h2>
        <p>
          Passionate Frontend Developer | Transforming Ideas into Seamless ans
          Visually Stunning Web Solutions
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="./assets/images/react-logo.png" alt="" />
          </div>
          <img src="./assets/images/hero.jpg" alt="" />
        </div>{" "}
        <div>
          <div className="tech-icon">
            <img src="./assets/images/react-logo.png" alt="" />
          </div>
        </div>{" "}
      </div>
    </section>
  );
};

export default Hero;
