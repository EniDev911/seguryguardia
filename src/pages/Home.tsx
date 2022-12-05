import React, { useState } from "react";
import { useAppContext } from "../context/AppCtx";
// import Carrousel from '../components/Carousel';
import CarouselRb from '../components/CarouselRb'

const Home: React.FC = () => {
  const { pizzas } = useAppContext();

  const images = ['01.jpg', '02.jpeg', '03.jpeg', '04.jpeg']

  return (
    <>
      <CarouselRb/>
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
