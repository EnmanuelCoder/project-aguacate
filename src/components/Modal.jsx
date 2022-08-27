import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const Modal = ({product}) => {

  const { handleModalWindow, addToCart } = useContext(AppContext);
  return (
    <article className="w-full h-screen flex justify-center items-center fixed top-0 left-0 bg-colors-black bg-opacity-60 z-50">
      <div className="w-96 h-80 p-5 bg-white rounded-md flex flex-col justify-center">
        <h3 className="text-center text-2xl">Quieres agragrar este producto al carrito de compra?</h3>

       <div className="mt-5 flex justify-around">
          <button onClick={() => {
            handleModalWindow()
            addToCart(product)
          }}>Add</button>
          <button onClick={handleModalWindow}>Cancel</button>
       </div>
      </div>
    </article>
  );
};

export default Modal;
