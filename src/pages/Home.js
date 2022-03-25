import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/Homepage_Vector.svg";
import "../styles/Home.css"; 


function Home() {
  return (
    <div className="banner" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">


      <h1 style={{ fontWeight: "bold" }}> Making the Most of what you Have </h1>
        <div className="homePageTextContainer">
          <p>We are here to help you find ways to use all the ingredients you 
            have on hand. We believe that mindful meal planning is not confined
            to your kitchen. Join us on a journey towards a Full Plate - both for yourself
            and for others</p>
        </div>
          <Link to="/Recipes">
          <button> Get Started</button>
          </Link>
      </div>
    </div>
  );
}

export default Home;
