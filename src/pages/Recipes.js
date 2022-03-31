import { useState } from "react";
import Axios from "axios";
import RecipeTile from "../components/RecipeTile";

//styles
import "../styles/Recipes.css";
import  cookingPot  from '../assets/cookingPot.svg';

function Recipes() {
  const YOUR_APP_ID = "17d531d8";
  const YOUR_APP_KEY = "4250479211cf86c75ca61a0789ddd4f4";
  const [query, setQuery] = useState("");
  const [healthLabel, setHealthLabel] = useState("vegetarian");
  const [recipes, setRecipes] = useState([]);

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;

  const getRecipeInfo = async () => {
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data.hits);
  };

  const onSubmit = (e) => {
    e.preventDefault(); //this will prevent page from reloading.
    getRecipeInfo();
  };

  return (
    <>
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
          onChange={(e) => {setQuery(e.target.value);
        <input type = "submit"
               value = "Get Recipe"
               className = "app__submit" />
          }}
        />
      </form>
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