import React from "react";
import bgAguacate from "../assets/image/bgAguacate.jpg";
import Boton from "../components/Boton"

const Header = () => {
  
  return (
    <section id="home">

      <div className="w-full h-full font-roboto absolute flex flex-col justify-center items-center text-center z-10">
        <h2 className="text-white text-xl font-bold md:text-3xl mb-5 lg:text-5xl">
          The best avocados of the world!
        </h2>
        <p className="text-white mx-3 text-sm md:text-xl lg:text-2xl pb-10">
          The best flavor, creamy, ideal for salads, juices or whatever you want
          and whenever you want.
        </p>
        <Boton>
          <a href="/">Ver aguacates</a>
        </Boton>
      </div>
      <figure className="w-full h-screen bg-colors-black ">
        <img
          src={bgAguacate}
          alt="Igame avocados"
          className="w-full h-full opacity-20 object-cover"
        />
      </figure>
    </section>
  );
};

export default Header;
