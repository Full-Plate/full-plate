import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css"; 

import homefood  from "../assets/homefood.png";


function Home() {
  return (
   <>
    <div className="banner"></div>
    <div className="wrapper">
      <div className = "mainHomeContainer" >
        <div className="homePageTextContainer">
          
          <div class="leftHomeContainer">
            <h1 className="hometitle"> Making the Most of what you Have </h1>
            <p className="discritpion">We are here to help you find ways to use all the ingredients you 
            have on hand. We believe that mindful meal planning is not confined
            to your kitchen. Join us on a journey towards a Full Plate - both for yourself
            and for others</p>
            <Link className="button" to="/Recipes">
            <button> Get Started</button>
            </Link>
            </div>
          </div>
          <div class = "rightHomeContainer" >
            <img className="homefood" src={homefood} alt="homefood" />
          </div>  
      </div> 
     </div>{/*/ end of wrapper div */}
      </>
  );
}

export default Home;
