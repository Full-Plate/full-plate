import React from 'react'

//components
import RecipeTile from "../components/RecipeTile";
import Api from "../components/Api";

//styles
import "../styles/Recipes.css";
import cookingPot from '../assets/cookingPot.svg';



function Recipes() {
  return (
    <>
    <div className="recipesHeader">
    <img className="cookingpot" src={cookingPot} alt="icon" />
    <div className="searchHeader">
     <h1 className="pageTitle">Recipes</h1>
   <div className="RecipeService">
      {recipes.map((form) => {
          return <Api form={form} />;
           })}
   </div>
      </div>
      </div>
      <div className="app__recipes">
        {recipes.map((recipe) => {
          return <RecipeTile recipe={recipe} />;
           })}
         </div>
  
  </>
  
  );
}

export default Recipes;