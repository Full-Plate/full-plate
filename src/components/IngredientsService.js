import React, {useState,useContext} from "react";
import { RecipeContext } from "../Context/RecipeContext";
import {Modal} from "../components/modal/Modal";
    
const apiKey = `${process.env.REACT_APP_RECIPE_API_KEY}`;


export default function IngredientsService() {
    const {
        id,
        ingredients
    } = useContext(
        RecipeContext
    );

const fetchIngredients = () => {
            fetch(
                    `https://api.spoonacular.com/food/ingredients${id}?information?amount=number&apiKey=604f2f74ba9e4a49966b3f1d094c498e`
                )
                .then((response) => response.json())
                .then((data) => {
                    fetchIngredients(data.results);
                    console.log(ingredients)

                })
                .catch((error) => {
                    console.log(error);
                    });
                    };
return (
     ingredients.map((ingredients) => {
        console.log(ingredients);
        return <Modal ingredients = {ingredients} />
     })
          );
          }