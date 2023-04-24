import React from "react";
import "./About.scss";
import aboutImg from "../../images/library-image.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About Toronto Book Depot</h2>
            <p className="fs-17">
              At Book Depot, we believe that reading is at the heart of
              Enchanting the Mind, and it is our shared responsibility to bring
              this core purpose to life – one book at a time. For some,
              Enchanting the Mind is bringing joy to and building the
              imaginations of our avid readers in the community and around the
              world. For others, Enchanting the Mind is sharing knowledge so
              people can be informed and educated. And for others still, it goes
              one step further: Enchanting the Mind is ensuring the most
              vulnerable within our community and around the world have access
              to affordable books for an equal chance to learn and develop, to
              be creative and successful. The interpretations of Enchanting the
              Mind are truly endless – it is all about how our collective
              contributions are making a difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
