
import React from "react";

import "../styles/RecipeTile.css";

function RecipeTile({ recipe }) {
  return (
    
    recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
      <div className="tile-card-container1">
      <div className="tile-card">
			<img
          className="tile-recipeTile-image"
          src={recipe["recipe"]["image"]}
          alt="tile-image"
          onClick={() => window.open(recipe["recipe"]["url"])}
        />
        <div className="tile-card-body">
			<h2 className="tile-card-title ">
				<p>{recipe["recipe"]["label"]}</p>
			</h2>
		</div>
		</div>
      </div>




    )
    
  );
}

export default RecipeTile;