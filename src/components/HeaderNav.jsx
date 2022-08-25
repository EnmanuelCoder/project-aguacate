import React, { useState, useContext } from "react";
import { MenuMobile } from "./MenuMobile";
import shoppingCart from "../assets/icons/shoppingCart.svg";
import menuMobile from "../assets/icons/menuMobile.svg";
import arrow from "../assets/icons/arrow.svg";
import AppContext from "../context/AppContext";
import MenuDesktop from "./MenuDesktop";
import Orders from "./Orders";


const HeaderNav = () => {
  const { state } = useContext(AppContext);

  const [toggleMenuMobile, setToggleMenuMobile] = useState(false);
  const [toggleOrders, settoggleOrders] = useState(false);
  const [toggleAccount, setToggleAccount] = useState(false);

  const handleClickOrders = () => {
    settoggleOrders(!toggleOrders);
  }

  const handleMenuMobile = () => {
    setToggleMenuMobile(!toggleMenuMobile);
  };

  const handleMenuDesktop = () => {
    setToggleAccount(!toggleAccount);
  };

  return (
    <header
    className="
      w-full
      flex
      justify-around
      items-center
      md:justify-around
      w-fulls
      h-16
      shadow-md
      bg-primary
      font-roboto
      font-bold
    
      z-50
    "
  > 
    <h1 className="text-xl order-3 lg:order-1 text-white">Aguacate</h1>
    <nav className="flex md:w-1/2 justify-around order-1  text-white">
      <figure id="btnToggle">
        <img src={menuMobile} alt="" className="md:hidden" onClick={handleMenuMobile} />
      </figure>
      <ul className="md:flex md:w-full md:justify-around hidden">
        <li>Products</li>
        <li>About us</li>
        <li>Support</li>
        <li>Sedes</li>
      </ul>
      <div className="md:flex hidden">
        <p >Julio@hotmail.com</p>
        <img src={arrow} onClick={handleMenuDesktop} />
      </div>
      {toggleMenuMobile && <MenuMobile />}
      {toggleOrders && <Orders />}
      {toggleAccount && <MenuDesktop />}
    </nav>
    <figure className="order-3 flex items-center gap-2">
      <img src={shoppingCart} alt="Shopping cart" onClick={handleClickOrders} />
      {state.cart.length > 0 ? <div className="text-white">{state.cart.length}</div> : null} 
    </figure>
  </header>
  );
};

export default HeaderNav;
