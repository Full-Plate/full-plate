
import React from "react";

import "../styles/RecipeTile.css";

function RecipeTile({ recipe }) {
  return (
    
    recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
      
      <article className="recipeTile">
       < div className = 'img-container' >
        <img
          className="recipeTile__image"
          src={recipe["recipe"]["image"]}
          alt="tile-image"
          onClick={() => window.open(recipe["recipe"]["url"])}
        /> </div >
        <div className='recipe-footer'>
        <p className="recipeTile__name">{recipe["recipe"]["label"]}</p>
        </div>
      </article>
      
    )
    
  );
}

export default RecipeTile;