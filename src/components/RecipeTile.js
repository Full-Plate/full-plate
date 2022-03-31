
import React from "react";

import "../styles/RecipeTile.css";


  function RecipeTile ({ recipe }) {
  return (
    recipe.recipe.image && (
      <div className="tile-card-container1">
        <div className="tile-card">
          <img
            className="tile-recipeTile-image"
            src={recipe.recipe.image}
            alt={recipe.recipe.label}
            onClick={() => window.open(recipe.recipe.url)}
          />
          <div className="tile-card-body">
            <h2 className="tile-card-title ">
              <p>{recipe.recipe.label}</p>
            </h2>
          </div>
        </div>
      </div>
    )
  );
}

export default RecipeTile;