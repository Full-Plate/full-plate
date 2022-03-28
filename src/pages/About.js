import React from "react";

//images
import maps from "../assets/maps.png";
import search from "../assets/search.png";
import team from "../assets/team.jpeg";

import "../styles/About.css";


function About() {
  return (
  <>
    <h1 className="about-title">Here is how we can help!</h1>
      <div className="products-container">
        <div className="about-image">
          <img src={search} alt="search-image" />
            <p>At Full Plate, we curate meal ideas based on 
              what you already have on hand, so you can spend 
              your time and energy savoring rather than stressing.
            </p>
      </div>
        < div class = "about-image" >
         <img src={maps} alt="maps-image" />
          <p>Sharing is caring. Here is an alternative for your 
            unused ingredients so you can donate to hep your community.
          </p>
        </div>
  </div>
   < h2 className = "team-card" >Meet the Team!</h2>
      <div className="team-card-container">
        <div className="team-image-card">
          <img src={team} alt="team-image" />
            <p>Sharing is caring. Here is an alternative for your 
            unused ingredients so you can donate to hep your community.
          </p>
        </div>
         <div className="team-image-card">
          <img src={team} alt="team-image" />
            <p>Sharing is caring. Here is an alternative for your 
            unused ingredients so you can donate to hep your community.
          </p>
        </div>
         <div className="team-image-card">
          <img src={team} alt="team-image" />
            <p>Sharing is caring. Here is an alternative for your 
            unused ingredients so you can donate to hep your community.
          </p>
        </div>
         <div className="team-image-card">
          <img src={team} alt="team-image" />
            <p>Sharing is caring. Here is an alternative for your 
            unused ingredients so you can donate to hep your community.
          </p>
        </div>
     </div> 
 </>
  );
  }

export default About;
