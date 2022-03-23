import React from "react";

function RecipeTile({ image, name, info }) {
  return (
    <div className="RecipeTile">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> {info} </p>
    </div>
  );
}

export default RecipeTile;
