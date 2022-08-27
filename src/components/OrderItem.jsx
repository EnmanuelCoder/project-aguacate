import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import icon_close from "../assets/icons/iconClose.png";

const baseUrl = "https://platzi-avo.vercel.app";

const OrderItem = ({ product, indexValue }) => {
  const { deleteToCart } = useContext(AppContext);

  const deleteProduct = (avocado) => {
    deleteToCart(avocado);
  };

  return (
    <div className="w-full grid grid-cols-4 items-center justify-center justify-items-center bg-white text-colors-black">
      <figure className="w-2/2">
        <img
          src={baseUrl + product.image}
          className="w-full"
          alt={product.name}
        />
      </figure>
      <p className="">{product.name}</p>
      <p>{product.price}</p>
      <figure
        className="p-2 bg-primary rounded-full"
        onClick={() => deleteProduct(indexValue)}
      >
        <img src={icon_close} alt="Close" />
      </figure>
    </div>
  );
};

export default OrderItem;
