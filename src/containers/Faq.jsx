import React from "react";
import FqaInfo from "./FqaInfo";

const Faq = () => {
  return (
    <section className="container h-auto mx-auto flex flex-col gap-20 mt-10 px-5 my-20">
      <h2 className="text-center text-3xl">FAQ</h2>
      <FqaInfo 
        question="Que metodos de pago aceptan?"
        info="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, dolor nobis. Sunt vitae rem similique nihil. Labore, velit repellat quod minus, hic nulla numquam autem officia voluptatem laboriosam neque minima! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, dolor nobis. Sunt vitae rem similique nihil. Labore, velit repellat quod minus, hic nulla numquam autem officia voluptatem laboriosam neque minima!"
      />
      <FqaInfo 
        question="Que metodos de pago aceptan?"
        info="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, dolor nobis. Sunt vitae rem similique nihil. Labore, velit repellat quod minus, hic nulla numquam autem officia voluptatem."
      />
      <FqaInfo 
        question="Que metodos de pago aceptan?"
        info="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, dolor nobis. Sunt vitae rem similique nihil. Labore, velit repellat quod minus, hic nulla numquam autem officia voluptatem laboriosam neque minima.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, dolor nobis. Sunt vitae rem similique nihil. Labore, velit repellat quod minus, hic nulla numquam autem officia voluptatem laboriosam neque minima!"
      />
      <FqaInfo 
        question="Que metodos de pago aceptan?"
        info="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, dolor nobis. Sunt vitae rem similique nihil. Labore, velit repellat quod minus, hic nulla numquam autem officia voluptatem laboriosam neque minima!"

      />
    
    </section>
  );
};

export default Faq;
