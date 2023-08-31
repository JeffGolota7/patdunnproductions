import React from "react";

import "../styles/about.css";

export default function About() {
  return (
    <>
      <div className="about-hero-section">
        <h2 className="hero-heading">
          Elevating Sports <br></br>
          Through My Lens
        </h2>
      </div>
      <div className="about-companies-section">
        <h2>My work can be seen in these organizations</h2>
        <ul className="brands">
          <li className="logo bu">
            <img src={process.env.PUBLIC_URL + "/bu.svg"} alt="SVG" />
          </li>
          <li className="logo ec">
            <img src={process.env.PUBLIC_URL + "/endicott.svg"} alt="SVG" />
          </li>
        </ul>
      </div>
      <div className="about-info-section">
        <h2>Who Am I?</h2>
        <div className="columns">
          <img
            className="column-img-1"
            src={process.env.PUBLIC_URL + "/info-1.jpg"}
            alt=""
          />
          <img
            className="column-img-2"
            src={process.env.PUBLIC_URL + "/about info.jpg"}
            alt=""
          />
          <img
            className="column-img-3"
            src={process.env.PUBLIC_URL + "/info-3.jpg"}
            alt=""
          />
        </div>
        <div className="content">
          <div className="column">
            <p>
              I'm a dedicated sports photographer and videographer based in
              Greater Boston. <br />
              <br />
              My journey as a communication major at Endicott College has
              provided incredible opportunities to blend my love for sports with
              creative talents in photography and video production.
            </p>
          </div>
          <div className="column">
            <p>
              This portfolio showcases my work, capturing the energy, emotion,
              and captivating moments that define the sports world. From intense
              action shots to behind-the-scenes glimpses, I aim to bring the
              spirit of sports to life through my lens. <br />
              <br />
              Whether it's on the field, court, or in the stadium, I thrive in
              the exhilarating atmosphere of sports events, always ready to
              freeze those split-second moments of victory or determination.
            </p>
          </div>
          <div className="column">
            <p>
              Feel free to explore my collection of photos and videos, which
              highlight not only my technical skills but also my passion for
              storytelling and visual artistry. <br />
            </p>
          </div>
          <div className="column">
            <h1>Let's talk...</h1>
            <h4>
              Email me at:{" "}
              <a href="mailto:dunnp2019@gmail.com">dunnp2019@gmail.com</a>
              <br />
              <em>Business Inquiries Only</em>
            </h4>
            <p>
              <br></br>Thank you for visiting, and I hope my work resonates with
              you as much as it does with me. Let's celebrate the power of
              sports together!
            </p>
          </div>
        </div>
      </div>
      <div className="about-contact-section"></div>
    </>
  );
}
