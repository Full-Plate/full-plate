import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import { MdClose } from 'react-icons/md';
import { MdOutlineMail} from 'react-icons/md';

import "./Modal.css"

export const Modal = ({ showModal, setShowModal, recipe }) => {
  const modalRef = useRef(recipe);

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
               <img className = "recipe-image"
              src = {recipe.image}></img>
              <div className= "ModalContent">
                <h1>{recipe.title}</h1>
                  <p>{recipe.summaryreplace(/<\s*b>(.*?)/gm, '')}</p>
                <h2>Ingredients</h2>
                <ul className="RecipeIngList">
                <li>{recipe.analyzedInstructions[{name: '', steps: Array(8)}]}</li>
                 </ul>
                <h3 className="cookingTime"> {recipe.readyInMinutes} Mins </h3> 
                  <MdOutlineMail className="EmailIcon" />
      
              </div>
              <MdClose className = "CloseModalButton"
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}/>
            </div>
          
           </animated.div>
           </div>
           
      ) : null}
    </>
  );
};