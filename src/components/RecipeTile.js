
import React from "react";

import "../styles/RecipeTile.css";

function RecipeTile({ recipe }) {
  return (
    
    recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
      <div class="grid-container">
      <div class="card">
		  <div class="card-img">
			<img
          className="recipeTile__image"
          src={recipe["recipe"]["image"]}
          alt="tile-image"
          onClick={() => window.open(recipe["recipe"]["url"])}
        /> </div >
        <div class="card-body">
			<h2 class="card-title ">
				<p className="recipeTile__name">{recipe["recipe"]["label"]}</p>
			</h2>
		</div>
		
		</div>
	</div>



    )
    
  );
}

export default RecipeTile;