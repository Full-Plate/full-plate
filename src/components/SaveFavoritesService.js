/*import React, { useState, useEffect,  } from "react";
import {Link} from 'react-router-dom';
import { RecipeContext } from "../Context/RecipeContext";
import 'animate.css';
import "../styles/RecipeTile.css";


function SaveFavoritesService(props) {
//favorites local storage
  const [favouritesState, setFavouritesState] = useState({
        recipe: [],
    });

  const toogleFavouriteHandler = () => {
 
  setFavouritesState({
            recipe: newRecipes
        });

        localStorage.setItem('myFavourites', JSON.stringify(newRecipes));
    }
     
  useEffect(() => {
         setFavouritesState({
            recipe: getRecipesLocalStorage('myFavourites')
        });
      
       
 const getRecipesLocalStorage = (name) => {
        const recipe = JSON.parse(localStorage.getItem(name));
        return (recipe) ? recipe : [];
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



  return (
     <div className="">
            <div className="">
                {
                    props.chosenMode &&
                    <div className="">
                        <Link
                            type="button"
                            className=""
                            to={`/recipe/${props.recipe.id}/?recipe=chosen`}
                            onClick={ e => {
                                animationHandler(props.recipe)
                            }}
                        >
                        </Link>
                    </div>
                }
                {
                    !props.chosenMode &&
                    <div className="">
                        <button
                            type="button"
                            className=""
                            onClick={e => {
                                props.favourite(props.recipe)
                            }}
                        >
                            {favourite}
                        </button>
                    </div>
                }
                {
                    !props.chosenMode &&
                    <div className="">
                        <button
                            type="button"
                            className=""
                            onClick={e => {
                                props.chosen(props.recipe)
                            }}
                        >
                            {chosen}
                        </button>
                    </div>
                }
                <div className="">
                    <button
                        type="button"
                        className=""
                        onClick={props.close.bind(this, '', false)}
                        aria-label="Close"
                    >
                    </button>
                      <ModalRecipe
                    title={'A recipe'}
                    recipe={recipeState.recipe}
                    isLoading={recipeState.isLoading}
                    favourite={toogleFavouriteHandler}
                    favourites={favouritesState.recipes}
                    chosenList={chosenState.recipes}
                    chosen={toogleChosenHandler}
                    chosenMode={recipeState.chosenMode}
                    showFireworks={setShowFireworks}
                    setSelectedRecipe={selectedRecipe}
                />
                </div>
            </div>
        </div>
    );
}


export default SaveFavoritesService*/