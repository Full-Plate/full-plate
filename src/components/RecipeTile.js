import React from "react";
import { useState } from "react";


//component
import {Modal} from "../components/modal/Modal";

import "../styles/RecipeTile.css";



function RecipeTile({recipes}) {
  const [showModal, setShowModal] = useState(false)
 
 
  const openModal = () => {
     setShowModal(prev => !prev)
 }
  return (
    recipes.recipes.image && ( 
      <div className = "tile-card-container1" >
        <div className = "tile-card" >
          <img className = "tile-recipeTile-image"
              src = {recipes.results.image}
              alt = {recipes.results.image}
              onClick = {openModal}/> 
              <Modal recipes={recipes} showModal={showModal} setShowModal={setShowModal} />
        <div className = "tile-card-body" >
          <h2 className = "tile-card-title " >
            <p> {recipes.recipes.title} </p> 
            <p> {recipes.recipes.maxReadyTime} Mins </p> 
          </h2> 
        </div> 
      </div> 
    </div>
    )
  );
}



export default RecipeTile;