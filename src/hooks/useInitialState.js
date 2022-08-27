import { useState } from 'react';

const initialState = {
	cart: [],
}

const isClosedInfo = false;
const isCloseModalWindow = false;

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const [close, setClose] = useState(isClosedInfo);
  const [modalWindow, setModalWindow] = useState(isCloseModalWindow);


  const addToCart = (payload) => {
    setState({
      ...state,
      cart : [...state.cart, payload]
    })
  }

  const deleteToCart = (poductIndex) => {
    setState({
      ...state,
      cart: state.cart.filter((_, indexItem) => indexItem !== poductIndex)
    })
  }

  const handdleClickClose = () => {
    setClose(!close)
  }

  const handleModalWindow = () => {
    setModalWindow(!modalWindow)
  }
  
  return {
    state,
    close,
    modalWindow,
    addToCart,
    deleteToCart,
    handdleClickClose,
    handleModalWindow
  }
};

export default useInitialState;