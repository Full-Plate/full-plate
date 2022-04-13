import { useState } from "react";
import Axios from "axios";
import RecipeTile from "../components/RecipeTile";

//styles
import "../styles/Recipes.css";
import  cookingPot  from '../assets/cookingPot.svg';

function Recipes() {
  const [query, setQuery] = useState("");
  const [recipe, setRecipe] = useState([])
  const [cookingTime, setCookingTime] = useState();
  const [ingredients, setIngredients] = useState();
  const [recipeSummary, setRecipeSummary] = useState();

const axios = require("axios");

const options = {
  method: 'GET',
  URL:
   `https://api.spoonacular.com/recipes/complexSearch?number=12&apiKey=8852827ae2294be48706dc188cc2232c&{query}&includeIngredients=true&instructionsRequired=true&tags=true&maxReadyTime=true`
};

 const getRecipeData = async () => {
    var result = await Axios.get(URL);
    setRecipe(result.data.hits);
 
  };
    const onSubmit = (e) => {
    e.preventDefault(); //this will prevent page from reloading.
    getRecipeData();
    console.log(getRecipeData);
  };


  axios.request(options).then(function (response) {
	console.log(response.data);
  }).catch(function (error) {
	console.error(error);
  });

  return (
    <>
    <div className="wrapper">
      <div className="recipesHeader">
        <img className="cookingpot" src={cookingPot} alt="icon" />
        <div className="searchHeader">
          <h1 className="pageTitle">Recipes</h1>
            <form class="search" onSubmit={onSubmit}>
              <input
                  type="text"
                  placeholder="What´s left in my fridge?"
                  autoComplete="Off"
                  className="app__input"
                  value={query}
                  onClick={(e) => {setQuery(e.target.value);
                <input type = "submit"
                      value = "Get Recipe"
                      className = "app__submit" />
                  }} />
            </form>
          </div>
        </div>
        <div className="app__recipes">
          {getRecipeData.map((recipe) => {
            return <RecipeTile recipe={recipe} />;
            })}
          </div>
    </div>
  
  </>
  
  );
}

export default Recipes;