import React from "react";

const UserOpinions = ({ nombre, pais, mensaje, foto }) => {
  return (
    <article className="relative w-full h-full flex items-center justify-center bg-primary text-white">
      <figure className="hidden px-2 md:w-96 md:order-1 md:flex md:justify-center">
        <img src={require(`../assets/image/${foto}.jpeg`)} alt="Usuarios destacados" className="md:w-72 h-72 md:object-cover bg-center rounded-full" />
      </figure>
      
      <div className="w-80 md:w-full lg:w-1/2 px-3 font-bold font-roboto border-b-4 border-indigo-500 ">
        <div className="flex items-center justify-between">
          <div className="flex flex-col mb-7">
            <h3 className="w-full text-start text-3xl lg:text-4xl font-semibold">{nombre}</h3>
            <h4 className="w-full text-start text-xl lg:text-2xl">{pais}</h4>
          </div>
          <img src={require(`../assets/image/${foto}.jpeg`)} alt="Usuarios destacados" className=" w-24 h-24 object-cover  rounded-full md:hidden" />
        </div>
        <p className="w-full py-2 text-md lg:text-lg">"{mensaje}"</p>
      </div>
    </article>
  );
};

export default UserOpinions;


