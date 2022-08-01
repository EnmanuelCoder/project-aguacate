import React from "react";

const UserOpinions = ({nombre, pais, mensaje, foto}) => {
  return (
    <article className="w-full h-full flex items-center justify-center border-solid border-4 border-primary ">
      <figure className="hidden px-2 md:w-96 md:order-1 md:flex md:justify-center">
        <img src={require(`../assets/image/${foto}.jpeg`)} alt="Usuarios destacados" className="md:w-72 h-72 md:object-cover bg-center rounded-full" />
      </figure>
      <div className="w-80 md:w-full lg:w-1/2 text-center px-3 font-bold font-roboto">
        <h3 className=" w-full text-2xl lg:text-3xl font-semibold">{nombre}</h3>
        <h4 className=" w-full text-xl py-3 lg:text-2xl">{pais}</h4>
        <p className=" w-full py-2 text-md lg:text-lg">"{mensaje}"</p>
      </div>
    </article>
  );
};

export default UserOpinions;
