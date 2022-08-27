import React, { useState, useEffect, useContext } from "react";
import { AguacateApi } from "../components/AguacateApi";
import addCart from "../assets/icons/addCart.svg";
import AppContext from "../context/AppContext";
import InfoProduct from "./InfoProduct";
import Modal from "../components/Modal";

const Articles = () => {

  const { handdleClickClose, close, modalWindow, handleModalWindow, addToCart } = useContext(AppContext);

  const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat("en-En", {
      style: "currency",
      currency: "USD",
    }).format(price);

    return newPrice;
  };

  const baseUrl = "https://platzi-avo.vercel.app";
  const [avocado, setAvocado] = useState(null);
  const [toggleInfo, setToggleInfo] = useState({});
  
  const handleInfo = (product) => {
    let filtroAvodado = avocado.find(item => item.id == product.id)
    setToggleInfo(filtroAvodado)
  }
  const closeInfo = () => {
    handdleClickClose()
  }

  useEffect(() => {
    AguacateApi(setAvocado);
  }, []);

  return (
    <section className=" container mx-auto relative">
      <article className="font-roboto p-4 my-10 flex gap-8 snap-x overflow-x-auto w-full h-full lg:grid md:grid-cols-3 auto-rows-auto">
        {avocado != null ? (
          avocado.map((item) => {
            return (
              <section
                onClick={() => handleInfo(item)}
                key={item.id}
                className="relative cursor-pointer shrink-0 w-72 md:w-2/6 rounded overflow-hidden snap-center shadow-md lg:w-full lg:flex lg:flex-col lg:items-center"
              >
            
                <h2 className="absolute py-2 px-8 text-center bg-primary font-bold text-white  rounded-r-full top-0 left-0">30%</h2>
                <div onClick={closeInfo}>
                  <img
                    src={baseUrl + item.image}
                    alt="Imagenes de aguacates"
                    className="aspect-video object-contain"
                  />
                   <h2 className="text-xl font-bold text-center">{item.name}</h2>
                </div>
                <div className="w-full text-center">
                 
                  <div className="w-full h-16 flex justify-between items-center px-5">
                    <p className="text-xl p-4 inline font-bold">
                      {formatPrice(item.price)}
                    </p>
                    <img src={addCart} alt="" onClick={handleModalWindow}/>
                    
                  </div>
                </div>
                
              </section>
            );
          })
        ) : (
          <p>Cargando...</p>
        )}
        
      </article>
      {modalWindow && <Modal product={toggleInfo} />}
      {close && <InfoProduct product={toggleInfo} /> }
    </section>
  );
};

export default Articles;
