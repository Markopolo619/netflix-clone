import React from "react";
import TV from "../images/TV.png"
import Vid from "../images/tv-video.m4v"

const First_Section = () => {
  return (
    <div className="first_section">
      <div className="first_section_text">
        <h2 id="first_section_heading">Enjoy on your TV</h2>
        <h4 id="first_section_h4">
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.
        </h4>
      </div>
      <img id="tv" src={TV} alt="TV" />
    </div>
  );
};

export default First_Section;