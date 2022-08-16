import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuMobile } from "./MenuMobile";
import shoppingCart from "../assets/icons/shoppingCart.svg";
import menuMobile from "../assets/icons/menuMobile.svg";


const HeaderNav = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <header
    className="
      flex
      justify-around
      items-center
      md:justify-around
      w-fulls
      h-16
      shadow-md
      bg-colors-slate-200
      font-roboto
      font-bold
    "
  >
    <h1 className="text-xl order-3 lg:order-1">Aguacate</h1>
    <nav className="flex md:w-1/2 justify-around order-1 ">
      <figure id="btnToggle">
        <img src={menuMobile} alt="" className="md:hidden" onClick={handleToggle} />
      </figure>
      <ul className="md:flex md:w-full md:justify-around hidden">
        <li>Products</li>
        <li>About us</li>
        <li>Support</li>
        <li>Sedes</li>
      </ul>
      <div className="md:flex hidden">
        <p>Julio@hotmail.com</p>
        <img src="./assets/arrow.svg" alt="" />
      </div>
      <div>
        <ul className="hidden">
          <li>Account</li>
          <li>Setting</li>
          <li>Log out</li>
        </ul>
      </div>
      {toggle && <MenuMobile />}
    </nav>
    <figure className="order-3">
      <img src={shoppingCart} alt="" />
    </figure>
  </header>
  );
};

export default HeaderNav;
