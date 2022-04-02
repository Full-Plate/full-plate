import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/banner.png";
import "../styles/Home.css"; 

import homefood  from "../assets/homefood.png";


function Home() {
  return (
   <>
   < div className = "headerContainer" >
    <div className="banner" style={{ backgroundImage: `url(${BannerImage})` }}></div>
      <div className="homePageTextContainer">
        <div class="row1">
          <div class="column1">
            <h1 className="hometitle"> Making the Most of what you Have </h1>
          <p className="discritpion">We are here to help you find ways to use all the ingredients you 
            have on hand. We believe that mindful meal planning is not confined
            to your kitchen. Join us on a journey towards a Full Plate - both for yourself
            and for others</p>
             <Link className="button" to="/Recipes">
          <button> Get Started</button>
          </Link>
            </div>
            < div class = "column2" >
            <img className="homefood" src={homefood} alt="homefood" />
            </div>
        </div>
      </div>
     </div>
      </>
  );
}

export default Home;
