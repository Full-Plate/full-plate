/*import React, { useState,  } from "react";
import {Link} from 'react-router-dom';
import { RecipeContext } from "../Context/RecipeContext";
import 'animate.css';
import "../styles/RecipeTile.css";


function SaveFavoritesService(props) {
//favorites local storage
  const [favouritesState, setFavouritesState] = useState({
        recipe: [],
    });

};

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
                </div>
            </div>
        </div>
    );
}


export default SaveFavoritesService*/