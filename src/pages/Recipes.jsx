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


  useEffect (() => {
    fetchRecipes()
  }, [])
  useEffect(() => {
    fetchRecipes();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault(); //this will prevent page from reloading.
    fetchRecipes();
   
  };

  function handleQueryChange(event) {
    setQuery(event.target.value);
  }

  const fetchRecipes = () => {
    fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=8852827ae2294be48706dc188cc2232c&number=20&query=${query}&addRecipeInformation=true&includeIngredients=true&instructionsRequired=true&tags=true&maxReadyTime=${time}`
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
            <p className="Search-Options">Psst, you can add up to 5 ingredients!</p>
          </div>
        </div>
        <div className="app__recipes">
           {recipes.map((recipes) => {
            <RecipeTile recipes={recipes} />
            console.log(recipes)
            ;
            })}
          </div>
    </div>
  
  </>
  
  );
}
