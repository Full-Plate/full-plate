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
     
      <div className="Background" onClick={closeModal} ref={modalRef}>
         <animated.div style={animation}>
            <div className="ModalWrapper" showModal={showModal}>
              <div  className = "recipe-image">
              <img src = {recipe.image}></img>
              </div>
              <div className= "ModalContent">
                <h1>{recipe.title}</h1>
                 <p> {recipe.summary.substring(0, 70)}</p>
                 <div>
                   <div className="ingredientsContainer">
                   <Fragment>
                      <h2>Ingredients</h2>
                       <ul>
                    
                     </ul>
                      </Fragment> 
                <h3 className="cookingTime"> {recipe.readyInMinutes} Mins </h3> 
                  <MdOutlineMail className="EmailIcon" />
                 </div>
                 <Fragment>
                 <ul className="RecipeIngList">
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
                 </ul>
                 </Fragment>
              </div>
            
              <MdClose className = "CloseModalButton"
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}/>
            </div>
          </div>
          <div className="instructionsContainer">
          <ul>
            <li></li>
          </ul>
          </div>
           </animated.div>
           </div>
           
      ) : null}
    </>
  );
};
