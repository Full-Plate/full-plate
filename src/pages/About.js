import React from "react";

//images
import maps from "../assets/maps.png";
import search from "../assets/search.png";
import team from "../assets/team.jpeg";
import kristtelle from "../assets/kristtelle.png";
import delight from "../assets/delight.png";
<<<<<<< HEAD
import elleta from "../assets/elleta.png";

=======
>>>>>>> 5286ea5e6b34c09109480e651ceb092bf714f945

import "../styles/About.css";


function About() {
  return (
  <>
    <h1 className="about-title">Here is how we can help!</h1>
      <div className="products-container">
        <div className="about-image">
          <img src={search} alt="search.png" />
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
          <img src={kristtelle} alt="kristtelle" />
<<<<<<< HEAD
           <div className="name">Kristelle</div> 
          <div className="jobTile">Product Manager</div>
          <div ClassName="contact-icons"></div>
            <p>Hi! I am kristtelle. At my current job, I work with customers inside and outside of the company to help them with their problems. I have enjoyed it so much that I decided to fully plunge into creating products that truly benefit customers. Food is a big part of my life, so we are excited to share Full Plate with everyone!
=======
            <p>Sharing is caring. Here is an alternative for your 
            unused ingredients so you can donate to hep your community.
>>>>>>> 5286ea5e6b34c09109480e651ceb092bf714f945
          </p>
        </div>
         <div className="team-image-card">
          <img src={delight} alt="delight" />
<<<<<<< HEAD
           <div className="name">Delight</div> 
          <div className="jobTile">Product Designer</div>
          <div ClassName="contact-icons"></div>
            <p>Hi! I am Delight and I am delighted to meet you! Coming from a service background, there are 2 things in this world that excite me. Figuring out solutions to problems through experience design and food. What a better project to combine them, than Full Plate. 
=======
            <p>Sharing is caring. Here is an alternative for your 
            unused ingredients so you can donate to hep your community.
>>>>>>> 5286ea5e6b34c09109480e651ceb092bf714f945
          </p>
        </div>
         <div className="team-image-card">
          <img src={elleta} alt="elleta.png" />
          <div className="name">Elleta</div> 
          <div className="jobTile">Software Developer</div>
          <div ClassName="contact-icons"></div>
            < p > Hi! I am Elleta. I am a Front - end Software Developer with 1 - year of experience who is adept in bringing forth expertise in the design, installation, testing, and maintenance of software systems.I am proficient in various platforms, languages, and embedded systems.Experienced with the latest cutting - edge development tools and procedures.Able to effectively self - manage during independent projects, as well as collaborate as part of a productive team.I am an active and curious individual with a passion for learning and self-improvement.
          </p>
        </div>
         <div className="team-image-card">
          <img src={team} alt="team-image" />
           <div className="name">Sean</div> 
          <div className="jobTile">Software Developer</div>
          < div ClassName = "contact-icons"> </div>
            <p>Hi! Im Sean .. I have no opinions.
          </p>
        </div>
     </div> 
 </>
  );
  }

export default About;
