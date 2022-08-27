import React from "react";

const MenuDesktop = () => {
  return (
    <div>
      <ul className="flex flex-col items-center justify-around text-colors-black bg-white w-[160px] h-40 absolute top-16 right-72 z-20 rounded-b-xl">
        <li>Account</li>
        <li>Setting</li>
        <li>Log out</li>
      </ul>
    </div>
  );
};

export default MenuDesktop;
