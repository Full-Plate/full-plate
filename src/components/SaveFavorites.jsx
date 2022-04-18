import React from 'react'

function SaveFavorites() {
//favorites local storage
  const [favouritesState, setFavouritesState] = useState({
        recipes: [],
    });
  
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



  return (
    <div>SaveFavorites</div>
  )
}

export default SaveFavorites