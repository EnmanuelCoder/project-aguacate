import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import OrderItem from "./OrderItem";

const Orders = () => {
  const { state } = useContext(AppContext);

  const calculateTheTotal =  () => {
    const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum.toFixed(2)
  }


  return (
    <section className="w-full md:w-96 h-auto bg-white z-40 absolute top-[64px] right-0 border-t-2 border-indigo-500">
      <h2 className="font-bold text-center text-3xl py-5 bg-primary text-white">My orders</h2>
      {state.cart == 0 ? (
        <div className="font-bold text-xl text-center py-6 text-colors-black">
          No hay productos...
        </div>
      ) : (
        state.cart.map((product, index) => (
          <OrderItem indexValue={index} key={index} product={product} />
        ))
      )}
      <div className="w-full absolute left-0 bg-primary bottom-auto text-center text-white rounded-b-xl">
        <p className="w-full h-7 ">Total</p>
        <p className="w-full h-7 ">{calculateTheTotal()}</p>
      </div>
    </section>
  );
};

export default Orders;
