import React from "react";
import { LinkedIn } from "@mui/icons-material";


//images
import maps from "../assets/maps.png";
import search from "../assets/search.png";
import kristtelle from "../assets/kristtelle.png";
import delight from "../assets/delight.png";
import elleta from "../assets/elleta.png";
import sean from "../assets/sean.png";
import linkedin from "../assets/icons/linkedin.png";
import mail from "../assets/icons/mail.png"

import "../styles/About.css";



function About() {
  return (
  <>
  <div className="wrapper">
    <h1 className="about-title">Here's how we can help</h1>
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
  </div>
  <div className="wrapper">
   < h2 className = "team-card" >Meet the Team</h2>
      
      <div className="team-card-container">
        <div className="team-image-card">
         
          <div className="leftTeamContainer">
          <img className="headshot" src={kristtelle} alt="kristtelle" />
           <h3 >Kristelle</h3> 
          <h3 className="role"> Product Manager</h3>
          <ul className="social">
          <li>
          <a href="mailto:kgumaru2@gmail.com" target="_blank"><img className="icon" src={mail} alt="" />
              <span>E-mail</span></a> 
            </li>
            <li>
            <a href="https://www.linkedin.com/in/kristelle-gumaru/" target="_blank"><img className="icon" src={linkedin}/>
             <span>Linkedin</span></a>
            </li>
          </ul>
          </div>
          
          <div className="rightTeamContainer">
          <p>Hi! I am kristtelle. At my current job, I work with customers inside and outside of the company to help them with their problems. I have enjoyed it so much that I decided to fully plunge into creating products that truly benefit customers. Food is a big part of my life, so we are excited to share Full Plate with everyone!</p>
          </div>
        </div>
         <div className="team-image-card">
           <div className="leftTeamContainer">
          <img className="headshot" src={delight} alt="delight"/>
           <h3 >Delight</h3> 
          <h3 className="role">Product Designer</h3>
          <ul className="social">
          <li>
          <a href="mailto:ngdelight.ux@gmail.com" target="_blank"> <img className="icon" src={mail} alt="" />
              <span>E-mail</span></a> 
            </li>
            <li>
            <a href="https://www.linkedin.com/in/ngdelight/" target="_blank"><img className="icon" src={linkedin}/>
             <span>Linkedin</span></a>
            </li>
          </ul>
          </div>
            <div className="rightTeamContainer">
            <p>Hi! I am Delight and I am delighted to meet you! Coming from a service background, there are 2 things in this world that excite me. Figuring out solutions to problems through experience design and food. What a better project to combine them, than Full Plate. 
          </p>
          </div>
        </div>
         <div className="team-image-card">
           <div className="leftTeamContainer">
          <img className="headshot" src={elleta} alt="elleta.png" />
          <h3>Elleta</h3> 
          <h3 className="role">Software Developer</h3>
          <ul className="social">
          <li>
          <a href="mailto:elletamc@gmail.com" target="_blank"><img className="icon" src={mail} alt="" />
              <span>E-mail</span></a>
            </li>
            <li>
            <a href="https://www.linkedin.com/in/elleta-mcdaniel-7527172a/" target="_blank"><img className="icon" src={linkedin}/>
             <span>Linkedin</span></a> 
            </li>
          </ul>
          </div>
            <div className="rightTeamContainer">
            < p > Hi! I am Elleta. I am a Front - end Software Developer with 1 - year of experience who is adept in bringing forth expertise in the design, installation, testing, and maintenance of software systems. I am proficient in various platforms, languages, and embedded systems.Experienced with the latest cutting - edge development tools and procedures. Able to effectively self - manage during independent projects, as well as collaborate as part of a productive team.I am an active and curious individual with a passion for learning and self-improvement.
          </p>
          </div>
        </div>
         <div className="team-image-card">

           <div className="leftTeamContainer">
          <img className="headshot" src={sean} alt="team-image" />
           <h3 className="name">Sean</h3> 
          <h3 className="role">Software Developer</h3>
          <ul className="social">
          <li>
          <a href="mailto:sean.sipus@gmail.com" target="_blank"><img className="icon" src={mail} alt="" />
              <span>E-mail</span></a> 
            </li>
            <li>
            <a href="https://www.linkedin.com/in/sean-sipus/" target="_blank"><img className="icon" src={linkedin}/>
             <span>Linkedin</span></a>
            </li>
          </ul>
          </div>
          <div className="rightTeamContainer">
          <p>Hi! Im Sean. A Front-end Web Developer based out of Markham, Ontario, with a diverse background as an Electrician, English teacher abroad in Japan, and Property Management. As a Juno College Web Development Immersive Bootcamp grad, I learned to turn my passions towards creating meaningful websites and web applications by tapping into my creative side.
          </p>
          </div>
            
        </div>
      </div> 
     </div> {/* End of wrapper div #2 */}
 </>
  );
  }

export default About;
