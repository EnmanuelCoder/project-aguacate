import React from "react";
import { NavLink } from "react-router-dom";

const HeaderNav = () => {
  return (
    <header className="font-roboto hidden w-full lg:h-16 lg:flex lg:justify-around lg:items-center fixed bg-primary text-colors-white z-20 md:bg-cover">
      <h1 className="font-bold text-2xl">Aguacate</h1>
      <house />
      <nav>
        <ul className="lg:flex w-80 lg:justify-between lg:text-lg lg:font-semibold">
          <li>
          <house />
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About us</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNav;
