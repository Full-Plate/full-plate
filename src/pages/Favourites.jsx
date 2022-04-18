import React, { useState, useEffect,  } from "react";
import { Link } from "react-router-dom";

//styles
import "../styles/Favourites.css";
import  basket  from '../assets/basket.png';


export default function Favourites({recipe, setFavouritesState, myFavourites}) {

   /* setFavouritesState({
        recipe:localStorage.setItem(myFavourites, JSON.stringify(recipe))
    });

    get({
        recipe:localStorage.getItem(myFavourites, JSON.stringify(recipe))
    });*/


    return (
    <>
    <div className="wrapper">
      <div className="recipesHeader">
        <img className="basket" src={basket} alt="basket-fav-icon" />
        <div className="searchHeader">
          <h1 className="pageTitle">My Favourites</h1>
            <form class="search" >
              <input className="app__input"
                  type="text"
                  placeholder="Search your saved recipes!"
                  autoComplete="Off"/>
            </form>
            <p className="noFavourites">Looks like you don´t have any favourites yet. Go to recipes and get started.</p>
             <Link  to="/Recipes">
            <button className="gotoRecipesButton"> Go to Recipes!</button>
            </Link>
              
         </div>
          </div>
       
        </div>
   
    </>
     );
}