import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';


import "./Modal.css"

export const Modal = ({ showModal, setShowModal, recipe }) => {
  const modalRef = useRef();

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
              src = {recipe.recipe.image}></img>
              <div className= "ModalContent">
                <h1>{recipe.recipe.label}</h1>
                <h2>{recipe.recipe.ingredientLines}</h2>
                <p>Instructions</p>
              </div>
              <div className = "CloseModalButton"
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}/>
            </div>
           </animated.div>
           </div>
      ) : null}
    </>
  );
};