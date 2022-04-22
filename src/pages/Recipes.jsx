import React, { useState, useContext, Fragment } from "react";
import { RecipeContext } from "../Context/RecipeContext";
import { BsFillHeartFill } from 'react-icons/bs';
import { Link } from "react-router-dom";
import RecipeTile from "../components/RecipeTile";
//styles
import "../styles/Recipes.css";
import  cookingPot  from '../assets/cookingPot.svg';
const apiKey = `${process.env.REACT_APP_RECIPE_API_KEY}`;


export default function Recipes() {
  const [errorMessage, setErrorMessage] = useState('');
  const [recipes, setRecipes] = useState([]);
  const {query, setQuery, time} = useContext(
    RecipeContext
  );


  const onSubmit = (e) => {
    e.preventDefault(); //this will prevent page from reloading.
    fetchRecipes(recipes)
//error message
   /* if (recipes.length === 0 ) {
      setErrorMessage("Oh No! We cound not find anything in out cookbookds for that. Please try another combination."
        );
    } else {
      setErrorMessage('');
    }*/

  };

  function handleQueryChange(event) {
    setQuery(event.target.value);
  }
   
  const fetchRecipes = () => {
    fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=604f2f74ba9e4a49966b3f1d094c498e&number=20&query=${query}&addRecipeInformation=true&includeIngredients=true&tags=true&instructionsRequired=true&maxReadyTime=${time}&fillIngredients=true`
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
        <div className="potContainer">
        <img className="cookingpot" src={cookingPot} alt="icon" />
        <Fragment>
      <div className="favourties-button">
          <Link to="/Favourites">       
            <button className="buttonText"> <BsFillHeartFill
             style={{
              right: '20px',
            
                }}
              size="25px"
              color="red"
              paddingLeft= "5px"
          /> My Favourites</button> </Link>
         
         </div>
        </Fragment>
        </div>
       
        <div className="searchHeader">
          <h1 className="pageTitle">Recipes</h1>
            <form class="search" onSubmit={onSubmit}>
              <label htmlFor="">
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
                  <button />
                  </label>
            </form>
            <p className="Search-Options">Psst, you can add up to 5 ingredients! Ex: Cheese, pasta, bread...etc</p>
          </div>
        </div>
         
        <div className="app__recipes">
           {recipes.map((recipe) => {
             console.log(recipe)
            return <RecipeTile recipe={recipe} />    
})}
   
     </div>
     {errorMessage && (<p className="noRecipeMessage">{errorMessage}</p>)}
    </div>
    </>
     );
}