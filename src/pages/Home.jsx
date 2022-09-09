import React from "react";
import HeaderNav from "../components/HeaderNav";
import AboutUs from "../containers/AboutUs";
import Articles from "../containers/Articles";
import Contact from "../containers/Contact";
import Faq from "../containers/Faq";
import Footer from "../containers/Footer";
import Header from "../containers/Header";
import SliderOpinions from "../containers/SliderOpinions";

const Home = () => {
  return (
    <>
      <HeaderNav />
      <Header />
      <main>
        <AboutUs />
        <Articles />
        <SliderOpinions />
        <Faq />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Home;
