import React from "react";

//images
import maps from "../assets/maps.png";
import search from "../assets/search.png";


import "../styles/About.css";


function About() {
  return (
  <>
    <h1 class="title">Here is how we can help!</h1>

    <div class="products-container">
    <div class="about-image">
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
   <h1>
       Meet the Team!
      </h1>

 </>
  );
  }

export default About;
