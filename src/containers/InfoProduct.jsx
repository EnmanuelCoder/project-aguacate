import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import xClose from "../assets/icons/xClose.svg";
import Boton from "../components/Boton";

const baseUrl = "https://platzi-avo.vercel.app";

const InfoProduct = ({ product }) => {
  const { close, handdleClickClose, addToCart } = useContext(AppContext)

  const handdleClick = () => {
    handdleClickClose()
  }

  return (
    <>
      
    {close && <aside className="w-full md:w-96 h-auto flex relative">
      <div className="w-full md:w-96 h-screen flex flex-col justify-center bg-white px-5 right-0 top-0 fixed z-50 ">
        <figure className="w-16 absolute top-0">
          <img src={xClose} onClick={handdleClick} alt="icono cerrar" className="w-full" />
        </figure>
        <figure className="w-40 md:w-60 mx-auto">
          <img src={baseUrl + product.image} />
        </figure>
        <div className="">
          <p className="font-bold text-xl">{product.name}</p>
          <p className="font-semibold text-xl">{product.price}</p>
        </div>
        <div className="overflow-auto pb-5">
          <p>{product.attributes.description}</p>
        </div>
        <div className="w-full mx-auto flex flex-col p-5" onClick={() => addToCart(product)}>
          <Boton>Add product</Boton>
        </div>
      </div>
    </aside>}
    </>
    
  );
};

export default InfoProduct;
