import React from "react";
import { Data } from "../data/data";
import RecipeItem from "../components/RecipeItem";
import "../styles/Recipes.css"; 

function Recipes() {
  return (
    <div className="recipe">
      <h1 className="recipeTitle">Recipes</h1>
      <div className="recipeList">
        {RecipeItem.map((recipeItem, key) => {
          return (
            <RecipeItem
              key={key}
              image={recipeItem.image}
              name={recipeItem.name}
              info={recipeItem.info}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Recipes;
