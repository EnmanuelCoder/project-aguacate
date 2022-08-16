import React, { useState, useEffect, useContext } from "react";
import { AguacateApi } from "./AguacateApi";
import addCart from "../assets/icons/addCart.svg";
import AppContext from "../context/AppContext";

const Articles = () => {

  const { addToCart } = useContext(AppContext);

  const handdleClick = item => {
    addToCart(item)
  }

  const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat("en-En", {
      style: "currency",
      currency: "USD",
    }).format(price);

    return newPrice;
  };

  const baseUrl = "https://platzi-avo.vercel.app";
  const [avocado, setAvocado] = useState(null);

  useEffect(() => {
    AguacateApi(setAvocado);
  }, []);

  return (
    <section>
      <div className="w-full h-24 mt-20 flex items-center justify-center border-b-2 border-primary">
        <h2 className="text-3xl font-bold text-center">
          Featured Products
        </h2>
      </div>
      <article className="font-roboto p-4 my-10 flex gap-8 snap-x overflow-x-auto w-full h-full lg:grid md:grid-cols-3 auto-rows-auto">
        {avocado != null ? (
          avocado.map((item) => {
            return (
              <section
                id="productos"
                key={item.id}
                className="relative cursor-pointer shrink-0 w-72 md:w-2/6 rounded overflow-hidden snap-center shadow-md lg:w-full lg:flex lg:flex-col lg:items-center"
              >
                <h2 className="absolute py-2 px-8 text-center bg-primary font-bold text-white  rounded-r-full top-0 left-0">30%</h2>
                <figure>
                  <img
                    src={baseUrl + item.image}
                    alt="Imagenes de aguacates"
                    className="aspect-video object-contain"
                  />
                </figure>
                <div className="w-full text-center">
                  <h2 className="text-xl font-bold">{item.name}</h2>
                  <div className="w-full h-16 flex justify-between items-center px-5">
                    <p className="text-xl p-4 inline font-bold">
                      {formatPrice(item.price)}
                    </p>
                    <img src={addCart} alt=""  onClick={() => handdleClick(item)}/>
                  </div>
                </div>
              </section>
            );
          })
        ) : (
          <p>Cargando...</p>
        )}
      </article>
    </section>
  );
};

export default Articles;
