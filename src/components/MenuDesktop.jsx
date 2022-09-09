import React from "react";

const MenuDesktop = () => {
  return (
    <div>
      <ul className="flex flex-col items-center justify-around text-colors-black bg-white w-60 h-60 absolute top-16 right-60 z-20 rounded-b-xl">
        <li className="cursor-pointer">Account</li>
        <li className="cursor-pointer">Setting</li>
        <li className="cursor-pointer">Log out</li>
      </ul>
    </div>
  );
};

export default MenuDesktop;
