import React, {useState } from "react";
import RecipeTile from "../components/RecipeTile";

//styles
import "../styles/Recipes.css";
import  cookingPot  from '../assets/cookingPot.svg';

function Recipes() {
   const [recipes, setRecipes] = useState([]);
   const { query, setQuery, time} = useState();



  function search(event) {
    event.preventDefault();
  }

  function handleQueryChange(event) {
    setQuery(event.target.value);
  }

  const getRecipes = () => {
    fetch(
   `https://api.spoonacular.com/recipes/complexSearch?apiKey=8852827ae2294be48706dc188cc2232c&number=20&query=${query}&addRecipeInformation=true&includeIngredients=true&instructionsRequired=true&tags=true&maxReadyTime=${time}`
    )

   .then((response) => response.json())
      .then((data) => {
        setRecipes(data.results);
        console.log(recipes)
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
            <form class="search" onSubmit={search}>
              <input
                  type="text"
                  placeholder="What´s left in my fridge?"
                  autoComplete="Off"
                  className="app__input"
                  value={query}
                  onChange={handleQueryChange}
                  onClick={(e) => {setQuery(e.target.value);
                <input type = "submit"
                      value = "Get Recipes"
                      className = "app__submit" />
                  }} />
            </form>
          </div>
        </div>
        <div className="app__recipes">
          {getRecipes.map((recipes) => {
            return <RecipeTile recipes={recipes} />;
            })}
          </div>
    </div>
  
  </>
  
  );
}

export default Recipes;