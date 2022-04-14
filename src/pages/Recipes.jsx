import React, {useEffect, useState, useContext } from "react";
import { RecipeContext } from "../Context/RecipeContext";
import RecipeTile from "../components/RecipeTile";
//styles
import "../styles/Recipes.css";
import  cookingPot  from '../assets/cookingPot.svg';
const apiKey = `${process.env.REACT_APP_RECIPE_API_KEY}`;
export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const {query, setQuery, time} = useContext(
    RecipeContext
  );

  const onSubmit = (e) => {
    e.preventDefault(); //this will prevent page from reloading.
    fetchRecipes();
   
  };
  function handleQueryChange(event) {
    setQuery(event.target.value);
  }
  const fetchRecipes = () => {
    fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=604f2f74ba9e4a49966b3f1d094c498e&number=20&query=${query}&addRecipeInformation=true&includeIngredients=true&tags=true&instructionsRequired=true&maxReadyTime=${time}`
    )
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };
    return (
    <>
    <div className="wrapper">
      <div className="recipesHeader">
        <img className="cookingpot" src={cookingPot} alt="icon" />
        <div className="searchHeader">
          <h1 className="pageTitle">Recipes</h1>
            <form class="search" onSubmit={onSubmit}>
              <input className="app__input"
                  type="text"
                  placeholder="What´s left in my fridge?"
                  autoComplete="Off"
                  value={query}
                  onChange={handleQueryChange}
                  onClick={(e) => {setQuery(e.target.value);
                <input className = "app__submit"
                       type = "submit"
                       value = "Get Recipes"
                       onClick={fetchRecipes}/>
                  }} />
            </form>
            <p className="Search-Options">Psst, you can add up to 5 ingredients! Ex:Cheese, pasta, bread...etc</p>
          </div>
        </div>
        <div className="app__recipes">
           {recipes.map((recipe) => {
             console.log(recipe)
            return <RecipeTile recipe={recipe} />    
})}
          </div>
    </div>
    </>
     );
}