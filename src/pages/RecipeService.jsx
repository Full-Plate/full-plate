import { useState } from "react";
import Axios from "axios";
import RecipeTile from "../components/RecipeTile";



function RecipeService() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [readyInMinutes, setreadyInMinutes] = useState([])

function onChange(e) {
    setTitle(e.target.value)
}
function getRecipeData() {

}
  
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
    </div>
  
  </>
  
  );
}

export default RecipeService;