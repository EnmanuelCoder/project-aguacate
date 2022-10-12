import React from "react";
import { Link } from "react-scroll";

export const MenuMobile = () => {
  return (
  <ul className="absolute bg-white text-primary w-[60%] md:w-1/2 h-screen pb-10 left-0 top-[64px] font-roboto font-semibold flex flex-col justify-around items-center shadow-xl z-50 ">
    <li>
      <Link to="home" spy={true} smooth={true} offset={-100} duration={800} >Home</Link>
    </li>
    <li>
      <Link to="about" spy={true} smooth={true} offset={-100} duration={800}>About us</Link>
    </li>
    <li>
      <Link to="products" spy={true} smooth={true} offset={-100} duration={800}>Products</Link>
    </li>
    <li>
      <Link to="faq" spy={true} smooth={true} offset={-100} duration={800} >FQA</Link>
    </li>
    <li>
      <Link to="contact" spy={true} smooth={true} offset={-150} duration={800}>Contact</Link>
    </li>
  </ul>
  );
};
