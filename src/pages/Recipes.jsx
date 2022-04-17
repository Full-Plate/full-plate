import React, { useState, useContext, useEffect, Fragment } from "react";
import { RecipeContext } from "../Context/RecipeContext";
import { BsFillHeartFill } from 'react-icons/bs';
import { Link } from "react-router-dom";
import RecipeTile from "../components/RecipeTile";
//styles
import "../styles/Recipes.css";
import  cookingPot  from '../assets/cookingPot.svg';
const apiKey = `${process.env.REACT_APP_RECIPE_API_KEY}`;


export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [message, setMessage] = useState();
  const {query, setQuery, time} = useContext(
    RecipeContext
  );

  //favorites local storage
  const [firstVisitor, setFirstVisitor] = useState(false);
  const [favouritesState, setFavouritesState] = useState({
        recipes: [],
    });
  const [showFireworks, setShowFireworks] = useState(false);
  const [selectedRecipeState, setSelectedRecipeState] = useState({
        recipes: [],
    });
  const toogleFavouriteHandler = (recipe) => {
  const recipes = favouritesState.recipes;
  const found = recipes.find(r => r.id === recipe.id);
        let newRecipes = null;
                if (!found) {
            recipes.push(recipe);
            newRecipes = recipes;
          
        } else {
            newRecipes = recipes.filter(function (r) {
                return r.id !== recipe.id;
            });
           
        }

        setFavouritesState({
            recipes: newRecipes
        });

        localStorage.setItem('myFavourites', JSON.stringify(newRecipes));
    }
     
  useEffect(() => {
         setFavouritesState({
            recipes: getRecipesLocalStorage('myFavourites')
        });
        setSelectedRecipeState({
            recipes: getRecipesLocalStorage('mySelected')
        });
         if(!localStorage.getItem('firstVisitor')){
            setFirstVisitor (true)
            const utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
            localStorage.setItem('firstVisitor', utc );
        }
 const getRecipesLocalStorage = (name) => {
        const recipes = JSON.parse(localStorage.getItem(name));
        return (recipes) ? recipes : [];
    }
    }, []);
  const selectedRecipe = (recipe) => {
        const newRecipes = [];
        localStorage.setItem('mySelected', JSON.stringify(recipe));
        //update states
        setSelectedRecipeState({
            recipes: recipe
        });
    }

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
            <p className="Search-Options">Psst, you can add up to 5 ingredients! Ex: Cheese, pasta, bread...etc</p>
          </div>
        </div>
         
        <div className="app__recipes">
           {recipes.map((recipe) => {
             console.log(recipe)
            return <RecipeTile recipe={recipe} />    
})}
   <Fragment>
 <div className=" button-container">
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
         </div>
        </Fragment>
     </div >
      
       <p className="noRecipeMessage">{message}</p>
    </div>
    </>
     );
}