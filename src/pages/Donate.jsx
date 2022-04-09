import "../styles/Donate.css";

import fridge from '../assets/fridge.png';
import counter from "../assets/counter.png";
import orginfo from "../assets/orginfo.png";

export default function Donate() {
  return (
    <div className="wrapper">
      <div className="donateContainer">
        <div className="donateText">
          <h1> Why Donate? </h1>
          <p className="topText"> On average, we throw away 103 pounds of food
              each year. 103 pounds is about a month of meals for another person </p>
          <p> A better question: Why <span>not</span> donate</p>
        </div>
        <img src={orginfo} alt="cityfridgeorgimage" />
      </div>
      <div className = "orglink-container">  
        <div className="fridgeContainer">
          <h2>Find your nearest fridge today!</h2>
          <p className = "fridgecount-text" > Current NYC Fridge Count</p>
          <img src={counter} alt="cityfridgephoto" />
          <button className="donatebutton" onClick={() => window.open("httpnycfridge.com/")}> Take me there now</button>
        </div>
        <div className ="fridgeImage">
         <img className="fridge" src={fridge} alt="cityfridgeimage"/>
        </div>
      </div>
    </div>
  )
}