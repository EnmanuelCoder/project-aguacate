import React from 'react';
import Articles from '../components/Articles';
import Header from '../components/Header';
import SliderOpinions from "../components/SliderOpinions"

const Home = () => {
  return (
    
    <main>
      <section>
        <Header />
        <Articles />
        <SliderOpinions />
      </section>
    </main>
  );
};

export default Home;