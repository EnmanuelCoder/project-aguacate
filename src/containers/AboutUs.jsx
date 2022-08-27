import React from "react";
import cultivate from "../assets/icons/cultivate.svg";
import choose from "../assets/icons/choose.svg";
import delivery from "../assets/icons/delivery.svg";
import CardsAboutUs from "../components/CardsAboutUs";

const AboutUs = () => {
  return (
    <section className="w-full h-4/6 flex flex-wrap justify-center md:flex-row  md:justify-around md:my-24">
      <CardsAboutUs 
        img={cultivate}
        title="We cultivate around the world."
        info="We grow avocados all over the world and help farms to promote this path to bring quality avocados."    
      />
      <CardsAboutUs 
        img={choose}
        title="We cultivate around the world."
        info="We grow avocados all over the world and help farms to promote this path to bring quality avocados."    
      />
      <CardsAboutUs 
        img={delivery}
        title="We cultivate around the world."
        info="We grow avocados all over the world and help farms to promote this path to bring quality avocados."    
      />
    </section>
  );
};

export default AboutUs;
