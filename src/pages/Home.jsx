import React from 'react';
import AboutUs from '../containers/AboutUs';
import Articles from '../containers/Articles';
import Contact from '../containers/Contact';
import Footer from '../containers/Footer';
import Header from '../containers/Header';
import SliderOpinions from "../containers/SliderOpinions"

const Home = () => {
  return (
    
    <main>
      <section>
        <Header />
        <AboutUs />
        <Articles />
        <SliderOpinions />
        <Contact />
        <Footer />
      </section>
    </main>
  );
};

export default Home;