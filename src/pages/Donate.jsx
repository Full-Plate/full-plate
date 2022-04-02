import React from 'react'


import "../styles/Donate.css";

import orginfo from '../assets/orginfo.png';
import fridgesearch from '../assets/fridgesearch.png';
import citymap from '../assets/citymap.png';

export default function Donate() {
  return (
    <div className="wrapper">
    <div className="donateContainer">
      <h1 className="donate-header">Why Donate?</h1>
       <div className="donate-text">
         <p> On average, we throw away <strong>103</strong> pounds of food
          each year. <strong>103</strong> pounds is about a <stong>MONTH</stong> of meals for another person </p>
          <p className = "donate-text" > Be it Suggestions, feedback, business opportunities or
             even how our recipes made you hungry, we would love to hear from you!</p>
             </div> 
             < div className = "orginfoimg">
              <img src={orginfo} alt="cityfridgephoto" />
              </div>
              <h2>Find your nearest fridge below?</h2>
              <img className="citymapimg" src={citymap} alt="cityfridgemap" />
              <img className="fridgesearchimg" src={fridgesearch} alt="cityfridgesearchplaceholder" />
      </div>
      </div>
  )
}

