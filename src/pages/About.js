import React from "react";

//images
import maps from "../assets/maps.png";
import search from "../assets/search.png";


import "../styles/About.css";


function About() {
  return (
  <div class="container-about">
    <h1>
       Here is how we can help!
      </h1>
  <div class="card-about">
    <div class="card-header-about-image">
       <img class="search" src={search} alt="search-image" />
    </div>
    <div class="card-body-about">
      <p>
        At Full Plate, we curate meal ideas based on what you already have on hand, so you can spend your time and energy savoring rather than stressing.
      </p>
      </div>
      
      <div class="card-about-image">
         <img class="maps" src={maps} alt="maps-image" />
       < div class = "card-body-about" >
          <p>
        Sharing is caring. Here is an alternative for your unused ingredients so you can donate to hep your community.
      </p>
        </div>
     
    </div>
  </div>
   <h1>
       Meet the Team!
      </h1>
  </div>
  );
  }

export default About;
