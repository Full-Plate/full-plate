import React from "react";
import { useState } from "react";


//component
import {Modal} from "../components/modal/Modal";

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
          <img className = "tile-recipeTile-image"
              src = {recipe.image}
              alt = {recipe.image}
              onClick = {openModal}/> 
              <Modal recipe={recipe} showModal={showModal} setShowModal={setShowModal} />
        <div className = "tile-card-body" >
          <h2 className = "tile-card-title " >
            <p> {recipe.title} </p> 
            <p> {recipe.readyInMinutes} Mins </p> 
          </h2> 
        </div> 
      </div> 
    </div>
    )
  );
}



export default RecipeTile;