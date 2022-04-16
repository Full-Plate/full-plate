import React, { useRef, useEffect, useCallback, Fragment} from 'react';
import { useSpring, animated } from 'react-spring';
import { MdClose } from 'react-icons/md';
import { MdOutlineMail} from 'react-icons/md';

import "./Modal.css"


 export const Modal = ({ showModal, setShowModal, recipe }) => {
 const {
    extendedIngredients,
    analyzedInstructions,
} = recipe;


const modalRef = useRef(recipe);
console.log(recipe)
  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );


  
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
                
                  <MdOutlineMail className="EmailIcon" />
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
              
            
              <MdClose className = "CloseModalButton"
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}/>
            </div>
          </div>
         
          
           </div>
           
      ) : null}
    </>
  );
};
