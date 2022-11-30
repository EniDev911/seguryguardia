import React, { useState } from "react";
import CardComponent from "../components/CardComponent";
import { useAppContext } from "../context/AppCtx";
import Carrousel from '../components/Carousel';

const Home: React.FC = () => {
  const { pizzas } = useAppContext();

  const images = ['01.jpg', '02.jpg', '03.jpeg', '04.jpeg']

  return (
    <>
      <Carrousel images={images} showButtons/>
    
      <section className="hero__container">
        <div className="hero__texts">
          <h2 className="hero__title">Home</h2>
          <h4 className="hero__subtitle">
          </h4>
          <hr />
        </div>
      </section>
    </>
  );
};

export default Home;
