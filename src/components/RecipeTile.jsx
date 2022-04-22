import React from "react";
import { useState } from "react";


//component
import {Modal} from "./modal/Modal";

import "../styles/RecipeTile.css";



function RecipeTile({ recipe }) {
  const [showModal, setShowModal] = useState(false)
 
  const openModal = () => {
     setShowModal(prev => !prev)
 }
  return (
    recipe.image && (
      <div className = "tile-card-container1" >
        <div className = "tile-card" >
          
          <img
              src = {recipe.image}
              alt = {recipe.image}
              onClick = {openModal}/> 
              <Modal recipe={recipe} showModal={showModal} setShowModal={setShowModal} />
            <div className="tile-card-text" onClick = {openModal}>
              <p className="recipe-title"> {recipe.title} </p> 
            <p className="recipe-timer"> {recipe.readyInMinutes} Mins </p> 
              </div> 
            
        </div> 
      </div> 
    )
  );
}



export default RecipeTile;