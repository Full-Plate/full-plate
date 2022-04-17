import React, { useState, useContext } from "react";
import { RecipeContext } from "../Context/RecipeContext";
import RecipeTile from "../components/RecipeTile";
//styles
import "../styles/Favourites.css";
import  basket  from '../assets/basket.png';

const apiKey = `${process.env.REACT_APP_RECIPE_API_KEY}`;

export default function Favourites() {
  const [recipes, setRecipes] = useState([]);
  const [message, setMessage] = useState();
  const {query, setQuery, time} = useContext(
    RecipeContext
  );

  const onSubmit = (e) => {
    e.preventDefault(); //this will prevent page from reloading.
    fetchRecipes(recipes)

    if (recipes.length === 0 ) {
      setMessage("Oh No! We cound not find anything in out cookbookds for that. Please try another combination."
        );
    } else {
      setMessage('');
    }

  };

  function handleQueryChange(event) {
    setQuery(event.target.value);
  }
   
  const fetchRecipes = () => {
    fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=57e62f6e37d54fedb0dcc18c62a0187a&number=20&query=${query}&addRecipeInformation=true&includeIngredients=true&tags=true&instructionsRequired=true&maxReadyTime=${time}&fillIngredients=true`
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
        <img className="basket" src={basket} alt="basket-fav-icon" />
        <div className="searchHeader">
          <h1 className="pageTitle">My Favourites</h1>
            <form class="search" onSubmit={onSubmit}>
              <input className="app__input"
                  type="text"
                  placeholder="Search your saved recipes!"
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
          </div>
        </div>
        <div className="app__recipes">
           {recipes.map((recipe) => {
             console.log(recipe)
            return <RecipeTile recipe={recipe} />    
})}
     </div >
       <p className="noRecipeMessage">{message}</p>
    </div>
    </>
     );
}
