import React from "react";

const CardsAboutUs = ({ img, title, info }) => {
  return (
    <div className="w-96 h-1/2 p-5">
      <figure className="w-full h-full">
        <img src={img} alt="about us" />
      </figure>
      <h3 className="text-2xl py-3">{title}</h3>
      <div className="w-24 border-b-4 border-primary "></div>
      <p className="pt-3">{info}</p>
    </div>
  );
};

export default CardsAboutUs;
