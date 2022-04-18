import React, {Fragment} from 'react';
import { Link } from "react-router-dom";
import { MdClose } from 'react-icons/md';
import { AiOutlineHeart } from 'react-icons/ai';


import "./Modal.css"

 
 export const Modal = ({ showModal, setShowModal, recipe }) => {
 const {
    extendedIngredients,
    analyzedInstructions,
} = recipe;


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
              <li className="text-sm text-gray-600 p-3 bg-gray-100 odd:bg-gray-200">
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
            <Link className="favourites-button" to="/Favourites">
             < AiOutlineHeart
             className="FavoritesIcon"
             style={{
              position: 'absolute',
              bottom: '20px',
              right: '20px',
                }}
              size="40px"
              color="black"
             /></Link>
                   </div>
                   </Fragment>
              <MdClose className = "CloseModalButton"
                aria-label='loseModal'
                onClick={() => setShowModal(prev => !prev)}/>
            </div>
          </div>
         
          
           </div>
           
      ) : null}
    </>
  );
};
