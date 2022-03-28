
import React from "react";

import "../styles/RecipeTile.css";

function RecipeTile({ recipe }) {
  return (
    
    recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
      <div className="card-container1">
      <div className="card">
			<img
          className="recipeTile-image"
          src={recipe["recipe"]["image"]}
          alt="tile-image"
          onClick={() => window.open(recipe["recipe"]["url"])}
        />
        <div className="card-body">
			<h2 className="card-title ">
				<p>{recipe["recipe"]["label"]}</p>
			</h2>
		</div>
		</div>
      </div>




    )
    
  );
}

export default RecipeTile;