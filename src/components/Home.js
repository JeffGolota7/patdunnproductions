import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { InstagramEmbed } from "react-social-media-embed";
import Carousel from "../components/Carousel";
import "../styles/home.css";

export default function Home() {
  const igPosts = [
    "https://www.instagram.com/p/Cj1PAqFpub9/?ig_rid=d4d92608-9a73-40d2-8029-31a862927098",
    "https://www.instagram.com/reel/CkwYERHA_wk/?utm_source=ig_embed&ig_rid=c5e80245-3d53-4080-a9af-c1aa05daddb6",
    "https://www.instagram.com/p/CkQ1-f_LvVA/?utm_source=ig_embed&ig_rid=cf462496-1a38-485b-a14e-a7751850fd3c",
    "https://www.instagram.com/p/ClMachPpkyj/?utm_source=ig_embed&ig_rid=f15fa27c-0bf0-4d58-9a84-7c1d1a391d4a",
    "https://www.instagram.com/p/CnzsHfUJ1i0/?utm_source=ig_embed&ig_rid=c5e736a2-1ff6-4e76-a959-696ef192d02b",
    "https://www.instagram.com/p/Cpf0cnEuJgX/?utm_source=ig_embed&ig_rid=fd3569d3-9af8-4dc1-ad67-03cf2ac7bd41",
  ];

  return (
    <>
      <div className="hero-section">
        <div className="hero-background"></div>
        <div className="overlay"></div>
        <h2 className="hero-text">-- Pat Dunn Productions --</h2>
        <Link to="/gallery" className="hero-cta">
          <span>View My Work</span>
        </Link>
      </div>
      <div className="videos-section">
        <Carousel />
      </div>
      <div className="info-section">
        <div className="info-section-content">
          <img
            className="pat-smiling"
            src={process.env.PUBLIC_URL + "/pat-smiling.jpg"}
            alt="Pat Smiling"
          />
          <div className="info">
            <h2 className="about-heading">About Me</h2>
            <p>
              Welcome to my portfolio! I'm a passionate and dedicated sports
              photographer and videographer based in Greater Boston.
            </p>
            <button className="contact-btn">Contact Me</button>
          </div>
        </div>
      </div>
      <div className="tagged-section">
        <h1 className="tagged-header">My Work In Action</h1>
        <div className="tagged">
          <div className="tagged-posts">
            {igPosts &&
              igPosts !== [] &&
              igPosts.map((postURL) => {
                return <InstagramEmbed url={postURL} className="post" />;
              })}
          </div>
        </div>
      </div>
    </>
  );
}
