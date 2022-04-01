import React from "react";
import MultiplePizzas from "../assets/masala.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          At Full Plate, we curate meal ideas based on what you already have on hand, so you can spend your time and energy savoring rather than stressing.Since delicious food is meant to be shared, we’ ve added a bonus route
          for unused ingredients by showing where you can donate to help fight food insecurity in the community.

        </p>
      </div>
    </div>
  );
}

export default About;
