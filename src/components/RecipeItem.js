import React from "react";

function RecipeItem({ image, name, info }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> {info} </p>
    </div>
  );
}

export default RecipeItem;
