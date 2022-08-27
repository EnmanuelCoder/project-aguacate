import React from "react";
import iconSendLetter from "../assets/icons/iconSendLetter.svg"

const Contact = () => {
  return (
    <section className="w-full container h-auto flex flex-col  md:flex-row items-center justify-center  mx-auto px-5 my-14">
      <form className="w-full md:w-1/2 flex flex-col justify-around gap-6 ">
        <h3 className="text-2xl font-bold">Send us a message:</h3>
        <input type="text" placeholder="Name" className="w-full rounded-md p-2 border-2" />
        <input type="email" placeholder="Email" className="w-full rounded-md p-2 border-2" />
        <textarea className="resize-none w-full h-40 rounded-md p-2 border-2" placeholder="Escribe algo"></textarea>
        <button className="w-full bg-primary text-white rounded-md p-2 font-bold" type="button">Send</button>
      </form>
      <section className="w-full md:w-1/2 flex flex-col justify-center items-center">
        <figure className="w-60">
          <img src={iconSendLetter} alt="Icon send message"  />
        </figure>
        <div className="w-full md:w-3/4 h-60 md:h-40 text-center flex flex-col justify-around text-lg font-roboto font-semibold">
          <p>Hello! To contact us, fill out this form or send us a message at aguacate@gmail.com</p>
          <p>We will reply you as soon as possible</p>
        </div>
      </section>
    </section>
  );
};

export default Contact;
