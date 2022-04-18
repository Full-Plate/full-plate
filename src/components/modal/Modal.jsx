import React, {Fragment, useState} from 'react';
import { MdClose } from 'react-icons/md';
import Heart from "react-animated-heart";


import "./Modal.css"

 
 export const Modal = ({ showModal, setShowModal, recipe }) => {
 const {
    extendedIngredients,
    analyzedInstructions,
} = recipe;

//heart icon event
const [isClick, setClick] = useState(false);
 
/*const [favouritesState, setFavouritesState] = useState({
        recipe: [],
    });


const toogleFavouriteHandler = (recipe) => {
        const recipes = favouritesState.recipe;
        
      };
*/
    
  return (
    <>
      {showModal ? (
     
      <div className="Background" >
            <div className="ModalWrapper" >
              <div  className = "recipe-image">
              <h1>{recipe.title}</h1>
              <img src = {recipe.image}></img>
              <h3 className="cookingTime"> {recipe.readyInMinutes} Mins </h3> 
              <p> {recipe.summary.substring(0, 70)}</p>
              </div>
              <div className= "ModalContent">
                
                 
              <h2>Ingredients</h2>
                   <div className="ingredientsContainer">
                    
                        <ul>
          {extendedIngredients.map((ingredient) => {
            return (
              <li className="ingredientsList">
                {ingredient.original}
              </li>
            );
          })}
        </ul>
                 </div>
                 <Fragment>
                   <div className="instructionsContainer">
                   <ul>
              {analyzedInstructions[0].steps.map((step) => {
                return (
                  <li>
                    <span>
                      {step.number}
                    </span>{' '}
                    <span>{step.step}</span>
                  </li>
                );
              })}
            </ul>
             </div>
              </Fragment>
           
         <Heart className="favIcon" 
            isClick={isClick} onClick={() => {setClick(!isClick);
             /*toogleFavouriteHandler(recipe); setFavouritesState(recipe)*/ }}/>
              
              <MdClose className = "CloseModalButton"
                aria-label='closeModal'
                onClick={() => setShowModal(prev => !prev)}/>
            </div>
          </div>
           </div>   
      ) : null}
    </>
  );
};
