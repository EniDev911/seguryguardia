import React, { lazy } from "react";
const CarouselRb = lazy(() => import('../components/CarouselRb'))
import ReviewClientes from "../components/review/Clientes";
import ReviewService from "../components/review/ServicesAlt";
import Valores from "../components/review/Valores";
import HeroText from "../components/body/HeroText";

export default () => {
  return (
    <section className="bg-light w-100">
      <CarouselRb />
      <h2 className="display-4 fw-bold my-5 text-center" style={{
        letterSpacing: "3px"
      }}>SEGURYGUARDIA</h2>
      <HeroText />
      <Valores />
      <ReviewService />
      <ReviewClientes />
    </section>
  );
};
