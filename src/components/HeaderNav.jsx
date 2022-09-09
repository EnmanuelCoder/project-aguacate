import React, { useState, useContext } from "react";
import { Link } from "react-scroll";
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
  };

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
      fixed
      z-50
    "
    >
      <h1 className="text-xl order-3 lg:order-1 text-white">Aguacate</h1>
      <nav className="flex lg:w-1/2 justify-around order-1 text-white">
        <figure id="btnToggle">
          <img
            src={menuMobile}
            alt="Menu mobile"
            className="lg:hidden"
            onClick={handleMenuMobile}
          />
        </figure>
        <ul className="lg:flex md:w-full lg:justify-around hidden">
          <li className="cursor-pointer">
            <Link to="home" spy={true} smooth={true} offset={-100} duration={800}>
              Home
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
            >
              About us
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              to="products"
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
            >
              Products
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="faq" spy={true} smooth={true} offset={-200} duration={800}>
              FQA
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="lg:flex hidden">
          <p>Julio@hotmail.com</p>
          <img src={arrow} onClick={handleMenuDesktop} alt="Icon arrow" />
        </div>
        {toggleMenuMobile && <MenuMobile />}
        {toggleOrders && <Orders />}
        {toggleAccount && <MenuDesktop />}
      </nav>
      <figure className="order-3 flex items-center gap-2">
        <img
          src={shoppingCart}
          alt="Shopping cart"
          onClick={handleClickOrders}
        />
        {state.cart.length > 0 ? (
          <div className="text-white">{state.cart.length}</div>
        ) : null}
      </figure>
    </header>
  );
};

export default HeaderNav;
